---
title: SDK Reference
description: "Contracts and backend SDK reference for Pennysia integrators."
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# SDK Reference

## Contracts SDK

`@pennysia/contracts-sdk` is the TypeScript boundary between your app and Pennysia Settlement.

**Version:** 0.4.2  
**Chain:** Ethereum Mainnet (chain ID 1)

### What it provides

- Canonical `PennysiaSettlement` ABI (synced from the Settlement repo)
- Deployed addresses (`pennysiaAddresses`)
- Typed route builders for SYNC and SODAX
- Calldata encoders for `executeSwap` and SODAX cancel
- ERC-20 approval request builders
- Framework-neutral execution service (inject your own viem clients)
- SODAX open/cancel encoding helpers
- Surplus fee constants (`MAX_FEE_PPM`, `computeSurplusFee`)

### Installation

```bash
npm install @pennysia/contracts-sdk@0.4.2
```

### Main exports

```ts
import {
  pennysiaSettlementAbi,
  pennysiaAddresses,
  getSettlementDeployment,
  buildSyncRoute,
  buildSodaxRoute,
  buildExecuteSwapRequest,
  buildCancelAndRecoverSodaxRequest,
  buildOpenSodaxPayload,
  encodeExecuteSwapCalldata,
  ROUTE_KIND_SYNC,
  ROUTE_KIND_SODAX,
  MAX_FEE_PPM,
  computeSurplusFee,
} from "@pennysia/contracts-sdk";
```

Execution helpers are a separate import:

```ts
import {
  createSettlementExecutor,
  ensureErc20Allowance,
  buildErc20ApproveRequest,
} from "@pennysia/contracts-sdk/execution";
```

### Settlement address

```ts
pennysiaAddresses.ethereum.settlement
// 0x3Aad97E5a91b8e43b7Dc830aCEb004307678795E
```

### Building a SYNC route

A SYNC route wraps aggregator calldata for Settlement:

```ts
const route = buildSyncRoute({
  spendAs: sellToken,       // or WETH for ETH sells
  quotedReturn: quoteAmount,
  value: 0n,                // native value for the venue call
  venue: quote.to,          // contract to call
  allowanceTarget: quote.spender,
  approvalMode: ROUTE_DIRECT_ALLOWANCE,
  callData: quote.data,
});
```

Map from your quote:

| Route field | Quote field |
| --- | --- |
| `venue` | `tx.to` |
| `allowanceTarget` | `spender` |
| `callData` | `tx.data` |
| `value` | `tx.value` |
| `quotedReturn` | expected output amount |

Settlement must be the receiver/taker in the calldata.

### Executing a swap

The execution module enforces this order:

1. Validate routes and calldata
2. Check ERC-20 allowance (spender = Settlement; skip for native input)
3. Reset allowance to zero if the token requires it (e.g. USDT)
4. Submit maximum allowance to Settlement
5. Simulate `executeSwap`
6. Submit `executeSwap`
7. Wait for receipt and verify success

You inject viem-compatible read, write, simulate, and receipt functions. The SDK never creates a wallet or reads environment variables.

```ts
const executor = createSettlementExecutor({
  readAllowance: (args) => publicClient.readContract(args),
  writeApproval: (args) => walletClient.writeContract(args),
  simulateExecuteSwap: (args) => publicClient.simulateContract(args),
  writeExecuteSwap: (args) => walletClient.writeContract(args),
  waitForReceipt: (hash) => publicClient.waitForTransactionReceipt({ hash }),
});

await executor.executeSwap({
  routes: [route1, route2],  // ordered fallback
  sellToken,
  buyToken,
  amountIn,
  minTotalReturn,
  deadline,
});
```

### SODAX helpers

For cross-chain intents:

```ts
import {
  buildSodaxRoute,
  buildOpenSodaxPayload,
  encodeCancelAndRecoverSendMessage,
  computeIntentDigest,
} from "@pennysia/contracts-sdk";
```

SODAX routes use `ROUTE_KIND_SODAX`. Open calldata is built with `buildOpenSodaxPayload`. Cancel encoding uses `encodeCancelAndRecoverSendMessage`.

### Fees

```ts
import { computeSurplusFee, MAX_FEE_PPM } from "@pennysia/contracts-sdk";

// grossOutput and quotedReturn are bigint
const fee = computeSurplusFee(grossOutput, quotedReturn);
// MAX_FEE_PPM = 10_000 → 10% cap on gross
```

### Syncing contract changes

When Settlement Solidity changes:

