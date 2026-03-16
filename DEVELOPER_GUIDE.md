# Руководство разработчика — Sisyphus Studio

## 📁 Структура проекта

### 🎨 `/src/components/` — Компоненты

#### `/src/components/common/` — Общие переиспользуемые компоненты
- **`DisciplineIcon.astro`** — Иконки дисциплин (engineering, art, sound, design) для секции About
- **`ErrorBoundary.tsx`** — React компонент для обработки ошибок в компонентах
- **`SkeletonCard.tsx`** — Скелетон-загрузчик для карточек новостей

#### `/src/components/features/` — Функциональные компоненты
- **`ContactForm.tsx`** — Форма обратной связи с валидацией и отправкой на Formspree
- **`NewsCarousel.tsx`** — Карусель новостей с автопрокруткой, фильтрацией по категориям и свайпами
- **`NewsModal.tsx`** — Модальное окно для отображения полного текста новости
- **`ProjectsCarousel/`** — Карусель проектов (игр)
  - `index.tsx` — Главный компонент с логикой переключения desktop/mobile
  - `DesktopCarousel.tsx` — Десктоп версия с раскрывающимися панелями
  - `MobileCarousel.tsx` — Мобильная версия с свайпами

#### `/src/components/layout/` — Компоненты макета
- **`Navbar.tsx`** — Навигационная панель с мобильным меню, переключателем языка и соцсетями
- **`Footer.tsx`** — Футер с призывом к действию (CTA) и навигацией

#### `/src/components/sections/` — Секции страницы
- **`Hero.astro`** — Главная секция с заголовком, статистикой и карточками проектов
- **`About.astro`** — Секция "О студии" с информацией о команде и дисциплинах
- **`Contact.astro`** — Секция контактов с формой и соцсетями

---

### ⚙️ `/src/config/` — Конфигурация (централизованные настройки)

**Все константы проекта вынесены сюда для удобства изменения без правки кода**

- **`index.ts`** — Централизованный экспорт всех конфигов (импортируй отсюда)
- **`constants.ts`** — Общие константы проекта
  - `TRANSITIONS` — настройки анимаций и переходов
  - `INTERSECTION_OBSERVER` — настройки intersection observer
  - `BRAND` — информация о бренде (название, год основания, размер команды)
  - `NEWS_CAROUSEL`, `PROJECTS_*` — настройки каруселей
  - `SWIPE_THRESHOLD` — порог свайпов
  - `EMAIL_REGEX`, `FOCUSABLE_SELECTORS` — валидация
  - `UI` — UI строки (skip link, noscript, badges)
- **`design.ts`** — Дизайн-система (цвета, размеры, отступы, layout)
  - `COLORS` — цветовая палитра (включая цвета категорий новостей)
  - `LAYOUT` — layout константы (maxWidth, padding, navHeight)
  - `SPACING` — отступы компонентов
  - `SIZES` — размеры компонентов
  - `GRID` — настройки фоновой сетки
- **`links.ts`** — Все ссылки и контакты
  - `URLS` — внешние URL (site, steam, youtube, donate)
  - `CONTACT` — контактная информация (email, formspree)
  - `SOCIAL_LINKS` — ссылки на соцсети с иконками
  - `ICONS` — SVG иконки для соцсетей
- **`seo.ts`** — SEO константы (meta теги, Open Graph, Schema.org данные)

---

### 📝 `/src/content/` — Контент (Astro Content Collections)

- **`config.ts`** — Схемы коллекций (news, projects)
- **`news/`** — JSON файлы новостей (01.json, 02.json, ...)
  - Структура: `{ isoDate, image, type, en: {...}, ru: {...} }`
  - Типы: `announcement`, `dev-diary`, `update`
- **`projects/`** — JSON файлы проектов (01.json, 02.json, ...)
  - Структура: `{ id, image, progress, wishlistUrl, en: {...}, ru: {...} }`

---

### 🪝 `/src/hooks/` — React хуки

- **`useCarouselKeyboard.ts`** — Навигация по карусели с клавиатуры (стрелки, Home, End)
- **`useLanguagePreference.ts`** — Сохранение и синхронизация языка в localStorage
- **`useReducedMotion.ts`** — Определение prefers-reduced-motion для доступности

---

### 🌐 `/src/i18n/` — Интернационализация

- **`translations.ts`** — Все переводы интерфейса (en, ru)
  - Структура: `{ en: {...}, ru: {...} }`
  - Разделы: nav, hero, projects, about, news, contact, footer (включая CTA), meta
  - **Footer CTA** теперь здесь, а не в отдельном конфиге

---

### 🎨 `/src/layouts/` — Макеты страниц

- **`Layout.astro`** — Базовый layout с SEO, meta тегами, шрифтами, скриптами
  - Принимает: `lang`, `title`, `description`, `year`
  - Включает: ViewTransitions, JSON-LD, языковой редирект

---

### 🛠️ `/src/lib/` — Утилиты и библиотеки

- **`helpers.ts`** — Вспомогательные функции (`isMailtoLink`)
- **`news.ts`** — Функции для работы с новостями (категории, цвета, метки)

---

### 📄 `/src/pages/` — Страницы (роутинг)

- **`index.astro`** — Редирект на `/en/`
- **`404.astro`** — Страница ошибки 404
- **`[lang]/index.astro`** — Главная страница (en, ru)
- **`[lang]/rss.xml.ts`** — RSS фид новостей

---

### 🎨 `/src/styles/` — Стили

