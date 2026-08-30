---
title: Deployments
description: Pennysia Settlement and related contract addresses on Ethereum Mainnet.
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Deployments

Pennysia is live on **Ethereum Mainnet**. Most swaps run through Pennysia Settlement. See [Settlement](./settlement.md) for how it works.

Addresses are also in [`@pennysia/contracts-sdk`](https://github.com/Pennysia/sdk/tree/main/packages/contracts-sdk/src/constants.ts).

## Ethereum Mainnet (chain ID 1)

<div class="table-scroll">
  <table class="deployment-table">
    <thead>
      <tr>
        <th>Contract</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>PennysiaSettlement</td>
        <td>
          <div class="address-container">
            <code>0x3Aad97E5a91b8e43b7Dc830aCEb004307678795E</code>
            <button class="copy-btn" @click="copyToClipboard('0x3Aad97E5a91b8e43b7Dc830aCEb004307678795E', 'settlement')" aria-label="Copy address" title="Copy address">
              <FontAwesomeIcon :icon="['far', 'copy']" />
            </button>
            <a class="external-link-btn" href="https://etherscan.io/address/0x3Aad97E5a91b8e43b7Dc830aCEb004307678795E" target="_blank" rel="noopener noreferrer" aria-label="Open Etherscan" title="Open Etherscan">↗</a>
          </div>
        </td>
      </tr>
      <tr>
        <td>WETH</td>
        <td>
          <div class="address-container">
            <code>0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</code>
            <button class="copy-btn" @click="copyToClipboard('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 'weth')" aria-label="Copy address" title="Copy address">
              <FontAwesomeIcon :icon="['far', 'copy']" />
            </button>
            <a class="external-link-btn" href="https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" target="_blank" rel="noopener noreferrer" aria-label="Open Etherscan" title="Open Etherscan">↗</a>
          </div>
        </td>
      </tr>
      <tr>
        <td>Permit2</td>
        <td>
          <div class="address-container">
            <code>0x000000000022D473030F116dDEE9F6B43aC78BA3</code>
            <button class="copy-btn" @click="copyToClipboard('0x000000000022D473030F116dDEE9F6B43aC78BA3', 'permit2')" aria-label="Copy address" title="Copy address">
              <FontAwesomeIcon :icon="['far', 'copy']" />
            </button>
            <a class="external-link-btn" href="https://etherscan.io/address/0x000000000022D473030F116dDEE9F6B43aC78BA3" target="_blank" rel="noopener noreferrer" aria-label="Open Etherscan" title="Open Etherscan">↗</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## SODAX integration (SYNC and SODAX routes)

Settlement references these contracts for SODAX-backed routes.

### Ethereum spoke

<div class="table-scroll">
  <table class="deployment-table">
    <thead>
      <tr>
        <th>Contract</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>SODAX AssetManager</td>
        <td>
          <div class="address-container">
            <code>0x39E77f86C1B1f3fbAb362A82b49D2E86C09659B4</code>
            <button class="copy-btn" @click="copyToClipboard('0x39E77f86C1B1f3fbAb362A82b49D2E86C09659B4', 'sodax-am')" aria-label="Copy address" title="Copy address">
              <FontAwesomeIcon :icon="['far', 'copy']" />
            </button>
            <a class="external-link-btn" href="https://etherscan.io/address/0x39E77f86C1B1f3fbAb362A82b49D2E86C09659B4" target="_blank" rel="noopener noreferrer" aria-label="Open Etherscan" title="Open Etherscan">↗</a>
          </div>
        </td>
      </tr>
      <tr>
        <td>SODAX Connection</td>
        <td>
          <div class="address-container">
            <code>0x4555aC13D7338D9E671584C1D118c06B2a3C88eD</code>
            <button class="copy-btn" @click="copyToClipboard('0x4555aC13D7338D9E671584C1D118c06B2a3C88eD', 'sodax-connection')" aria-label="Copy address" title="Copy address">
              <FontAwesomeIcon :icon="['far', 'copy']" />
            </button>
            <a class="external-link-btn" href="https://etherscan.io/address/0x4555aC13D7338D9E671584C1D118c06B2a3C88eD" target="_blank" rel="noopener noreferrer" aria-label="Open Etherscan" title="Open Etherscan">↗</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Sonic hub (chain ID 146)

<div class="table-scroll">
  <table class="deployment-table">
    <thead>
      <tr>
        <th>Contract</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>SODAX Intents</td>
        <td>
          <div class="address-container">
            <code>0x6382D6ccD780758C5e8A6123c33ee8F4472F96ef</code>
            <button class="copy-btn" @click="copyToClipboard('0x6382D6ccD780758C5e8A6123c33ee8F4472F96ef', 'sodax-intents')" aria-label="Copy address" title="Copy address">
              <FontAwesomeIcon :icon="['far', 'copy']" />
            </button>
            <a class="external-link-btn" href="https://sonicscan.org/address/0x6382D6ccD780758C5e8A6123c33ee8F4472F96ef" target="_blank" rel="noopener noreferrer" aria-label="Open Sonicscan" title="Open Sonicscan">↗</a>
          </div>
        </td>
      </tr>
      <tr>
        <td>SODAX Hub AssetManager</td>
        <td>
          <div class="address-container">
            <code>0x60c5681bD1DB4e50735c4cA3386005A4BA4937C0</code>
            <button class="copy-btn" @click="copyToClipboard('0x60c5681bD1DB4e50735c4cA3386005A4BA4937C0', 'sodax-hub-am')" aria-label="Copy address" title="Copy address">
              <FontAwesomeIcon :icon="['far', 'copy']" />
            </button>
            <a class="external-link-btn" href="https://sonicscan.org/address/0x60c5681bD1DB4e50735c4cA3386005A4BA4937C0" target="_blank" rel="noopener noreferrer" aria-label="Open Sonicscan" title="Open Sonicscan">↗</a>
          </div>
        </td>
      </tr>
      <tr>
        <td>SODAX WalletFactory</td>
        <td>
          <div class="address-container">
            <code>0xA0ed3047D358648F2C0583B415CffCA571FDB544</code>
            <button class="copy-btn" @click="copyToClipboard('0xA0ed3047D358648F2C0583B415CffCA571FDB544', 'sodax-wallet-factory')" aria-label="Copy address" title="Copy address">
              <FontAwesomeIcon :icon="['far', 'copy']" />
            </button>
            <a class="external-link-btn" href="https://sonicscan.org/address/0xA0ed3047D358648F2C0583B415CffCA571FDB544" target="_blank" rel="noopener noreferrer" aria-label="Open Sonicscan" title="Open Sonicscan">↗</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## For integrators

- `getSettlementDeployment(1)` from `@pennysia/contracts-sdk`
- Settlement is a router, not a pool
- BUSL-1.1 until 2030-08-16, then MIT. See [Settlement](./settlement.md)

<div v-if="copiedKey" class="copy-notification">
  <span>✓ Copied to clipboard!</span>
</div>

<script setup>
import { ref } from "vue";

const copiedKey = ref("");
let copyResetTimer;

const copyToClipboard = async (text, key) => {
  try {
    await navigator.clipboard.writeText(text);
    copiedKey.value = key;
    clearTimeout(copyResetTimer);
    copyResetTimer = setTimeout(() => {
      copiedKey.value = "";
    }, 1500);
  } catch (error) {
    console.error("Failed to copy address:", error);
  }
};
</script>

<style scoped>
.table-scroll {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}

.deployment-table {
  width: 100%;
  table-layout: auto;
  min-width: 640px;
}

.deployment-table th:first-child,
.deployment-table td:first-child {
  width: 220px;
  min-width: 180px;
}

@media (max-width: 768px) {
  .deployment-table {
    table-layout: auto;
  }
}

.address-container {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.copy-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
  line-height: 1;
}

.external-link-btn {
  color: inherit;
  text-decoration: none;
  font-size: 0.9rem;
  line-height: 1;
}

.copy-notification {
  position: fixed;
  top: 4rem;
  right: 2rem;
  background: #ecffefff;
  border: 1px solid #4dcd84ff;
  color: black;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 40;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
