export const COLORS = {
  orange: "#f87e0f",
  orangeDim: "rgba(248,126,15,.1)",
  orangeBorder: "rgba(248,126,15,.2)",
  error: "#f87272",
  surface: {
    s1: "#0d0d0d",
    s2: "#111",
    s3: "#151515",
    s4: "#1a1a1a",
    s5: "#202020",
  },
  text: {
    primary: "#f0ece8",
    secondary: "#999",
    tertiary: "#737373",
  },
  border: {
    subtle: "rgba(255,255,255,.06)",
    default: "rgba(255,255,255,.07)",
    strong: "rgba(255,255,255,.08)",
  },
} as const;

export const LAYOUT = {
  maxWidth: 1280,
  padding: 20,
  navHeight: 60,
} as const;
