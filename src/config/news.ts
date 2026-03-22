import type { Language, NewsCategory } from "../types";
import { COLORS } from "./design";

export const NEWS_CATEGORY_ORDER: NewsCategory[] = ["announcement", "dev-diary", "update"];

const categoryLabels: Record<NewsCategory, Record<Language, string>> = {
  announcement: { en: "Announcement", ru: "Анонс" },
  "dev-diary": { en: "Dev Diary", ru: "Дневник разработки" },
  update: { en: "Update", ru: "Обновление" },
};

const categoryColors: Record<NewsCategory, string> = {
  announcement: COLORS.news.announcement,
  "dev-diary": COLORS.news.devDiary,
  update: COLORS.news.update,
};

export const getNewsCategories = (): NewsCategory[] => NEWS_CATEGORY_ORDER;

export const getCategoryLabel = (category: NewsCategory, lang: Language): string =>
  categoryLabels[category][lang];

export const getCategoryColor = (category: NewsCategory): string => categoryColors[category];
