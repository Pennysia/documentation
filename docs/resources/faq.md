---
title: FAQ
description: Frequently asked questions about swapping on Pennysia.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Frequently Asked Questions

## General

**What is Pennysia?**

> An open marketplace for crypto swaps on Ethereum — like OpenRouter, but for exchanges. Pennysia queries **24+ leading exchanges** in parallel and executes the best quote for you.

**How is Pennysia different from other swap apps?**

> Most swap sites route through one aggregator. Pennysia is an open marketplace: every connected exchange competes on price, and the best rate wins after gas and fees. You also get Pennysia's zero-trust security layer and a simple wallet flow. See [Overview](../get-started/overview.md).

**Where can I use Pennysia?**

> [app.pennysia.com](https://app.pennysia.com) on Ethereum Mainnet. Official links: [Contact](./contact.md#official-links).

**Do I need an account?**

> No. Connect your wallet and swap. Your tokens stay in your wallet until the trade executes.

## Swapping

**How does a swap work?**

> Enter tokens and amount. Pennysia queries all exchanges, ranks quotes, and executes the best route when you confirm.

**How many exchanges are connected?**

> **24+** with access to thousands of liquidity sources and **12,000+ tokens**. See [Tokens and Liquidity](./tokens-and-liquidity.md#liquidity-sources).

**Do I need to pick an exchange?**

> No. Pennysia picks for you. Disable specific sources in settings if you want.

**What fees does Pennysia charge?**

> **Surplus fee** when execution beats your quote (capped at 10% of output), plus a possible **small gas markup** in native ETH. Exchange fees are set by the winning venue and shown in your quote. See [Fees](./fee.md).

**What is auto-fallback?**

> If a route fails Pennysia's security or performance checks, the next best route is tried in the **same transaction**. No manual retry. If all routes fail, your tokens are returned.

**What is Worst Acceptable Price (WAP)?**

> Your floor price. Execution worse than your WAP reverts. See [How It Works](../how-it-works/how-it-works.md#trade-features).

**Can I swap native ETH?**

> Yes. No need to wrap ETH yourself.

**What wallets are supported?**

> Any WalletConnect-compatible wallet (MetaMask, Rabby, Coinbase Wallet, and others).

## Price and slippage

**What is price impact?**

> How much your trade moves the pool price. Shown before you confirm.

**What is slippage?**

> The gap between quoted and fill price. WAP protects you from excessive slippage.

**What if the price moves before my swap confirms?**

> With Auto Fallback on, Pennysia tries the next route. If the price breaches your WAP, the transaction reverts and your tokens are returned.

## Security

**Is Pennysia safe?**

> Pennysia is non-custodial. You get the **same security from each exchange** as on its own frontend, plus Pennysia's **zero-trust layer** on top. See [Security](../get-started/security.md).

**What is unified token approval?**

> You approve **Settlement once** for ERC-20 sells instead of each exchange separately. That limits exposure to untrusted venues or per-exchange approval exploits.

**What is atomic re-routing?**

> A failed route is cancelled and your order moves to the next best option in the **same transaction** — no second signature or manual retry.

**Is Pennysia audited?**

> The Settlement contract is open source, tested, and audited. See [Security](../get-started/security.md) for reports.

**What are the main risks?**

> Standard DeFi risks: smart contract bugs, network congestion, and price movement. Pennysia adds WAP, deadline checks, auto-fallback, and its security gate.

## Support

**Where can I get help?**

> [Discord](https://discord.com/invite/G7rxGgZhXa), [hello@pennysia.com](mailto:hello@pennysia.com), or the [feedback form](https://docs.google.com/forms/d/e/1FAIpQLScnudg5yaAFL1ZOz28co1CJ202a3k2ntr3LhLa-rCohBQIorg/viewform). See [Contact](./contact.md).

**Is there developer documentation?**

> Yes. Start at the [Developer Guide](../protocol/developer-guide.md).
