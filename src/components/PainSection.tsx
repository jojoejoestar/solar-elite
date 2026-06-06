"use client";

import { TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { cardHoverIn, cardHoverOut } from "@/lib/motion";
import { LightParticles } from "./LightEffects";
import { SectionHeader } from "./ui/SectionHeader";

const stats = [
  {
    icon: TrendingUp,
    step: "01",
    value: "+72%",
    label: "Aumento tarifário nos últimos 5 anos",
    detail: "A conta só sobe — e você não tem controle sobre isso.",
    accent: "primary" as const,
  },
  {
    icon: AlertTriangle,
    step: "02",
    value: "R$ 0",
    label: "Retorno do que você paga à concessionária",
    detail: "Cada real pago é custo, nunca investimento.",
    accent: "primary" as const,
  },
  {
    icon: DollarSign,
    step: "03",
    value: "25 anos",
    label: "De economia com energia solar",
    detail: "Depois do payback, são décadas de energia quase gratuita.",
    accent: "emerald" as const,
  },
];

const PainSection = () => {
  const scope = useSectionSymphony<HTMLElement>({ preset: "scrub" });

  return (
    <section ref={scope} className="section-tight gradient-mesh relative overflow-hidden section-defer" data-motion>
      <LightParticles count={4} className="opacity-25 md:opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="heading">
          <SectionHeader
            eyebrow="O problema"
            title={
              <>
                Todo mês, você <span className="text-gradient-amber">aluga energia</span> e queima dinheiro.
              </>
            }
            description="Está na hora de parar de financiar a concessionária e ser dono da sua própria usina de energia."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={i}
              data-symphony="item"
              className="pain-stat-card"
              tabIndex={0}
              onMouseEnter={(e) => cardHoverIn(e.currentTarget, "[data-card-icon]")}
              onMouseLeave={(e) => cardHoverOut(e.currentTarget, "[data-card-icon]")}
              onFocus={(e) => cardHoverIn(e.currentTarget, "[data-card-icon]")}
              onBlur={(e) => cardHoverOut(e.currentTarget, "[data-card-icon]")}
            >
              <div className="surface-accent-top" aria-hidden />
              <span
                className={`surface-watermark ${s.accent === "emerald" ? "card-watermark-emerald" : "card-watermark-amber"}`}
              >
                {s.step}
              </span>

              <div
                data-card-icon
                className={`surface-icon mx-auto ${s.accent === "emerald" ? "surface-icon-emerald" : ""}`}
              >
                <s.icon className={s.accent === "emerald" ? "text-secondary" : "text-primary"} size={24} />
              </div>

              <p className="surface-label text-primary">Impacto {s.step}</p>
              <div className="pain-stat-value">{s.value}</div>
              <p className="surface-desc">{s.label}</p>
              <p className={`surface-detail ${s.accent === "emerald" ? "text-secondary/80" : "text-primary/80"}`}>
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
