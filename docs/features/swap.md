---
title: Swap
description: Trading on Pennysia is simple. Select tokens, amounts, and execute.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2,3]
---

# Swap
Swaps on Pennysia enable direct ERC-20 token exchanges. To execute a swap, select the token you hold (Token A), select the token you wish to acquire (Token B), and specify the amount of Token A to spend. Pennysia’s smart contracts then compute the corresponding Token B output (after fees). 

> Swaps here are different from traditional order book trades in that they are not executed against discrete orders on a first-in-first-out basis — rather, swaps execute against a passive, permissionless pool of liquidity, with liquidity providers earning [fees](fee.md) proportional to their capital committed.

::: tip :book: TIP
Pennysia's interface already handles both single-hop and multi-hop swaps automatically, so end users don't need to worry about the settings.
:::


## Single Hop
![single_hop](/pennysia_single_hop.svg)

A single hop swap on Pennysia refers to exchanging Token A for Token B through a direct liquidity pool that contains both assets. In other words, the trade path consists of exactly one pool:

### How it works:
1. The user specifies an amount of Token A to sell.
2. Pennysia routes the trade directly to the Token A ↔ Token B pool.
3. The smart contracts takes TokenA from user and returns the final amount of TokenB.

### Benefits
- **Simplicity**: Only one on-chain interaction is needed, minimizing gas costs.
- **Predictability**: There is only one source of price and liquidity, so price quotes are straightforward.


## Multi Hop
A multi hop swap on Pennysia occurs when there is no direct pool for Token A ↔ Token B, or when routing through intermediate assets yields a better execution price. A multi-hop path involves two or more pools:

![multi_hop](/pennysia_multi_hop.svg)

### How it works:
1. The user wants to swap Token A for Token B.
2. Pennysia searches available pools and finds the optimal path—e.g., A→X→B or A→X→Y→B—based on liquidity depth and price.
3. The swap is executed as a single transaction, sequentially passing through each intermediate pool.

### Benefits
- **Access to Deeper Liquidity**: Even if there’s no single A↔B pool, you can trade by routing through more liquid pairs (e.g., A↔X and X↔B).
- **Potentially Lower Price Impact**: Splitting volume across multiple pools with deeper reserves can reduce overall price impact compared to a small direct pool.


## Price impact 
Price impact measures how much a trade shifts the on-chain price relative to the pool’s spot price. In other words, it’s the difference between the spot price before your trade and the execution price. Larger trades (relative to pool reserves) cause bigger price impact, because they move reserves more dramatically—whereas small trades in deep pools yield minimal price impact.

## Slippage 
Slippage is the gap between the on-chain quote you see when you submit your transaction and the actual execution price, which arises from interim price impact (including other transactions that modify reserves before yours is mined). In practice:

::: tip :book: TIP
Price impact is a deterministic result of your trade size vs. pool liquidity.
Slippage includes that impact plus any additional changes that occur between quote and block inclusion.
:::

## Protection Parameter
To protect against unfavorable price movements, Pennysia provides two primary controls:
### Slippage Tolerance
- When you initiate a swap, you can set a percentage (e.g., 0.5 %).
- If the execution price deviates by more than that percentage (in the worst direction) between submission and mining, the transaction reverts.
- Example: You estimate receiving 100 Token B for 10 TokenA. With 1 % slippage tolerance, you will only receive at least 99 Token B; otherwise, the trade is canceled.
- Setting slippage tolerance too low can cause legitimate trades to revert due to normal on-chain volatility. Conversely, setting it too high risks executing at unfavorable prices and opens you up to [sandwich attacks](https://www.coinbase.com/learn/crypto-glossary/what-are-sandwich-attacks-in-crypto).

### Deadline (Transaction Expiration)
- You can attach a deadline timestamp, if your transaction is not finalized by the deadline, it reverts.
- This prevents the transaction being stuck if network congestion or volatile markets delay execution.


