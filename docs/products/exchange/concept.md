---
title: How it Works
description: How Pennysia Exchange works — an Aggregator of Aggregators that compares all DEX aggregators in real time to guarantee the best swap rate.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# The True Best Rate Engine

Most swap interfaces route through one aggregator and call it the best rate. Pennysia Exchange routes through all of them — and outperforms every DEX and aggregator on Ethereum. It is the only exchange that guarantees the true best rate at any given time.

<div style="display:flex;flex-direction:column;align-items:center;">
  <LottiePlayer srcLight="/SwapLightMode.lottie" srcDark="/SwapDarkMode.lottie" :aspectRatio="450/600" maxWidth="650px"/>
  <p style="font-size:0.85rem;color:var(--vp-c-text-2);margin-top:0.5rem;">A single swap request is broadcast to all aggregators simultaneously. The best result wins.</p>
</div>

Pennysia Exchange is an **Aggregator of Aggregators (AoA)** — it doesn't pick one aggregator and trust it. It runs them in parallel, takes the best result, optimize it further, and handles everything else so users don't have to.

## 1. How It Works

### > Step 1: Broadcast

When a user initiates a swap, the request is broadcast simultaneously to multiple DEX aggregators. Each one independently computes its best available route using its own algorithm, liquidity sources, and pricing data.

### > Step 2: Compare

The AoA protocol receives all quotes and evaluates them on the dimensions that matter — not just output amount, but also gas cost and execution viability. A quote that looks better but costs significantly more in gas, or is likely to revert, is ranked lower.

### > Step 3: Optimize

Before execution, the protocol applies a final optimization pass with its own algorithm. In most cases, combining partial routes from multiple aggregators produces a better outcome than any single aggregator alone. The execution path is split accordingly to achieve the best possible result.

### > Step 4: Execute

The best path is submitted on-chain. The protocol handles slippage protection, deadline enforcement, and revert safety. If conditions change between quote and execution, the protocol will handle the failure and retry with the next best option sequentially until a successful execution is achieved or the slippage threshold is exceeded, to ensure smooth and reliable transactions.

## 2. User Flow

From a user's perspective, none of the above is visible. The experience is:

1. **Enter the swap** — select tokens and amount
2. **See the best rate** — the protocol has already queried all aggregators and surfaced the optimal result
3. **Confirm** — sign once; the protocol handles routing and execution
4. **Done** — tokens received at the best available rate at that moment, guaranteed

There is no need to compare platforms, monitor aggregators, or know which one is best for a given trade size. The protocol does this continuously, on every swap.

## 3. What Makes It Different

|                      | Single Aggregator             | AoA Protocol                                        |
| -------------------- | ----------------------------- | --------------------------------------------------- |
| **Quote source**     | One algorithm                 | All major aggregators, in parallel                  |
| **Best rate**        | Best that one source can find | Best across the entire market                       |
| **Gas optimization** | Per-aggregator                | Cross-aggregator, with net cost factored in         |
| **Execution safety** | Varies                        | Revert protection and slippage enforcement built in |
| **User effort**      | Pick the right aggregator     | None                                                |

## 4. Prototype

<div style="border:1px solid var(--vp-c-brand);border-radius:12px;padding:1.5rem 2rem;margin-top:1rem;">
  <div style="font-size:1rem;font-weight:600;margin-bottom:0.5rem;">🔗 AoA Prototype — Ethereum Mainnet</div>
  <div style="font-size:0.95rem;color:var(--vp-c-text-2);margin-bottom:1rem;">We built a working prototype of the AoA Protocol to demonstrate real-time rate performance. Enter any swap and see how the AoA result compares against individual aggregators. No wallet connection required.</div>
  <a href="https://aoa.pennysia.com" target="_blank" style="display:inline-block;background:transparent;color:var(--vp-c-brand);border:1.5px solid var(--vp-c-brand);padding:0.5rem 1.25rem;border-radius:8px;font-weight:600;text-decoration:none;width:fit-content;">Open Prototype →</a>
</div>

<div style="display:flex;flex-direction:column;align-items:center;margin-top:1.5rem;">
  <img src="/bestRate.jpg" alt="AoA best rate performance showcase" style="border-radius:12px;max-width:100%;" />
  <p style="font-size:0.85rem;color:var(--vp-c-text-2);margin-top:0.5rem;">Pennysia Exchange outperforming all DEXes and aggregators on Ethereum — the only swap engine that guarantees the true best rate on every trade.</p>
</div>
