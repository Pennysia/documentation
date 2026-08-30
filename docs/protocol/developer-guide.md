---
title: Developer Guide
description: Build on Pennysia with the contracts and backend SDKs.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Developer Guide

Two TypeScript SDKs for swap integrations:

| Package | Purpose |
| --- | --- |
| [`@pennysia/contracts-sdk`](./sdk-reference.md#contracts-sdk) | Settlement ABI, routes, approvals, execution |
| [`@pennysia/backend-sdk`](./sdk-reference.md#backend-sdk) | Quote types, fanout, ranking, source manifest |

Framework-neutral: no React, Next.js, or wallet code included. The Pennysia webapp composes both SDKs with its own adapters and UI.

## Architecture

```
Your app
  ├── @pennysia/backend-sdk  →  quote fanout, ranking
  └── @pennysia/contracts-sdk  →  Settlement calldata, execution
```

Backend SDK does not depend on contracts SDK. Your app wires them together.

**Your app owns:** wallets, HTTP routes, API keys, aggregator adapters, UI, env config.

## Repositories

| Repo | Contents |
| --- | --- |
| [settlement](https://github.com/Pennysia/settlement) | Solidity contracts |
| [sdk](https://github.com/Pennysia/sdk) | Both SDK packages |
| [webapp-interface](https://github.com/Pennysia/webapp-interface) | Reference consumer app |
| [token-list](https://github.com/Pennysia/token-list) | Curated token list |

## Quick start

**Quote:**

```ts
import { runQuoteFanout, type LiquidityAdapter } from "@pennysia/backend-sdk";

const result = await runQuoteFanout({
  quoteParams: { sellToken, buyToken, sellAmount, chainId: 1 },
  adapters: myAdapters,
  deadlineMs: 8_000,
});
```

**Execute:**

```ts
import { buildSyncRoute, buildExecuteSwapRequest } from "@pennysia/contracts-sdk";
import { createSettlementExecutor } from "@pennysia/contracts-sdk/execution";

const route = buildSyncRoute({ /* venue, calldata, quotedReturn, ... */ });
const request = buildExecuteSwapRequest({ routes: [route], sellToken, buyToken, amountIn, minTotalReturn, deadline });
const executor = createSettlementExecutor({ /* viem clients */ });
await executor.executeSwap(request);
```

## Install

Packages publish to **GitHub Packages** (private).

| Package | Version |
| --- | --- |
| `@pennysia/contracts-sdk` | 0.4.2 |
| `@pennysia/backend-sdk` | 0.1.9 |

**Prerequisites:** Node.js 20+, npm 10+, GitHub PAT with `read:packages`.

`.npmrc`:

```ini
@pennysia:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

```bash
npm install @pennysia/contracts-sdk@0.4.2 @pennysia/backend-sdk@0.1.9
```

Pin exact versions. In CI, set `NPM_TOKEN` from `GITHUB_TOKEN` or a PAT.

## Next steps

- [Contracts SDK](./sdk-reference.md#contracts-sdk)
- [Backend SDK](./sdk-reference.md#backend-sdk)
- [Exchange Integration](./exchange-integration.md)

Support: [dev@pennysia.com](mailto:dev@pennysia.com) · [Discord](https://discord.gg/G7rxGgZhXa)
