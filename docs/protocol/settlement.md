---
title: Settlement
description: Pennysia Settlement contract overview, execution flow, security, and API reference.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Settlement

## Overview

[Pennysia Settlement](https://github.com/Pennysia/settlement) is the smart contract that executes most swaps on Ethereum. It is a **router**, not a liquidity pool. It does not hold trading inventory or set prices.

### What it does

When you swap through Pennysia, Settlement:

1. Pulls your sell token once (via ERC-20 approval or Permit2)
2. Tries a list of routes in order
3. Delivers your buy token when a route succeeds
4. Reverts fully if every route fails (your tokens are not lost)

Anyone can call `executeSwap`. You do not need to trust a specific frontend.

### Key properties

- **Single pull, ordered retry:** tokens are pulled once, then routes are tried until one works
- **Permissionless:** any integrator can build routes; no allowlist on venues
- **Surplus fee:** on SYNC routes, Pennysia keeps improvement above the quoted amount, capped at 10% of gross output
- **ETH ↔ WETH fast path:** direct wrap/unwrap without an external venue
- **Reentrancy protection:** all entrypoints use a transient lock

### What it is not

Settlement is **not** an AMM. It has no pools, no LP tokens, and no pricing curve. It routes your trade to external venues (DEX aggregators, SODAX, and others).

### Contract address

| Network | Contract | Address |
| --- | --- | --- |
| Ethereum Mainnet | PennysiaSettlement | `0x3Aad97E5a91b8e43b7Dc830aCEb004307678795E` |

See [Deployments](./deployments.md) for Etherscan links.

## Execution flow

### Swap flow

1. You (or the Pennysia app) call `executeSwap` with sell token, buy token, amount, minimum output, deadline, and an ordered list of routes.
2. Settlement pulls the sell token from your wallet.
3. Each route is tried in order:
   - **SYNC** (kind 0): same-transaction swap through a DEX or aggregator
   - **SODAX** (kind 1): open a cross-chain intent through SODAX
4. The first successful route wins. You receive your buy token.
5. If every route fails, the transaction reverts. The token pull unwinds.

### SYNC routes

SYNC routes execute in a single Ethereum transaction. Settlement:

1. Converts ETH ↔ WETH if needed
2. Approves the venue spender (direct ERC-20 or Permit2)
3. Calls the venue with the quote calldata
4. Checks that tokens were spent and received as expected
5. Takes the surplus fee (if any) and sends the rest to you

Most Pennysia swaps use SYNC routes. Examples include Uniswap, 0x, KyberSwap, and Sushi.

#### Auto-fallback

When Auto Fallback is enabled in the app, Pennysia packs multiple SYNC routes into one `executeSwap` call. Settlement tries them in order. If the first venue fails (price moved, insufficient liquidity), the next route runs in the same transaction.

If all routes fail, the whole transaction reverts.

### SODAX routes

SODAX is a cross-chain intent system. When you select a SODAX route:

1. Settlement opens an intent on Ethereum through the SODAX AssetManager
2. A solver fills the intent on the hub chain (Sonic)
3. You receive tokens on the destination chain

SODAX fills are asynchronous. They are not mixed into SYNC auto-fallback. You choose a SODAX route explicitly in the app.

### Hard intents (wallet-side)

Some exchanges use off-chain intent auctions:

- **CoW Protocol**
- **UniswapX**
- **Velora Delta**

These routes are signed and submitted from your wallet. They do not go through Settlement's `executeSwap`. The Pennysia app handles them as separate execution lanes.

### Fees

#### Surplus fee (SYNC only)

On SYNC routes, if execution beats the quoted amount:

- Pennysia keeps **100% of the surplus**
- Capped at **10% of gross output**
- If execution matches or is below the quote, the fee is zero

This is hardcoded in the contract. It cannot be changed by the owner.

#### SODAX

No surplus fee on Settlement for SODAX intent opens. Fees on the SODAX side follow SODAX protocol rules.

#### Excess ETH

If you send more ETH than needed, the excess is swept to the fee recipient after settlement.

### ETH and WETH

Settlement supports a fast path for ETH ↔ WETH swaps. No external venue is called. Wrap and unwrap happen directly in the contract.

### Approvals

For ERC-20 sells, you approve Pennysia Settlement (not the individual venue). Settlement then approves the venue spender as needed for each route.

Native ETH sells do not need an approval.

### Operator functions

These are not part of normal swapping:

| Function | Who | Purpose |
| --- | --- | --- |
| `cancelAndRecoverSodax` | Operator | Cancel a SODAX intent and return funds |
| `rescueTokens` | Anyone | Rescue stuck tokens to fee recipient |
| `setFeeRecipient` | Owner | Change fee recipient |
| `setSwapEnabled` | Owner | Pause or unpause swaps |

### For developers

To build routes and call Settlement from your own app, see [Contracts SDK](./sdk-reference.md#contracts-sdk).

## Security

Trader-facing security model: [Security](../get-started/security.md).

### Safety properties

- Reentrancy guard on all entrypoints
- Full revert if every route fails (token pull unwinds)
- Baseline-relative refunds
- No self-routing (venue and spender cannot be the contract itself)
- Operator-gated SODAX cancel

### Automated testing

The Settlement contract has been tested with multiple automated security tools:

| Tool | What it does | Result (Aug 2026) |
| --- | --- | --- |
| **Foundry** | Unit, fuzz, and invariant tests | 204 tests pass |
| **Slither** | Static analysis | 0 standard findings |
| **Halmos** | Symbolic execution | 168/168 tests pass |
| **Medusa** | Coverage-guided fuzzing | 223 assertions pass |
| **Certora** | Formal verification | 105 rules, 0 violations |

#### Audit reports

- [Audits overview](https://github.com/Pennysia/settlement/tree/main/audits)
- [Latest report (2026-08-16)](https://github.com/Pennysia/settlement/blob/main/audits/2026-08-16-audit-bundle/REPORT.md)
- [Certora report](https://github.com/Pennysia/settlement/blob/main/audits/certora/CERTORA_REPORT.md)
- [Archived report (2026-07-29)](https://github.com/Pennysia/settlement/blob/main/audits/archived/REPORT-2026-07-29-ARCHIVED.md)

::: info :information_source: INFO
These are automated tool results, not a third-party audit letter. Pennysia publishes the full reports for transparency.
:::

### App security

The Pennysia web app:

- Connects wallets through WalletConnect
- Keeps API keys server-side
- Uses quote consensus to reject outlier prices
- Enforces WAP and deadline checks before execution

### Risks to understand

| Risk | What it means |
| --- | --- |
| **Smart contract risk** | A bug in Settlement or a venue contract could cause loss. |
| **Price movement** | The price can change between quote and execution. |
| **Network congestion** | Slow confirmations can cause deadline expiry. |
| **Venue risk** | A venue failure causes that route to fail, not a loss of principal. |
| **SODAX async risk** | Fills happen off Settlement. Cancel can require operator action. |

### Responsible disclosure

If you find a security issue, email [dev@pennysia.com](mailto:dev@pennysia.com). See [Contact](../resources/contact.md).

### License

Settlement is released under BUSL-1.1. It converts to MIT on 2030-08-16.

## API reference

Quick reference for `PennysiaSettlement` on Ethereum Mainnet.

**Address:** `0x3Aad97E5a91b8e43b7Dc830aCEb004307678795E`

Source: [github.com/Pennysia/settlement](https://github.com/Pennysia/settlement)

### executeSwap

```solidity
function executeSwap(
    Route[] calldata routes,
    address sellToken,
    address buyToken,
    uint256 amountIn,
    uint256 minTotalReturn,
    uint256 deadline
) external payable returns (uint256 netReceived);
```

| Parameter | Description |
| --- | --- |
| `routes` | Ordered list of routes to try. First success wins. |
| `sellToken` | Token to sell. Use `address(0)` for native ETH. |
| `buyToken` | Token to receive. Use `address(0)` for native ETH. |
| `amountIn` | Sell amount. For ETH, must match `msg.value`. |
| `minTotalReturn` | Minimum buy tokens after fees. Reverts if not met. |
| `deadline` | Unix timestamp. Reverts if block time is past deadline. |

### Route struct

```solidity
struct Route {
    uint8 kind;              // 0 = SYNC, 1 = SODAX
    address spendAs;         // Token the venue spends (0 = ETH)
    uint256 quotedReturn;    // Expected output (SYNC fee baseline)
    uint256 value;           // Native value for venue call
    address venue;           // SYNC: contract to call
    address allowanceTarget; // SYNC: spender for approval
    uint8 approvalMode;      // 0 = direct, 1 = Permit2
    bytes callData;          // SYNC: venue calldata. SODAX: AssetManager transfer
}
```

### Route kinds

| Kind | Value | Description |
| --- | --- | --- |
| SYNC | `0` | Same-transaction swap through a venue |
| SODAX | `1` | Open a cross-chain intent |

### Fees

Surplus fee on SYNC routes only:

- 100% of improvement over `quotedReturn`
- Capped at 10% of gross output
- Hardcoded in `FeeLib.sol`

Use `computeSurplusFee` from `@pennysia/contracts-sdk` in your app.

### Read functions

| Function | Returns |
| --- | --- |
| `swapEnabled()` | Whether swaps are paused |
| `feeRecipient()` | Address that receives fees |
| `owner()` | Contract owner |
| `sodaxHubWallet()` | SODAX hub wallet |
| `sodaxOpenEnabled()` | Whether SODAX opens are paused |

### Operator functions

| Function | Access | Purpose |
| --- | --- | --- |
| `cancelAndRecoverSodax` | Operator | Cancel SODAX intent and recover funds |
| `rescueTokens` | Anyone | Rescue stuck tokens to fee recipient |
| `setSwapEnabled` | Owner | Pause/unpause swaps |

### Events

| Event | When |
| --- | --- |
| `SwapExecuted` | SYNC route succeeded |
| `SodaxIntentExecuted` | SODAX intent opened |
| `FeeCollected` | Surplus fee taken |
| `Rescued` | Tokens rescued |

### TypeScript helpers

```typescript
import {
  buildSyncRoute,
  buildExecuteSwapRequest,
  encodeExecuteSwapCalldata,
  ROUTE_KIND_SYNC,
  ROUTE_KIND_SODAX,
} from "@pennysia/contracts-sdk";
```

See [Contracts SDK](./sdk-reference.md#contracts-sdk) for full usage.

Audit reports are listed in [Security](#automated-testing) above.
