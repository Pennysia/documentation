# Pennysia Documentation

This web application contains documents about Pennysia products and services.

## 🚀 Built with VitePress

A modern static site generator powered by Vue.js and Vite for fast, responsive documentation.

## 📋 Features

- **Responsive Design** - Beautiful on all screen sizes
- **Search** - Built-in local search functionality
- **Dark Mode** - Automatic theme switching
- **Fast Loading** - Optimized for performance
- **Markdown Powered** - Easy content management

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run docs:dev

# Build for production
pnpm run docs:build

# Preview production build
pnpm run docs:preview
```

## 📁 Project Structure

```
docs/
├── .vitepress/
│   ├── config.mts      # VitePress configuration
│   └── theme/
│       ├── index.ts    # Theme entry point
│       └── styles/
│           └── custom.css  # Custom styling
├── src/
│   ├── index.md        # Homepage
│   ├── public/         # Static assets
│   └── exaaaa/         # Documentation pages
├── package.json
└── README.md
```

## 🎨 Customization

The site uses a custom VitePress theme with:
- Inter font family
- Responsive grid layouts
- Custom brand colors
- Professional styling

## 📖 Adding Content

1. Create `.md` files in `docs/src/`
2. Update navigation in `docs/.vitepress/config.mts`
3. Use frontmatter for page configuration

## 🔧 Configuration

Main configuration is in `docs/.vitepress/config.mts`:
- Site metadata
- Navigation structure
- Theme configuration
- Build settings
