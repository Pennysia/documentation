---
title: Overview
description: The unified marketplace for all crypto exchanges worldwide. Find the best rates for your trades now.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Overview

Pennysia aims to be the **open marketplace** that brings crypto exchanges together on one platform — like OpenRouter, but for crypto swaps.

We have integrated **24+ of the world's leading exchanges**. You enter a trade, review the quote, and confirm. Pennysia picks the winning exchange for you.

## Best rate swaps

Every swap queries **24+ leading exchanges in parallel** — the deepest liquidity network in the industry. Pennysia ranks quotes by what you actually receive after gas and fees, so the best rate wins, not just the best headline number.

- **12,000+ tokens** on the curated list
- **Gas-aware ranking** — high gas can drop an otherwise good quote
- **Auto-fallback** — failed routes retry in the same transaction

[How It Works](../how-it-works/how-it-works.md) · [Tokens and Liquidity](../resources/tokens-and-liquidity.md)

## Superior security

You get the **same protection from each exchange** that you would on its own frontend. Pennysia adds a **zero-trust layer** on top — every order passes Pennysia's security gate before it executes.

- **Unified token approval** — approve Settlement once, not every exchange
- **Atomic re-routing** — bad routes are replaced in the same transaction, no manual retry
- **Open-source Settlement** — audited contract, public source code

[Security](./security.md)

## Seamless, simple UX

Swap like any app you already use. Connect your wallet, pick tokens, confirm. No need to compare exchanges yourself or learn a new workflow.

1. Enter tokens and amount
2. Pennysia fetches the best quote
3. Sign in your wallet
4. Done

**Worst Acceptable Price (WAP)** lets you set a floor so bad fills revert. If every route fails, the transaction reverts and your tokens stay with you.

[Swap Guide](./swap-guide.md)

## Chain support

<div style="display:flex;align-items:center;gap:8px;margin-top:1.25rem;">
  <img src="/ethereum-eth.svg" alt="Ethereum" width="20" height="20" style="flex-shrink:0;display:block;" />
  <span><strong>Ethereum</strong> Mainnet only. Swap at <a href="https://app.pennysia.com">app.pennysia.com</a>.</span>
</div>

## Glossary

**Auto-fallback:** Tries the next best route in the same transaction when the first fails.

**WAP:** Minimum output you accept. Worse execution reverts.

**Double-layer security:** Exchange protections plus Pennysia's zero-trust last layer on every order.

**Security gate:** Pennysia validates every route before execution, regardless of which exchange won the quote.

**Surplus fee:** Pennysia keeps quote improvement above your rate, capped at 10% of output. Zero if execution matches or is below the quote.

**Exchange fee:** Set by the winning exchange, shown in your quote (tokens or native ETH).

**Gas markup:** Small extra native ETH Pennysia may charge above network gas.

**Settlement:** On-chain router that executes most swaps. [Details](../protocol/settlement.md).

**SYNC route:** Same-transaction swap through a DEX or aggregator.

**SODAX route:** Cross-chain intent; fill happens asynchronously on the hub chain.
