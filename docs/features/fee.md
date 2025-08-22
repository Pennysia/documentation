---
title: Fees
description: A small fee is applied to sustain the operation of each of our services.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: 6
---

# Fees
A small fee is applied to sustain the operation of each of our services.
::: warning :warning: WARNING
The information on this page is not finalized and is subject to change at any time. This version is provided to give readers a glimpse of the proposed fee structure.
:::

## Overview
There are 3 sources of revenue stream that powers the ecosystem of the protocol.
![feeCollection](/feeCollection.png)

## Swap
A 0.3% fee is applied to each token swap, charged in the form of the output token.
- 80% of the collected fees are distributed among liquidity providers, proportional to their share of the liquidity reserves. These fees are automatically compounded to increase the value of their liquidity tokens.
- 20% of the collected fees are retained as a protocol fee.

## Liquidity
A 0.3% fee is charged upon liquidity withdrawal, deducted from the liquidity position output.
- 80% of the collected fees are distributed among liquidity providers in the corresponding direction, and are automatically compounded to increase the value of their liquidity tokens.
For example, if a user withdraws from a short-TokenA position in the TokenA/TokenB pool, the 0.3% fee is charged in short-TokenA and distributed proportionally to all existing short-TokenA liquidity positions.
- 20% of the collected fees are retained as a protocol fee.

## Flashloan
A 0.3% fee is applied to each flashloan call.
- 100% of the collected fees are retained as a protocol fee.

## Protocol Fee
The protocol fee is further distributed to two destinations in a 50/50 manner: Pennysia’s Decentralized Reserve and the Development Fund.
- 50% to the [Decentralized Reserve](./tokenomic): This reserve is used to back PESIA, Pennysia's native token.
- 50% to the Development Fund: This fund supports the maintenance and growth of the Pennysia protocol and its related ecosystems, including team compensation, third-party services, business partnerships, marketing, R&D, and more.




