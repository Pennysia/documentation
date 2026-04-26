---
title: Fees
description: Transparent fee structure that rewards LPs and sustains the protocol.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Fees

A transparent fee structure that **rewards liquidity providers** and sustains protocol development.

## Swap Fee

Charged on every trade. Rate is set by liquidity providers through weighted voting.

| Setting | Value                         |
| ------- | ----------------------------- |
| Range   | 0.1% – 0.5%                   |
| Default | 0.3%                          |
| Voting  | Optional — adjustable anytime |

**Distribution:**

- **80%** → Liquidity providers (auto-compounded)
- **20%** → Protocol treasury

### Directional Fees

Each pool bucket sets its own fee. In a BTC/USDT pool:

- Buying BTC → fee set by **bullish on BTC** bucket
- Buying USDT → fee set by **bullish on USDT** bucket

## Liquidity Fee

Applied when switching buckets or withdrawing liquidity. Same rate structure as swap fees.

**Distribution:**

- **80%** → LPs in the affected bucket (auto-compounded)
- **20%** → Protocol treasury

## Flashloan Fee

**Fixed 0.1%** — goes entirely to protocol treasury.

## Protocol Fee Usage

The 20% protocol fee supports:

- Core team and long-term sustainability
- Security audits and services
- Partner integrations
- Marketing and operations

::: info :book: NOTE
**50% of protocol fees** go to the [Deployer Incentive Program](./deployer-incentive), rewarding projects that launch markets on Pennysia.
:::
