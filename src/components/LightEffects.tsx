"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap, useGSAP, MOTION_MEDIA } from "@/lib/gsap";

export function SunRays({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <div className="sun-rays-container">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="sun-ray"
            style={{
              transform: `rotate(${i * 30}deg)`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function LightParticles({ count = 20, className = "" }: { count?: number; className?: string }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 37 + 13) % 100}%`,
        top: `${(i * 53 + 7) % 100}%`,
        width: `${2 + (i % 4)}px`,
        height: `${2 + ((i + 1) % 4)}px`,
        animationDelay: `${(i * 0.7) % 8}s`,
        animationDuration: `${6 + (i % 8)}s`,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="light-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.width,
            height: p.height,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}
    </div>
  );
}

export function LightBeams({
  className = "",
  parallax = true,
}: {
  className?: string;
  parallax?: boolean;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!parallax) return;

      const mm = gsap.matchMedia();
      mm.add(
        { reduceMotion: MOTION_MEDIA.reduceMotion },
        (context) => {
          if (context.conditions?.reduceMotion || !scope.current) return;

          scope.current.querySelectorAll("[data-beam]").forEach((beam, i) => {
            gsap.fromTo(
              beam,
              { yPercent: -8 - i * 4 },
              {
                yPercent: 8 + i * 4,
                ease: "none",
                scrollTrigger: {
                  trigger: scope.current,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2,
                },
              },
            );
          });
        },
        scope,
      );

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div data-beam className="light-beam light-beam-1 will-change-transform" />
      <div data-beam className="light-beam light-beam-2 will-change-transform" />
      <div data-beam className="light-beam light-beam-3 will-change-transform" />
    </div>
  );
}

export function CursorSunlight() {
  const rootRef = useRef<HTMLDivElement>(null);
  const quickX = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const quickY = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const activeRef = useRef(false);
  const rayTween = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: MOTION_MEDIA.reduceMotion,
          finePointer: "(hover: hover) and (pointer: fine)",
        },
        (context) => {
          const root = rootRef.current;
          if (!root) return;

          if (context.conditions?.reduceMotion || !context.conditions?.finePointer) {
            gsap.set(root, { autoAlpha: 0, display: "none" });
            return;
          }

          gsap.set(root, { xPercent: -50, yPercent: -50, autoAlpha: 0, display: "block" });
          quickX.current = gsap.quickTo(root, "x", { duration: 1.05, ease: "power3.out" });
          quickY.current = gsap.quickTo(root, "y", { duration: 1.05, ease: "power3.out" });

          const rays = root.querySelector<HTMLElement>("[data-cursor-rays]");
          if (rays) {
            rayTween.current = gsap.to(rays, {
              rotation: 360,
              duration: 140,
              repeat: -1,
              ease: "none",
            });
          }
        },
        rootRef,
      );

      return () => {
        rayTween.current?.kill();
        mm.revert();
      };
    },
    { scope: rootRef },
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const isEnabled = () =>
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia(MOTION_MEDIA.reduceMotion).matches;

    const onMove = (e: MouseEvent) => {
      if (!isEnabled()) return;
      quickX.current?.(e.clientX);
      quickY.current?.(e.clientY);

      if (!activeRef.current) {
        activeRef.current = true;
        gsap.to(root, { autoAlpha: 1, duration: 0.85, ease: "power2.out" });
      }
    };

    const onLeave = () => {
      activeRef.current = false;
      gsap.to(root, { autoAlpha: 0, duration: 1, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className="cursor-sunlight" aria-hidden="true">
      <div className="cursor-sunlight-halo" />
      <div className="cursor-sunlight-rays-fine" />
      <div data-cursor-rays className="cursor-sunlight-rays will-change-transform" />
      <div className="cursor-sunlight-core" />
    </div>
  );
}
