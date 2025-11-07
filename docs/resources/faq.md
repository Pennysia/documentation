---
title: FAQ
description: frequently asked questions about Pennysia protocol.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2,3]
---

# Frequently Asked Questions


## General Questions

**What is Pennysia?**

> Pennysia is a low-risk, high-reward AMM (Automated Market Maker) that combines Uniswap V2 mechanics with prediction market features, allowing liquidity providers to earn from both sides of every trade while expressing market bias.

**When was Pennysia created?**

> Pennysia began at the Sonic S-Tier Hackathon in August 2025, won 1st place, and was officially published on October 2, 2025.

**What makes Pennysia different from other AMMs?**

> Pennysia offers 5 key innovations: Liquidity Prediction Markets (LPM), Weighted Dynamic Fees, Aave Integration for dual yield, Cube-Root TWAP Oracle, and Deployer Incentive Program.



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

**How are trading fees structured?**

> Each directional bucket sets its own fee rate. 80% of collected swap fees go to LPs (auto-compounded), and 20% is retained as protocol fee.

**What is the liquidity fee?**

> A small fee charged when withdrawing liquidity, with 80% distributed to remaining LPs in the same bucket and 20% as protocol fee.

**How much is the flashloan fee?**

> Flashloans have a fixed 0.1% protocol fee.

**Are rewards automatically compounded?**
> Yes, all trading fees and yield earnings are automatically compounded back into your principal position in real time without gas overhead.



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

**How do swaps work on Pennysia?**

> Pennysia supports both single-hop (direct A↔B) and multi-hop (A→X→B) swaps, automatically finding optimal routing based on liquidity depth and price.

**What is price impact?**

> The difference between spot price before your trade and execution price, caused by how much your trade shifts the pool's reserves.

**What is slippage?**

> The gap between the quoted price when you submit a transaction and the actual execution price, including price impact plus any interim changes from other transactions.

**What protection parameters are available?**

> Slippage tolerance settings and transaction deadlines to protect against unfavorable price movements.



## Deployer Incentive Program

**What is the Deployer Incentive Program?**

> New projects receive up to 50% of protocol fees generated by their deployed markets, distributed automatically and permissionlessly.

**How does the revenue sharing work?**

> Initially, deployers can receive the full 50% if they own 100% of the pool. As more LPs join, their share adjusts proportionally to their ownership percentage.

**What is the Fee Switch?**

> A built-in mechanism that can temporarily pause the Deployer Incentive Program and redirect fees to the protocol treasury if needed for development, operations, or security.



## Getting Started

**How do I start trading on Pennysia?**

> Connect your wallet to the Pennysia interface and swap tokens directly. Detailed trading guides are coming soon.

**How do I provide liquidity?**

> Deposit equal values of two tokens, choose your directional allocation between buckets, and start earning fees. Detailed LP guides are coming soon.

**How do I deploy a new market?**

> Use the pool deployment interface to create new trading pairs. Deployers automatically become eligible for the revenue-sharing program.



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