---
title: Deployment Address
description: List of our smart contract addresses across networks
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: [2,3]
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
        <th>Testnets</th>
        <th>Chain ID</th>
        <th>Market</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ethereum Sepolia</td>
        <td>11155111</td>
        <td>
          <code>0xe3F36b644ebA9562c735762642f5932DB6Cf462d</code>
          <button class="copy-btn" @click="copyToClipboard('0xe3F36b644ebA9562c735762642f5932DB6Cf462d', 'Eth-Sepolia')" aria-label="Copy address" title="Copy address">
            <FontAwesomeIcon :icon="['far', 'copy']" />
          </button>
          <a class="external-link-btn" href="https://sepolia.etherscan.io/address/0xe3F36b644ebA9562c735762642f5932DB6Cf462d" target="_blank" rel="noopener noreferrer" aria-label="Open external link" title="Open external link">↗</a>
          <span v-if="copiedKey === 'Eth-Sepolia'" class="copy-status">Copied!</span>
        </td>
      </tr>
      <tr>
        <td>Sonic Testnet</td>
        <td>14601</td>
        <td>
          <code>0xe3F36b644ebA9562c735762642f5932DB6Cf462d</code>
          <button class="copy-btn" @click="copyToClipboard('0xe3F36b644ebA9562c735762642f5932DB6Cf462d', 'Sonic-Testnet')" aria-label="Copy address" title="Copy address">
            <FontAwesomeIcon :icon="['far', 'copy']" />
          </button>
          <a class="external-link-btn" href="https://testnet.sonicscan.org/address/0xe3F36b644ebA9562c735762642f5932DB6Cf462d" target="_blank" rel="noopener noreferrer" aria-label="Open external link" title="Open external link">↗</a>
          <span v-if="copiedKey === 'Sonic-Testnet'" class="copy-status">Copied!</span>
        </td>
      </tr>
    </tbody>
  </table>
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
  table-layout: fixed;
  min-width: 760px;
}

@media (max-width: 768px) {
  .deployment-table {
    table-layout: auto;
  }
}

.deployment-table th:nth-child(1),
.deployment-table td:nth-child(1) {
  width: 25%;
  white-space: nowrap;
}

.deployment-table th:nth-child(2),
.deployment-table td:nth-child(2) {
  width: 15%;
  white-space: nowrap;
}

.deployment-table th:nth-child(3),
.deployment-table td:nth-child(3) {
  width: 60%;
  white-space: nowrap;
}

.deployment-table td:nth-child(3) code {
  white-space: nowrap;
}

.copy-btn {
  margin-left: 0.4rem;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
  line-height: 1;
}

.external-link-btn {
  margin-left: 0.35rem;
  color: inherit;
  text-decoration: none;
  font-size: 0.9rem;
  line-height: 1;
}

.copy-status {
  margin-left: 0.35rem;
  color: #16a34a;
  font-size: 0.8rem;
  font-weight: 600;
}
</style>