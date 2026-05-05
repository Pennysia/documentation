---
title: FAQ
description: Frequently asked questions about Pennysia protocol.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Frequently Asked Questions

## General Questions

**What is Pennysia?**

> Pennysia is a DeFi protocol with two products: **Exchange** — a best-rate swap engine powered by the Aggregator of Aggregators (AoA) Protocol — and **AMM** — a passive liquidity AMM that lets LPs earn from directional market views without leverage or active management.

**When was Pennysia created?**

> Pennysia began at the Sonic S-Tier Hackathon in August 2025, won 1st place, and has been in development since.

**What are Pennysia's two products?**

> **Exchange (AoA Protocol)** — Queries all major DEX aggregators simultaneously and executes the best available route on every swap. No aggregator selection needed. **AMM** — A passive liquidity AMM with directional earning, 4 revenue streams, and Aave integration. No active management required.

## Exchange (AoA Protocol)

**How does the Exchange work?**

> Pennysia Exchange is an Aggregator of Aggregators (AoA). When you swap, it broadcasts your request to all major DEX aggregators simultaneously, compares every quote, applies a final optimization pass, and executes the best path — automatically, on every trade.

**Why is this better than using a single aggregator?**

> No single aggregator consistently delivers the best rate across all trade sizes and token pairs. The aggregator that wins for a 1,000 ETH swap may rank last for a 100 ETH swap at the same moment. AoA makes all of them compete on your behalf — you always get the best result available at that moment.

**Does Pennysia Exchange charge a fee?**

> No. The AoA Protocol currently charges no fee. You pay only the underlying aggregator's execution cost (embedded in the quoted rate) and gas. A protocol fee will be introduced in the future and will be lower than major exchanges and aggregators.

**Can I try the Exchange before mainnet launch?**

