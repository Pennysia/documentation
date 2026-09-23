<template>
  <Layout>
    <template #sidebar-nav-before>
      <div class="sidebar-search-slot" aria-hidden="false" />
    </template>

    <template #nav-bar-content-after>
      <AppearanceSegment class="nav-appearance-segment" />
      <a
        class="nav-launch-app"
        href="https://app.pennysia.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Launch App
      </a>
    </template>

    <template #nav-screen-content-after>
      <div class="nav-screen-appearance">
        <span class="nav-screen-appearance__label">Appearance</span>
        <AppearanceSegment />
      </div>
      <a
        class="nav-screen-launch"
        href="https://app.pennysia.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Launch App
      </a>
    </template>

    <template #doc-before>
      <div class="doc-title-bar">
        <SectionTag />
        <div class="copy-page-container">
          <CopyPageButton />
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import AppearanceSegment from './components/AppearanceSegment.vue'
import CopyPageButton from './components/CopyPageButton.vue'
import SectionTag from './components/SectionTag.vue'

const { Layout } = DefaultTheme
const route = useRoute()

function placeCompactNav() {
  if (typeof window === 'undefined') return

  const menu = document.querySelector(
    'button.menu[aria-controls="VPSidebarNav"]',
  ) as HTMLElement | null
  const localNav = document.querySelector(
    '.VPLocalNav .container',
  ) as HTMLElement | null
  const navLinks = document.querySelector(
    '.VPNavBar .content-body > .VPNavBarMenu',
  ) as HTMLElement | null
  const search = document.querySelector('.VPNavBarSearch') as HTMLElement | null
  const searchSlot = document.querySelector(
    '.sidebar-search-slot',
  ) as HTMLElement | null
  const contentBody = document.querySelector(
    '.VPNavBar .content-body',
  ) as HTMLElement | null

  // lg compact: same breakpoint as custom.css (max-width: 959px / min-width: 960px)
  const isCompact = window.matchMedia('(max-width: 959px)').matches

  // Belt-and-suspenders: never let top-nav Website/Status/Feedback show on mobile/tablet
  if (navLinks) {
    navLinks.style.display = isCompact ? 'none' : ''
  }

  // Search: sidebar top on desktop; navbar icon on compact
  if (search) {
    if (!isCompact && searchSlot && search.parentElement !== searchSlot) {
      searchSlot.appendChild(search)
    } else if (isCompact && contentBody && search.parentElement !== contentBody) {
      contentBody.insertBefore(search, contentBody.firstElementChild)
    }
  }

  // Always keep Menu in the local-nav row (left of "On this page"), never in the top bar
  if (menu && localNav && menu.parentElement !== localNav) {
    localNav.insertBefore(menu, localNav.firstChild)
  }
}

function schedulePlace() {
  if (typeof window === 'undefined') return
  nextTick(() => requestAnimationFrame(placeCompactNav))
}

watch(() => route.path, schedulePlace)

onMounted(() => {
  window.addEventListener('resize', placeCompactNav)
  schedulePlace()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', placeCompactNav)
})
</script>

<style scoped>
.doc-title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  margin: 0 0 0.65rem;
  min-width: 0;
}

.copy-page-container {
  position: static;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin: 0 0 0 auto;
}

.sidebar-search-slot {
  display: none;
}

@media (min-width: 960px) {
  .sidebar-search-slot {
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0 0 8px;
    border-bottom: none;
    order: -1;
  }
}
</style>

<style>
/* Hide VitePress default sun/moon switch — replaced by AppearanceSegment */
.VPNavBarAppearance,
.VPNavBar .appearance,
.VPNavScreenAppearance {
  display: none !important;
}

.nav-launch-app {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  margin-left: 12px;
  margin-right: 4px;
  padding: 0 0.875rem;
  border-radius: 8px;
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 160ms ease;
}

.nav-launch-app:hover {
  opacity: 0.88;
  color: var(--vp-c-bg);
}

.nav-appearance-segment {
  margin-left: 0;
  margin-right: 0;
}

.nav-screen-launch {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  margin: 20px 12px 16px;
  border-radius: 10px;
  background: var(--vp-c-text-1);
  color: var(--vp-c-bg);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}

.nav-screen-launch:hover {
  opacity: 0.9;
  color: var(--vp-c-bg);
}

.nav-screen-appearance {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 16px 0 8px;
  padding: 0 12px;
}

.nav-screen-appearance__label {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

/* Desktop: center Website / Status / Feedback on the screen;
   appearance + CTA stay right */
@media (min-width: 960px) {
  /* content-body is position:relative and only spans the right side —
     force static so absolute menu centers against full-width .content */
  .VPNavBar .content-body {
    position: static !important;
    justify-content: flex-end !important;
  }

  .VPNavBar .content {
    position: relative;
  }

  .VPNavBar .VPNavBarMenu {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    margin: 0;
  }

  .nav-appearance-segment {
    margin-left: 16px;
  }

  .nav-screen-launch,
  .nav-screen-appearance {
    display: none !important;
  }
}

/* Mobile + tablet: hide desktop CTA + appearance; keep them in the 3-dot screen */
@media (max-width: 959px) {
  .nav-launch-app,
  .nav-appearance-segment {
    display: none !important;
  }
}
</style>
