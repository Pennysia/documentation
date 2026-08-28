---
title: Exchange Integration
description: Connect an exchange or study the Pennysia webapp architecture.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Exchange Integration

Pennysia sends the same quote request to every connected exchange. The best rate wins. Integration is **free** — no listing fees. Pennysia runs the frontend, wallet flow, and UX. You provide a quote API and execution calldata.

[Contact us](../resources/contact.md) to start onboarding. See [Fees](../resources/fee.md) for how Pennysia earns.

## Requirements

| Item | Detail |
| --- | --- |
| **Quote API** | Sell/buy token, amount, chain → output, gas, calldata |
| **Calldata** | Settlement (or user for hard intents) is caller/receiver |
| **Same-chain** | SYNC routes settle on Ethereum in one tx |
| **API key** | Optional, for rate limits |

## Route types

#### SYNC (default)

Same-transaction swap through Settlement. Calldata must work when Settlement is `msg.sender` and buy tokens land on Settlement.

```
venue            = quote.tx.to
allowanceTarget  = quote.spender
callData         = quote.tx.data
value            = quote.tx.value
quotedReturn     = expected output
```

Reject: bridges, cross-chain hops, gasless relayer pulls, intent-only APIs.

#### Hard intents

CoW Protocol, UniswapX, Velora Delta. User signs off-chain; solver fills. Settlement not involved.

#### SODAX

Cross-chain intents. Settlement opens on Ethereum; fill is async on the hub chain. Contact Pennysia for onboarding.

## Quote response

```json
{
  "sellToken": "0x...",
  "buyToken": "0x...",
  "sellAmount": "1000000000000000000",
  "buyAmount": "3500000000",
  "gasEstimate": "150000",
  "tx": { "to": "0x...", "data": "0x...", "value": "0" },
  "spender": "0x..."
}
```

Normalized into `NormalizedQuote` via backend SDK adapters.

## Testing checklist

1. Quote output matches on-chain execution
2. Calldata works when Settlement calls the venue
3. Buy tokens arrive on Settlement, not the user
4. Spender matches approval target
5. Failed routes do not block fallback routes
6. Gas estimate is reasonable
7. API handles parallel fanout volume

## Onboarding

1. [Contact us](../resources/contact.md) with exchange name and API docs
2. Pennysia builds an adapter in `src/aggregators/`
3. Test on mainnet fork and staging
4. Exchange added to `LAUNCH_SOURCES` in backend SDK
5. Live in quote fanout and source list

Each exchange gets a canonical ID (e.g. `kyberswap`, `zerox`). Token support tracked in [@pennysia/token-list](https://github.com/Pennysia/token-list).

## SDKs

- [Backend SDK](./sdk-reference.md#backend-sdk) — implement `LiquidityAdapter`
- [Contracts SDK](./sdk-reference.md#contracts-sdk) — build Settlement routes
- [Settlement](./settlement.md#execution-flow) — on-chain execution

Questions: [dev@pennysia.com](mailto:dev@pennysia.com)

## Webapp architecture

Reference app: [webapp-interface](https://github.com/Pennysia/webapp-interface).

```
User → POST /api/quotes/fanout → rank quotes → rebuild route → lane dispatch → wallet sign → execute
```

| Lane | Routes |
| --- | --- |
| **Settlement SYNC** | DEX/aggregator via `executeSwap` |
| **SODAX** | Cross-chain intents |
| **Hard intents** | CoW, UniswapX, Velora Delta |

| Package | Role |
| --- | --- |
| `@pennysia/backend-sdk` | Fanout, ranking, source manifest |
| `@pennysia/contracts-sdk` | Settlement routes and execution |
| `@pennysia/token-list` | Token fallback |

**Policies:** Ethereum Mainnet only · Settlement address from contracts-sdk · Auto Fallback packs SYNC routes · API keys server-side only

Integrators implement `LiquidityAdapter` and register in the source manifest.

Related: [Developer Guide](./developer-guide.md) · [Swap Guide route types](../get-started/swap-guide.md#route-types)