1. Build the [Settlement repository](https://github.com/Pennysia/settlement) with Foundry
2. Run the sync script in the SDK repo
3. Run `npm run check:generated` and tests
4. Publish a new contracts-sdk version

See the [SDK repository guide](https://github.com/Pennysia/sdk/blob/main/docs/SDK_REPOSITORY_GUIDE.md) for the full workflow.

### What this SDK does not do

- Create providers or wallets
- Read environment variables
- Select quote sources
- Handle HTTP or API routes
- Own UI state

Those belong in your application layer.

## Backend SDK

`@pennysia/backend-sdk` provides framework-neutral quote orchestration and exchange domain types.

**Version:** 0.1.9

This is **not** an HTTP client. It does not call Pennysia API endpoints directly. You implement `LiquidityAdapter` for each exchange and pass them to the fanout engine.

### What it provides

- Quote, route, and execution-capability types
- `LiquidityAdapter` interface and adapter registry
- Canonical source identities (`LAUNCH_SOURCES`)
- Bounded quote fanout with deadlines
- Median consensus and high-deviation rejection
- Quote ranking by net output
- Settlement compatibility helpers
- Native token and quote-freshness primitives
- Hard-intent planning helpers (CoW, Velora Delta, UniswapX)

### Installation

```bash
npm install @pennysia/backend-sdk@0.1.9
```

### Core usage

```ts
import {
  runQuoteFanout,
  rankQuotes,
  type LiquidityAdapter,
  type QuoteParams,
} from "@pennysia/backend-sdk";
```

#### Implement an adapter

Each exchange implements `LiquidityAdapter`:

```ts
const myAdapter: LiquidityAdapter = {
  id: "my-exchange",
  async quote(params: QuoteParams) {
    // Call your exchange API
    // Return a NormalizedQuote or null
  },
};
```

#### Run fanout

```ts
const result = await runQuoteFanout({
  quoteParams: {
    sellToken: "0x...",
    buyToken: "0x...",
    sellAmount: 1_000_000n,
    chainId: 1,
  },
  adapters: [uniswapAdapter, zeroxAdapter, /* ... */],
  deadlineMs: 8_000,
});

// result.quotes — all quotes received before deadline
// result.errors — per-adapter failures
```

#### Rank quotes

```ts
import { rankQuotes } from "@pennysia/backend-sdk";

const ranked = rankQuotes(result.quotes);
// Best quote first, net output after gas
```

### Source manifest

`LAUNCH_SOURCES` defines every integrated exchange:

```ts
import {
  LAUNCH_SOURCES,
  normalizeSourceId,
  getLaunchSource,
} from "@pennysia/backend-sdk";
```

Each source has an ID, display name, capabilities, and enablement flags. The Pennysia web app uses the same manifest.

Current source IDs include: `uniswap`, `uniswapx`, `zerox`, `cowswap`, `velora`, `velora-delta`, `bebop`, `kyberswap`, `openocean`, `rango`, `dodo`, `portals`, `lifi`, `squid`, `enso`, `nordstern`, `liquidmesh`, `okx_dex`, `bitget_swap`, `rubic`, `sushi`, `sodax`, `fabric`, and others.

### Enablement helpers

```ts
import {
  isQuoteFanoutEnabled,
  getQuoteDisableReason,
  isLaunchIntentBlocked,
} from "@pennysia/backend-sdk";
```

These check whether a source is live for quoting or blocked at launch. The SDK never reads environment variables. You pass ops flags as options.

### Consensus

```ts
import { validateQuoteConsensus } from "@pennysia/backend-sdk";

const check = validateQuoteConsensus(quotes, { maxDeviationBps: 500 });
// Rejects outlier quotes that deviate too far from the median
```

### Settlement compatibility

```ts
import {
  resolveSettlementRoutes,
  isSettlementCompatible,
} from "@pennysia/backend-sdk";
```

These helpers determine whether a quote can be wrapped as a Settlement SYNC route and build route inputs from resolved quote data.

### Hard intents

CoW Protocol, Velora Delta, and UniswapX are **wallet-side** routes. The backend SDK provides planning helpers but does not submit transactions. Settlement's `executeSwap` does not handle these.

### What this SDK does not do

- HTTP routes or response serialization
- Wallet discovery, signing, or provider transport
- Environment variable loading or API keys
- Smart contract ABI or transaction submission (use contracts-sdk)
- Concrete aggregator implementations (you provide adapters)

### Relationship to contracts-sdk

| Concern | Backend SDK | Contracts SDK |
| --- | --- | --- |
| Quote fetching | Yes (via your adapters) | No |
| Quote ranking | Yes | No |
| Route building | Types and helpers | Full calldata builders |
| On-chain execution | No | Yes |
| ABI and addresses | No | Yes |

Your app composes both: backend-sdk for quotes, contracts-sdk for execution.
