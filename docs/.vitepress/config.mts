import { defineConfig } from "vitepress";
import fs from "node:fs";
import path from "node:path";

function copyMarkdownFiles(srcDir: string, outDir: string) {
  const mdDir = path.join(outDir, "md");
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (
        entry.isDirectory() &&
        !entry.name.startsWith(".") &&
        entry.name !== "node_modules" &&
        entry.name !== "public"
      ) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const rel = path.relative(srcDir, fullPath);
        const dest = path.join(mdDir, rel);
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(fullPath, dest);
      }
    }
  }
  walk(srcDir);
}

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
          "Pennysia — best rate for traders, best yield for liquidity providers.",
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
        content:
          "Pennysia — best rate for traders, best yield for liquidity providers.",
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
          "Pennysia — best rate for traders, best yield for liquidity providers.",
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
    "Pennysia — best rate for traders, best yield for liquidity providers.",
  base: "/",
  lang: "en-US",
  lastUpdated: true,
  markdown: {
    math: true,
  },
  vite: {
    plugins: [
      {
        name: "serve-raw-md",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url?.startsWith("/md/") && req.url.endsWith(".md")) {
              const mdPath = path.join(
                __dirname,
                "..",
                req.url.replace("/md/", ""),
              );
              if (fs.existsSync(mdPath)) {
                res.setHeader("Content-Type", "text/plain; charset=utf-8");
                res.end(fs.readFileSync(mdPath, "utf-8"));
                return;
              }
            }
            next();
          });
        },
      },
    ],
  },
  async buildEnd(siteConfig) {
    copyMarkdownFiles(siteConfig.srcDir, siteConfig.outDir);
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
      {
        text: "Feedback",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScnudg5yaAFL1ZOz28co1CJ202a3k2ntr3LhLa-rCohBQIorg/viewform",
      },
    ],

    sidebar: [
      {
        text: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>Get Started',
        collapsed: false,
        items: [{ text: "Overview", link: "/get-started/overview" }],
      },
      {
        text: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>Products',
        collapsed: false,
        items: [
          {
            text: "Exchange",
            base: "/products/exchange/",
            items: [
              { text: "Background", link: "background" },
              { text: "Concept", link: "concept" },
            ],
          },
          {
            text: "AMM",
            base: "/products/amm/",
            items: [
              { text: "Background", link: "background" },
              { text: "Concept", link: "concept" },
            ],
          },
        ],
      },
      {
        text: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>Features',
        collapsed: false,
        items: [
          { text: "Trade", link: "/features/trade" },
          { text: "Liquidity", link: "/features/liquidity" },
          { text: "Flashloan", link: "/features/flash" },
          { text: "Oracle", link: "/features/oracle" },
          { text: "Deployer Incentive", link: "/features/deployer-incentive" },
        ],
      },
      {
        text: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>Guides',
        collapsed: false,
        items: [
          { text: "Swap Token", link: "/guides/swap-token" },
          { text: "Provide Liquidity", link: "/guides/provide-liquidity" },
        ],
      },
      {
        text: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>Resources',
        collapsed: false,
        items: [
          { text: "Fee", link: "/resources/fee" },
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
