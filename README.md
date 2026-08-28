# Pennysia Documentation

Concise consumer and protocol docs for Pennysia on Ethereum Mainnet.

**Live site:** [docs.pennysia.com](https://docs.pennysia.com)

## Development

```bash
pnpm install
pnpm run docs:dev      # local preview (default port 5173)
pnpm run check:links   # verify internal markdown links
pnpm run docs:build    # production build
```

## Structure

```
docs/
├── index.md                      # Redirects to overview
├── get-started/
│   ├── overview.md               # Product overview + glossary
│   ├── security.md               # Double-layer security model
│   └── swap-guide.md             # Swap walkthrough, settings, wallets, troubleshooting
├── how-it-works/how-it-works.md  # Traders, features, exchanges
├── protocol/
│   ├── developer-guide.md
│   ├── sdk-reference.md
│   ├── settlement.md
│   ├── exchange-integration.md
│   └── deployments.md
└── resources/
    ├── about.md
    ├── contact.md
    ├── fee.md
    ├── tokens-and-liquidity.md
    └── faq.md
```
