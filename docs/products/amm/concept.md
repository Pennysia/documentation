---
title: How it Works
description: How the Pennysia AMM works.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# The Optimal AMM for General Public

A passive liquidity AMM designed to maximize capital efficiency and directional expression — with no active management, no leverage, and no lockups.

<div style="display:flex;flex-direction:column;align-items:center;">
  <LottiePlayer srcLight="/LPlightMode.lottie" srcDark="/LPdarkMode.lottie" />
  <p style="font-size:0.85rem;color:var(--vp-c-text-2);margin-top:0.5rem;">Pennysia AMM connects liquidity providers, traders, borrowers, and DEX aggregators through bucket pools — with yields auto-compounded in real time.</p>
</div>

## 4 Revenue Streams

One LP position captures yield from 4 sources, all auto-compounded in real-time:

| Source                 | How You Earn                                  |
| ---------------------- | --------------------------------------------- |
| **Taker fee**          | Swaps from direct traders and DEX aggregators |
| **Maker fee**          | Users withdrawing liquidity                   |
| **Liquidity Swap fee** | Users switching buckets                       |
| **Aave interest**      | Lending APY on supported tokens               |

For more details about fees, see [Fees](../../resources/fee.md).

## How it works

### Layer 1: Constant Function Market Maker

At its core, Pennysia maintains the constant product invariant (xy = k). This means **the worst-case risk for LPs is capped at the same level as Uniswap V2** — no leverage, no liquidation, and no amplified downside from directional bets.

### Layer 2: Perpetual Prediction Market

After adding liquidity, LPs allocate their stake into one or both of the **2 directional buckets**:

- **Bullish on X** — Earn taker fees when X is bought (price rises)
- **Bullish on Y** — Earn taker fees when Y is bought (price rises)

When a trade comes in, liquidity from **both buckets** fills the order through xy = k math. However, **only the bucket that correctly predicted the trade direction earns the taker fee**. Your directional bet affects **earnings only** — not principal risk. Wrong prediction = fewer fees, not loss of principal.

<img src="/LPM_light.svg" alt="liquidity prediction market - directional bucket mechanism showing how LPs choose bullish X or bullish Y buckets and earn trading fees based on trade direction" class="light-only">
<img src="/LPM_dark.svg" alt="liquidity prediction market - directional bucket mechanism showing how LPs choose bullish X or bullish Y buckets and earn trading fees based on trade direction" class="dark-only">

### Layer 3: Liquidity Economics

LPs adjust their bias by switching buckets — as easily as swapping a token. Each switch incurs a small fee (auto-compounded to the destination bucket). A small exit fee on withdrawals protects against **JIT (Just-In-Time) liquidity attacks**, where actors exploit atomic composability to earn fees without bearing price risk.

