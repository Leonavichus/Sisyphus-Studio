import { useEffect } from "react";
import type { Language } from "../types";
import { LANGUAGE_STORAGE_KEY } from "../config";

export const useLanguageSync = (currentLang: Language): void => {
  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLang);
  }, [currentLang]);
};
