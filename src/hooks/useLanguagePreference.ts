import { useEffect } from "react";
import type { Language } from "../types";

const STORAGE_KEY = "ss_lang";

export const useLanguageSync = (currentLang: Language): void => {
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, currentLang);
  }, [currentLang]);
};
