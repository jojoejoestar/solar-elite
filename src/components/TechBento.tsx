"use client";

import Image from "next/image";
import { Cpu, Smartphone, Wrench, Shield } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { liftHandlers } from "@/lib/motion";
import { SectionHeader } from "./ui/SectionHeader";
import { TECH_LAYOUT } from "@/data/content";
import { useCopy } from "@/i18n/LocaleProvider";

const icons = [Cpu, Shield, Smartphone, Wrench];

export default function TechBento() {
  const scope = useSectionSymphony<HTMLElement>({ preset: "grid" });
  const { copy } = useCopy();

  return (
    <section id="tecnologia" ref={scope} className="section-tight relative overflow-hidden section-defer" data-motion>
      <div className="absolute inset-0 gradient-mesh opacity-70 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="heading">
          <SectionHeader
            eyebrow={copy.tech.eyebrow}
            title={
              <>
                {copy.tech.titleBefore}
                <span className="text-gradient-emerald">{copy.tech.titleHighlight}</span>
              </>
            }
            description={copy.tech.description}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {copy.tech.items.map((item, i) => {
            const layout = TECH_LAYOUT[i]!;
            const Icon = icons[i];
            const secondary = layout.accent === "secondary";
            return (
              <div key={item.title} data-symphony="item" className={`bento-card group ${layout.span}`} {...liftHandlers()}>
                <div className="surface-accent-top" aria-hidden />
                <div className="bento-shine" aria-hidden />

                {layout.image && (
                  <div className="bento-card-image">
                    <Image
                      src={layout.image.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: layout.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,7%)] via-[hsl(222,47%,7%)/0.4] to-transparent" />
                    <span className="bento-card-tag">{item.tag}</span>
                  </div>
                )}

                <div className="bento-card-body">
                  {!layout.image && <span className="bento-card-tag static mb-4 inline-block">{item.tag}</span>}

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
