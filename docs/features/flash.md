---
title: Flashloan
description: You can borrow tokens without collateral.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2,3]
---

# Flashloan
Pennysia introduces a next-generation **multi-token flashloan system**, built directly into its **singleton architecture**. Unlike traditional flashloans that operate on isolated liquidity pools, Pennysia’s unified contract architecture allows **all tokens within the protocol** to be accessed from a **shared global balance sheet**. This enables complex, atomic multi-asset operations efficiently and gas-optimized.


## Key Features

### Multi-Token Flashloans
    
Borrow multiple tokens simultaneously within one atomic transaction. This enables advanced on-chain strategies such as **multi-pair arbitrage**, **portfolio rebalancing**, **collateral refinancing**, or **batch liquidations** — all executed seamlessly in one call.
    
### Universal Liquidity Access
    
Because all markets reside inside a **single smart contract**, Pennysia treats every token reserve as part of a unified liquidity system. This design removes the need for per-pair pool isolation, maximizing capital utilization and reducing redundant operations.
    
### Gas Efficiency
    
The singleton model eliminates repetitive state changes across multiple pools, resulting in **significantly lower gas costs** compared to legacy AMM-based flashloan designs.
    
### Security and Atomicity
    
All flashloan operations are **fully atomic** — borrowed assets must be returned within the same transaction. If repayment fails, the entire operation reverts automatically, ensuring zero risk to the protocol and its liquidity providers.

## Use Cases

- Cross-asset arbitrage across multiple Pennysia markets
- On-chain liquidations and debt refinancing
- Multi-token swaps or portfolio hedging
- Capital-efficient composable DeFi strategies


## Fee Structure

A **flat 0.1% fee** is applied to all flashloan transactions, collected as a protocol fee and contributes directly to Pennysia’s sustainability and ecosystem development.

## Access and Developer Support

Flashloan is a developer-focused feature, publicly accessible through a smart contract.

::: info :information_source:  INFO
Developer documentation is launching soon, providing full implementation examples, code references, and integration guides.
:::