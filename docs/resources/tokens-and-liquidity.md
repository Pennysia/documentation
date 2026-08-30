---
title: Tokens and Liquidity
description: Integrated exchanges and supported tokens on Pennysia.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Tokens and Liquidity

## Liquidity sources

**24 exchanges** are queried on every swap. The best rate is selected automatically. You do not choose a source.

<ExchangeLogos />

::: info :information_source: INFO
**De1:** OpenOcean has been updated to De1 in the Pennysia app.
:::

Disable sources in swap settings. Want another exchange? [Contact us](./contact.md).

## Supported tokens

**12,000+ tokens** on Ethereum via a curated mega list:

1. **Curated list:** hand-reviewed metadata
2. **Mega list:** merged from all exchanges, deduped by address

Maintained in [@pennysia/token-list](https://github.com/Pennysia/token-list).

Search by name, symbol, or contract address. Paste an address for newer tokens. Blocked/scam tokens are excluded.

| Why missing | Reason |
| --- | --- |
| Not on any source | No exchange lists it yet |
| Blocked | Flagged unsafe |
| Wrong network | Mainnet only |

Developers: each token records supported sources in a `sources` array. See the token-list repo.
