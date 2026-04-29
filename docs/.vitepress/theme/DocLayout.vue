<template>
  <Layout>
    <template #doc-before>
      <div class="copy-page-container">
        <CopyPageButton />
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import CopyPageButton from './components/CopyPageButton.vue'

const { Layout } = DefaultTheme
</script>

<style scoped>
.copy-page-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: -0.5rem;
}
</style>
