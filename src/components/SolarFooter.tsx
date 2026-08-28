"use client";

import { BrandLogo } from "@/components/BrandLogo";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Clock, ArrowUp, Zap, Shield, Award } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { scrollToAnchor } from "@/lib/lenis";
import { AnchorLink } from "@/components/AnchorLink";
import { CONTACT, SITE, SOCIAL } from "@/data/site";
import { useCopy } from "@/i18n/LocaleProvider";

const socialIcons = {
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
} as const;

export default function SolarFooter() {
  const scope = useSectionSymphony<HTMLElement>({ preset: "footer" });
  const { copy } = useCopy();

  return (
    <footer ref={scope} className="footer-premium" data-motion>
      <div className="footer-grid-bg" aria-hidden />
      <div className="absolute top-0 left-0 right-0 glow-divider-strong" />

      <div data-symphony="prestige" className="footer-prestige-band">
        <div className="footer-prestige-inner">
          {copy.footer.prestige.map((stat) => (
            <div key={stat.label} className="footer-prestige-stat">
              <p className="footer-prestige-value">{stat.value}</p>
              <p className="footer-prestige-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div data-symphony="col" className="lg:col-span-5 footer-brand-block">
            <div className="footer-brand-logo">
              <BrandLogo variant="footer" />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {copy.footer.blurb}
            </p>

            <div className="footer-cert-row">
              {copy.footer.certifications.map((cert) => (
                <span key={cert} className="footer-cert-badge">
                  {cert}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Zap size={14} className="text-primary" />
                <span>{copy.footer.cleanEnergy}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield size={14} className="text-secondary" />
                <span>{copy.footer.fullWarranty}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Award size={14} className="text-primary" />
                <span>Tier 1</span>
              </div>
            </div>
          </div>

          <div data-symphony="col" className="lg:col-span-3">
            <h4 className="footer-col-title">{copy.footer.navTitle}</h4>
            <ul className="space-y-3.5">
              {copy.footer.links.map((link) => (
                <li key={link.href}>
                  <AnchorLink href={link.href} className="footer-link">
                    {link.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          <div data-symphony="col" className="lg:col-span-4">
            <h4 className="footer-col-title">{copy.footer.contactTitle}</h4>
            <div className="space-y-4">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <MapPin size={13} className="text-primary" />
                </span>
                <span>{CONTACT.address}</span>
              </div>
              <a href={CONTACT.phoneHref} className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Phone size={13} className="text-primary" />
                </span>
                <span>{CONTACT.phone}</span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Mail size={13} className="text-primary" />
                </span>
                <span>{CONTACT.email}</span>
              </a>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Clock size={13} className="text-primary" />
                </span>
                <span>{copy.footer.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-symphony="bottom" className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.legalName}. {copy.footer.copyright}
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {SOCIAL.map((item) => {
                const Icon = socialIcons[item.label];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={item.label}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => scrollToAnchor("#")}
              className="footer-social-btn"
              aria-label={copy.footer.backToTop}
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="footer-credit">
          <p className="footer-credit-text">
            Next.js Architecture ©{" "}
            <a href="https://agentejoestar.online" target="_blank" rel="noopener noreferrer" className="footer-credit-link">
              Agente Joestar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
