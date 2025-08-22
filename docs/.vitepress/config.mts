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
    logo: '/favicon.svg',
    siteTitle: "Pennysia Docs",
    search: {provider: 'local'},
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/exaaaa/markdown-examples' }
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
          { text: 'Provide Liquidity', link: '/features/provide' },
          { text: 'Flashloan', link: '/features/flash' },
          { text: 'Oracle', link: '/features/oracle' },
        ]
      },{
        text: 'Guides',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/guides/markdown-examples' },
          { text: 'Runtime API Examples', link: '/guides/api-examples' }
        ]
      }
      ,{
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
      { icon: 'x', link: 'https://x.com/vuejs' },
      { icon: 'telegram', link: 'https://telegram.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/vuejs' },
      { icon: 'youtube', link: 'https://youtube.com/vuejs' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
 message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    },
    
  }
})
