import { defineConfig } from "vitepress";
import fs from "node:fs";
import path from "node:path";
import type { IncomingMessage, ServerResponse } from "node:http";

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
          "Pennysia, swap, aggregator, DeFi, Settlement, Ethereum, SODAX, liquidity",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Pennysia Docs | Pennysia" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "One interface for the world's liquidity. Best execution across aggregators, RFQs, intents, and decentralized markets.",
      },
    ],
    ["meta", { property: "og:site_name", content: "Pennysia Documentation" }],
    ["meta", { property: "og:url", content: "https://docs.pennysia.com" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://docs.pennysia.com/SocialBanner2.jpg",
      },
    ],
    [
      "meta",
      {
        property: "og:image:alt",
        content:
          "One interface for the world's liquidity. Best execution across aggregators, RFQs, intents, and decentralized markets.",
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
          "One interface for the world's liquidity. Best execution across aggregators, RFQs, intents, and decentralized markets.",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://docs.pennysia.com/SocialBanner2.jpg",
      },
    ],
    ["meta", { property: "twitter:domain", content: "docs.pennysia.com" }],
    ["meta", { property: "twitter:url", content: "https://docs.pennysia.com" }],
  ],
  title: "Pennysia Docs",
  description:
    "One interface for the world's liquidity. Best execution across aggregators, RFQs, intents, and decentralized markets.",
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
          server.middlewares.use(
            (req: IncomingMessage, res: ServerResponse, next: () => void) => {
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
            },
          );
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
    siteTitle: "Docs",
    search: { provider: "local" },

    nav: [
      { text: "App", link: "https://app.pennysia.com" },
      { text: "Website", link: "https://pennysia.com" },
      { text: "Status", link: "https://status.pennysia.com" },
      {
        text: "Feedback",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScnudg5yaAFL1ZOz28co1CJ202a3k2ntr3LhLa-rCohBQIorg/viewform",
      },
    ],

    sidebar: [
      {
        text: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>Get Started',
        collapsed: false,
        items: [
          { text: "Overview", link: "/get-started/overview" },
          { text: "How It Works", link: "/how-it-works/how-it-works" },
          { text: "Security", link: "/get-started/security" },
          { text: "Swap Guide", link: "/get-started/swap-guide" },
        ],
      },
      {
        text: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>Protocol',
        collapsed: false,
        items: [
          { text: "Developer Guide", link: "/protocol/developer-guide" },
          { text: "SDK Reference", link: "/protocol/sdk-reference" },
          { text: "Settlement", link: "/protocol/settlement" },
          { text: "Exchange Integration", link: "/protocol/exchange-integration" },
          { text: "Deployments", link: "/protocol/deployments" },
        ],
      },
      {
        text: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>Resources',
        collapsed: false,
        items: [
          { text: "About", link: "/resources/about" },
          { text: "Contact", link: "/resources/contact" },
          { text: "Fees", link: "/resources/fee" },
          { text: "Tokens and Liquidity", link: "/resources/tokens-and-liquidity" },
          { text: "FAQ", link: "/resources/faq" },
        ],
      },
    ],

    socialLinks: [
      { icon: "x", link: "https://x.com/PennysiaLabs" },
      { icon: "telegram", link: "https://t.me/pennysiaprotocol" },
      { icon: "discord", link: "https://discord.gg/G7rxGgZhXa" },
      { icon: "github", link: "https://github.com/Pennysia" },
      { icon: "youtube", link: "https://www.youtube.com/@PennysiaLabs" },
    ],
    footer: {
      message:
        '<a href="https://app.pennysia.com">App</a> · <a href="https://pennysia.com">Website</a> · <a href="https://status.pennysia.com">Status</a> · <a href="https://github.com/Pennysia">GitHub</a>',
      copyright: "Copyright © 2026 Pennysia",
    },
  },
});
