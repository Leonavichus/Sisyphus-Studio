# Sisyphus Studio

Website for an independent game studio.

## Quick Start

```bash
npm install
cp .env.example .env
npm run dev
```

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build to `./dist` |
| `npm run preview` | Preview production build |
| `npm run ci` | Full check: typecheck + lint + format |

## Environment Variables

Copy `.env.example` to `.env` and fill in your values. All variables are prefixed `PUBLIC_` and available in both server and client code.

## Project Structure

```
src/
├── components/      # UI: common (primitives), features (islands), layout, sections (Astro)
├── config/          # Single barrel: design tokens, URLs, i18n/runtime, news metadata, images
├── content/         # Astro content collections (news, projects)
├── hooks/           # React hooks for islands
├── i18n/            # TRANSLATIONS (all UI copy, including contact form + RSS titles)
├── layouts/         # Root HTML shell, global scripts, ClientRouter
├── pages/           # Routes (localized index, RSS, 404)
├── styles/          # Global CSS (imported from layouts)
├── types.ts         # Shared TypeScript types
└── utils/           # Small shared helpers (e.g. image fallbacks)
```

**Data flow:** `pages/[lang]/index.astro` loads collections, maps entries to typed `Project[]` / `NewsItem[]`, and passes slices into Astro sections and React islands. Interactive UI lives in components with `client:*`; static sections stay in `.astro` files.

## Adding Content

### News post

Create a new JSON file in `src/content/news/`:

```json
{
  "isoDate": "YYYY-MM-DD",
  "image": "/images/news/filename.jpg",
  "type": "announcement",
  "en": {
    "title": "Title",
    "date": "Jun 01, 2025",
    "summary": "Short preview text.",
    "body": "Full article text.\n\nSeparate paragraphs with a blank line."
  },
  "ru": { ... }
}
```

Valid `type` values: `announcement` · `dev-diary` · `update`

### Project

Create a new JSON file in `src/content/projects/`:

```json
{
  "id": 1,
  "image": "/images/projects/filename.jpg",
  "progress": 50,
  "wishlistUrl": "https://...",
  "en": {
    "title": "Game Title",
    "description": "Short description.",
    "price": "In Development",
    "tags": ["Co-op", "Shooter"]
  },
  "ru": { ... }
}
```

`progress` (0–100) and `wishlistUrl` are optional.

## Configuration

Everything is exported from `src/config/index.ts` (import as `../../config` or `@/config`).

| File | What it controls |
|---|---|
| `constants.ts` | Brand, carousels, swipe threshold, scroll/reveal + ripple behaviour, validation regex |
| `design.ts` | Colors, layout, spacing, gradients, component sizes |
| `fonts.ts` | Google Fonts stylesheet URL |
| `i18n.ts` | Language `localStorage` key, supported locale list (used by layout + `useLanguageSync`) |
| `images.ts` | Placeholder image dimensions for broken images, hero preload path |
| `links.ts` | Public URLs, Formspree, social links, `isMailtoLink`, contact-page social row |
| `news.ts` | News category order, labels per language, category colors |
| `seo.ts` | Default meta, OG image, JSON-LD game list |

## Translations

All UI strings are in `src/i18n/translations.ts`. Both `en` and `ru` objects must always have identical key shapes.

- `meta.rssTitle` / `meta.rssDescription` feed the RSS feed and the RSS `<link>` title in the layout.
- `contact.form` supplies every string for the `ContactForm` island (labels, placeholders, validation, submit states).

## Styling

CSS is split into focused files imported via `src/styles/global.css`. Prefer design tokens (for example `var(--c-orange)`) instead of raw hex values in new styles.

```css
color: var(--c-orange);
```

## Developer Guide

See [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) for full architecture reference.
