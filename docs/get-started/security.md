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

Pennysia is **exchange-agnostic** and assumes **zero trust** in every source, whether the venue is new or established. You still receive the **same security protections from each exchange** that apply on that exchange's own frontend. Pennysia adds an independent layer on top.

| Layer | What you get |
| --- | --- |
| **Exchange** | The security policy, contracts, and controls of that venue |
| **Pennysia** | Zero-trust review, unified approvals, and on-chain execution rules (always applied) |

## Zero trust on every exchange

Pennysia does not treat any exchange as trusted by default.

Every order is validated against Pennysia's security and performance rules before execution. Routes that fail validation are blocked or replaced. Headline price alone does not authorize a route.

## What Pennysia adds

### Unified token approval

On most swap apps, each exchange requires a separate approval. On Pennysia, you approve **Settlement once** for ERC-20 sells instead of granting open-ended access to every venue in the route set.

This reduces exposure to malicious or compromised spenders across individual exchanges. Pennysia controls execution through Settlement rather than relying on per-venue approvals.

### Atomic re-routing

If a venue **overquotes**, reverts, or fails Pennysia's security or performance checks, the route is cancelled and the order moves to the **next best option in the same transaction**. No additional signature is required.

With **Auto Fallback** enabled, Settlement tries backup routes until one succeeds or all fail. If every route fails, the transaction reverts and your tokens remain in your wallet.

## Accessing new exchanges

Every exchange on Pennysia operates under the **same security model**. You can use venues you have not used before while retaining both the exchange's own protections and Pennysia's zero-trust layer.

This also lowers the barrier for new exchanges to reach users: they integrate into the marketplace while Pennysia remains the security and execution layer in front of the trader.

## Open-source Settlement

Most swaps run through **Pennysia Settlement**, an on-chain router. The contract is open source, tested, and audited. Source code, tests, and [audit reports](https://github.com/Pennysia/settlement/tree/main/audits) are available in the [Settlement repository](https://github.com/Pennysia/settlement).

Technical details: [Settlement](../protocol/settlement.md#security).

## Non-custodial

Pennysia does not hold your tokens. Funds remain in your wallet until a swap executes. Reverted transactions return your tokens.

## Report an issue

Email [dev@pennysia.com](mailto:dev@pennysia.com). See [Contact](../resources/contact.md).
