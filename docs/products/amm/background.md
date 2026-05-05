---
title: Demand for a better passive liquidity AMM
description: Why the DeFi ecosystem needs a new AMM model optimized for passive liquidity providers.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Demand for a better passive liquidity AMM

The shift to decentralized liquidity is inevitable. Permissionless by design, DeFi will surpass centralized platforms in depth and accessibility. But today, most liquidity providers are still being left behind.

## 1. Problem: Passive liquidity is starving

### > Majority of liquidity wants to be passive

The golden age of liquidity providers came in 2021, when Uniswap V2 and PancakeSwap hit TVL records that no AMM has broken since. The constant product AMM won on simplicity: infinite range, no management, auto-compounding, and a built-in DCA mechanism — automatically selling as price rises, buying as it falls, all while earning trading fees. It was a new primitive that had never existed before, and it was the first time that any individual could become a market maker.

_Uniswap V2 peak TVL $9.74b (Apr 2021) · PancakeSwap AMM peak TVL $7.22b (May 2021) · Source: DefiLlama_

![Uniswap V2 peak TVL $9.74b (Apr 2021) and PancakeSwap AMM peak TVL $7.22b (May 2021) — records unbroken across all AMMs to this day. Source: DefiLlama](/CPAMM.png)

### > Liquidity in CLAMMs is at loss

