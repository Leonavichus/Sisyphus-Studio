# Developer Guide

## Architecture Overview

Single-page site with two language routes (`/en/`, `/ru/`). Astro handles static generation and server-side data fetching; React components handle interactivity. All pages are prerendered at build time.

The root `/` redirects to the default language. A 404 page detects language from the URL and renders the appropriate translation.

**Layers:**

1. **Routes** (`src/pages/`) — load content collections, pick the active language, pass typed props into the layout and sections.
2. **Sections** (`.astro` under `components/sections/`) — mostly static markup; may embed islands with `client:*`.
3. **Islands** (`.tsx` under `components/features/` and `components/layout/`) — state, effects, keyboard/touch, forms.
4. **Config** (`src/config/`) — design tokens, URLs, runtime constants (scroll reveal, ripple, image fallbacks, news categories). Import the barrel `src/config/index.ts` unless you need to avoid pulling the full barrel in a hot path.
5. **Utils** (`src/utils/`) — cross-cutting helpers that are not “site configuration” (e.g. image error fallbacks).

---

## Routing & Pages

Routes are generated from `src/pages/[lang]/index.astro` with static paths for each supported language. The page fetches content collections, transforms them into typed arrays using the current language, and passes data down to all section components.

An RSS feed is available at `/{lang}/rss.xml`.

---

## Layout

`src/layouts/Layout.astro` is the root HTML shell. It sets up:

- Full `<head>` with meta, Open Graph, Twitter Card, hreflang, canonical, and RSS link (RSS link title uses `TRANSLATIONS[lang].meta.rssTitle`)
- JSON-LD structured data (Organization + VideoGame entries)
- Font loading (`FONTS.googleCssHref`) and hero image preload (`HERO_PRELOAD_IMAGE_SRC`)
- Inline language redirect script built from `LANGUAGE_STORAGE_KEY` and `SUPPORTED_LANGUAGES` (must stay in sync with Astro `i18n.locales`)
- Astro `<ClientRouter />` for view transitions
- Skip-to-content link and `<noscript>` warning
- Bundled client script that imports `SCROLL_PROGRESS_BAR_CLASS`, `RIPPLE`, `SCROLL_REVEAL`, and `REVEAL_ANIMATION_SELECTOR` from `constants.ts` — scroll progress, ripples, reveal observer, and view-transition scroll restoration

---

## Components

### common/

Reusable primitives shared across the site.

- **AnimatedBackground** — fixed full-screen animated grid background. Two overlapping grid layers animated with `requestAnimationFrame`. Disabled when `prefers-reduced-motion` is set.
- **DisciplineIcon** — renders discipline-specific icons by name.
- **ErrorBoundary** — React class component. Catches errors in subtrees and renders a fallback UI. Used to wrap major interactive sections.
- **SkeletonCard** — loading placeholder with shimmer animation. Used during SSR before hydration.

### features/

Interactive components that handle user input and state.

- **ContactForm** — controlled form with client-side validation and Formspree submission. Copy comes from `t.contact.form` in translations (no duplicate locale objects in the component).
- **NewsCarousel** — auto-advancing carousel with category filters, touch swipe, keyboard navigation, and a modal for full articles. Respects `prefers-reduced-motion`.
- **NewsModal** — full-screen modal with focus trap, Escape to close, click-outside to close, and scroll lock.
- **ProjectsCarousel** — responsive carousel that renders a desktop accordion or mobile swipe view depending on viewport width.

### layout/

- **Navbar** — fixed top navigation with scroll-based background transition, active section tracking, mobile menu with focus management, and a language switcher.
- **Footer** — site footer with navigation links, copyright, and back-to-top button.

### sections/

Astro components for each page section. They receive translations and data as props and contain no client-side logic of their own.

- **Hero** — main landing section with animated title, stats, and featured project cards.
- **About** — studio info with team stats, disciplines, and mission statement.
- **Donate** — support tiers linking to donation, sponsor contact, and Steam wishlist.
- **Contact** — contact info alongside the `ContactForm` component.

---

## Configuration

All modules under `src/config/` are re-exported from `src/config/index.ts`.

