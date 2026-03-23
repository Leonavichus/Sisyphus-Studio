export type PartnerLogoStyle = "orange" | "blue" | "green" | "purple";
export type PartnerCategory = "strategic" | "audio" | "tech" | "media";

export interface PartnerLink {
  website?: string;
  steam?: string;
  twitter?: string;
  github?: string;
}

export interface Partner {
  id: string;
  logoInitials: string;
  logoStyle: PartnerLogoStyle;
  category: PartnerCategory;
  featured?: boolean;
  links: PartnerLink;
  en: { name: string; description: string };
  ru: { name: string; description: string };
}

export const PARTNERS: Partner[] = [
  {
    id: "dark-night",
    logoInitials: "DN",
    logoStyle: "orange",
    category: "strategic",
    featured: false,
    links: {
      website: "https://darknightstudio.com",
      steam: "https://store.steampowered.com",
      twitter: "https://twitter.com",
    },
    en: {
      name: "Dark Night",
      description:
        "Our closest creative ally — an independent studio with deep roots in narrative and atmospheric design. We share pipeline tools, asset libraries, and run cross-studio playtesting sessions.",
    },
    ru: {
      name: "Dark Night",
      description:
        "Наш ближайший творческий союзник — независимая студия с глубокими корнями в нарративном дизайне. Делимся инструментами пайплайна, библиотеками ассетов и проводим совместные плейтесты.",
    },
  },
];
