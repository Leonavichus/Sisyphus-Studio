import type { Language } from "../types";

export const LANGUAGE_STORAGE_KEY = "ss_lang";

export const SUPPORTED_LANGUAGES = ["en", "ru"] as const satisfies readonly Language[];
