---
title: Provide Liquidity
description: Provide liquidity and earn infinite passive income, accessible to everyone.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2,3]
---

# Provide Liquidity
Provide liquidity and earn infinite passive income, accessible to everyone.


## How it works?
Liquidity Provisioning (LPing) is when you add your tokens to Pennysia’s liquidity pool so others can trade them. These pooled tokens form the market, and liquidity providers (LPs) act as the market makers.

When you deposit tokens into a pool, traders use that liquidity to swap between assets.
Every trade pays a 0.3% fee, which is automatically added back into your position — increasing your share of the pool. Your yield grows over time without any manual action, and you can withdraw anytime to receive your tokens plus your share of the accumulated fees.

![lping_overview](/lpm_high_level_lping.svg)

## Directional LPing
Pennysia offers a unique feature: the ability to set a directional bias in your liquidity position—made possible through the integration of a prediction market directly into the AMM. When adding liquidity to a tokenA/tokenB pool, for example, a user who is bullish on tokenA can configure their position to be long tokenA (or short tokenB). This tilts their exposure toward their market view.

Directionality is expressed as a percentage—the more directional you go, the greater the potential risk and reward. Further refer to [Liquidity Prediction Market](./liquidity-prediction-market).

## LP Benefits
1. **Fees**: All liquidity providers earn the majority of the 0.3% trading fee and liquidity fee. These fees are automatically compounded back into their liquidity position. Please visit Fees.
2. **Automation**: Unlike traditional markets—where market makers must constantly rebalance portfolios and manually manage orders—Pennysia automates the entire process. Once a user deposits liquidity, everything is managed seamlessly under the hood.
3. **Infinite Market**: Our mathematical model ensures that neither side of any token pair in the pool can be completely drained. This guarantees continuous liquidity across all price points. LPs earn passive income from every trade, regardless of price movement.
4. **Directionality**: Pennysia is the only AMM that allows LPs to set a directional bias in their position. This enables providers to maximize gains on appreciating assets while still earning passive income from auto-compounded fees.

## Risks
### 1. Neutral LPing
In a neutral liquidity position (50% long and 50% short within the same position), the only risk is standard [impermanent loss](https://iq.wiki/wiki/impermanent-loss) caused by price divergence between the paired assets. Neutral LPing is the default choice for those who prefer a balanced, lower-volatility approach.

### 2. Directional LPing
Directional LPing amplifies both potential rewards and risks. The risk materializes when the chosen market direction does not match the actual price movement.

For example, if a position is concentrated long tokenA but the price of tokenA drops below its entry price, the overall value of the position decreases. However, this risk is still impermanent—if the price of tokenA recovers, the unrealized loss will diminish over time.

Even in unfavorable market conditions, LPs continue to earn auto-compounded fees from trades, helping offset some of the downside. And remember—directionality is completely optional. You can always choose a neutral setup if you want to minimize directional exposure. 









