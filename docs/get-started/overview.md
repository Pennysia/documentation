---
title: Overview
description: The AMM that people love.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2,3]
---

# Overview

Pennysia is an Automated Market Maker (AMM) protocol designed to deliver low-risk, high-reward liquidity provisioning through a suite of novel mechanisms.


![overvoew_img](/overviewImg.png)


## Key Innovations

### 1.Liquidity Prediction Market (LPM)

Combines the Uniswap V2 (xy = k) AMM model with a prediction-market layer, enabling liquidity providers (LPs) to express market bias and earn higher returns while maintaining the same risk profile as Uniswap V2.
    
### 2.Weighted Dynamic Fees    

Market fees are determined collectively by LPs, weighted by each participant’s liquidity share to achieve fair pricing.
    
### 3.Aave Integration
    
Instead of storing tokens within the AMM, liquidity is delegated to Aave, allowing LPs to simultaneously earn yield from both Pennysia and Aave.
    
### 4.Cbrt-TWAP Oracle
    
A built-in, manipulation-resistant, real-time on-chain oracle providing accurate price feeds for every market.
    
### 5.Deployer Incentive
    
To support new project launches, we share up to 50% of protocol revenue, executed automatically and permissionlessly.


## Other Highlights
### 1.Auto-Compounding Rewards
    
All trading fees and yield earnings from Pennysia markets are **automatically compounded** back into each LP’s principal position in **real time**, maximizing capital growth without manual reinvestment or gas overhead.
    
### 2.Fungible LP Tokens
    
 Liquidity positions are represented as **ERC-6909 fungible tokens**, ensuring broad interoperability. These tokens can be easily integrated into other DeFi protocols to enable higher composability and utility.
    
### 3.Singleton Architecture
    
Pennysia employs a **singleton smart-contract architecture**, where all markets coexist within a single contract instance. This design minimizes deployment cost, improves gas efficiency for swaps and updates, and simplifies system-wide accounting.
    
### 4.Multi-Token Flashloans
    
With all token reserves unified under one contract, Pennysia introduces a **universal balance model** that supports **multi-token flashloans** within a single transaction. This enables advanced on-chain strategies such as multi-asset arbitrage, portfolio rebalancing, or complex composable DeFi operations—all in one atomic execution.
    
### 5.Native Token Support
    
Pennysia natively supports network’s native token, allowing projects and users to **create markets and trade directly with their native tokens**—no wrapping, no intermediaries.