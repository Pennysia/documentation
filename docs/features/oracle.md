---
title: Oracle
description: Cube-Root TWAP oracle balances responsiveness and stability for manipulation-resistant pricing.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Oracle

**Cube-Root TWAP (cbrtTWAP)** — An innovative variant of [TWAP](https://en.wikipedia.org/wiki/Time-weighted_average_price) oracle that balances arithmetic and geometric means.

## Design Trade-off

Traditional TWAP oracles force a trade-off:

| Approach       | Pros                            | Cons                              |
| -------------- | ------------------------------- | --------------------------------- |
| **Arithmetic** | Captures short-term price moves | Vulnerable to price spikes        |
| **Geometric**  | Smooths out volatility          | Slow to reflect real-time changes |

As highlighted in [research by Delphi Digital](https://members.delphidigital.io/reports/arithmetic-or-geometric-mean-twap-which-one-to-use), choosing between these approaches involves significant trade-offs.

## Introduce cbrtTWAP Oracle

Our AMM invents cbrtTWAP. It utilizes cube-root transformation to achieve:

- **Responsive** — Captures immediate market changes better than Geometric TWAP
- **Resistant** — Harder to manipulate than Arithmetic TWAP
- **Stable** — Follows broader trends, not noise.

## How It Works

**Step 1: Transform**
Apply cube root to each price observation:
$$\sqrt[3]{P_t}$$

**Step 2: Average**
Calculate time-weighted average of transformed prices:
$${\sqrt[3]{P}}_{t_0,t_1} = \frac{\text{cumulativeCbrtPrice}_{t_1} - \text{cumulativeCbrtPrice}_{t_0}}{t_1 - t_0}$$

**Step 3: Finalize**
Cube the result to get the final oracle price:
$$\text{cbrtTWAP}_{t_0,t_1} = \left({\sqrt[3]{P}}_{t_0,t_1} \right)^3$$

This final result combines the responsiveness of arithmetic means with the stability of geometric means.
