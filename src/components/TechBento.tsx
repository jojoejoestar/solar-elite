"use client";

import Image from "next/image";
import { Cpu, Smartphone, Wrench, Shield } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { cardHoverIn, cardHoverOut } from "@/lib/motion";
import { images } from "@/lib/images";
import { SectionHeader } from "./ui/SectionHeader";

const items = [
  {
    icon: Cpu,
    tag: "Hardware",
    title: "Módulos Tier 1",
    desc: "Máxima eficiência e certificação internacional. Rendimento superior mesmo em dias nublados.",
    spec: "Eficiência > 21%",
    span: "md:col-span-2",
    image: images.techPanel,
    imagePosition: "center 60%",
    accent: "primary" as const,
  },
  {
    icon: Shield,
    tag: "Inversão",
    title: "Microinversores de Ponta",
    desc: "Cada painel opera de forma independente. Mais segurança, mais geração, menos perdas.",
    spec: "Monitoramento individual",
    span: "",
    image: null,
    accent: "secondary" as const,
  },
  {
    icon: Smartphone,
    tag: "Software",
    title: "Monitoramento 24/7",
    desc: "Geração, economia e performance em tempo real pelo app.",
    spec: "App iOS & Android",
    span: "",
    image: null,
    accent: "primary" as const,
  },
  {
    icon: Wrench,
    tag: "Execução",
    title: "Instalação Cirúrgica",
    desc: "Equipe própria especializada. Do projeto ao comissionamento em tempo recorde.",
    spec: "Obra em até 5 dias",
    span: "md:col-span-2",
    image: images.techInstallation,
    imagePosition: "center 30%",
    accent: "secondary" as const,
  },
];

const TechBento = () => {
  const scope = useSectionSymphony<HTMLElement>({ preset: "grid" });

  return (
    <section id="tecnologia" ref={scope} className="section-tight relative overflow-hidden section-defer" data-motion>
      <div className="absolute inset-0 gradient-mesh opacity-70 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="heading">
          <SectionHeader
            eyebrow="Stack tecnológico"
            title={
              <>
                Tecnologia que <span className="text-gradient-emerald">gera resultados</span>
              </>
            }
            description="Componentes selecionados para maximizar retorno e longevidade do sistema."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              data-symphony="item"
              className={`bento-card group ${item.span}`}
              tabIndex={0}
              onMouseEnter={(e) => cardHoverIn(e.currentTarget, "[data-card-icon]")}
              onMouseLeave={(e) => cardHoverOut(e.currentTarget, "[data-card-icon]")}
              onFocus={(e) => cardHoverIn(e.currentTarget, "[data-card-icon]")}
              onBlur={(e) => cardHoverOut(e.currentTarget, "[data-card-icon]")}
            >
              <div className="surface-accent-top" aria-hidden />
              <div className="bento-shine" aria-hidden />

              {item.image && (
                <div className="bento-card-image">
                  <Image
                    src={item.image.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: item.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,7%)] via-[hsl(222,47%,7%)/0.4] to-transparent" />
                  <span className="bento-card-tag">{item.tag}</span>
                </div>
              )}

              <div className="bento-card-body">
                {!item.image && <span className="bento-card-tag static mb-4 inline-block">{item.tag}</span>}

                <div
                  data-card-icon
                  className={`surface-icon mb-4 ${item.accent === "secondary" ? "surface-icon-emerald" : ""}`}
                >
                  <item.icon
                    className={item.accent === "secondary" ? "text-secondary" : "text-primary"}
                    size={20}
                  />
                </div>

                <h3 className="surface-title">{item.title}</h3>
                <p className="surface-desc">{item.desc}</p>
                <span className="bento-spec-chip">{item.spec}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechBento;
