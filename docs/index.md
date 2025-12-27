---
# Redirect to overview page - homepage temporarily disabled
layout: page
title: "Pennysia Documentation"
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.location.href = '/get-started/overview'
  }
})
</script>

<div style="text-align: center; padding: 4rem 2rem;">
  <h1>Redirecting to Overview...</h1>
  <p>If you are not redirected automatically, <a href="/get-started/overview">click here</a>.</p>
</div>

<!-- 
HOMEPAGE CONTENT - SAVED FOR FUTURE USE

layout: home
title: "Pennysia - AMM that people love"
description: "The 1st low risk and high reward AMM where LPs earn from both sides of every trade. Features Liquidity Prediction Markets, Money Market Integration, Weighted Dynamic Fees and Manipulation-Resistant Oracle."
head:
  - - meta
    - property: og:title
      content: "Pennysia - AMM that people love"
  - - meta
    - property: og:description
      content: "The 1st low risk and high reward AMM where LPs earn from both sides of every trade. Features Liquidity Prediction Markets, Money Market Integration, Weighted Dynamic Fees and Manipulation-Resistant Oracle."
  - - meta
    - property: og:url
      content: "https://docs.pennysia.com"
  - - meta
    - name: twitter:title
      content: "Pennysia - AMM that people love"
  - - meta
    - name: twitter:description
      content: "The 1st low risk and high reward AMM where LPs earn from both sides of every trade. Features Liquidity Prediction Markets, Money Market Integration, Weighted Dynamic Fees and Manipulation-Resistant Oracle."
hero:
  text: "It's all you may read."
  image:
    src: /readTheDocRainbow.avif
    alt: Pennysia AMM Protocol
  tagline: "Complete documentation for features, guides, and resources."
  
  actions:
    - theme: brand
      text: Get Started ->
      link: /get-started/overview
    - theme: alt
      text: Resources
      link: /resources/links

features:
  - title: Liquidity Prediction Market
    details: |
      <img src="/h1.svg" alt="lpm" style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; margin: 12px 0;">
      
      Turn volatility into profit with directional LPing. Express market bias while earning fees from both sides.
    link: /features/lpm
  - title: Money Market Integration
    details: |
      <img src="/rc1.svg" alt="Earn with Money Market" style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; margin: 4px 0;">
      
      A new way to capital efficiency. Boost yield safely with the largest money market in DeFi.
    link: /features/aave-integration
  - title: Weighted Dynamic Fees
    details: |
      <img src="/rc2.svg" alt="Voting-based dynamic fee" style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; margin: 12px 0;">
      
      Fair pricing based on weighted averaging approach, contributed by all liquidity providers.
    link: /features/fee
  - title: Cube-Root TWAP Oracle
    details: |
      <img src="/rc3.svg" alt="cbrtTwap Oracle" style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; margin: 12px 0;">
      
      Manipulation-resistant pricing that combines arithmetic precision with geometric stability.
    link: /features/oracle
-->

