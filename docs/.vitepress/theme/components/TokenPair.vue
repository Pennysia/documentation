<template>
  <span class="token-pair">
    <span class="token-pair-icons">
      <img :src="token1" :alt="symbol1" class="token-icon token-icon-back" />
      <img :src="token2" :alt="symbol2" class="token-icon token-icon-front" />
    </span>
    <span class="token-pair-label">{{ symbol1 }}/{{ symbol2 }}</span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  token1: string;
  symbol1: string;
  token2: string;
  symbol2: string;
}>();
</script>

<style scoped>
.token-pair {
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  vertical-align: middle;
}

.token-pair-icons {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 2em;
  height: 1.25em;
}

.token-icon {
  width: 1.25em;
  height: 1.25em;
  border-radius: 50%;
  position: absolute;
}

.token-icon-back {
  left: 0;
  z-index: 1;
}

.token-icon-front {
  left: 0.8em;
  z-index: 2;
  outline: 2px solid var(--vp-c-bg);
}

.token-pair-label {
  font-weight: 400;
  line-height: 1;
}
</style>
