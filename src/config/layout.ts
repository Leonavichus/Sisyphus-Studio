export const SPACING = {
  sectionPadding: "100px 0",
  cardPadding: {
    news: "clamp(14px,4vw,26px) clamp(14px,5vw,28px) clamp(16px,4vw,32px)",
    project: "32px 40px 36px",
  },
  navLinkMargin: 20,
  footerPadding: 72,
} as const;

export const SIZES = {
  newsCard: {
    height: "clamp(260px, 55vw, 480px)",
    titleSize: "clamp(16px,3.5vw,26px)",
    summarySize: "clamp(12px,2vw,15px)",
    maxSummaryWidth: 500,
  },
  modal: {
    maxWidth: 720,
  },
} as const;

export const GRID = {
  background: {
    opacity: 0.022,
    borderOpacity: 0.06,
  },
} as const;
