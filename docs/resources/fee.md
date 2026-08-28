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

Paid in ETH to publish the transaction. Pennysia may add a **small extra native ETH** above the network estimate (gas markup).

**Example:** ~$0.50 network gas → ~$0.60 total. Varies by network conditions and route.

### Other costs

- **Reverted swaps** still cost gas
- **ERC-20 approvals** are a separate one-time gas transaction

## How Pennysia earns

No subscription or listing fee for traders.

### Surplus fee (SYNC routes)

When execution beats your quote, Pennysia keeps the improvement — **100% of surplus, capped at 10% of output**. Zero fee if execution matches or is below the quote.

**Example:** Quoted 1,000 USDC, executed 1,030 USDC → surplus is 30 USDC. You receive the 1,000 you were quoted.

Does not apply to SODAX intent opens.

### Gas markup

Small portion of native ETH above network gas. See [Network gas](#network-gas).

## For exchanges

Integration is **free**. No listing fees. When flow routes to your exchange, you earn what you would on your own frontend. Pennysia revenue comes from the trader side.

On-chain surplus logic: [Settlement](../protocol/settlement.md#execution-flow).
