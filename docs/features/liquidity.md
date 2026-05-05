---
title: Liquidity
description: Provide liquidity on Pennysia AMM. Choose your directional bias, earn from 4 revenue streams, switch anytime.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Liquidity Provision

## Optimized for Passive Liquidity

Liquidity provision is the act of depositing token pairs into an AMM pool to enable trading. In exchange, liquidity providers (LPs) earn fees from every trade that occurs in that pool.

On Pennysia AMM, liquidity provision goes further:

- **Passive by design** — No price ranges to manage, no active rebalancing, no liquidation risk
- **Directional earning** — Choose a bias (bullish on X, bullish on Y, or neutral) to maximize returns when your market view is correct
- **Multiple revenue streams** — Earn from taker fees, maker fees, and Aave lending simultaneously

Unlike traditional AMMs where LPs are forced to take a neutral stance, Pennysia transforms liquidity provision into a **prediction market layered on top of a standard AMM**. Earn more when you're right, no principal loss or penalty when you're wrong — just a smaller yield.

For technical details on how the AMM works, see [AMM Concept](../products/amm/concept.md).

## Your Revenue Breakdown

Every LP position earns from 4 sources simultaneously:

| Revenue Source          | What It Is                                     | When You Earn                             |
| ----------------------- | ---------------------------------------------- | ----------------------------------------- |
| **Taker fees**          | Fees from swaps (direct & via DEX aggregators) | When trades match your bucket's direction |
| **Maker fees**          | Exit fees from withdrawals                     | When anyone withdraws liquidity           |
| **Liquidity swap fees** | Bucket switch fees                             | When LPs change their directional bias    |
| **Aave interest**       | Lending yield                                  | Continuously on Aave-supported tokens     |

For detailed fee structure, see [Fees](../resources/fee.md).

::: tip :bulb: TIP
Only taker fees vary by your bucket choice. Maker fees, liquidity swap fees, and Aave interest flow to you regardless of bias.

> **Key insight:** Even with a neutral stance and no directional view, you still earn more than Uniswap V2 because of the additional revenue streams.

:::

## Example: <TokenPair token1="/ethereum-eth.svg" symbol1="ETH" token2="https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png" symbol2="USDC" /> Market

The same pool, three strategies. Your allocation determines your earnings.

| Strategy    | Allocation       | Best When         | How You Earn                                     |
| ----------- | ---------------- | ----------------- | ------------------------------------------------ |
| **Bullish** | 100% ETH bucket  | ETH trending up   | Maximum taker fees when buyers push price higher |
| **Neutral** | 50/50 split      | Ranging/uncertain | Steady taker fees from both directions           |
| **Bearish** | 100% USDC bucket | ETH trending down | Maximum taker fees when sellers push price lower |

Allocations are fully flexible — split your liquidity in any ratio (e.g. 15/85, 60/40, 90/10) to match your conviction level. 100% in one bucket maximizes directional earning; splitting reduces directional exposure while still capturing all other revenue streams.

## When to Switch Buckets

Switch anytime as conditions change. No principal loss from wrong predictions — just smaller taker fee earnings. Switch anytime as conditions change.

| Market Condition               | Suggested Action                                       |
| ------------------------------ | ------------------------------------------------------ |
| Strong uptrend forming         | Shift to Bullish X                                     |
| Breakdown below support        | Shift to Bullish Y (bearish on X)                      |
| Chop / ranging                 | Stay 50/50 or switch frequently                        |
| High volatility                | More bucket switches = more liquidity swap fees earned |
| Major event (listing, upgrade) | Position ahead of expected flow direction              |

## Considerations

Most AMMs force a trade-off: either accept low yields from passive pools (V2) or take on high risk and active management (V3). Pennysia bridges this gap.

| If you...                        | Pennysia enables...                                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Have idle assets earning nothing | **Passive yield** from 4 revenue streams, auto-compounded                                                |
| Hold volatile tokens             | **Directional earning** — profit from market movements without leverage, while hedging the downside risk |
| Want exposure without trading    | **Market participation** — earn from price action without timing entries/exits                           |
| Prefer low-risk DeFi             | **V2-level safety** with V3-level capital efficiency                                                     |

## Notes

### How is this different from other mainstream AMMs?

- 4 revenue streams instead of 1
- Principal risk capped at the minimum, predictable level
- No leverage or liquidation risk
- No price ranges to manage
- No need to actively rebalance

### Do I need to monitor my position?

No. Pennysia is fully passive. Once deposited, yields auto-compound. You only need to act if you want to change your directional bias.

### What if I pick the wrong bucket?

Your principal is safe. You just earn fewer directional taker fees during that period. You still earn from the other 3 revenue streams (maker fees, liquidity swap fees, Aave interest), and you can switch anytime.
