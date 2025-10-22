---
title: Flashloan
description: You can borrow tokens without collateral.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2,3]
---

# Flashloan
Pennysia flashloans let you borrow tokens with no collateral as long as you return them (plus a 0.3% fee) within the same transaction. They’re atomic: if you don’t pay back in time, the whole transaction reverts.

## TL;DR
- Function: ```flash(address to, address[] tokens, uint256[] amounts)```
- **Fee**: 0.3% per token (ceiled)
- **Multi-asset**: borrow 1..N tokens in one call
- **Atomic**: if payback < required, tx reverts
- Non-reentrant / no-delegatecall guarded
- **Where fees go**: fees become excess token balances and are later swept by the protocol owner, you can visit [Fee](./fee).

## When to use
- On-chain arbitrage and liquidations
- Collateral swaps / debt rebalancing
- Multi-pool routing or multi-token operations in one tx

## How it works
1. You call ```flash(to, tokens, amounts)``` from your contract (the “callback”).

2. For each token ```i```, the contract transfers ```amounts[i]``` to ```to```.

3. The contract records ```balancesBefore[i]``` for each token.

4. It computes ```payback[i] = ceil(amounts[i] * 1003 / 1000)``` (includes the 0.3% fee).

5. It then calls your contract back via ```Callback.tokenCallback(...)```.

6. Inside your callback, you must ensure the Market’s real balances are **≥ balancesBefore + payback** for each token before returning (i.e., you must pay back).

7. If any token is short, revert (the whole tx reverts and no tokens leave the pool).

8. On success, an event is emitted:
```Flash(callback, to, tokens, amounts, paybackAmounts)```.

::: info :information_source:  INFO
the flashloan function does not update pool accounting. The fee lands as real excess balance on the Market and can be swept by the owner. This intentionally separates protocol revenue from LP accounting.
:::

## Parameters & constraints

- ```to```: where the borrowed tokens are sent. **Must not be the Market contract**.
- ```tokens``` / ```amounts```: arrays must have equal length; **tokens must be unique**.
- Available liquidity is whatever the Market actually holds for each token at the time of transfer. If a token’s balance is insufficient, the transfer will revert.

## Fees
Rate: 0.3% (30 bps) per token.

## Multi-asset flash
You can borrow multiple different tokens in a single ```flash``` call (arrays are parallel). This is ideal for complex strategies (e.g., triangular arb, hedged liquidations). Tokens must be unique.


## Security & guarantees
- ```nonReentrant```: prevents re-entry into flash/other state-changing functions.
- ```noDelegateCall```: disallows delegatecall entry.
- Atomicity: funds must be returned before ```tokenCallback``` exits.
- Uniqueness: duplicate tokens are rejected.
- Accounting separation: flash fees do not mutate LP reserves; they accrue as sweepable protocol revenue.

## Developer Guide
Pennysia calls your contract back via the ```Callback``` library. Your contract (the caller) must implement a function that ```Callback.tokenCallback(...)``` can reach. The effective call pattern is:

```solidity
// Pseudocode interface for your contract (the "callback")
function tokenCallback(
    address callback,            // == msg.sender of flash() (your contract)
    address to,                  // where tokens were sent
    address[] calldata tokens,   // borrowed tokens
    uint256[] calldata balancesBefore,
    uint256[] calldata payback   // required paybacks (incl. fee)
) external;
```
> In practice, you’ll set ```to = address(this)``` so your contract actually receives the tokens and can return them.

## Minimal borrower example
```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

interface IMarket {
    function flash(address to, address[] calldata tokens, uint256[] calldata amounts) external;
}

interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
    function approve(address spender, uint256 value) external returns (bool);
    function balanceOf(address owner) external view returns (uint256);
}

contract PennysiaFlashBorrower {
    address public immutable market;

    constructor(address _market) {
        market = _market;
    }

    // Call this to start a flashloan
    function executeFlash(address[] calldata tokens, uint256[] calldata amounts) external {
        IMarket(market).flash(address(this), tokens, amounts);
        // If we got here, flash succeeded atomically
    }

    // Called by the Market via Callback.tokenCallback(...)
    // Do your work here, then pay back `payback[i]` for each token to the Market.
    function tokenCallback(
        address /* callback */,
        address /* to */,
        address[] calldata tokens,
        uint256[] calldata /* balancesBefore */,
        uint256[] calldata payback
    ) external {
        require(msg.sender == market, "Only Market");

        // --- Your custom logic ---
        // Example: run arbitrage, liquidation, etc.

        // Pay back each token + fee to the Market
        for (uint256 i = 0; i < tokens.length; i++) {
            uint256 due = payback[i];
            require(IERC20(tokens[i]).transfer(market, due), "payback failed");
        }
    }
}
```
::: tip :book: TIP
- Set ```to = address(this)``` unless you have a very specific reason; otherwise your callback may not control the funds.
- If ```to``` is some other contract/wallet, it must approve or transfer back to the Market inside the callback.
- Bundle all steps in the callback (DEX trades, liquidations, etc.), then transfer paybacks before returning.
 :::


