---
title: Fees
description: Exchange fees, gas, and how Pennysia earns on swaps.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Fees

All fees are shown before you confirm. No hidden charges after you sign.

## What you pay

### Exchange fees

Set by the **winning exchange**, not Pennysia. Charged from your trade tokens or as native ETH, depending on the route. Already included in the quoted output.

### Network gas

Paid in ETH to publish the transaction. Amount varies by network conditions and route.

### Protocol fee (Settlement)

Pennysia charges a **flat $0.50 USD** protocol fee on Settlement swaps, converted to native ETH at the live ETH/USD spot and added as extra `msg.value`. The Review screen’s **Minimum received** already subtracts this fee when you buy native ETH.

**Example:** At $2,500 ETH → about **0.0002 ETH**. Omitted on balance-tight max native ETH sells.

### Other costs

- **Reverted swaps** still cost gas
- **ERC-20 approvals** are a separate one-time gas transaction

## How Pennysia earns

No subscription or listing fee for traders.

### Surplus fee (SYNC routes)

When execution beats your quote, Pennysia keeps the improvement: **100% of surplus, capped at 10% of output**. Zero fee if execution matches or is below the quote.

**Example:** Quoted 1,000 USDC, executed 1,030 USDC → surplus is 30 USDC. You receive the 1,000 you were quoted.

Does not apply to SODAX intent opens.

### Hard-intent partner fee

CoW Protocol, UniswapX, and Velora Delta routes take a partner fee (default 50 bps) paid to the same [Settlement fee recipient](../protocol/deployments.md).

InstaSwap and RocketX CEX deposit-address routes do not use Settlement or hard-intent partner hooks; fees follow each provider’s own breakdown (affiliate / partner fee + referrer attribution).

### Protocol fee

Flat **$0.50** in native ETH on Settlement swaps. See [Protocol fee (Settlement)](#protocol-fee-settlement).

## For exchanges

Integration is **free**. No listing fees. When flow routes to your exchange, you earn what you would on your own frontend. Pennysia revenue comes from the trader side.

On-chain surplus logic: [Settlement](../protocol/settlement.md#execution-flow).