> Yes. A live prototype is available at [aoa.pennysia.com](https://aoa.pennysia.com) on Ethereum Mainnet, where you can see real-time rate comparisons across aggregators.

## Liquidity Prediction Market (LPM)

**What is the Liquidity Prediction Market (LPM)?**

> LPM allows liquidity providers to express market bias by allocating liquidity between two directional buckets (bullish on Token X or Token Y) while maintaining the same risk profile as Uniswap V2.

**How does LPM work?**

> LPs deposit liquidity like Uniswap V2, then choose how to allocate between "bullish on X" and "bullish on Y" buckets. When traders buy the token you're bullish on, you earn trading fees. When they trade against your prediction, you don't earn fees from that trade.

**What happens if my prediction is wrong?**

> You simply earn fewer fees but never lose your principal capital. There's no liquidation or additional impermanent loss beyond standard AMM risks.

**Can I change my allocation after depositing?**

> Yes, you can switch between buckets anytime with no penalties, lockups, or added risk.

**What if I'm uncertain about market direction?**

> You can allocate 50/50 to both buckets to maintain a neutral stance and earn steady baseline fees from both directions.

## Fees and Rewards

**Does the Exchange charge a swap fee?**

> No. The AoA Protocol is currently free to use. You pay the aggregator's embedded execution cost and gas only — no Pennysia markup.

**How are AMM trading fees structured?**

> Each directional bucket sets its own taker fee rate (0.1%–0.5%, default 0.3%). 80% goes to LPs (auto-compounded), 20% to the protocol treasury.

**What is the maker fee?**

> A small fee charged when withdrawing liquidity from the AMM. Same rate structure as the taker fee — 80% to LPs, 20% to treasury.

**What is the liquidity swap fee?**

> A fee charged when switching between directional buckets. Same distribution as other AMM fees.

**How much is the flashloan fee?**

> Flashloans have a fixed 0.1% protocol fee.

**Are AMM rewards automatically compounded?**

> Yes, all trading fees and Aave lending interest are automatically compounded back into your position in real time without manual intervention.

## Aave Integration

**How does Aave integration work?**

> Instead of storing tokens in the AMM, liquidity is automatically delegated to Aave, allowing LPs to earn dual yields from both Pennysia trading fees and Aave lending interest.

**Why Aave specifically?**

> Aave is the most established and battle-tested money market protocol in DeFi with institutional-grade security, large insurance funds, and proven resilience through major market events.

**What are the risks of Aave integration?**

> While designed for safety, it introduces external protocol dependency. Risks are mitigated by Aave's proven track record, extensive audits, and robust risk management mechanisms.

**Can I still withdraw my liquidity instantly?**

> Yes, liquidity remains instantly retrievable for swaps and withdrawals without disrupting trading operations.

## Oracle and Pricing

**What is the Cube-Root TWAP Oracle?**

> An innovative oracle that combines arithmetic and geometric means using cube-root transformation to provide manipulation-resistant pricing that's both responsive to market changes and stable against manipulation attempts.

**How does it prevent manipulation?**

> By applying cube-root transformation to price observations before time-weighted averaging, it balances the precision of arithmetic means with the stability of geometric means.

## Technical Features

**What is the singleton architecture?**

> All markets exist within a single smart contract, minimizing deployment costs, improving gas efficiency, and enabling advanced features like multi-token flashloans.

**What are fungible LP tokens?**

> LP positions are represented as [ERC-6909](https://eips.ethereum.org/EIPS/eip-6909) fungible tokens, ensuring broad interoperability with other DeFi protocols for higher composability.

**Does Pennysia support native tokens?**

> Yes, Pennysia natively supports network native tokens, allowing direct trading without wrapping or intermediaries.

**What are multi-token flashloans?**

> The ability to borrow multiple tokens simultaneously within one atomic transaction, enabling advanced strategies like multi-asset arbitrage and portfolio rebalancing.

## Trading

**How do swaps work on Pennysia Exchange?**

> Pennysia Exchange queries all major DEX aggregators simultaneously, selects the best route, and executes it. You don't pick an aggregator — the protocol does it automatically on every swap.

**What is price impact?**

> The difference between the spot price before your trade and the execution price, caused by how much your trade shifts liquidity reserves.

**What is slippage?**

> The gap between the quoted price when you submit a transaction and the actual execution price — includes price impact plus any price changes from transactions that settle before yours.

**What protection parameters are available?**

> Slippage tolerance (maximum acceptable deviation before the transaction reverts) and a deadline (cancels the transaction if not confirmed in time, preventing execution at stale prices).

## Deployer Incentive Program

**What is the Deployer Incentive Program?**

> New projects receive up to 50% of protocol fees generated by their deployed markets, distributed automatically and permissionlessly.

**How does the revenue sharing work?**

> Initially, deployers can receive the full 50% if they own 100% of the pool. As more LPs join, their share adjusts proportionally to their ownership percentage.

**What is the Fee Switch?**

> A built-in mechanism that can temporarily pause the Deployer Incentive Program and redirect fees to the protocol treasury if needed for development, operations, or security.

## Getting Started

**How do I start trading on Pennysia?**

> Connect your wallet, select tokens, enter an amount, and confirm. The Exchange handles routing automatically. See the [Trade](../features/trade.md) page for details, or try the live prototype at [aoa.pennysia.com](https://aoa.pennysia.com).

**How do I provide liquidity?**

> Deposit a token pair, choose your directional bucket (bullish on X, bullish on Y, or 50/50), and confirm. See the [Liquidity](../features/liquidity.md) page or follow the [step-by-step guide](../guides/provide-liquidity.md).

**How do I deploy a new market?**

> Use the pool deployment interface to create new trading pairs. Deployers are automatically eligible for the Deployer Incentive Program — up to 50% of protocol fees.

## Risks and Safety

**What are the main risks?**

> Standard AMM risks include impermanent loss and smart contract risk. LPM adds no additional principal risk - wrong predictions only result in fewer fees, not capital loss.

**Is Pennysia audited?**

> The protocol follows security best practices. Specific audit information will be available in the security documentation.

**What happens in extreme market conditions?**

> The protocol is built on battle-tested Uniswap V2 mechanics with infinite price range coverage, eliminating liquidity depletion risks for volatile tokens.

## Support and Community

**Where can I get help?**

> The quickest way is to join the official [Discord](https://discord.com/invite/G7rxGgZhXa), or submit feedback through the official form.

**Where can I find official social links?**

> Visit [Official Links](/resources/links) for all official websites, social media, and community channels.

**Is there developer documentation?**

> Developer documentation for flashloans and integrations is launching soon with full implementation examples and integration guides.