- **`global.css`** — Точка входа (импортирует все остальные)
- **`tokens.css`** — CSS переменные (цвета, размеры, радиусы)
- **`base.css`** — Reset, scrollbar, базовые стили
- **`typography.css`** — Типографика (классы t-*)
- **`buttons.css`** — Стили кнопок (btn-*, icon-btn-*)
- **`components.css`** — Компоненты (карточки, бейджи, прогресс-бары)
- **`animations.css`** — Keyframes и reveal анимации
- **`skeleton.css`** — Стили скелетон-загрузчиков

---

### 🔧 `/src/utils/` — Утилиты

- **`images.ts`** — Функции для работы с изображениями (getHeroImage, handleImageError, fallback)
- **`news.ts`** — Функции для работы с новостями (категории, цвета, метки)
- **`helpers.ts`** — Вспомогательные функции (isMailtoLink)

---

### 📦 Корневые файлы

- **`types.ts`** — TypeScript типы проекта
- **`env.d.ts`** — Типы для переменных окружения

---

## 🚀 Как добавить новый контент

### Добавить новость

1. Создай файл `src/content/news/05.json`:
```json
{
  "isoDate": "2025-06-01",
  "image": "/images/news/news-5.jpg",
  "type": "announcement",
  "en": {
    "title": "New Feature Released",
    "date": "Jun 01, 2025",
    "summary": "Short description...",
    "body": "Full text.\n\nSecond paragraph."
  },
  "ru": {
    "title": "Новая функция",
    "date": "01 Июн, 2025",
    "summary": "Краткое описание...",
    "body": "Полный текст.\n\nВторой абзац."
  }
}
```

2. Добавь изображение в `public/images/news/`

### Добавить проект

1. Создай файл `src/content/projects/03.json`:
```json
{
  "id": 3,
  "image": "/images/projects/project-3.jpg",
  "progress": 25,
  "wishlistUrl": "https://store.steampowered.com/app/...",
  "en": {
    "title": "Game Title",
    "description": "Game description...",
    "price": "In Development"
  },
  "ru": {
    "title": "Название игры",
    "description": "Описание игры...",
    "price": "В разработке"
  }
}
```

2. Добавь изображение в `public/images/projects/`

---

## 🎨 Как изменить дизайн

### Изменить цвета
Редактируй `src/config/design.ts`:
```typescript
export const COLORS = {
  orange: "#f87e0f",  // Основной акцентный цвет
  // ...
}
```

### Изменить размеры компонентов
Редактируй `src/config/design.ts`:
```typescript
export const SIZES = {
  newsCard: {
    height: "clamp(260px, 55vw, 480px)",
    // ...
  }
}
```

### Изменить анимации
Редактируй `src/config/constants.ts`:
```typescript
export const TRANSITIONS = {
  default: ".3s cubic-bezier(0.2,0,0,1)",
  // ...
}
```

---

## 🔗 Как изменить ссылки

### Социальные сети
Редактируй `src/config/links.ts`:
```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  { iconSvg: SOCIAL_ICONS.youtube, href: URLS.youtube, label: "YouTube" },
  // ...
]
```

### Внешние URL
Редактируй `.env`:
```env
PUBLIC_SITE_URL=https://sisyphus.studio
PUBLIC_STEAM_URL=https://store.steampowered.com
PUBLIC_YOUTUBE_URL=https://youtube.com/@channel
PUBLIC_DONATE_URL=https://donate.link
```

### Призыв к действию в футере
Редактируй `src/i18n/translations.ts`:
```typescript
export const TRANSLATIONS = {
  en: {
    footer: {
      cta: {
        title: "Support The",
        titleSuffix: "Journey",
        description: "...",
        actionText: "Donate",
      },
      // ...
    }
  },
  ru: {
    footer: {
      cta: {
        title: "Поддержи",
        titleSuffix: "Нас",
        description: "...",
        actionText: "Пожертвовать",
      },
      // ...
    }
  }
}
```

URL для кнопки берется из `.env`:
```env
PUBLIC_DONATE_URL=https://donate.link
```

---

## 📊 Как обновить информацию о студии

### Размер команды
Редактируй `src/config/constants.ts`:
```typescript
export const BRAND = {
  teamSize: 4,  // Измени здесь
  // ...
}
```

### Контактный email
Редактируй `src/config/links.ts`:
```typescript
export const CONTACT = {
  email: "hello@sisyphus.studio",
  // ...
}
```

---

## 🌍 Как добавить перевод

Редактируй `src/i18n/translations.ts`:
```typescript
export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      // ...
    }
  },
  ru: {
    nav: {
      home: "Главная",
      // ...
    }
  }
}
```

---

## 🛠️ Команды разработки

```bash
npm run dev          # Запуск dev сервера
npm run build        # Сборка проекта
npm run preview      # Превью сборки
npm run typecheck    # Проверка типов
npm run lint         # Проверка кода
npm run lint:fix     # Автоисправление
npm run format       # Форматирование
npm run ci           # Полная проверка
```

---

## ⚠️ Важные замечания

1. **Не удаляй файлы из `/src/config/`** — они все используются
2. **Используй константы из конфигов** — не хардкодь значения в компонентах
3. **Импортируй из `src/config`** — централизованный экспорт
4. **Добавляй переводы сразу на оба языка** — en и ru
5. **Проверяй типы** — `npm run typecheck` перед коммитом
6. **Форматируй код** — `npm run format` перед коммитом

---

## 📚 Полезные ссылки

- [Astro документация](https://docs.astro.build)
- [React документация](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
