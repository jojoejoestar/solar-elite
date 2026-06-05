"use client";

import { useGSAP, gsap, ScrollTrigger, MOTION_MEDIA } from "@/lib/gsap";
import { animateSectionDividers, scheduleScrollRefresh } from "@/lib/symphony";
import { setMotionVisible } from "@/lib/motion";

export function PageScrollOrchestrator() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({ reduceMotion: MOTION_MEDIA.reduceMotion }, (context) => {
      if (context.conditions?.reduceMotion) return;

      animateSectionDividers();
      scheduleScrollRefresh();

      const refreshAfterSections = window.setTimeout(() => {
        ScrollTrigger.refresh();
        ScrollTrigger.update();
      }, 800);

      const safetyReveal = window.setTimeout(() => {
        const stuck = gsap.utils.toArray<HTMLElement>("[data-symphony]").filter(
          (el) => getComputedStyle(el).opacity === "0",
        );
        if (stuck.length > 8) {
          document.querySelectorAll<HTMLElement>("[data-motion]").forEach((section) => {
            setMotionVisible(section, "[data-symphony]");
          });
        }
      }, 2500);

      return () => {
        window.clearTimeout(refreshAfterSections);
        window.clearTimeout(safetyReveal);
      };
    });

    return () => mm.revert();
  });

  return null;
}
