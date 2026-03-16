import type { Language, FooterSlide } from "../types";

export const FOOTER_SLIDES: Record<Language, FooterSlide[]> = {
  en: [
    {
      id: "support",
      subtitle: "Community",
      title: "Support The",
      titleSuffix: "Journey",
      description:
        "If you'd like to become a sponsor or simply support our company financially, you can do so here!",
      type: "action",
      actionText: "Donate",
      href: import.meta.env.PUBLIC_DONATE_URL || "#",
    },
  ],
  ru: [
    {
      id: "support",
      subtitle: "Сообщество",
      title: "Поддержи",
      titleSuffix: "Нас",
      description:
        "Если вы хотите стать спонсором или просто поддержать нашу компанию финансово, вы можете это сделать тут!",
      type: "action",
      actionText: "Пожертвовать",
      href: import.meta.env.PUBLIC_DONATE_URL || "#",
    },
  ],
};
