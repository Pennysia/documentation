---
title: Liquidity Prediction Market
description: At Pennysia, you can have long and short liquidity positions.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2,3]
---

# Liquidity Prediction Market
The Liquidity Prediction Market (LPM) is a fusion between Automated Market Making (AMM) and prediction market dynamics. It enables liquidity providers (LPs) to express their directional market views and earn passive yield when their predictions align with market movements — without putting principal at any extra risk.


## **Summary**
1. LPs deposit liquidity in the same way as Uniswap V2.
2. LPs allocate their liquidity between two **prediction buckets**, each representing a different market stance.
    1. **Bullish on X:** Earns trading fees when the price of token X increases (e.g., when X is being bought).
    2. **Bullish on Y:** Earns trading fees when the price of token Y increases (e.g., when Y is being bought).
3. For each trade, liquidity from both bucket are utilized, but only the correctly predicted side collects the fees.
4. LPs can switch bucket anytime.
5. LP can stay neutral by allocating equal value to both buckets.

::: info :information_source:  INFO
Note: A liquidity pool is made up of two token, assuming tokenX and tokenY.
:::


## Why LPM?

Both users and projects are already familiar with Uniswap V2, a model widely respected for its simplicity, low-risk profile, fungible LP tokens, automatic compounding, and long-term sustainability. However, despite its elegance, it come with fundamental limitations:

1. **Limited Yield Potential**
    
    Uniswap V2 offers relatively low returns compared to newer models like concentrated liquidity AMMs. While these newer systems can provide higher yields, they also expose LPs to significantly greater **principal and impermanent loss risks**.
    
2. **No Market Expression**
    
    LPs in Uniswap V2 cannot express **directional market views**. In reality, most participants have a bias — bullish or bearish — toward certain assets, yet there is no native mechanism to benefit from these market perspectives.
    
3. **Other alternatives are risky**
    
    Besides concentrated liquidity, another way to express a **market bias** is by **adjusting liquidity ratios** — for example, shifting from a 50/50 pool to a 60/40 or 80/20 allocation. However, as the market moves against the chosen bias, the LP’s **principal value deteriorates** due to the asymmetric reserve balance. This means such strategies cannot operate infinitely or passively, as they **require active management and constant rebalancing** to avoid capital loss.
    

LPM solves these fundamental problems by enabling **bias-driven liquidity provisioning** that preserves **principal stability.**

1. LPs have the same low risk profile as in Uniswap V2.
2. LPs can express their market bias(bullish on X or bullish on Y) and earn high yields when correct.
3. Face **no principal loss** and **no additional impermanent loss** if their prediction is wrong
4. Retain all the core benefits of Uniswap V2 — including simplicity, fungible LP tokens, and auto-compounding rewards.
5. LPs can switch sides freely and can stay neutral.

## How it works?

Providing liquidity in Pennysia is as simple and familiar as in Uniswap V2. The only additional step is that liquidity providers (LPs) choose how to allocate their liquidity between two directional buckets — **bullish on X** and **bullish on Y**.

### **Example Scenario**

- **Step 1: Deposit Liquidity**

    Bob provides liquidity to the **X–Y** market just like in Uniswap V2.
    
- **Step 2: Express Market Bias**

    Since Bob is **bullish on token X** (and therefore bearish on token Y), he allocates **100% of his liquidity** to the **bullish on X** bucket.
    
    - When traders **buy token X** (price of X rises), Bob’s liquidity position **earns trading fees**.
    - When traders **sell token X** (price of X falls), Bob’s position **does not earn fees** on that trade.


- **Step 3: Adjust Strategy Dynamically**

    Later, Bob may decide to balance his exposure by allocating **60% to bullish on X** and **40% to bullish on Y**. This allows him to **earn fees from both sides**, while keeping a slight bias toward token X.
    
- **Step 4: Stay Neutral When Uncertain**
    
    When Bob is uncertain about market direction, he reallocates to **50% bullish on X and 50% bullish on Y**, maintaining a **neutral stance** and earning a steady baseline of fees.


## Reward

By combining AMM mechanics with predictive allocation, LPM allows LPs to amplify yield potential without increasing exposure. When a user’s market view proves correct, their allocated bucket captures all trading fees from that direction, effectively multiplying returns compared to neutral liquidity positions.

In addition, rewards are **auto-compounded in real time**, and with the [Aave integration](./aave-integration.md), LPs also **earn passive lending interest** — resulting in stacked yield streams from multiple on-chain sources.


## Risk

LPM is designed to preserve the same principal safety and risk profile as Uniswap V2. Liquidity providers never lose their initial capital due to incorrect market predictions — they simply earn fewer fees when their prediction does not align with market direction.

The only risks present are those inherent to standard AMM participation, such as impermanent loss and smart contract risk.



## Takeaway

- LPs can adjust their allocation at any time, based on market conditions or personal outlook — with no penalties, lockups, or added risk.
- LPM transforms liquidity provision into an intelligent, strategy-driven, and sustainable form of passive income.
- It bridges the safety of Uniswap V2 with the earning potential of prediction markets, offering the best of both worlds in one protocol.

::: tip :book: TIP
You can split liquidity evenly between both buckets and rebalance later. Allocating more to one side may boost returns in trending markets, but may underperform in sideways conditions.
:::
























