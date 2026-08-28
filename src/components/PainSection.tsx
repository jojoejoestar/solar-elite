"use client";

import { TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { liftHandlers } from "@/lib/motion";
import { LightParticles } from "./LightEffects";
import { SectionHeader } from "./ui/SectionHeader";
import { useCopy } from "@/i18n/LocaleProvider";

const icons = [TrendingUp, AlertTriangle, DollarSign];

export default function PainSection() {
  const scope = useSectionSymphony<HTMLElement>({ preset: "scrub" });
  const { copy } = useCopy();

  return (
    <section ref={scope} className="section-tight gradient-mesh relative overflow-hidden section-defer" data-motion>
      <LightParticles count={4} className="opacity-25 md:opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="heading">
          <SectionHeader
            eyebrow={copy.pain.eyebrow}
            title={
              <>
                {copy.pain.titleBefore}
                <span className="text-gradient-amber">{copy.pain.titleHighlight}</span>
                {copy.pain.titleAfter}
              </>
            }
            description={copy.pain.description}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {copy.pain.stats.map((stat, i) => {
            const Icon = icons[i];
            const emerald = stat.accent === "emerald";
            return (
              <div key={stat.step} data-symphony="item" className="pain-stat-card" {...liftHandlers()}>
                <div className="surface-accent-top" aria-hidden />
                <span className={`surface-watermark ${emerald ? "card-watermark-emerald" : "card-watermark-amber"}`}>
                  {stat.step}
                </span>

                <div data-card-icon className={`surface-icon mx-auto ${emerald ? "surface-icon-emerald" : ""}`}>
                  <Icon className={emerald ? "text-secondary" : "text-primary"} size={24} />
                </div>

                <p className="surface-label text-primary">{copy.pain.impact} {stat.step}</p>
                <div className="pain-stat-value">{stat.value}</div>
                <p className="surface-desc">{stat.label}</p>
                <p className={`surface-detail ${emerald ? "text-secondary/80" : "text-primary/80"}`}>{stat.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
