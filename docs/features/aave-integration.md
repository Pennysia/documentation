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

When liquidity providers (LPs) deposit tokens into Pennysia, the protocol automatically checks whether one or both of those tokens are supported by [Aave](https://aave.com).

If supported, Pennysia **forwards the deposits to Aave**, enabling LPs to **earn yield from both platforms simultaneously**. This dual-yield mechanism maximizes passive income while maintaining full composability within DeFi.

During swaps, Pennysia temporarily withdraws the required liquidity from Aave, executes the trade, and re-deposits the updated reserves back into Aave — all in a single transaction, fully automated and gas-optimized.



## Why Money Market?

Our goal is to deliver **higher yields without higher risk**.

Unlike concentrated-liquidity AMMs that amplify exposure through leverage, Pennysia achieves **capital efficiency** by integrating with **money markets** — allowing idle reserves to earn lending interest safely and continuously.

This approach increases total protocol yield while keeping the **principal fully collateralized and accessible** for trading operations.



## Why Aave?

Aave is the **most established and battle-tested** money market protocol in DeFi, with a long history of security, transparency, and resilience — even through major Black Swan events.

It maintains one of the **largest on-chain insurance funds**, designed to mitigate unforeseen risks such as liquidation shortfalls or protocol incidents.

By integrating with Aave, Pennysia ensures that LPs’ assets enjoy **institutional-grade security** while remaining liquid and yield-generating.


## Rewards

LPs benefit from **dual earning streams** — accruing trading fees from the AMM layer and lending interest from Aave simultaneously.

All returns are **auto-compounded in real time**, allowing positions to grow continuously without manual reinvestment or additional gas costs.


## Risk

While Aave integration is designed with safety in mind, it introduces external protocol dependency. In the unlikely event of a systemic failure, smart contract exploit, or depegging of collateral assets within Aave, Pennysia’s deposited liquidity could be affected.

However, these risks are mitigated by Aave’s proven resilience, extensive audits, and robust risk management mechanisms — including overcollateralized loans, safety module reserves, and insurance coverage.

Operationally, Pennysia ensures that liquidity remains instantly retrievable for swaps and withdrawals, preventing disruptions in trading or LP redemption.