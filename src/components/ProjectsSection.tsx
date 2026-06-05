"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { cardHoverIn, cardHoverOut } from "@/lib/motion";
import { LightBeams } from "./LightEffects";
import { images } from "@/lib/images";
import { SectionHeader } from "./ui/SectionHeader";

const testimonials = [
  {
    name: "Ricardo M.",
    role: "Empresário — Usina Comercial 120kWp",
    text: "O retorno veio antes do previsto. Em 3 anos já paguei o sistema e agora é lucro puro. A equipe da SolarElite cuidou de tudo.",
    avatar: images.avatars.ricardo,
    project: images.projects.ricardo,
    stats: { economia: "R$ 18.400/mês", payback: "3 anos", potencia: "120 kWp" },
  },
  {
    name: "Fernanda S.",
    role: "Residencial High-End — 15kWp",
    text: "Minha conta caiu de R$ 1.800 para R$ 90. E o monitoramento pelo app é incrível. Recomendo de olhos fechados.",
    avatar: images.avatars.fernanda,
    project: images.projects.fernanda,
    stats: { economia: "R$ 1.710/mês", payback: "4 anos", potencia: "15 kWp" },
  },
  {
    name: "Dr. Paulo H.",
    role: "Clínica Médica — 45kWp",
    text: "Profissionalismo impecável. Desde o projeto até a homologação com a concessionária, zero problemas.",
    avatar: images.avatars.paulo,
    project: images.projects.paulo,
    stats: { economia: "R$ 6.800/mês", payback: "3.5 anos", potencia: "45 kWp" },
  },
];

const ProjectsSection = () => {
  const scope = useSectionSymphony<HTMLElement>({ preset: "alternating" });

  return (
    <section id="projetos" ref={scope} className="section-tight gradient-mesh-strong relative overflow-hidden section-defer" data-motion>
      <LightBeams className="opacity-30" parallax={false} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="heading">
          <SectionHeader
            eyebrow="Cases reais"
            title={
              <>
                Quem investiu, <span className="text-gradient-amber">já colhe os resultados</span>
              </>
            }
            description="Retorno comprovado em projetos residenciais e comerciais."
          />
        </div>

        <div className="flex flex-col gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-symphony="item"
              className="project-card group"
              tabIndex={0}
              onMouseEnter={(e) => cardHoverIn(e.currentTarget)}
              onMouseLeave={(e) => cardHoverOut(e.currentTarget)}
              onFocus={(e) => cardHoverIn(e.currentTarget)}
              onBlur={(e) => cardHoverOut(e.currentTarget)}
            >
              <div className="surface-accent-top" aria-hidden />

              <div className={`project-image-wrap ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={t.project}
                  alt={`Projeto solar — ${t.name}`}
                  width={t.project.width}
                  height={t.project.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,7%)] via-[hsl(222,47%,7%)/0.2] to-transparent pointer-events-none" />

                <span className="project-verified-badge">Projeto verificado</span>

                <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-10">
                  {Object.entries(t.stats).map(([key, val]) => (
                    <div key={key} className="project-stat-pill">
                      <p className="project-stat-value">{val}</p>
                      <p className="project-stat-key">{key}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`project-content ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <Quote className="project-quote-mark" size={36} />
                <p className="project-quote-text">&ldquo;{t.text}&rdquo;</p>

                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>

                <div className="project-author">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    className="project-avatar"
                  />
                  <div>
                    <p className="text-sm font-display font-bold text-foreground tracking-[-0.02em]">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
