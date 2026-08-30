---
title: Overview
description: One interface for the world's liquidity. Best execution across aggregators, RFQs, intents, and decentralized markets.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Overview

**One interface for the world's liquidity.**

Pennysia unifies liquidity across aggregators, RFQs, intents, and decentralized markets to find the **best execution** for every trade. It is a hub that connects exchanges and liquidity platforms, on-chain and off-chain, so different venues can compete through one interface under a shared security model.

**24+ leading exchanges** are connected today. Enter a trade, review the quote, and confirm. Pennysia selects the source and executes the route for you.

<ExchangeLogos />

## Key features

### Best rate

Every swap compares liquidity across **all connected venues**. Quotes are ranked by net output after gas and fees, so the best executable rate wins rather than the best headline number.

- **12,000+ tokens** on the curated list
- **Gas-aware ranking:** high gas cost can lower an otherwise strong quote

[How It Works](../how-it-works/how-it-works.md) · [Tokens and Liquidity](../resources/tokens-and-liquidity.md)

### Double-layered security

You retain the **same protections offered by each exchange** on its own frontend. Pennysia adds a second layer that assumes **zero trust** in every source.

This keeps Pennysia **exchange-agnostic**:

- Approve tokens with **Settlement once**, not with every venue
- Access new exchanges under the same security model, whether the venue is new or established
- Every order passes Pennysia's security gate before execution

[Security](./security.md)

### Lower barrier for new exchanges

Pennysia reduces the cost for new exchanges to compete and reach traders. Venues integrate into one marketplace instead of building distribution independently. That structure supports broad exchange participation.

### Atomic auto-fallback

If a venue **overquotes** or **reverts**, Pennysia can **auto-fallback** to the next best exchange **in the same transaction**. No additional signature is required and no manual retry is needed.

If every route fails, the transaction reverts and your tokens remain in your wallet.

### Familiar swap experience

The app follows a standard swap flow: connect a wallet, select tokens, and confirm. Behind the scenes, Pennysia queries many markets in parallel.

1. Enter tokens and amount
2. Review the best quote
3. Approve if prompted, then sign
4. Settlement executes the swap

**Worst Acceptable Price (WAP)** sets a minimum acceptable output. Execution below that floor reverts.

[Swap Guide](./swap-guide.md)

## Chain support

<div style="display:flex;align-items:center;gap:8px;margin-top:1.25rem;">
  <img src="/ethereum-eth.svg" alt="Ethereum" width="20" height="20" style="flex-shrink:0;display:block;" />
  <span><strong>Ethereum</strong> Mainnet only. Swap at <a href="https://app.pennysia.com">app.pennysia.com</a>.</span>
</div>

## Glossary

**Auto-fallback:** Attempts the next best route in the same transaction when the first fails due to overquote, revert, or a security check.

**WAP:** Minimum output you accept. Worse execution reverts.

**Double-layer security:** Exchange-level protections plus Pennysia's zero-trust layer on every order.

**Security gate:** Validation applied to every route before execution, regardless of which exchange produced the quote.

**Surplus fee:** Pennysia retains quote improvement above the quoted rate, capped at 10% of output. No surplus fee if execution matches or is below the quote.

**Exchange fee:** Set by the winning exchange and shown in your quote (tokens or native ETH).

**Gas markup:** Additional native ETH Pennysia may include above the network gas estimate when applicable.

**Settlement:** On-chain router that executes most swaps. [Details](../protocol/settlement.md).

**SYNC route:** Same-transaction swap through a DEX or aggregator.

**SODAX route:** Cross-chain intent; fill completes asynchronously on the hub chain.
