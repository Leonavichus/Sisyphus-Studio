# Sisyphus Studio

Сайт независимой игровой студии. Astro 5 + React 19 + Tailwind CSS.

## Запуск

```bash
npm install
npm run dev       # localhost:4321
npm run build     # сборка в ./dist
npm run preview   # превью сборки
```

## Скрипты качества кода

```bash
npm run typecheck     # astro check + tsc --noEmit
npm run lint          # ESLint
npm run lint:fix      # ESLint с автоисправлением
npm run format        # Prettier
npm run format:check  # Проверка форматирования
npm run ci            # typecheck + lint + format:check
```

Pre-commit хук запускает `lint-staged` автоматически через Husky.

## Структура

```
src/
├── components/
│   ├── ProjectsCarousel/   — десктоп + мобильная карусель игр
│   ├── NewsCarousel.tsx    — карусель новостей со свайпом
│   ├── NewsModal.tsx       — модал с полным текстом новости
│   ├── Navbar.tsx          — навигация с мобильным меню
│   ├── Footer.tsx          — футер с социальными ссылками
│   ├── Hero.astro          — главный экран
│   ├── About.astro         — секция о студии
│   └── DisciplineIcon.astro
├── content/
│   ├── news/               — JSON файлы новостей (01.json, 02.json...)
│   └── projects/           — JSON файлы проектов (01.json, 02.json...)
├── data/
│   ├── translations.ts     — строки интерфейса (en + ru)
│   ├── footerSlides.ts     — слайды футера по языкам
│   ├── socialLinks.ts      — ссылки на соцсети
│   ├── brand.ts            — константы бренда
│   └── carousel.config.ts  — конфиг каруселей
├── hooks/
│   └── useReducedMotion.ts
├── layouts/
│   └── Layout.astro        — базовый layout с SEO-мета
├── styles/
│   ├── tokens.css          — CSS-переменные (цвета, радиусы, easing)
│   ├── base.css            — reset + scrollbar + :focus-visible
│   ├── typography.css      — типографические классы
│   ├── buttons.css         — кнопки и иконки
│   ├── components.css      — карточки, бейджи, footer классы
│   ├── animations.css      — keyframes + reveal классы
│   └── global.css          — точка входа CSS
├── utils/
│   └── images.ts           — handleImageError, SVG placeholder
└── types.ts                — TypeScript типы
```

## Добавление новости

Создать файл `src/content/news/05.json` (следующий по алфавиту):

```json
{
  "isoDate": "2025-06-01",
  "image": "/images/news/news-5.jpg",
  "en": {
    "title": "...",
    "date": "Jun 01, 2025",
    "summary": "...",
    "body": "Paragraph one.\n\nParagraph two."
  },
  "ru": {
    "title": "...",
    "date": "01 Июн, 2025",
    "summary": "...",
    "body": "Абзац первый.\n\nАбзац второй."
  }
}
```

## Добавление проекта

Создать файл `src/content/projects/03.json`:

```json
{
  "id": 3,
  "image": "/images/projects/project-3.jpg",
  "progress": 0,
  "wishlistUrl": "https://store.steampowered.com/app/...",
  "en": { "title": "...", "description": "...", "price": "In Development" },
  "ru": { "title": "...", "description": "...", "price": "В разработке" }
}
```

> **Внимание:** `BRAND.teamSize` в `src/data/brand.ts` обновляется вручную при изменении состава команды.

## Переменные окружения

Скопировать `.env.example` в `.env` и заполнить при необходимости.

## Языки

Сайт поддерживает `en` и `ru`. Для добавления нового языка:
1. Добавить код в `astro.config.mjs` → `i18n.locales`
2. Добавить переводы в `src/data/translations.ts`
3. Добавить слайды футера в `src/data/footerSlides.ts`
4. Добавить поля `en`/`ru`-аналог в JSON файлах контента