- **constants.ts** — brand, transitions, carousel timings, swipe threshold, scroll-progress bar class, `IntersectionObserver` options for reveal animations, button ripple selector + size multiplier, validation regex, small UI strings used outside translations
- **design.ts** — colors, layout, spacing, image filters, gradients, component sizes
- **fonts.ts** — Google Fonts CSS URL
- **i18n.ts** — `LANGUAGE_STORAGE_KEY`, `SUPPORTED_LANGUAGES` (shared by the inline redirect script in `Layout.astro` and `useLanguageSync`)
- **images.ts** — `IMAGE_FALLBACK` dimensions for broken images, `HERO_PRELOAD_IMAGE_SRC`
- **links.ts** — env-backed URLs, Formspree endpoint, `isMailtoLink`, `SOCIAL_LINKS`, `CONTACT_PAGE_SOCIAL` (icons + hrefs for the contact column)
- **news.ts** — `getNewsCategories`, `getCategoryLabel`, `getCategoryColor`, category order
- **seo.ts** — default title/description, OG image, JSON-LD games

Use config constants instead of magic numbers:

```ts
import { NEWS_CAROUSEL } from "@/config";
const interval = NEWS_CAROUSEL.AUTO_INTERVAL;
```

---

## Types

Defined in `src/types.ts`:

- `Language` — supported locale values
- `NewsCategory` — valid news post types
- `Project` — project data shape
- `NewsItem` — news post data shape
- `TranslationStructure` — full shape of the translations object, used to type all translation props

---

## Content Collections

Defined in `src/content/config.ts` using Astro Content Collections with Zod validation.

**News** fields: `isoDate` (YYYY-MM-DD), `image` path, `type` enum, localized `title`/`date`/`summary`/`body` for each language.

**Projects** fields: `id` (used for sort order), `image` path, optional `progress` (0–100), optional `wishlistUrl`, localized `title`/`description`/`price`/`tags` for each language.

---

## i18n & Translations

`src/i18n/translations.ts` exports a single `TRANSLATIONS` object typed against `TranslationStructure`. It covers all sections: nav, meta (including `rssTitle` / `rssDescription` for RSS), hero, projects, about, news, contact (including `contact.form` for the form island), footer, and 404.

Language is persisted to `localStorage` under `LANGUAGE_STORAGE_KEY`. On page load, the inline script in the layout redirects if the URL language doesn't match the stored preference.

---

## Hooks

- **useCarouselKeyboard** — attaches keyboard navigation (Arrow keys, Home, End) to a container ref. Returns the ref to attach to the carousel element.
- **useLanguageSync** (`src/hooks/useLanguageSync.ts`) — writes the current language to `localStorage` using `LANGUAGE_STORAGE_KEY` whenever the route language changes.
- **useReducedMotion** — returns `true` if `prefers-reduced-motion: reduce` is active. Updates reactively on media query change.

---

## Utilities

- **images.ts** — `getHeroImage(name)` builds an image path; `handleImageError` (React) and `nativeImageFallback` (Astro) replace broken images with an inline SVG placeholder. Dimensions for React fallbacks should match `IMAGE_FALLBACK` in config.

`isMailtoLink` lives in `config/links.ts` (re-exported from the config barrel) so URL-related behaviour stays in one place.

---

## Styles

CSS is split into focused files, all imported in `src/styles/global.css`:

| File | Contents |
|---|---|
| `tokens.css` | CSS custom properties: colors, surfaces, borders, radii, easing |
| `base.css` | Reset, scrollbar, selection, focus-visible |
| `typography.css` | `t-*` text utility classes |
| `buttons.css` | Button variants |
| `components.css` | Cards, chips, badges, progress bars, layout utilities, reveal classes |
| `animations.css` | Keyframes, entrance animations, glitch effects |
| `skeleton.css` | Shimmer animation for loading states |

### CSS Variables

Key variables defined in `tokens.css`:

```css
/* Orange accent */
--c-orange, --c-orange-light, --c-orange-accent
--c-orange-dim, --c-orange-border

/* Text */
--c-on-surface, --c-secondary, --c-tertiary

/* Surfaces */
--s-1 through --s-5

/* Borders */
--b-subtle, --b-default, --b-strong, --b-accent

/* Easing */
--ease-em, --ease-dec

/* Border radii */
--r-sm, --r-xl, --r-2xl, --r-full
```

### Scroll Reveal

Add one of these classes to any element to animate it in when it enters the viewport:

```
.reveal          fade up
.reveal-left     slide from left
.reveal-right    slide from right
.reveal-scale    scale up
```

The layout's intersection observer adds `.in` when the element becomes visible.

---

## Pre-commit Checklist

- [ ] `npm run ci` passes
- [ ] Translations added for all supported languages
- [ ] CSS variables used instead of raw values
- [ ] Config constants used instead of magic numbers
- [ ] `aria-label` added on interactive elements without visible text
- [ ] Content JSON is valid against the collection schema

---

## Useful Links

- [Astro Docs](https://docs.astro.build)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
