import { Sun, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Clock, ArrowUp } from "lucide-react";

const footerLinks = {
  empresa: [
    { label: "Sobre Nós", href: "#" },
    { label: "Nossa Equipe", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Blog", href: "#" },
  ],
  solucoes: [
    { label: "Residencial", href: "#" },
    { label: "Comercial & Industrial", href: "#" },
    { label: "Usinas Solares", href: "#" },
    { label: "Manutenção Preventiva", href: "#" },
  ],
  suporte: [
    { label: "Central de Ajuda", href: "#" },
    { label: "Garantias", href: "#garantias" },
    { label: "Homologação", href: "#" },
    { label: "Monitoramento", href: "#" },
  ],
};

const SolarFooter = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border">
      {/* Main footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-6 w-6 text-primary" />
              <span className="text-lg font-extrabold text-foreground tracking-tight">
                Solar<span className="text-primary">Elite</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Engenharia fotovoltaica de alta performance. Transformamos o sol em ativos financeiros de alta rentabilidade para residências e empresas em todo o Brasil.
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>Av. Paulista, 1000 — São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span>(11) 99999-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span>contato@solarelite.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary shrink-0" />
                <span>Seg–Sex: 08h às 18h</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                {title === "empresa" ? "Empresa" : title === "solucoes" ? "Soluções" : "Suporte"}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SolarElite Energia. Todos os direitos reservados. CNPJ 00.000.000/0001-00
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
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
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Signature */}
        <div className="text-center pb-6">
          <p className="text-xs text-muted-foreground">
            Design Original{" "}
            <a
              href="https://agentejoestar.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
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
