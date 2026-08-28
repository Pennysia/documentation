---
title: Security
description: How Pennysia applies zero-trust, double-layer security on every exchange integration and swap.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Security

Pennysia applies **double-layer security** on every swap.

You get the **same security protection from each exchange** that you would when using that exchange's own frontend. On top of that, Pennysia adds its own layer — a standalone last line of defense that assumes **zero trust** in every integrated exchange.

| Layer | What you get |
| --- | --- |
| **Exchange** | The same security policy, contracts, and controls you would get on that venue's own site |
| **Pennysia** | Zero-trust review, unified approvals, and on-chain execution rules (always applied) |

## Zero trust on every exchange

Pennysia's security policy does not treat any exchange as trusted by default — whether it is established or brand new.

Every order is validated against Pennysia's own security and performance rules before it can execute. Routes that fail the gate are blocked or replaced, not run just because they had the best headline price.

## What Pennysia adds

### Unified token approval

On most swap apps, you approve each exchange separately. On Pennysia, you approve **Settlement once** for ERC-20 sells instead of handing open-ended access to every venue you might route through.

That reduces exposure to drains from untrusted exchanges or exploits in any single exchange's approval flow. Pennysia controls what gets executed, not open-ended third-party spenders.

### Atomic re-routing

If a route fails Pennysia's security or performance threshold during execution, it is cancelled and your order moves to the **next best option in the same transaction**. No second signature. No manual retry.

With **Auto Fallback** enabled, Settlement tries backup routes until one succeeds or all fail. You get a smoother swap flow without failed transactions and start-over retries. If every route fails, the transaction reverts and your tokens stay with you.

## Try new exchanges with confidence

Every exchange on Pennysia sits under the **same security umbrella**. You can try venues you have never used before without giving up the exchange's own protections or Pennysia's zero-trust layer on top.

That also helps the industry move faster: new exchanges and routing technology can reach users when Pennysia stands in front as the security layer. **Pennysia stays at the forefront for users** so you benefit from innovation without taking on venue risk alone.

## Open-source Settlement

Most swaps run through **Pennysia Settlement**, an on-chain router. The contract is open source, tested, and audited. Source code, tests, and [audit reports](https://github.com/Pennysia/settlement/tree/main/audits) are in the [Settlement repository](https://github.com/Pennysia/settlement).

Technical details: [Settlement](../protocol/settlement.md#security).

## Non-custodial

Pennysia does not hold your tokens. Funds stay in your wallet until a swap executes. Reverted transactions return your tokens.

## Report an issue

Email [dev@pennysia.com](mailto:dev@pennysia.com). See [Contact](../resources/contact.md).