> _JIT attacks exploit atomic composability. See: [SoK: Automated Market Makers (2023)](https://eprint.iacr.org/2023/973.pdf)_

### Layer 4: Money Market Integration

All tokens supported by **Aave V4** automatically earn lending interest — regardless of bucket choice. Pennysia atomically withdraws from Aave for swaps, then re-deposits in one transaction. Lending yield flows to all LPs equally.

<img src="/aave_light.svg" alt="Aave integration - tokens automatically earn lending interest from Aave V4 while being used for swaps" class="light-only">
<img src="/aave_dark.svg" alt="Aave integration - tokens automatically earn lending interest from Aave V4 while being used for swaps" class="dark-only">

### Layer 5: Singleton Architecture

All markets live inside a single smart contract. This eliminates the per-pool deployment overhead of traditional AMMs and enables [multi-token flashloans](../../features/flash.md) across the entire protocol. For traders and LPs, it means lower gas costs on every interaction — swaps, liquidity adds, withdrawals, and bucket switches all benefit from the unified execution environment.

### Layer 6: DEX Aggregator Integration

Pennysia AMM is designed to be integrated into major DEX aggregators — so liquidity providers earn from volume that originates anywhere, not just from Pennysia's own interface. When aggregators route trades through Pennysia pools, LPs earn taker fees from that volume automatically. This maximizes capital utilization and ensures that liquidity deployed on Pennysia is working as hard as possible, 24/7.

## Comparison

Pennysia combines the simplicity and safety of Uniswap V2 with the capital efficiency of concentrated liquidity — without introducing leverage or active management. Here's how it stacks up:

| Feature                      | Uniswap V2 | Concentrated Liquidity | **Pennysia** |
| ---------------------------- | ---------- | ---------------------- | ------------ |
| Risk level                   | Low        | **High** (leveraged)   | **Low**      |
| Express market view          | No         | Partial                | **Yes**      |
| Principal loss on wrong bias | N/A        | Yes                    | **No**       |
| Auto-compounding             | Yes        | No                     | **Yes**      |
| Extra yield from lending     | No         | No                     | **Yes**      |

## Performance

Backtested over 12 months using real market data from CoinGecko, Pennysia consistently outperforms Uniswap V2 in both bear and bull scenarios.

**Case Study 1 (Bear):** S token price −90%, starting capital $10,000, Vol/TVL = 10.0

- Taker fee = 0.3%, LP Fee = ⅓ of taker fee, AAVE yield = 5%
- Date: Sept 9, 2024 – Sept 9, 2025

**Case Study 2 (Bull):** BNB token price +22.22%, starting capital $10,000, Vol/TVL = 5.0

- Taker fee = 0.5%, LP Fee = ⅓ of taker fee, AAVE yield = 5%
- Date: Dec 5, 2024 – Dec 5, 2025

![Pennysia AMM backtest results comparing Pennysia (directional and neutral), Uniswap V2, and HODL across bear and bull market scenarios. Pennysia delivers 2.81x–2.84x higher yield than Uniswap V2. Source: github.com/Pennysia/LPM-backtest-2024-2025](/Project%20Brief%20Deck.png)

These results represent **average-case returns**. Because directional taker fees function as a prediction market, LPs who are in the minority of the correct bucket earn disproportionately more — with no cap on upside. The fewer LPs that share your correct conviction, the larger your share of the fees.

_Source code: [github.com/Pennysia/LPM-backtest-2024-2025](https://github.com/Pennysia/LPM-backtest-2024-2025)_

## Risks

All DeFi protocols carry risk. Pennysia minimizes exposure through battle-tested invariants and external protocol safeguards:

| Risk             | What it is        | How it's handled                    |
| ---------------- | ----------------- | ----------------------------------- |
| Impermanent loss | Standard AMM risk | Same as Uniswap V2 (xy = k)         |
| Aave failure     | External protocol | Insurance fund + overcollateralized |
| Smart contract   | Code bugs         | Audited, battle-tested              |

## Notes

### > Is impermanent loss higher than a standard AMM?

No. Impermanent loss is identical to Uniswap V2. The pool maintains the same constant product invariant (xy = k), meaning your principal risk exposure is unchanged regardless of which bucket you choose. Your bucket choice only determines your **earning profile**, not your downside risk. The worst case is identical to providing liquidity on V2.

### > What do buckets actually affect?

Your bucket choice only affects **directional taker fees** — it does not impact your other yield sources. Think of it as a prediction market layered on top of the base AMM:

1. **Directional earning** — Earn taker fees when your prediction is correct
2. **Inter-LP market** — Generate liquidity swap fees from bucket movements, driving capital efficiency

All other revenue streams flow to you regardless of bucket choice.

### > What if I don't have a directional view?

Even with a 50/50 neutral stance and no market bias, Pennysia LPs are likely to earn more than Uniswap V2. The additional yield sources — maker fees, liquidity swap fees, and Aave lending interest — combined with higher capital utilization mean that neutral LPs still benefit from the improved design.
