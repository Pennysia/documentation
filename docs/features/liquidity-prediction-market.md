---
title: Liquidity Prediction Market
description: At Pennysia, you can have long and short liquidity positions.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: 3
---

# Liquidity Prediction Market
At Pennysia, you can have long and short liquidity positions.
We design this feature to be composable. It can be seen as an extension to all unified-liquidity AMM models in major protocols. The objective is to
**enhance earning opportunities while reserve core functionalities in the existing AMM models.**

## Limitation in regular AMM LPing
1. **Volatility erodes returns**
Most cryptocurrencies experience significant price swings. In a constant-product AMM, impermanent loss from volatility often outweighs the trading fees earned, leading to negative net returns for LPs over time.

2. **Bias against holding emerging assets**
In regular AMMs, providing liquidity forces LPs to hold equal amounts of both assets. This dilutes exposure to small-cap or newly launched tokens that may have higher growth potential, reducing upside from capital appreciation.

3. **No way to combine yield and conviction** 
Traditional AMMs offer no mechanism to earn swap fees while maintaining a chosen market bias. LPs must choose between:
    - **Directional holding** to maximize capital gains (but earn no fees), or
    - **Neutral LPing** to earn passive income (but sacrifice directional exposure).

## Solution: Liquidity Prediction Market (LPM)
LPM makes directional LPing possible. It is Pennysia’s unique liquidity provisioning mode that turns providing liquidity into a **continuous prediction market** on the direction of future trades, making volatility a potential source of profit instead of a risk to avoid.

Instead of the usual single liquidity pool per side of a pair, each token’s reserve is split into two buckets:

- **Long bucket** → earns more when the token is sold into the pool (token is the output).
- **Short bucket** → earns more when the token is bought from the pool (token is the input).

This structure allows liquidity providers (LPs) to express a directional bias — essentially making a live market bet on order flow.

## How It Works
![how-lpm-work](/liquidity_prediction_market_user_view.svg)
1. **Reserves are split:**
For a pair (Token A, Token B) we track:
```reserveA_Long, reserveA_Short, reserveB_Long, reserveB_Short ```
Pricing still uses total reserves:
```reserveA_total = reserveA_Long + reserveA_Short``` , ```reserveB_total = reserveB_Long + reserveB_Short```
Trades see the same price curve as a constant-product AMM.

2. **Fee routing is directional:**
 - **Output side** (token being sent to trader): 100% of the swap fee is added to its Long bucket.
 - **Input side** (token being taken from trader): Up to the swap fee amount is shifted from Long → Short in that token.
3. **Outcome:**
- If your token is often the output in swaps, its Long bucket grows faster — LPs in that bucket collect more fees and face less impermanent loss (IL).
- If your token is often the input, its Long bucket loses balance to Short — LPs in that bucket bear more IL.

## Why It’s a Prediction Market
Each bucket is a standing bet on future order flow:
| Bucket | Bet Implied |
| :------: | :----: |
| Token A Long | “More traders will sell Token B to buy Token A.” |
| Token A Short | “More traders will sell Token A to buy Token B.” |
| Token B Long | “More traders will sell Token A to buy Token B.” |
| Token B Short | “More traders will sell Token B to buy Token A.” |

- If you guess correctly, directional fees push value into your bucket faster than IL can erode it.
- If you guess wrong, IL is amplified until flow reverses.

## Example: Directional Flow
Initial reserves (simplified):

```A_Long = 500, A_Short = 500``` , ``` B_Long = 500, B_Short = 500```

A large swap buys B with A (A is input, B is output):
- **Output side (B)**: Fee credited to B_Long.
- **Input side (A)**: Fee shifted from A_Long → A_Short.

Result after the trade:

```A_Long ↓, A_Short ↑``` , ```B_Long ↑, B_Short unchanged```
- B_Long LPs just “won” that round.
- A_Long LPs “lost”.


## Observation
### If Price Returns Later
If later trades reverse the price exactly, the imbalance partially unwinds — but not perfectly.
- Fees depend on current reserves, not the original.
- The system keeps a memory of past flow — so LPs who guessed right keep part of the edge until enough opposite flow erases it.
### Strategic Implications
- **Hold your bias**: If you expect more buys of Token X, provide liquidity in Token X_Long.
- **Switch if wrong**: If flow changes direction persistently, move to the winning bucket to stop bleeding IL.
- **Flow arbitrage**: Traders can’t directly extract your directional fees — only opposite flow can.
### Key Takeaways
- **More than AMM**: This isn’t just price-making — it’s flow prediction with real stakes.
- **Path-dependent returns**: Outcomes depend on the sequence of trades, not just start/end prices.
- **No fixed expiry**: The “market” never ends — you can enter/exit anytime.

::: tip :book: TIP
To reduce risk, you can split allocation between Long and Short buckets and rebalance based on market signals. Allocating 100% in one direction is highest risk, highest reward.
:::
























