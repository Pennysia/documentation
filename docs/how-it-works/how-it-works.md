---
title: How It Works
description: How Pennysia finds the best rate, protects your swap, and connects exchanges.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# How It Works

## For traders

No single exchange wins every trade. Rankings change by size, pair, and timing.

![100 ETH to USDC swap comparison across 6 DEX aggregators: KyberSwap ranks 1st, CowSwap 2nd, Velora 3rd, Matcha(0x) 4th, Uniswap 5th, 1inch 6th](/ETH100_USDC.png)

![1000 ETH to USDC swap comparison across 6 DEX aggregators: Velora ranks 1st, CowSwap 2nd, Matcha(0x) 3rd, 1inch 4th, KyberSwap 5th, Uniswap 6th](/ETH1K_USDC.png)

Pennysia sends your swap to **24 exchanges at once** and picks the best quote after gas and fees.

<div style="display:flex;flex-direction:column;align-items:center;">
  <LottiePlayer srcLight="/SwapLightMode.lottie" srcDark="/SwapDarkMode.lottie" :aspectRatio="450/600" maxWidth="650px"/>
  <p style="font-size:0.85rem;color:var(--vp-c-text-2);margin-top:0.5rem;">One request, every exchange, best result wins.</p>
</div>

### Steps

1. **Broadcast** — same request to all connected exchanges
2. **Compare** — rank by net output after gas and fees
3. **Execute** — you sign; Settlement runs the winning route on-chain

Some routes use CoW Protocol, SODAX, or other paths. The app shows the type before you confirm.

| | Single exchange | Pennysia |
| --- | --- | --- |
| Quotes | One venue | 24 in parallel |
| Failed routes | Manual retry | Auto-fallback (when enabled) |
| Your effort | Compare platforms | Enter swap and confirm |

Swap at [app.pennysia.com](https://app.pennysia.com) or read the [Swap Guide](../get-started/swap-guide.md).

## Trade features

### Auto-fallback

Retries the next best SYNC route in the **same transaction** if the first fails. Enable in swap settings.

### Worst Acceptable Price (WAP)

Floor price for your swap. Execution worse than your WAP reverts. Set in swap settings (gear icon).

### Deadline

Max wait time before the transaction expires. Useful during congestion.

### Price impact and slippage

**Price impact** is how much your trade moves the pool price. **Slippage** is the gap between quote and fill. Pennysia shows impact before you confirm. WAP protects against excessive slippage.

### Gas-aware routing

Quotes with high gas may rank lower even if the headline output looks better.

### Source toggles

Disable individual exchanges in settings. Disabled sources are skipped.

24 exchanges, 12,000+ tokens. Full list: [Tokens and Liquidity](../resources/tokens-and-liquidity.md#liquidity-sources).

## For exchanges

Pennysia is a swap marketplace. Every trade sends the same quote request to all connected venues. The best rate wins. Integration is free.

Requirements, route types, and onboarding: [Exchange Integration](../protocol/exchange-integration.md).
