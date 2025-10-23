---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: "Pennysia - AMM that people love"
description: "The 1st low risk and high reward AMM where LPs earn from both sides of every trade. Features Liquidity Prediction Markets, uncollateralized flashloans, and manipulation-resistant oracle."
head:
  - - meta
    - property: og:title
      content: "Pennysia - AMM that people love"
  - - meta
    - property: og:description
      content: "The 1st low risk and high reward AMM where LPs earn from both sides of every trade. Features Liquidity Prediction Markets, uncollateralized flashloans, and manipulation-resistant oracle."
  - - meta
    - property: og:url
      content: "https://docs.pennysia.com"
  - - meta
    - name: twitter:title
      content: "Pennysia - AMM that people love"
  - - meta
    - name: twitter:description
      content: "The 1st low risk and high reward AMM where LPs earn from both sides of every trade. Features Liquidity Prediction Markets, uncollateralized flashloans, and manipulation-resistant oracle."

hero:
  # name: "All you can read. It's free"
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
    
---

