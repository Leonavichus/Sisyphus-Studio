import type { Language, NewsCategory } from "../types";

const NEWS_CATEGORIES: NewsCategory[] = ["announcement", "dev-diary", "update"];

const categoryLabels: Record<NewsCategory, Record<Language, string>> = {
  announcement: { en: "Announcement", ru: "Анонс" },
  "dev-diary": { en: "Dev Diary", ru: "Дневник разработки" },
  update: { en: "Update", ru: "Обновление" },
};

const categoryColors: Record<NewsCategory, string> = {
  announcement: "var(--c-orange)",
  "dev-diary": "#7c9ef8",
  update: "#7ec87e",
};

export const getNewsCategories = (): NewsCategory[] => NEWS_CATEGORIES;

export const getCategoryLabel = (category: NewsCategory, lang: Language): string =>
  categoryLabels[category][lang];

export const getCategoryColor = (category: NewsCategory): string => categoryColors[category];
