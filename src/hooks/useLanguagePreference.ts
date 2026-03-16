import { useEffect } from "react";
import type { Language } from "../types";

const STORAGE_KEY = "ss_lang";
const SUPPORTED: Language[] = ["en", "ru"];

export const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && SUPPORTED.includes(stored)) return stored;

  const browser = navigator.language.split("-")[0] as Language;
  return SUPPORTED.includes(browser) ? browser : "en";
};

export const saveLanguagePreference = (lang: Language): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lang);
  }
};

export const useLanguageSync = (currentLang: Language): void => {
  useEffect(() => {
    saveLanguagePreference(currentLang);
  }, [currentLang]);
};

export const getRedirectLang = (currentPathname: string): Language | null => {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (!stored || !SUPPORTED.includes(stored)) return null;

  const pathLang = currentPathname.split("/")[1] as Language;
  return pathLang === stored ? null : stored;
};
