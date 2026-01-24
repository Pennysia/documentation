---
title: Aave Integration
description: Integrate with money market to boost LP yield safely.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2,3]
---

# Aave Integration

When liquidity providers (LPs) deposit tokens into Pennysia, the protocol automatically checks whether one or both of those tokens are supported by [Aave](https://aave.com). If supported, Pennysia **forwards the deposits to Aave**, enabling LPs to **earn yield from both platforms simultaneously**. This dual-yield mechanism maximizes passive income while maintaining full composability within DeFi.
> During swaps, Pennysia atomically withdraws the required liquidity from Aave, fills the trade, and re-deposits the updated reserves back into Aave — all in a single transaction, fully automated and gas-optimized.


<img src="/aave_light.svg" alt="aave integration" class="light-only">
<img src="/aave_dark.svg" alt="aave integration" class="dark-only">


## Why Money Market?

Our goal is to deliver **higher yields without higher risk.** [See a post.](https://x.com/SetteeCh/status/2003017063460454508?s=20)

Unlike concentrated-liquidity AMMs that amplify exposure through leverage, Pennysia achieves extra **capital efficiency** by integrating with **money markets** — allowing idle reserves to earn lending interest safely and continuously. 

This approach increases total protocol yield while keeping the **principal fully collateralized and accessible** for trading operations, and it works seamlessly with LPM and it is executed automatically under the hood.



## Why Aave?

Aave is the **most established and battle-tested** money market protocol in DeFi, with a long history of security, transparency, and resilience — even through major Black Swan events.

It maintains one of the **largest on-chain insurance funds**, designed to mitigate unforeseen risks such as liquidation shortfalls or protocol incidents.

By integrating with Aave, Pennysia ensures that LPs’ assets enjoy **institutional-grade security** while remaining liquid and yield-generating.


## Rewards

LPs benefit from **dual earning streams** — accruing trading fees from the AMM layer through LPM and lending interest from Aave simultaneously.

All returns are **auto-compounded in real time**, allowing positions to grow continuously without manual reinvestment and additional gas costs.


## Risk

While Aave integration is designed with safety in mind, it introduces external protocol dependency. In the unlikely event of a systemic failure, smart contract exploit, or depegging of collateral assets within Aave, Pennysia’s deposited liquidity could be affected.

However, these risks are mitigated by Aave’s proven resilience, extensive audits, and robust risk management mechanisms — including overcollateralized loans, safety module reserves, and insurance coverage.

Operationally, Pennysia ensures that liquidity remains instantly retrievable for swaps and withdrawals, preventing disruptions in trading or LP redemption.