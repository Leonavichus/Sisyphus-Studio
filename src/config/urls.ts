export const URLS = {
  site: import.meta.env.PUBLIC_SITE_URL || "https://sisyphus.studio",
  steam: import.meta.env.PUBLIC_STEAM_URL || "https://store.steampowered.com",
  youtube: import.meta.env.PUBLIC_YOUTUBE_URL || "#",
  donate: import.meta.env.PUBLIC_DONATE_URL || "#",
} as const;
