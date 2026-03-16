export const TRANSITIONS = {
  default: ".3s cubic-bezier(0.2,0,0,1)",
  fast: ".2s cubic-bezier(0.2,0,0,1)",
  slow: ".65s cubic-bezier(0.2,0,0,1)",
  smooth: ".25s cubic-bezier(0.2,0,0,1)",
} as const;

export const INTERSECTION_OBSERVER = {
  navbar: {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0,
  },
} as const;
