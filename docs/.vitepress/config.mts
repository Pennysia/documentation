import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' }],
  ],
  title: "Pennysia Docs",
  description: "Everything about our products and services",
  lang: 'en-US',
  lastUpdated: true,
  markdown: {
    math: true,
  },
  themeConfig: {
    logo: {
      light: '/lightMode.svg',
      dark: '/darkMode.svg'
    },
    siteTitle: "Pennysia Docs",
    search: { provider: 'local' },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Overview', link: '/overview/intro' },
      { text: 'Features', link: '/features/swap' },
      { text: 'Guides', link: '/guides/how-to-swap' },
      { text: 'Resources', link: '/resources/deployment' }

    ],

    sidebar: [
      {
        text: 'Overview',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/overview/intro' },
          { text: 'Liquidity Prediction Market', link: '/overview/lpm' }
        ]
      },
      {
        text: 'Features',
        collapsed: true,
        items: [
          { text: 'Swap', link: '/features/swap' },
          { text: 'Provide Liquidity', link: '/features/provide-liquidity' },
          { text: 'Flashloan', link: '/features/flash' },
          { text: 'Oracle', link: '/features/oracle' },
        ]
      }, {
        text: 'Guides',
        collapsed: true,
        items: [
          { text: 'How to Swap', link: '/guides/how-to-swap' },
          { text: 'How to Add Liquidity', link: '/guides/how-to-add' },
          { text: 'How to Withdraw Liquidity', link: '/guides/how-to-withdraw' }

        ]
      }
      , {
        text: 'Resources',
        collapsed: true,
        items: [
          { text: 'Deployment Address', link: '/resources/deployment' },
          { text: 'Backtest', link: '/resources/backtest' },
          { text: 'Official Links', link: '/resources/links' },
          { text: 'Formal Contact', link: '/resources/contact' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/PennysiaLabs' },
      { icon: 'telegram', link: 'https://t.me/pennysiaprotocol' },
      { icon: 'discord', link: 'https://discord.com/invite/QHfJz63b3J' },
      { icon: 'github', link: 'https://github.com/Pennysia' },
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright (c) 2025 Pennysia'
    },

  }
})
