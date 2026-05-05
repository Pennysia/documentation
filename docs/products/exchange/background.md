---
title: Problem
description: DEX aggregators compete but none consistently delivers the best rate. Learn why execution quality is broken and how Pennysia Exchange solves it.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# The Myth of "Best Rate"

DeFi opens liquidity permissionlessly across dozens of protocols — something no centralized exchange allows. But this openness is fragmented, and even the aggregators built to solve it cannot guarantee the best execution.

## 1. Problem: No platform guarantees the "best rate"

### > The Situation of DEX Aggregators

DEX aggregators are one of the fastest-growing segments in DeFi. Monthly volume grew from near zero in 2022 to over **$52B in the past 30 days, with peak months exceeding $250B.** There are now **132 aggregators across all chains**, with **52 on Ethereum alone**.

![DEX Aggregator monthly volume chart from DefiLlama showing growth from near zero in 2021–2022 to over $250B/month peak in 2025](/dex_aggregator_volume.png)

_Source: DefiLlama, May 2026_

They target a real problem — but create a new one. With 132 competing aggregators each running different algorithms and data sources, results vary widely. **No single aggregator consistently wins across all trade sizes and token pairs.**

### > Real-World User Experience

_Snapshot taken May 5, 2025. Six aggregators, same moment, ETH → USDC on Ethereum._

- **100 ETH → USDC** — Spread between best and worst: ~**1,392 USDC**

![100 ETH to USDC swap comparison across 6 DEX aggregators: KyberSwap ranks 1st, CowSwap 2nd, Velora 3rd, Matcha(0x) 4th, Uniswap 5th, 1inch 6th](/ETH100_USDC.png)

<div style="margin-top:2rem;"></div>

- **1,000 ETH → USDC** — Rankings flip entirely. Spread between best and worst: ~**6,611 USDC**

![1000 ETH to USDC swap comparison across 6 DEX aggregators: Velora ranks 1st, CowSwap 2nd, Matcha(0x) 3rd, 1inch 4th, KyberSwap 5th, Uniswap 6th](/ETH1K_USDC.png)

The aggregator that won at 1,000 ETH was near the bottom at 100 ETH — same moment, same pair. There is no way for a user to know which to trust without checking all of them, which defeats the purpose.

### > Performance is more than output rate

Output rate is just one part of the picture. Hidden dimensions users rarely see:

- **Overquote / underquote** — Optimistic quotes that degrade at execution time, leaving users with less than shown
- **Latency & runtime complexity** — Slower algorithms mean stale routes; under high load, this directly worsens execution
- **Gas cost** — Multi-hop routes can cost 3–5× more gas, erasing a marginally better quote
- **Revert / success rate** — Complex paths are more sensitive to state changes between quote and submission, causing failed transactions and wasted gas

A useful resource for comparing aggregators across these dimensions in real time is the [Enso Shield Dashboard](https://shield.enso.build/dashboard).

## 2. Evaluation

Hidden factors that also determine execution quality:

### > Algorithm

The routing algorithm determines how a trade is split across sources. Simple heuristics fail for large trades; more sophisticated approaches like optimal split routing or intent-based matching yield better output — but are computationally expensive. The snapshots above are direct evidence: the same problem, the same moment, different answers.

### > Liquidity Access

An aggregator can only route through liquidity it can access. Most cover the top 5–20 on-chain DEXs — a small fraction of what's available. Some also tap off-chain sources such as private market makers and RFQ systems, which can offer better prices but introduce trust and latency trade-offs. Either way, a missing source means a missed route, regardless of how good the algorithm is.

### > Infrastructure (Reliability & Data Freshness)

A quote is only as good as the data behind it. Stale pool state or slow RPC responses mean the route is priced against reality that no longer exists — leading to worse execution or failed transactions. Uptime matters too: aggregators that go down during volatile periods fail users when it counts most.

### > Cost (Economics of Scale)

Better routing requires more compute, infrastructure, and real-time data — all of which cost money. If running the optimal algorithm is unprofitable, aggregators quietly downgrade to a route that's good enough to serve but not the best possible. Users never see this. Larger aggregators can absorb the cost; smaller ones trade optimality for sustainability.

### > Security

Multi-contract routing expands the attack surface beyond a standard DEX swap. Third-party price APIs, token approvals across protocols, and complex execution paths have all been exploited — through price manipulation via routing logic and approval abuse. More complexity means more risk.

## 3. Opportunity

### > Current Market Gap

Aggregators have solved liquidity discovery. The remaining gap is **execution quality** — delivering the provably optimal route, at the moment of trade, at sustainable cost. Every aggregator claims best rate. None can guarantee it.

### > User and Business Pain Points

**Users** leave money on every trade with no way to verify it. They have to trust.

**Businesses** (wallets, apps, protocols) that commit to one aggregator inherit its ceiling. When a better route exists elsewhere, their users lose.

### > Case Study

This lock-in is already embedded in products used by hundreds of millions daily.

- **Coinbase** (120M+ users) — all on-chain swaps across the Coinbase App, Base App, and CDP run exclusively through **0x** [[Source](https://0x.org/case-studies/coinbase/)]
- **MetaMask, Coinbase Wallet, Rabby, Zerion, Rainbow, Bitget** — route through **0x, 1inch, or Paraswap**; **Phantom** is locked to **Jupiter**; **OKX/Bitget** use internal routers [[Source](https://ratex.ai/blog/the-wallet-wars-2025-market-structure-revenue-models-and-user-behavior.3fe/)]

> _"Wallets connected to a single aggregator inherit its strengths and weaknesses."_ — RateX, 2025

The routing choice is made once, at the product level, invisible to users. When that aggregator underperforms, users lose with no visibility and no recourse.

### > Market Potential

**$52B+** in monthly DEX aggregator volume. Every dollar routed through a suboptimal aggregator is measurable opportunity loss.

The addressable market is the entire DEX trading surface — every wallet, app, protocol, or institution that offers token swaps. **Whoever reliably delivers the best rate at scale wins the execution layer of DeFi.**

## 4. Solution: Aggregator of Aggregators Protocol

The problem isn't that good aggregators don't exist. It's that no single one is consistently the best — and users have no way to know which one to use at any given moment.

### > Specification

Pennysia Exchange builds an **Aggregator of Aggregators (AoA)** protocol — the execution layer that sits above existing DEX aggregators. Rather than routing through one aggregator and accepting its result, it queries multiple aggregators simultaneously, compares their outputs in real time, optimizes routing further, and executes through the best path through multiple aggregators.

Users get a single interface. Under the hood, the full competitive landscape of aggregators is working on their behalf.

### > Core Thesis

Each layer of DeFi infrastructure solved a distinct problem:

- **AMMs** solved market making — making liquidity provision decentralized, automated, and open to anyone
- **DEX Aggregators** solved fragmentation — routing across AMMs and other liquidity sources to offer their best rate
- **AoA Protocol** solves execution — analyzing offers from all aggregators, selecting the best one, and handling execution automatically so users always get the optimal result, without facing the performance issues of relying on a single aggregator.

The AoA Protocol is the final routing layer. It doesn't replace aggregators — it makes their competition work for users instead of against them.

To see how it works, see [Concept](./concept.md).
