---
title: Swap Guide
description: How to swap tokens, configure settings, connect wallets, and fix common issues.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Swap Guide

Live on Ethereum Mainnet at [app.pennysia.com](https://app.pennysia.com). Connect your wallet first.

## Walkthrough

1. **Select tokens:** sell and buy
2. **Enter amount:** Pennysia fetches quotes from all exchanges
3. **Confirm:** review the quote, click **Swap**, approve if prompted, then sign

::: tip :book: TIP
If a route fails, enable **Auto Fallback** in settings or adjust your **WAP**.
:::

## Route types

The confirm modal shows which route you are getting.

### SYNC (default)

One Ethereum transaction. Settlement calls the winning exchange. **Auto Fallback** retries the next route if the first fails.

Examples: Uniswap, 0x, KyberSwap, Sushi, LI.FI (same-chain), De1.

### SODAX (cross-chain)

Opens a cross-chain intent. Fill is asynchronous: not instant, and not part of Auto Fallback.

### Hard intents (wallet-side)

CoW Protocol, UniswapX, Velora Delta. You sign an off-chain order; a solver fills it. Settlement is not the executor.

## Settings

Open the gear icon on the swap page.

| Setting | What it does |
| --- | --- |
| **WAP** | Minimum output. Worse execution reverts. |
| **Deadline** | Max wait before expiry. |
| **Gas strategy** | How aggressively to bid for gas. |
| **Auto Fallback** | Retry SYNC routes in one transaction. Recommended. |
| **Source toggles** | Exclude specific exchanges from quotes. |

## Wallets

Pennysia uses **WalletConnect**. MetaMask, Rabby, Coinbase Wallet, Rainbow, Ledger, and Safe all work.

**Requirements:** Ethereum Mainnet (chain ID 1), ETH for gas, modern browser.

1. Click **Connect Wallet**
2. Pick your wallet or scan the QR code
3. Approve in your wallet

Wrong network: switch to Ethereum Mainnet when prompted.

## Troubleshooting

### Swap reverted

Your tokens were not swapped. Enable **Auto Fallback**, adjust **WAP**, increase **deadline**, or reduce trade size.

### Quote changed

Review the updated quote. Adjust WAP if needed and confirm before it expires.

### Approval failed

Ensure you have ETH for gas. Wait for approval to confirm before swapping. Native ETH sells need no approval.

### Token not found

Search by name or paste the contract address. Use category tabs (**Stocks**, **Commodities**, and others) or the issuer filter when browsing tokenized equities. Some tokens are blocked for safety. See [Supported Tokens](../resources/tokens-and-liquidity.md#supported-tokens).

### SODAX pending

SODAX fills take longer than SYNC swaps. Contact support with your tx hash if it stalls.

### Hard intent failed

Confirm you signed the order and approved the correct spender. Try a SYNC route instead.

### Need more help

[Discord](https://discord.gg/G7rxGgZhXa) · [hello@pennysia.com](mailto:hello@pennysia.com) · [Feedback form](https://docs.google.com/forms/d/e/1FAIpQLScnudg5yaAFL1ZOz28co1CJ202a3k2ntr3LhLa-rCohBQIorg/viewform)

More: [Trade Features](../how-it-works/how-it-works.md#trade-features) · [Settlement](../protocol/settlement.md#execution-flow)
