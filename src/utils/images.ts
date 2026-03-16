import type { SyntheticEvent } from "react";

const getImagePath = (path: string): string => `/images/${path}`;

export const getHeroImage = (name: string): string => getImagePath(`hero/${name}.jpg`);

const makePlaceholderSvg = (width: number, height: number): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="#202020"/><rect x="${width / 2 - 20}" y="${height / 2 - 20}" width="40" height="40" rx="8" fill="none" stroke="#333" stroke-width="2"/><line x1="${width / 2 - 10}" y1="${height / 2}" x2="${width / 2 + 10}" y2="${height / 2}" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="${width / 2}" y1="${height / 2 - 10}" x2="${width / 2}" y2="${height / 2 + 10}" stroke="#333" stroke-width="2" stroke-linecap="round"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export const handleImageError = (
  e: SyntheticEvent<HTMLImageElement>,
  width = 800,
  height = 600,
) => {
  const target = e.target as HTMLImageElement | null;
  if (!target || target.dataset.fallback) return;
  target.dataset.fallback = "1";
  target.src = makePlaceholderSvg(width, height);
};

export const nativeImageFallback = (width = 800, height = 600): string =>
  `if(!this.dataset.fallback){this.dataset.fallback='1';this.src='data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'><rect width='${width}' height='${height}' fill='%23202020'/></svg>`)}';}`;

