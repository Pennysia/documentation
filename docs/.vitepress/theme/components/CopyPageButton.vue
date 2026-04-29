<template>
  <div class="copy-page-wrapper" ref="wrapperRef">
    <button class="copy-page-btn" @click="copyPage">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
      <span>{{ copied ? 'Copied!' : 'Copy page' }}</span>
    </button>
    <button class="copy-page-chevron" @click.stop="toggleDropdown" :class="{ open: showDropdown }">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>

    <Transition name="dropdown">
      <div v-if="showDropdown" class="copy-page-dropdown">
        <button class="dropdown-item" @click="copyPage">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
          <div>
            <div class="dropdown-title">Copy page</div>
            <div class="dropdown-desc">Copy page as Markdown for LLMs</div>
          </div>
        </button>

        <button class="dropdown-item" @click="viewAsMarkdown">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <div>
            <div class="dropdown-title">View as Markdown <span class="ext-arrow">↗</span></div>
            <div class="dropdown-desc">View this page as plain text</div>
          </div>
        </button>

        <button class="dropdown-item" @click="openInService('chatgpt')">
          <img src="/icons/chatgpt.svg" width="16" height="16" alt="ChatGPT" onerror="this.style.display='none'" />
          <div>
            <div class="dropdown-title">Open in ChatGPT <span class="ext-arrow">↗</span></div>
            <div class="dropdown-desc">Ask questions about this page</div>
          </div>
        </button>

        <button class="dropdown-item" @click="openInService('claude')">
          <img src="/icons/claude.svg" width="16" height="16" alt="Claude" onerror="this.style.display='none'" />
          <div>
            <div class="dropdown-title">Open in Claude <span class="ext-arrow">↗</span></div>
            <div class="dropdown-desc">Ask questions about this page</div>
          </div>
        </button>

        <button class="dropdown-item" @click="openInService('perplexity')">
          <img src="/icons/perplexity.svg" width="16" height="16" alt="Perplexity"
            onerror="this.style.display='none'" />
          <div>
            <div class="dropdown-title">Open in Perplexity <span class="ext-arrow">↗</span></div>
            <div class="dropdown-desc">Ask questions about this page</div>
          </div>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vitepress'

const showDropdown = ref(false)
const copied = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)
const route = useRoute()

let copyTimer: ReturnType<typeof setTimeout>

function getPageMarkdown(): string {
  const content = document.querySelector('.vp-doc') as HTMLElement | null
  if (!content) return ''

  const title = document.querySelector('.vp-doc h1')?.textContent?.trim() || ''
  const body = content.innerText || content.textContent || ''

  return `# ${title}\n\n${body}`
}

function getPageUrl(): string {
  return window.location.href
}

async function copyPage() {
  try {
    const markdown = getPageMarkdown()
    await navigator.clipboard.writeText(markdown)
    copied.value = true
    showDropdown.value = false
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy page:', err)
  }
}

function viewAsMarkdown() {
  const routePath = route.path.replace(/\.html$/, '').replace(/\/$/, '') || '/index'
  const mdPath = `/md${routePath}.md`
  window.open(mdPath, '_blank')
  showDropdown.value = false
}

function openInService(service: string) {
  const url = getPageUrl()
  const text = encodeURIComponent(`Read this documentation page and help me understand it:\n\n${url}`)

  const urls: Record<string, string> = {
    chatgpt: `https://chat.openai.com/?q=${text}`,
    claude: `https://claude.ai/new?q=${text}`,
    perplexity: `https://www.perplexity.ai/search?q=${text}`,
  }

  if (urls[service]) {
    window.open(urls[service], '_blank')
  }
  showDropdown.value = false
}

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

function handleClickOutside(e: MouseEvent) {
  if (wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  clearTimeout(copyTimer)
})
</script>

<style scoped>
.copy-page-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: transparent;
  transition: border-color 0.2s;
}


.copy-page-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: none;
  border-radius: 20px 0 0 20px;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;
  font-family: var(--vp-font-family-base);
  outline: none;
}

.copy-page-btn:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-mute);
}

.copy-page-chevron {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border: none;
  border-left: 1px solid var(--vp-c-divider);
  border-radius: 0 20px 20px 0;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.2s;
  outline: none;
}

.copy-page-chevron:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-mute);
  border-radius: 0 20px 20px 0;
}

.copy-page-chevron.open svg {
  transform: rotate(180deg);
}

.copy-page-chevron svg {
  transition: transform 0.2s;
}

.copy-page-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 280px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 100;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: background 0.15s;
  text-align: left;
  font-family: var(--vp-font-family-base);
}

.dropdown-item:hover {
  background: rgba(128, 128, 128, 0.15);
  border-radius: 10px;
}

.dropdown-item img,
.dropdown-item svg {
  flex-shrink: 0;
  opacity: 0.7;
}

:deep(.dark) .dropdown-item img,
.dark .dropdown-item img {
  filter: invert(1);
}

.dropdown-title {
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.4;
}

.dropdown-desc {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  line-height: 1.4;
}

.ext-arrow {
  font-size: 0.7rem;
  opacity: 0.5;
}

/* Transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
