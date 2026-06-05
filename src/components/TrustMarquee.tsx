"use client";

import { Award, Shield, Zap, Leaf, Building2, BadgeCheck } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";

const items = [
  { icon: Award, label: "Tier 1 Certified" },
  { icon: Shield, label: "Garantia 25 Anos" },
  { icon: Zap, label: "+500 Projetos" },
  { icon: Leaf, label: "Zero Carbono" },
  { icon: Building2, label: "Residencial & Comercial" },
  { icon: BadgeCheck, label: "Homologação ANEEL" },
];

const TrustMarquee = () => {
  const scope = useSectionSymphony<HTMLElement>({ preset: "entrance" });

  const track = [...items, ...items];

  return (
    <section ref={scope} className="trust-marquee-shell section-defer" data-motion>
      <div className="trust-marquee-shine" aria-hidden />
      <div className="marquee-fade relative z-[1]">
        <div className="marquee-track py-1">
          {track.map((item, i) => (
            <div key={i} className="marquee-item-premium">
              <span className="marquee-icon-box">
                <item.icon size={14} className="text-primary" />
              </span>
              <span className="marquee-item-label">{item.label}</span>
              <span className="marquee-separator" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;
