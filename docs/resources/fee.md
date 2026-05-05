---
title: Fees
description: Fee structures for all Pennysia's products
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Fees

Pennysia has two products with separate fee structures: the **AMM** and the **Exchange (AoA Protocol)**.

## Exchange

::: info :sparkles: Currently free
The AoA Protocol currently charges **no fee** on swaps. You pay only the underlying aggregator's execution cost and gas.

A protocol fee will be introduced in the future — and will be **lower than major exchanges and aggregators**. It will be announced in advance before taking effect.
:::

When routing through aggregators, users pay:

- **Aggregator fees** — embedded in the quoted rate by each aggregator (not an additional charge)
- **Gas** — network cost to execute the on-chain transaction

There is no Pennysia markup on top of these at this time.

## AMM

### Taker Fee

Charged on every trade through Pennysia's AMM pools. Each pool bucket sets its own rate — in a BTC/USDT pool, buying BTC applies the fee set by the bullish-on-BTC bucket, and vice versa. Rate is set by liquidity providers through weighted voting.

| Setting | Value                         |
| ------- | ----------------------------- |
| Range   | 0.1% – 0.5%                   |
| Default | 0.3%                          |
| Voting  | Optional — adjustable anytime |

**Distribution:**

- **80%** → Liquidity providers (auto-compounded)
- **20%** → Protocol treasury

### Maker Fee

Applied when withdrawing liquidity. Same rate structure as the taker fee.

**Distribution:**

- **80%** → LPs in the affected bucket (auto-compounded)
- **20%** → Protocol treasury

### Liquidity Swap Fee

Applied when switching buckets. Same rate structure as the taker fee.

**Distribution:**

- **80%** → LPs in the affected bucket (auto-compounded)
- **20%** → Protocol treasury

### Flashloan Fee

**Fixed 0.1%** — goes entirely to protocol treasury.

## Protocol Fee Usage

The 20% AMM protocol fee supports:

- Core team and long-term sustainability
- Security audits and services
- Partner integrations
- Marketing and operations

::: info :book: NOTE
**50% of protocol fees** go to the [Deployer Incentive Program](../features/deployer-incentive.md), rewarding projects that launch markets on Pennysia.
:::
