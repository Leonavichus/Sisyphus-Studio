import { type FC } from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import type { Language, TranslationStructure } from "../../types";
import { BRAND, COLORS, LAYOUT, SPACING, URLS } from "../../config";
import { ErrorBoundary } from "../common/ErrorBoundary";
import { isMailtoLink } from "../../utils/helpers";

interface FooterProps {
  lang: Language;
  t: TranslationStructure["footer"];
  year: number;
}

const Footer: FC<FooterProps> = ({ t, year }) => {
  const copyright = t.copyright.replace("{year}", String(year));

  const footerLinks = [
    { label: t.links.games, href: "#projects" },
    { label: t.links.about, href: "#about" },
    { label: t.links.news, href: "#news" },
    { label: t.links.contact, href: "#contact" },
  ];

  return (
    <ErrorBoundary>
      <footer
        aria-labelledby="footer-heading"
        style={{ background: COLORS.surface.s1, borderTop: `1px solid ${COLORS.border.default}` }}
      >
        <h2
          id="footer-heading"
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
          }}
        >
          Footer
        </h2>

        <div
          style={{
            maxWidth: LAYOUT.maxWidth,
            margin: "0 auto",
            padding: `${SPACING.footerPadding}px ${LAYOUT.padding}px 40px`,
          }}
        >
          <div style={{ marginBottom: 48 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2
                  className="t-display-md"
                  style={{ color: COLORS.text.primary, marginBottom: 14, lineHeight: 1 }}
                >
                  {t.cta.title} <span style={{ color: COLORS.orange }}>{t.cta.titleSuffix}</span>
                </h2>
                <div className="md-divider-accent" style={{ marginBottom: 16 }} />
                <p
                  className="t-body-lg"
                  style={{ color: COLORS.text.secondary, lineHeight: 1.75, maxWidth: 400 }}
                >
                  {t.cta.description}
                </p>
              </div>
              <div
                className="flex-row"
                style={{ justifyContent: "flex-end", alignItems: "center" }}
              >
                <a
                  href={URLS.donate}
                  target={isMailtoLink(URLS.donate) ? undefined : "_blank"}
                  rel={isMailtoLink(URLS.donate) ? undefined : "noopener noreferrer"}
                  className="btn-filled"
                  style={{
                    height: 42,
                    paddingLeft: 28,
                    paddingRight: 28,
                    fontSize: 14,
                    gap: 8,
                  }}
                >
                  {t.cta.actionText}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${COLORS.border.subtle}`, paddingTop: 24 }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
              <a
                href="#home"
                className="state"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                  padding: "4px 8px",
                  borderRadius: "9999px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/favicon.png"
                  alt="Sisyphus Studio"
                  width={26}
                  height={26}
                  style={{ borderRadius: 6, objectFit: "cover", flexShrink: 0 }}
                />
                <span className="t-brand-lg" style={{ fontSize: 16 }}>
                  {BRAND.prefix}
                  <span style={{ color: COLORS.orange }}>{BRAND.suffix}</span>
                </span>
              </a>

              <nav aria-label="Footer navigation">
                {footerLinks.map((link) => (
                  <a key={link.href} href={link.href} className="footer-nav-link state">
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex-row gap-12" style={{ alignItems: "center" }}>
                <p className="t-body-sm" style={{ color: COLORS.text.tertiary }}>
                  {copyright}
                </p>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="icon-btn-outlined"
                  title="Back to top"
                  style={{ width: 32, height: 32, flexShrink: 0 }}
                >
                  <ArrowUp size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ErrorBoundary>
  );
};

export default Footer;
