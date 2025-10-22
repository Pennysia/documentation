---
title: Oracle
description: Cube-Root TWAP oracle blends arithmetic and geometric means for adaptive, manipulation-resistant pricing.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2,3]
---

# Oracle

Pennysia introduces the **Cube-Root TWAP (cbrtTWAP)**, an innovative variant of [time-weighted average price (TWAP)](https://en.wikipedia.org/wiki/Time-weighted_average_price#:~:text=In%20finance%2C%20time%2Dweighted%20average,achieve%20the%20TWAP%20or%20better.) oracle mechanism that strikes an optimal balance between arithmetic and geometric means.

## The Challenge

Traditional oracle approaches face trade-offs:
- **Arithmetic mean**: Captures short-term price fluctuations with high precision but vulnerable to sudden spikes
- **Geometric mean**: Smooths out noise logarithmically yet doesn't reflect real-time movements accurately

As highlighted in [research by Delphi Digital](https://members.delphidigital.io/reports/arithmetic-or-geometric-mean-twap-which-one-to-use), choosing between these approaches involves significant trade-offs.

## Our Solution

By combining both approaches and applying a cube-root transformation, cbrtTWAP produces adaptive, manipulation-resistant price points that are:
- **Responsive** enough to capture immediate market changes
- **Stable** enough to follow broader market trends
- **Resistant** to manipulation attempts

## Mathematical Implementation

### Step 1: Cube Root Transformation

We apply the cube root transformation to each price observation:

$$\sqrt[3]{P_t}$$

Where $P_t$ is the price at time $t$.

### Step 2: Time-Weighted Average of Cube Root Prices

Calculate the time-weighted average of the transformed prices:

$${\sqrt[3]{P}}_{t_0,t_1} = \frac{\text{cumulativeCbrtPrice}_{t_1} - \text{cumulativeCbrtPrice}_{t_0}}{t_1 - t_0}$$

This gives us the average cube root price over the interval $[t_0, t_1]$.

### Step 3: Final cbrtTWAP Result

Apply the inverse transformation (cubing) to get the final oracle price:

$$\text{cbrtTWAP}_{t_0,t_1} = \left({\sqrt[3]{P}}_{t_0,t_1} \right)^3$$

This final result combines the responsiveness of arithmetic means with the stability of geometric means.