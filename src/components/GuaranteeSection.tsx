"use client";

import { ShieldCheck, FileCheck, Headphones } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { liftHandlers } from "@/lib/motion";
import { LightBeams } from "./LightEffects";
import { SectionHeader } from "./ui/SectionHeader";
import { GUARANTEES } from "@/data/content";

const icons = [ShieldCheck, FileCheck, Headphones];

export default function GuaranteeSection() {
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
          {GUARANTEES.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.step} data-symphony="item" className="guarantee-card" {...liftHandlers()}>
                <div className="surface-accent-top" aria-hidden />
                <span className="guarantee-watermark">{item.step}</span>

                <div data-card-icon className="surface-icon surface-icon-emerald mx-auto">
                  <Icon className="text-secondary" size={26} />
                </div>

                <p className="surface-label text-secondary">Garantia {item.step}</p>
                <h3 className="surface-title text-base lg:text-lg mb-3">{item.title}</h3>
                <p className="surface-desc">{item.desc}</p>
                <p className="surface-detail text-secondary/80">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
