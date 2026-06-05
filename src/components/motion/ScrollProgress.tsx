"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MOTION_MEDIA } from "@/lib/gsap";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add({ reduceMotion: MOTION_MEDIA.reduceMotion }, (context) => {
        if (context.conditions?.reduceMotion || !barRef.current) return;

        gsap.fromTo(
          barRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: document.documentElement,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.35,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: barRef },
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_12px_hsl(38_92%_50%/0.6)]"
      />
    </div>
  );
}
