"use client";

import { Award, Shield, Zap, Leaf, Building2, BadgeCheck } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { TRUST_BADGES } from "@/data/content";

const icons = {
  tier1: Award,
  warranty: Shield,
  projects: Zap,
  carbon: Leaf,
  segments: Building2,
  aneel: BadgeCheck,
} as const;

export default function TrustMarquee() {
  const scope = useSectionSymphony<HTMLElement>({ preset: "entrance" });
  const track = [...TRUST_BADGES, ...TRUST_BADGES];

  return (
    <section ref={scope} className="trust-marquee-shell section-defer" data-motion>
      <div className="trust-marquee-shine" aria-hidden />
      <div className="marquee-fade relative z-[1]">
        <div className="marquee-track py-1">
          {track.map((item, i) => {
            const Icon = icons[item.id];
            return (
              <div key={`${item.id}-${i}`} className="marquee-item-premium">
                <span className="marquee-icon-box">
                  <Icon size={14} className="text-primary" />
                </span>
                <span className="marquee-item-label">{item.label}</span>
                <span className="marquee-separator" aria-hidden />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
