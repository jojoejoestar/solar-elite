"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { liftHandlers } from "@/lib/motion";
import { LightBeams } from "./LightEffects";
import { SectionHeader } from "./ui/SectionHeader";
import { TESTIMONIAL_MEDIA } from "@/data/content";
import { useCopy } from "@/i18n/LocaleProvider";

export default function ProjectsSection() {
  const scope = useSectionSymphony<HTMLElement>({ preset: "alternating" });
  const { copy } = useCopy();

  return (
    <section id="projetos" ref={scope} className="section-tight gradient-mesh-strong relative overflow-hidden section-defer" data-motion>
      <LightBeams className="opacity-30" parallax={false} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="heading">
          <SectionHeader
            eyebrow={copy.projects.eyebrow}
            title={
              <>
                {copy.projects.titleBefore}
                <span className="text-gradient-amber">{copy.projects.titleHighlight}</span>
              </>
            }
            description={copy.projects.description}
          />
        </div>

        <div className="flex flex-col gap-6 lg:gap-8 max-w-5xl mx-auto">
          {copy.projects.testimonials.map((item, i) => {
            const media = TESTIMONIAL_MEDIA[i]!;
            return (
              <div key={item.name} data-symphony="item" className="project-card group" {...liftHandlers()}>
                <div className="surface-accent-top" aria-hidden />

                <div className={`project-image-wrap ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={media.project.src}
                    alt={copy.projects.imageAlt(item.name)}
                    width={media.project.width}
                    height={media.project.height}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,7%)] via-[hsl(222,47%,7%)/0.2] to-transparent pointer-events-none" />

                  <span className="project-verified-badge">{copy.projects.verified}</span>

                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-10">
                    {item.stats.map((stat) => (
                      <div key={stat.label} className="project-stat-pill">
                        <p className="project-stat-value">{stat.value}</p>
                        <p className="project-stat-key">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`project-content ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <Quote className="project-quote-mark" size={36} />
                  <p className="project-quote-text">&ldquo;{item.text}&rdquo;</p>

                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>

                  <div className="project-author">
                    <Image
                      src={media.avatar.src}
                      alt={item.name}
                      width={media.avatar.width}
                      height={media.avatar.height}
                      loading="lazy"
                      className="project-avatar"
                    />
                    <div>
                      <p className="text-sm font-display font-bold text-foreground tracking-[-0.02em]">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
