---
title: Deployment Address
description: List of our smart contract addresses across networks
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2, 3]
---

# Deployment Address

List of our smart contract addresses across networks

::: info :book: NOTE
The current state of development is on testnets. As we continue testing and improving and/or auditing the code, new deployments may occur at any time. Please check the addresses regularly.
:::

<div class="table-scroll">
  <table class="deployment-table">
    <thead>
      <tr>
        <th>Network</th>
        <th>Pool</th>
        <th>Router</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ethereum Sepolia <br>(11155111)</td>
        <td>
          <div class="address-container">
            <code>0xD7D781fB69Be7B1c3837f4093950D565335baCB2</code>
            <button class="copy-btn" @click="copyToClipboard('0xD7D781fB69Be7B1c3837f4093950D565335baCB2', 'Eth-Sepolia-Pool')" aria-label="Copy address" title="Copy address">
              <FontAwesomeIcon :icon="['far', 'copy']" />
            </button>
            <a class="external-link-btn" href="https://sepolia.etherscan.io/address/0xD7D781fB69Be7B1c3837f4093950D565335baCB2" target="_blank" rel="noopener noreferrer" aria-label="Open external link" title="Open external link">↗</a>
          </div>
        </td>
        <td>
          <div class="address-container">
            <code>0xCd9eda136B36BEF73df502063f4Bd804EF61E72b</code>
            <button class="copy-btn" @click="copyToClipboard('0xCd9eda136B36BEF73df502063f4Bd804EF61E72b', 'Eth-Sepolia-Router')" aria-label="Copy address" title="Copy address">
              <FontAwesomeIcon :icon="['far', 'copy']" />
            </button>
            <a class="external-link-btn" href="https://sepolia.etherscan.io/address/0xCd9eda136B36BEF73df502063f4Bd804EF61E72b" target="_blank" rel="noopener noreferrer" aria-label="Open external link" title="Open external link">↗</a>
          </div>
        </td>
      </tr>     
    </tbody>
  </table>
</div>

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
  min-width: 760px;
}

.deployment-table th:first-child,
.deployment-table td:first-child {
  width: 180px;
  min-width: 150px;
  max-width: 150px;
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
