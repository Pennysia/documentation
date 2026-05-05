---
title: Trade
description: Swap any token onchain at the best available rate, powered by the AoA Protocol.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Trade

Swap any token — get the best rate available across the entire DEX market, with no extra steps.

Most swap interfaces route through a single aggregator and call it the best rate. Pennysia Exchange is different: it queries **all major DEX aggregators simultaneously**, compares every quote, optimizes the execution path further, and submits the single best result — automatically, on every trade.

You don't pick an aggregator. You don't compare platforms. You just swap.

## True Best Rate Swap

- **Provably best rate** — not best rate from one source, but best rate across the entire market at that moment
- **Gas-aware routing** — a better quote that costs significantly more gas isn't actually better; the protocol accounts for the full net cost
- **Execution reliability** — if conditions shift between quote and submission, the protocol handles it; no silent failures at degraded rates
- **Zero overhead** — one interface, one transaction, no aggregator research required

::: tip :book: How routing works under the hood
Pennysia Exchange is an **Aggregator of Aggregators (AoA)** — a routing layer that sits above existing DEX aggregators and makes them compete on your behalf. See [How it Works](../products/exchange/concept.md) for details.
:::

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
