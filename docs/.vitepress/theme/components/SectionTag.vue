<template>
  <p v-if="label" class="doc-section-tag">{{ label }}</p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

const route = useRoute()
const { theme } = useData()

function stripHtml(text: string) {
  return text.replace(/<[^>]*>/g, '').trim()
}

function normalizePath(path: string) {
  return path.replace(/\.html$/, '').replace(/\/$/, '') || '/'
}

function findSectionLabel(
  groups: DefaultTheme.SidebarItem[] | undefined,
  path: string,
): string {
  if (!groups?.length) return ''

  for (const group of groups) {
    const items = group.items || []
    const match = items.some((item) => {
      if (!item.link) return false
      const link = normalizePath(item.link)
      return path === link || path.endsWith(link)
    })
    if (match && group.text) return stripHtml(String(group.text))
    const nested = findSectionLabel(items, path)
    if (nested) return nested
  }
  return ''
}

const label = computed(() => {
  const path = normalizePath(route.path)
  const sidebar = theme.value.sidebar

  if (Array.isArray(sidebar)) {
    return findSectionLabel(sidebar as DefaultTheme.SidebarItem[], path)
  }

  if (sidebar && typeof sidebar === 'object') {
    for (const entries of Object.values(sidebar)) {
      const found = findSectionLabel(entries as DefaultTheme.SidebarItem[], path)
      if (found) return found
    }
  }

  return ''
})
</script>

<style scoped>
.doc-section-tag {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  line-height: 1.2;
  min-width: 0;
}
</style>
