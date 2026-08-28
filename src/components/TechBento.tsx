"use client";

import Image from "next/image";
import { Cpu, Smartphone, Wrench, Shield } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { liftHandlers } from "@/lib/motion";
import { SectionHeader } from "./ui/SectionHeader";
import { TECH_ITEMS } from "@/data/content";

const icons = [Cpu, Shield, Smartphone, Wrench];

export default function TechBento() {
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
          {TECH_ITEMS.map((item, i) => {
            const Icon = icons[i];
            const secondary = item.accent === "secondary";
            return (
              <div key={item.title} data-symphony="item" className={`bento-card group ${item.span}`} {...liftHandlers()}>
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

                  <div data-card-icon className={`surface-icon mb-4 ${secondary ? "surface-icon-emerald" : ""}`}>
                    <Icon className={secondary ? "text-secondary" : "text-primary"} size={20} />
                  </div>

                  <h3 className="surface-title">{item.title}</h3>
                  <p className="surface-desc">{item.desc}</p>
                  <span className="bento-spec-chip">{item.spec}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
