---
title: Fees
description: How fees system work.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2,3]
---

# Fees
A small set of fees is applied within the Pennysia ecosystem to ensure long-term sustainability, fair reward distribution, and continuous protocol development.
<!-- ::: warning :warning: WARNING
The information on this page is not finalized and is subject to change at any time. This version is provided to give readers a glimpse of the proposed fee structure.
::: -->

## 1.Swap Fee

A swap fee is charged on every token trade executed through a Pennysia market.

The fee rate is dynamically determined through weighted voting by liquidity providers (LPs) — each LP’s vote is weighted according to their share of the pool’s total liquidity.

- **Fee Range:** 0.1% – 0.5%
- **Default Setting:** 0.3%
- **Optional Voting:** Fee voting is entirely **optional**. LPs can choose a preferred fee rate **when providing liquidity** or **adjust it at any time** later. This flexibility allows users to optimize returns and hedge against impermanent loss, based on their personal market outlook or trading activity within the pool.

### Directional Fee Logic

Each bucket defines its own fee rate. For example, in a **BTC/USDT** pool:
- Trades **buying BTC** (price of BTC rising) are subject to the fee determined by the **bullish on BTC** bucket.
- Trades **buying USDT** (price of BTC falling) use the fee from the **bullish on USDT** bucket.

### Distribution
- **80%** of collected swap fees are distributed among LPs **proportionally to their liquidity share**, and **automatically compounded** into their principal position.
- **20%** is retained as a protocol fee.


## 2.Liquidity Fee
A liquidity fee is applied whenever an LP switches buckets (reallocates market bias) or withdraws liquidity.

The rate and calculation follow the same rule as the swap fee — determined by weighted LP voting, with optional user adjustment.

### Distribution
- **80%** of collected liquidity fees are distributed to **existing LPs within the affected bucket**, compounding automatically to their token value.
    - Example: if a user withdraws from the **bullish on BTC** bucket in a BTC/USDT pool, the fee is distributed proportionally to all LPs still in that same bucket.
- **20%** is retained as a protocol fee.

## 3.Flashloan Fee
A **fixed 0.1% fee** is applied as a protocol fee.

## 4.Protocol Fee
The protocol fee serves as the foundation for maintaining and expanding the Pennysia ecosystem. It supports:

- Core team compensation and long-term sustainability
- Third-party audits and security services
- Partner integrations and ecosystem collaborations
- Marketing, operations, and R&D initiatives
::: info :book: NOTE
Currently, **Pennysia shares 50% of all protocol fees as part of the Deployer Incentive Program**, empowering new projects to launch with built-in liquidity and sustainable revenue support. (See [Deployer Incentive](./deployer-incentive) for more details.)
:::




