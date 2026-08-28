---
layout: page
title: "Pennysia Documentation"
description: "Pennysia finds the best swap rate across 24 exchanges on Ethereum."
head:
  - - meta
    - property: og:title
      content: "Pennysia Documentation"
  - - meta
    - property: og:description
      content: "Pennysia finds the best swap rate across 24 exchanges on Ethereum."
  - - meta
    - name: twitter:title
      content: "Pennysia Documentation"
  - - meta
    - name: twitter:description
      content: "Pennysia finds the best swap rate across 24 exchanges on Ethereum."
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.location.replace('/get-started/overview')
  }
})
</script>