Since the emergence of [concentrated-liquidity AMMs (CLAMMs)](https://dl.acm.org/doi/epdf/10.1145/3464967.3488590), passive liquidity has been left behind. Protocols competing for volume began optimizing for active, leveraged positions — some removed passive AMM interfaces entirely. The industry began to compete on offering highest leverage to LPs to increase revenue.

Despite the hype, over [18 public studies](https://github.com/Pennysia/cfmm-vs-clmm-lp-profitability/tree/main/papers) between 2021 and 2025 reached the conclusion: the majority of CLAMM LPs lost money in terms of total return, primarily due to impermanent loss outpacing fee income.

Starting in 2022, [Automated Liquidity Management(ALM)](https://www.gauntlet.xyz/resources/uniswap-alm-analysis) protocols emerged as a fix — automating rebalancing, compounding, and position management. However, the strategies came with drawbacks. Constant rebalancing crystallizes impermanent loss into permanent loss. Users faced opaque strategy selection, unpredictable risk exposure, and diminishing returns — all reflected in the TVL collapses that followed.

_Gamma (peak ~$130m) and Arrakis Finance (peak ~$1.85b) TVL — both declined sharply after peak. Source: DefiLlama_

![Gamma TVL collapsed to $4.08m and Arrakis Finance TVL to $76.37m — both peaked in 2022–2023 and have declined significantly since. Source: DefiLlama](/ALM.png)

Managing CLAMM positions is not designed for the general public. It demands constant monitoring, deep market knowledge, and active intervention — the domain of professional market makers, not retail users.

## 2. Evaluation

### > The silent return of passive liquidity

When major stable assets are excluded from Uniswap's Ethereum TVL, V2 has matched or exceeded V3 in volatile-pair TVL since early-2024 — a clear signal that passive liquidity never left, it was just underserved.

Even though Uniswap V2 is no longer featured on the official Uniswap interface, users continue to seek it out through alternative frontends. This is a strong signal: **demand for passive liquidity provision is not just persistent — it's growing.**

_Uniswap Ethereum — Volatile TVL by Version (2021–2026). V2 (blue) consistently matches V3 (red) for volatile pairs from 2024 onwards. Source: DefiLlama_

![Uniswap Ethereum volatile TVL by version (2021–2026): V2 matches or exceeds V3 from 2024 onward, highlighted in the red box. Source: DefiLlama](/v2vsv3.png)

CLAMMs can work for stablecoins and liquid-staking tokens — assets with low volatility and tight price ranges. But for volatile pairs, which make up the vast majority of all trading activity, CLAMMs remain impractical for most users.

### > Low-risk DeFi

Vitalik Buterin argues that [low-risk DeFi can be for Ethereum what search was for Google](https://vitalik.eth.limo/general/2025/09/21/low_risk_defi.html) — the application that finally aligns revenue generation with the ecosystem's core values. As DeFi protocols mature and risk decreases, sustainable use cases like payments, savings, and fully collateralized lending are replacing speculation as the primary driver of adoption.

The implication for AMMs is clear: if the next wave of DeFi adoption is built on low-risk, accessible primitives, then the AMM layer must follow suit. Passive, low-risk liquidity provision is what will drive adoption and serve this new class of users.

### > Projects still rely on passive AMMs

To this day, the majority of new token launches on major chains default to constant product AMMs. The reason is simple: the V2-style AMM is far simpler to integrate, easier to reason about, and requires no active position management. Developers don't want to be market makers — they want to deploy liquidity and get back to building.

Uniswap V2 on Ethereum has over [500,645 pools](https://etherscan.io/address/0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f#readContract), compared to [~58,000 on V3](https://dune.com/mbuffara/uniswap-pools) — an 8.6x difference. Launchpad platforms like [Pump.fun](https://pump.fun/), [PinkSale](https://www.pinksale.finance/), and [Ethervista](https://www.ethervista.app/) have also chosen the constant product formula for token launches.

The constant product function guarantees that liquidity is always available — across all price ranges, at all times, with no expiry. For early users and token holders, this is critical: they know the market will always be there for them to trade, regardless of volume or attention.

### > Current passive liquidity AMMs are not enough

The whole reason concentrated liquidity was created in the first place is that yields from standard constant product AMMs is relatively low. Passive is safe, but the rewards often aren't compelling enough.

Beyond earning fees, LPs don't always want to stay market-neutral. The vast majority of on-chain tokens are volatile assets — even major ones like Bitcoin and Ethereum — and their prices often move directionally. Naturally, LPs form convictions about where price is headed and want to earn from that view. However, **they still need the low and predictable risk profile.** The constant product model treats every LP identically and offers no way to express a thesis.

A better AMM must bridge this gap: higher capital efficiency and the ability to express directional views — while preserving the simplicity and predictable risk profile that passive LPs need.

## 3. Existing Alternatives

If constant product AMM is not enough and CLAMM is too complex, what about other alternatives?

### > Balancer Weighted Pool

[Balancer's weighted pools](https://docs.balancer.fi/concepts/explore-available-balancer-pools/weighted-pool/weighted-pool.html) extend the constant product formula beyond the standard 50/50 split, allowing LPs to create pools with arbitrary weight ratios — such as 80/20 or 70/30. This gives LPs the ability to express a directional bias: by allocating more weight to the asset they're bullish on, they maintain greater exposure to its upside.

However, the risk profile is asymmetric. In an 80/20 pool, if the asset on the 80% side appreciates, the LP benefits — the majority of their capital is in the appreciating token. But if it depreciates, the outcome is worse than a standard 50/50 pool: the LP ends up holding a large share of the declining asset and less of the appreciating one, as the pool rebalances against them. The directional stance amplifies both gains and losses.

Due to this pool-specific directional risk profile, weighted pools have not gained traction among long-term passive liquidity providers.

### > Proprietary AMMs

Proprietary AMMs (Prop AMMs) carry the highest risk profile among all constant function market maker models. By definition, they can be anything — built on custom algorithms, centralized or decentralized, active or passive. This flexibility is a double-edged sword.

In practice, most Prop AMMs are concentrated liquidity paired with a built-in ALM strategy — repackaged under a custom interface. The underlying mechanics are familiar, but the implementation is not. Users must carefully review and understand how each model works before interacting with it.

The risk extends beyond the liquidity management model itself into security and implementation. Each Prop AMM design introduces unique smart contract behavior, invariants, and edge cases. This demands rigorous research from users, integrated platforms, and developers alike before committing capital.

## 4. Solution: Optimal AMM for passive liquidity provision.

### > Specification

Based on the problems, evaluation, and shortcomings of existing alternatives, the new AMM model must satisfy the following requirements:

1. **Fully passive** — No active management, no rebalancing, no monitoring required. Deposit and forget.

2. **Infinite range** — Liquidity must be available across all price points, at all times, with no expiry. The market is always there, working 24/7.

3. **Low and predictable risk** — The risk profile must be transparent, bounded, and easy to reason about — suitable for retail users, not just professionals.

4. **No leverage, no liquidation, no lockup** — LPs should never face forced liquidation or locked capital. Positions must be withdrawable at any time.

5. **Higher capital efficiency** — yields must meaningfully exceed what standard constant product AMMs offer, without introducing leverage or active management.

6. **Directional expression** — LPs should be able to express a market bias and benefit from their conviction, without amplifying downside risk disproportionately.

7. **Auto-compounding** — Earned yields should compound automatically without manual intervention.

8. **Simple to integrate** — Developers and projects must be able to deploy pools with minimal overhead — as easy as launching on a V2-style AMM.

9. **Standard and auditable** — The model must be based on well-understood mathematical invariants, not proprietary black boxes. Security should be verifiable without requiring bespoke research per deployment.

10. **Composable** — The AMM must integrate cleanly with the broader DeFi ecosystem — aggregators, lending protocols, and other on-chain infrastructure.

### > Core Thesis

_The constant product AMM proved that passive liquidity works — it just hasn't been improved in the right direction. CLAMMs optimized for professionals, not the public. The opportunity is to evolve the standard AMM toward higher efficiency and expressiveness, without sacrificing what made it work in the first place._

To see how Pennysia's AMM works, continue to the [Concept](./concept.md) page.
