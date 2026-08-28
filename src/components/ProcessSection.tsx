"use client";

import { useState } from "react";
import { ClipboardList, PenTool, HardHat, TrendingUp } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { cardHoverIn, cardHoverOut } from "@/lib/motion";
import { gsap } from "@/lib/gsap";
import { SectionHeader } from "./ui/SectionHeader";
import { useCopy } from "@/i18n/LocaleProvider";

const icons = [ClipboardList, PenTool, HardHat, TrendingUp];

const watermarkClass = {
  amber: "card-watermark-amber",
  emerald: "card-watermark-emerald",
  dual: "card-watermark-dual",
} as const;

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const { copy } = useCopy();

  const scope = useSectionSymphony<HTMLElement>({
    preset: "grid",
    extra: (q) => {
      if (!window.matchMedia("(min-width: 1024px)").matches) return;
      const grid = q('[data-symphony="grid"]')[0];
      if (!grid) return;

      gsap.fromTo(
        q('[data-symphony="connector"]'),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.35,
          ease: "power2.inOut",
          immediateRender: false,
          scrollTrigger: { trigger: grid, start: "top 78%", once: true },
        },
      );

      gsap.fromTo(
        q('[data-symphony="node"]'),
        { scale: 0, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: "back.out(2)",
          immediateRender: false,
          scrollTrigger: { trigger: grid, start: "top 76%", once: true },
        },
      );
    },
  });

  const onCardEnter = (index: number, el: HTMLDivElement | null) => {
    setActiveStep(index);
    cardHoverIn(el, "[data-process-icon]");
  };

  const onCardLeave = (el: HTMLDivElement | null) => {
    setActiveStep(null);
    cardHoverOut(el, "[data-process-icon]");
  };

  return (
    <section id="processo" ref={scope} className="section-tight relative overflow-hidden section-defer" data-motion>
      <div className="absolute inset-0 gradient-mesh opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="heading">
          <SectionHeader
            eyebrow={copy.process.eyebrow}
            align="left"
            title={
              <>
                {copy.process.titleBefore}
                <span className="text-gradient-emerald">{copy.process.titleHighlight}</span>
                {copy.process.titleAfter}
              </>
            }
            description={copy.process.description}
          />
        </div>

        <div className="relative">
          <div data-symphony="connector" className="process-connector-v2 origin-left scale-x-0" aria-hidden />

          <div data-symphony="grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {copy.process.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={step.step}
                  data-symphony="item"
                  className="process-step-card group"
                  onMouseEnter={(e) => onCardEnter(i, e.currentTarget)}
                  onMouseLeave={(e) => onCardLeave(e.currentTarget)}
                  onFocus={(e) => onCardEnter(i, e.currentTarget)}
                  onBlur={(e) => onCardLeave(e.currentTarget)}
                  tabIndex={0}
                  role="article"
                  aria-label={copy.process.stepAria(step.step, step.title)}
                >
                  <div data-symphony="node" className="process-step-node" aria-hidden>
                    <span className="process-step-node-inner" />
                  </div>

                  <span className={`process-step-watermark ${watermarkClass[step.watermark]}`}>{step.step}</span>
                  <div className="process-step-accent" aria-hidden />

                  <div data-process-icon className={`process-step-icon ${activeStep === i ? "process-step-icon-active" : ""}`}>
                    <Icon className="text-secondary" size={22} strokeWidth={1.75} />
                  </div>

                  <p className="process-step-label">{copy.process.stepLabel} {step.step}</p>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.desc}</p>
                  <p className="process-step-detail">{step.detail}</p>

                  <div className="process-step-progress" aria-hidden>
                    <span style={{ width: activeStep === i ? "100%" : `${(i + 1) * 25}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
