"use client";

import { ShieldCheck, FileCheck, Headphones } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { cardHoverIn, cardHoverOut } from "@/lib/motion";
import { LightBeams } from "./LightEffects";
import { SectionHeader } from "./ui/SectionHeader";

const items = [
  {
    icon: ShieldCheck,
    step: "01",
    title: "Garantia de Performance de 25 Anos",
    desc: "Se o sistema não performar conforme projetado, nós assumimos a responsabilidade.",
    detail: "Cobertura completa de geração e equipamentos.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "100% da Burocracia Resolvida",
    desc: "Projeto, ART, homologação com a concessionária e toda documentação por nossa conta.",
    detail: "Você não precisa lidar com papelada ou concessionária.",
  },
  {
    icon: Headphones,
    step: "03",
    title: "Suporte Técnico Vitalício",
    desc: "Equipe dedicada para manutenção preventiva e suporte pós-instalação.",
    detail: "Monitoramento proativo e visitas preventivas programadas.",
  },
];

const GuaranteeSection = () => {
  const scope = useSectionSymphony<HTMLElement>({ preset: "scrub" });

  return (
    <section id="garantias" ref={scope} className="section-tight relative overflow-hidden section-defer" data-motion>
      <LightBeams className="opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="heading">
          <SectionHeader
            eyebrow="Tranquilidade total"
            title={
              <>
                Risco <span className="text-gradient-emerald">zero</span> para você
              </>
            }
            description="Nós cuidamos de absolutamente tudo. Você só precisa aproveitar a economia."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              data-symphony="item"
              className="guarantee-card"
              tabIndex={0}
              onMouseEnter={(e) => cardHoverIn(e.currentTarget, "[data-card-icon]")}
              onMouseLeave={(e) => cardHoverOut(e.currentTarget, "[data-card-icon]")}
              onFocus={(e) => cardHoverIn(e.currentTarget, "[data-card-icon]")}
              onBlur={(e) => cardHoverOut(e.currentTarget, "[data-card-icon]")}
            >
              <div className="surface-accent-top" aria-hidden />
              <span className="guarantee-watermark">{item.step}</span>

              <div data-card-icon className="surface-icon surface-icon-emerald mx-auto">
                <item.icon className="text-secondary" size={26} />
              </div>

              <p className="surface-label text-secondary">Garantia {item.step}</p>
              <h3 className="surface-title text-base lg:text-lg mb-3">{item.title}</h3>
              <p className="surface-desc">{item.desc}</p>
              <p className="surface-detail text-secondary/80">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
