---
title: Exchange
description: Trade any token onchain directly through Pennysia's liquidity pools.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Exchange

**Trade any token onchain** — Select tokens, enter an amount, and execute. Pennysia calculates the output and routes the trade automatically.

Every swap generates [trading fees](./fee.md) distributed to liquidity providers and the protocol treasury.

## DEX Aggregator Integration

::: info :information_source: INFO
The full list of integrated DEX aggregators will be announced at mainnet launch.
:::
To ensure our liquidity is optimally utilized, we aim to integrate with major DEX aggregators. This means:

- **Best price, always** — Aggregators route trades through the deepest liquidity, including ours, giving traders the best execution price regardless of trade size
- **Wider reach** — Our liquidity is accessible to users across other protocols and platforms, not just Pennysia directly
- **Better capital efficiency** — More volume through our pools means more fees earned by LPs

## Routing

::: tip :book: TIP
The interface handles routing automatically. You don't need to think about single-hop or multi-hop — just pick your tokens and swap.
:::

### Single Hop

A direct trade through one pool: A → B.

<img src="/single_hop_light.svg" alt="single hop" class="light-only">
<img src="/single_hop_dark.svg" alt="single_hop" class="dark-only">

- Lower gas cost
- Simple, predictable price

### Multi Hop

When no direct A↔B pool exists, Pennysia routes through intermediate tokens: A → X → B.

<img src="/multi_hop_light.svg" alt="multi hop" class="light-only">
<img src="/multi_hop_dark.svg" alt="multi hop" class="dark-only">

- Access to any token pair
- Better price by routing through deeper liquidity

## Price Impact & Slippage

| Term             | What it means                                                                        |
| ---------------- | ------------------------------------------------------------------------------------ |
| **Price impact** | How much your trade moves the price — larger trades in smaller pools = higher impact |
| **Slippage**     | The difference between your quoted price and the actual execution price              |

> Price impact is predictable. Slippage also includes price changes from other transactions that happen before yours is confirmed.

## Protection Settings

### Slippage Tolerance

Set a maximum acceptable deviation (e.g. 0.5%). If the final price is worse than this, the transaction reverts automatically.

**Example:** Expecting 100 USDC for 0.05 ETH with 1% tolerance → you'll receive at least 99 USDC, or the trade cancels.

> Setting it too low may cause failed transactions. Too high exposes you to [sandwich attacks](https://www.coinbase.com/learn/crypto-glossary/what-are-sandwich-attacks-in-crypto).

### Deadline

Set a time limit for your transaction. If not confirmed within the deadline, it reverts — preventing execution at stale prices during network congestion.
