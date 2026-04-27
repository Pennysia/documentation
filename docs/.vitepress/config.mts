import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/favicon.ico", sizes: "any" }],
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:wght@400;500;600;700;800;900&display=swap",
      },
    ],
    ["meta", { name: "author", content: "Pennysia Labs" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Pennysia, AMM, DeFi, Liquidity Prediction Market, Flashloans, Cube-Root TWAP, Oracle, Ethereum, Blockchain",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Pennysia Docs | Pennysia" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Complete documentation for Pennysia AMM protocol, the AMM that people love.",
      },
    ],
    ["meta", { property: "og:site_name", content: "Pennysia Documentation" }],
    ["meta", { property: "og:url", content: "https://docs.pennysia.com" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://docs.pennysia.com/socialCard.jpg",
      },
    ],
    [
      "meta",
      {
        property: "og:image:alt",
        content: "Pennysia - the AMM that people love",
      },
    ],
    ["meta", { property: "og:image:width", content: "1600" }],
    ["meta", { property: "og:image:height", content: "900" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@PennysiaLabs" }],
    ["meta", { name: "twitter:title", content: "Pennysia Docs | Pennysia" }],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "Complete documentation for Pennysia AMM protocol. Learn about Liquidity Prediction Markets, uncollateralized flashloans, and cube-root TWAP oracle technology.",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://docs.pennysia.com/socialCard.jpg",
      },
    ],
    ["meta", { property: "twitter:domain", content: "docs.pennysia.com" }],
    ["meta", { property: "twitter:url", content: "https://docs.pennysia.com" }],
  ],
  title: "Pennysia Docs",
  description:
    "Complete documentation for Pennysia AMM protocol. Learn about Liquidity Prediction Markets, uncollateralized flashloans, and cube-root TWAP oracle technology.",
  base: "/",
  lang: "en-US",
  lastUpdated: true,
  markdown: {
    math: true,
  },
  themeConfig: {
    logo: {
      light: "/lightMode.svg",
      dark: "/darkMode.svg",
    },
    siteTitle: "Pennysia",
    search: { provider: "local" },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Get Started', link: '/get-started/overview' },
      // { text: 'Features', link: '/features/swap' },
      // { text: 'Guides', link: '/guides/trader' },
      // { text: 'Resources', link: '/resources/links' },
      {
        text: "Feedback",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScnudg5yaAFL1ZOz28co1CJ202a3k2ntr3LhLa-rCohBQIorg/viewform",
      },
    ],

    sidebar: [
      {
        text: "Get Started",
        collapsed: false,
        items: [
          // { text: 'Introduction', link: '/get-started/intro' },
          { text: "Overview", link: "/get-started/overview" },
          { text: "Concept", link: "/get-started/concept" },
          // { text: 'Demo Video', link: '/get-started/demo' },
        ],
      },
      {
        text: "Features",
        collapsed: false,
        items: [
          { text: "Liquidity", link: "/features/liquidity" },
          { text: "Trade", link: "/features/trade" },
          // { text: 'Provide Liquidity', link: '/features/provide-liquidity' },
          { text: "Flashloan", link: "/features/flash" },
          { text: "Fee", link: "/features/fee" },
          { text: "Oracle", link: "/features/oracle" },
          { text: "Deployer Incentive", link: "/features/deployer-incentive" },
        ],
      },
      {
        text: "Guides",
        collapsed: false,
        items: [
          { text: "Provide Liquidity", link: "/guides/provide-liquidity" },
          { text: "Swap Token", link: "/guides/swap-token" },
        ],
      },
      {
        text: "Resources",
        collapsed: false,
        items: [
          { text: "Deployments", link: "/resources/deployments" },
          { text: "Official Links", link: "/resources/links" },
          { text: "Roadmap", link: "/resources/roadmap" },
          { text: "Hackathon", link: "/resources/hackathon" },
          { text: "Contact", link: "/resources/contact" },
          { text: "FAQ", link: "/resources/faq" },
        ],
      },
    ],

    socialLinks: [
      { icon: "x", link: "https://x.com/PennysiaLabs" },
      { icon: "telegram", link: "https://t.me/pennysiaprotocol" },
      { icon: "discord", link: "https://discord.gg/G7rxGgZhXa" },
      { icon: "github", link: "https://github.com/Pennysia" },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: "Copyright (c) 2025 Pennysia",
    },
  },
});
