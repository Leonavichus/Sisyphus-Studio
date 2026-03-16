import { Youtube, Gamepad2, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT } from "./contact";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Youtube, href: import.meta.env.PUBLIC_YOUTUBE_URL || "#", label: "YouTube" },
  { icon: Gamepad2, href: import.meta.env.PUBLIC_STEAM_URL || "#", label: "Steam" },
  { icon: Mail, href: `mailto:${CONTACT.email}`, label: "Email" },
];
