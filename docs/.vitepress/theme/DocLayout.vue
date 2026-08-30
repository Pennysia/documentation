<template>
  <Layout>
    <template #sidebar-nav-before>
      <div class="sidebar-social-slot" aria-hidden="false" />
      <div class="sidebar-search-slot" aria-hidden="false" />
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
  const social =
    (document.querySelector(
      '.VPNavBar .content-body > .VPNavBarSocialLinks, .VPNavBar .content-body > .social-links',
    ) as HTMLElement | null) ||
    (document.querySelector('.sidebar-social-slot .VPSocialLinks, .sidebar-social-slot .VPNavBarSocialLinks') as HTMLElement | null)
  const socialSlot = document.querySelector(
    '.sidebar-social-slot',
  ) as HTMLElement | null
  const contentBody = document.querySelector(
    '.VPNavBar .content-body',
  ) as HTMLElement | null

  // lg compact: same breakpoint as custom.css (max-width: 959px / min-width: 960px)
  const isCompact = window.matchMedia('(max-width: 959px)').matches

  // Belt-and-suspenders: never let top-nav App/Website/Status/Feedback show on mobile/tablet
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

  // Social: under sidebar search on desktop; back in navbar on compact
  if (social && socialSlot && contentBody) {
    if (!isCompact) {
      if (social.parentElement !== socialSlot) {
        socialSlot.appendChild(social)
      }
    } else if (social.parentElement !== contentBody) {
      // Restore near the end of content-body (before hamburger)
      const hamburger = contentBody.querySelector('.VPNavBarHamburger')
      if (hamburger) {
        contentBody.insertBefore(social, hamburger)
      } else {
        contentBody.appendChild(social)
      }
    }
  }

  // Keep social slot above search slot in the sidebar DOM
  if (searchSlot && socialSlot && searchSlot.parentElement === socialSlot.parentElement) {
    if (socialSlot.nextElementSibling !== searchSlot) {
      searchSlot.parentElement.insertBefore(socialSlot, searchSlot)
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

.sidebar-search-slot,
.sidebar-social-slot {
  display: none;
}

@media (min-width: 960px) {
  .sidebar-social-slot {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    margin: 24px 0 20px;
    padding: 0;
    order: -2;
  }

  .sidebar-search-slot {
    display: block;
    box-sizing: border-box;
    width: 100%;
    /* Divider below search separates from GET STARTED */
    margin: 0 0 10px;
    padding: 0 0 24px;
    border-bottom: 1px solid var(--vp-c-divider);
    order: -1;
  }
}
</style>
