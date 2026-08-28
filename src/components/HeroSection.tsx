"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, PhoneCall, ChevronDown, Zap, Users, Award } from "lucide-react";
import { gsap, useGSAP, MOTION_EASE, MOTION_MEDIA } from "@/lib/gsap";
import { SunRays, LightParticles } from "./LightEffects";
import { images } from "@/lib/images";
import { InteractiveTitle } from "@/components/motion/InteractiveTitle";
import { AnchorLink } from "@/components/AnchorLink";
import { HERO_METRICS } from "@/data/content";

const metricIcons = {
  projects: Zap,
  capacity: Users,
  satisfaction: Award,
} as const;

export default function HeroSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: MOTION_MEDIA.desktop,
          reduceMotion: MOTION_MEDIA.reduceMotion,
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions ?? {};
          const root = scope.current;
          if (!root) return;

          const q = gsap.utils.selector(root);

          if (reduceMotion) {
            gsap.set(q("[data-hero]"), { autoAlpha: 1, y: 0, yPercent: 0, clearProps: "transform" });
            return;
          }

          gsap.set(q("[data-hero='media'], [data-hero='line-inner'], [data-hero='frame']"), {
            autoAlpha: 1,
            clearProps: "visibility",
          });

          const entrance = gsap.timeline({ defaults: { ease: MOTION_EASE.entrance } });

          entrance
            .fromTo(q("[data-hero='frame']"), { scale: 0.985 }, { scale: 1, duration: 0.8, immediateRender: false })
            .fromTo(q("[data-hero='badge']"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6, immediateRender: false }, 0.08)
            .fromTo(q("[data-hero='line-inner']"), { yPercent: 110 }, { yPercent: 0, duration: 0.85, stagger: 0.09, immediateRender: false }, 0.14)
            .fromTo(q("[data-hero='subtitle']"), { y: 14, autoAlpha: 0.72 }, { y: 0, autoAlpha: 1, duration: 0.65, immediateRender: false }, 0.34)
            .fromTo(
              q("[data-hero='actions'] > *"),
              { autoAlpha: 0, y: 18, scale: 0.96 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: MOTION_EASE.cta, immediateRender: false },
              0.48,
            )
            .fromTo(q("[data-hero='divider']"), { scaleX: 0, autoAlpha: 0 }, { scaleX: 1, autoAlpha: 1, duration: 0.7, ease: "power2.inOut", immediateRender: false }, 0.58)
            .fromTo(
              q("[data-hero='metric']"),
              { autoAlpha: 0, y: 24, scale: 0.94 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.1, ease: "back.out(1.2)", immediateRender: false },
              0.65,
            )
            .fromTo(q("[data-hero='scroll-hint']"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4, immediateRender: false }, 0.9);

          gsap.to(q("[data-hero='scroll-hint']"), {
            y: 6,
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut",
            delay: 1.2,
          });

          if (isDesktop) {
            gsap.to(q("[data-hero='media-inner']"), {
              scale: 1.06,
              ease: "none",
              scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: 1 },
            });
          }
        },
        scope,
      );

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      className="hero-section relative flex items-start sm:items-center justify-center overflow-hidden"
      data-motion
    >
      <div data-hero="media" className="absolute inset-0">
        <div data-hero="media-inner" className="absolute inset-0 md:will-change-transform">
          <Image
            src={images.hero.src}
            alt="Residência moderna com painéis solares no telhado"
            fill
            priority
            fetchPriority="high"
            quality={78}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="hero-overlay-radial absolute inset-0 pointer-events-none" />
        <div className="hero-overlay-vignette absolute inset-0 pointer-events-none" />
        <div className="hero-overlay-top absolute inset-0 pointer-events-none" />
        <div className="hero-tech-grid absolute inset-0 pointer-events-none" aria-hidden />
      </div>

      <div data-hero="rays" className="pointer-events-none">
        <SunRays className="top-8 left-1/2 -translate-x-1/2 opacity-30 hidden lg:block scale-75" />
      </div>
      <LightParticles count={6} className="z-[1] opacity-45 sm:opacity-60 md:hidden" />
      <LightParticles count={10} className="z-[1] opacity-55 sm:opacity-70 hidden md:block" />

      <div className="hero-corner hero-corner-tl" aria-hidden />
      <div className="hero-corner hero-corner-tr" aria-hidden />
      <div className="hero-corner hero-corner-bl" aria-hidden />
      <div className="hero-corner hero-corner-br" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 lg:px-8 w-full">
        <div data-hero="frame" className="hero-stage mx-auto flex flex-col items-center text-center will-change-transform">
          <div className="hero-eyebrow-row">
            <span className="hero-hud-line" aria-hidden />
            <span data-hero="badge" className="hero-badge-premium">
              <span className="hero-badge-dot" />
              Engenharia Fotovoltaica de Elite
            </span>
            <span className="hero-hud-line" aria-hidden />
          </div>

          <InteractiveTitle
            as="h1"
            className="hero-title text-display text-foreground text-[1.75rem] leading-[1.14] sm:text-5xl sm:leading-tight md:text-6xl lg:text-[4.25rem] xl:text-7xl"
          >
            <span className="line-mask block" data-hero="line">
              <span className="line-inner" data-hero="line-inner">
                Transforme o Sol em um
              </span>
            </span>
            <span className="line-mask block" data-hero="line">
              <span className="line-inner" data-hero="line-inner">
                <span className="text-gradient-amber text-glow-amber">Ativo Financeiro</span> de Alta
              </span>
            </span>
            <span className="line-mask block" data-hero="line">
              <span className="line-inner" data-hero="line-inner">
                Rentabilidade.
              </span>
            </span>
          </InteractiveTitle>

          <p data-hero="subtitle" className="hero-subtitle text-pretty">
            <span className="hero-subtitle-accent">Independência energética</span>, proteção contra{" "}
            <span className="hero-subtitle-accent">inflação tarifária</span> e{" "}
            <span className="hero-subtitle-accent">valorização imediata</span> do seu imóvel.
          </p>

          <div data-hero="actions" className="hero-actions">
            <AnchorLink
              href="#calculadora"
              className="hero-action-btn btn-primary-premium px-5 py-3 sm:px-7 sm:py-4 rounded-lg font-bold text-sm sm:text-base text-primary-foreground glow-amber-strong w-full sm:w-auto"
            >
              Simular Economia
              <ArrowRight size={18} />
            </AnchorLink>
            <AnchorLink
              href="#contato"
              className="hero-action-btn btn-ghost-premium px-5 py-3 sm:px-7 sm:py-4 rounded-lg font-semibold text-sm sm:text-base text-foreground w-full sm:w-auto"
            >
              <PhoneCall size={18} />
              Falar com Engenheiro
            </AnchorLink>
          </div>

          <div data-hero="divider" className="hero-tech-divider origin-center hidden sm:flex" aria-hidden>
            <span className="hero-tech-divider-line" />
            <span className="hero-tech-divider-node" />
            <span className="hero-tech-divider-line" />
          </div>

          <div data-hero="metrics" className="hero-metrics-shell">
            {HERO_METRICS.map((metric) => {
              const Icon = metricIcons[metric.id];
              return (
                <div key={metric.id} data-hero="metric" className="hero-metric-card" tabIndex={0}>
                  <div className="hero-metric-icon">
                    <Icon size={16} className="text-primary m-auto" />
                  </div>
                  <span className="hero-metric-value">{metric.value}</span>
                  <span className="hero-metric-label">{metric.label}</span>
                  <span className="hero-metric-detail">{metric.detail}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        data-hero="scroll-hint"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-muted-foreground/60"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-medium">Scroll</span>
        <ChevronDown size={16} className="text-primary/70" />
      </div>
    </section>
  );
}
