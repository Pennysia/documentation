---
title: Liquidity
description: One LP position, 4 revenue streams. Trading fees, liquidity fees, lending interest — all auto-compounded.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Liquidity

**One position, 4 revenue streams** — Earn from trading fees, liquidity movements, and Aave lending interest simultaneously. All auto-compounded in real-time. Same safety as Uniswap V2.

<img src="/LPM_light.svg" alt="liquidity prediction market" class="light-only">
<img src="/LPM_dark.svg" alt="liquidity prediction market" class="dark-only">

## Why Pennysia?

| Feature                      | Uniswap V2 | Concentrated Liquidity | **Pennysia**       |
| ---------------------------- | ---------- | ---------------------- | ------------------ |
| Risk level                   | Low        | **High** (leveraged)   | **Low**            |
| Express market view          | No         | Partial                | **Yes**            |
| Principal loss on wrong bias | N/A        | Yes                    | **No**             |
| Auto-compounding             | Yes        | No                     | **Yes**            |
| Extra yield from lending     | No         | No                     | **Yes** (via Aave) |

## How It Works

Deposit liquidity, pick a direction, earn fees when right. No lockups.

| Step  | What You Do            | What Happens                   |
| ----- | ---------------------- | ------------------------------ |
| **1** | Deposit tokens X and Y | Enter any market               |
| **2** | Allocate to a bucket   | Bullish X, Bullish Y, or 50/50 |
| **3** | Earn trading fees      | When trades match your bias    |
| **4** | Rebalance anytime      | No penalties, full flexibility |

**Buckets:**

- **Bullish on X** → Earn fees when X is bought (price rises)
- **Bullish on Y** → Earn fees when Y is bought (price rises)
- **50/50** → Earn steadily from both sides

## 4 Revenue Streams

One LP position captures yield from 4 sources — all auto-compounded in real-time:

| Source               | How You Earn                           | Applies To                  |
| -------------------- | -------------------------------------- | --------------------------- |
| **Trading fees**     | Swaps that match your bucket bias      | Your chosen bucket          |
| **Liquidity fees**   | Users switching buckets or withdrawing | Same fee structure as swaps |
| **Aave interest**    | Lending APY on supported tokens        | All Aave-supported tokens   |
| **Auto-compounding** | All yields reinvested automatically    | Everything                  |

::: info :information_source: INFO
A pool has two tokens (X and Y). Your bucket choice determines which trades pay you.
:::

## Example: $10K in ETH-USDC

| Strategy | Allocation       | ETH goes up   | ETH goes down |
| -------- | ---------------- | ------------- | ------------- |
| Bullish  | 100% ETH bucket  | **Earn fees** | No fees       |
| Neutral  | 50/50 split      | Earn half     | Earn half     |
| Bearish  | 100% USDC bucket | No fees       | **Earn fees** |

Switch strategies anytime as markets change. Wrong prediction = no principal loss, just fewer fees.

## Automatic Aave Yield

<img src="/aave_light.svg" alt="aave integration" class="light-only">
<img src="/aave_dark.svg" alt="aave integration" class="dark-only">

Tokens supported by [Aave](https://aave.com) automatically earn lending interest on top of all other yields. No extra steps, no manual claiming.

> Pennysia atomically withdraws from Aave for swaps, then re-deposits — all in one transaction.

[Why money markets win](https://x.com/SetteeCh/status/2003017063460454508)

## Risks

| Risk             | What it is        | How it's handled                    |
| ---------------- | ----------------- | ----------------------------------- |
| Impermanent loss | Standard AMM risk | Same as Uniswap V2                  |
| Smart contract   | Code bugs         | Audited, battle-tested              |
| Aave failure     | External protocol | Insurance fund + overcollateralized |

## Quick Tips

- **Unsure?** Start 50/50 for steady baseline returns
- **Trending market?** Lean into the direction (more allocation = higher returns)
- **People shift?** You earn fees
