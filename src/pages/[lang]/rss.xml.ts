import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import type { Language } from "../../types";
import { TRANSLATIONS } from "../../i18n/translations";

export const prerender = true;

export function getStaticPaths() {
  return [{ params: { lang: "en" } }, { params: { lang: "ru" } }];
}

export const GET: APIRoute = async ({ params, site }) => {
  const lang = params.lang as Language;
  const t = TRANSLATIONS[lang];
  const entries = await getCollection("news");
  const sorted = entries.sort((a, b) => a.id.localeCompare(b.id));

  return rss({
    title: t.meta.rssTitle,
    description: t.meta.rssDescription,
    site: site!,
    items: sorted.map((e) => ({
      title: e.data[lang].title,
      pubDate: new Date(e.data.isoDate),
      description: e.data[lang].summary,
      content: e.data[lang].body,
      link: `/${lang}/#news-item-${sorted.indexOf(e)}`,
    })),
    customData: `<language>${lang === "ru" ? "ru-ru" : "en-us"}</language>`,
  });
};
