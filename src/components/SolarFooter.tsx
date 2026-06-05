"use client";

import { BrandLogo } from "@/components/BrandLogo";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Clock,
  ArrowUp,
  Zap,
  Shield,
  Award,
} from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { scrollToAnchor } from "@/lib/lenis";

const sectionLinks = [
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Simulador", href: "#calculadora" },
  { label: "Projetos", href: "#projetos" },
  { label: "Garantias", href: "#garantias" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const prestigeStats = [
  { value: "500+", label: "Projetos entregues" },
  { value: "12 MW", label: "Capacidade instalada" },
  { value: "25 anos", label: "Garantia de performance" },
  { value: "98%", label: "Satisfação dos clientes" },
];

const certifications = ["Tier 1", "ANEEL", "ART Inclusa", "Suporte Vitalício"];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToAnchor(href, -88);
    }
  };

  return (
    <a href={href} onClick={handleClick} className="footer-link">
      {children}
    </a>
  );
}

const SolarFooter = () => {
  const scope = useSectionSymphony<HTMLElement>({ preset: "footer" });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer ref={scope} className="footer-premium" data-motion>
      <div className="footer-grid-bg" aria-hidden />
      <div className="absolute top-0 left-0 right-0 glow-divider-strong" />

      <div data-symphony="prestige" className="footer-prestige-band">
        <div className="footer-prestige-inner">
          {prestigeStats.map((stat, i) => (
            <div key={i} className="footer-prestige-stat">
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
              Engenharia fotovoltaica de alta performance. Transformamos o sol em ativos financeiros de alta rentabilidade para residências e empresas.
            </p>

            <div className="footer-cert-row">
              {certifications.map((cert) => (
                <span key={cert} className="footer-cert-badge">
                  {cert}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Zap size={14} className="text-primary" />
                <span>Energia limpa</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield size={14} className="text-secondary" />
                <span>Garantia total</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Award size={14} className="text-primary" />
                <span>Tier 1</span>
              </div>
            </div>
          </div>

          <div data-symphony="col" className="lg:col-span-3">
            <h4 className="footer-col-title">Navegação</h4>
            <ul className="space-y-3.5">
              {sectionLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div data-symphony="col" className="lg:col-span-4">
            <h4 className="footer-col-title">Contato</h4>
            <div className="space-y-4">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <MapPin size={13} className="text-primary" />
                </span>
                <span>Av. Paulista, 1000 — São Paulo, SP</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Phone size={13} className="text-primary" />
                </span>
                <span>(11) 99999-0000</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Mail size={13} className="text-primary" />
                </span>
                <span>contato@solarelite.com.br</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Clock size={13} className="text-primary" />
                </span>
                <span>Seg–Sex: 08h às 18h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-symphony="bottom" className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SolarElite Energia. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={`Rede social ${i + 1}`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            <button onClick={scrollToTop} className="footer-social-btn" aria-label="Voltar ao topo">
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="footer-credit">
          <p className="footer-credit-text">
            Next.js Architecture ©{" "}
            <a
              href="https://agentejoestar.online"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Agente Joestar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SolarFooter;
