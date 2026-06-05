"use client";

import { useRef, type RefObject } from "react";
import { gsap, useGSAP, MOTION_MEDIA, ScrollTrigger } from "@/lib/gsap";
import {
  resetSymphonyVisible,
  runSectionSymphony,
  type SymphonyPreset,
  type SymphonySelectors,
} from "@/lib/symphony";

type SectionSymphonyOptions = {
  preset: SymphonyPreset;
  selectors?: Partial<SymphonySelectors>;
  extra?: (q: ReturnType<typeof import("@/lib/motion").scopeQuery>, tl: gsap.core.Timeline) => void;
};

export function useSectionSymphony<T extends HTMLElement>(
  options: SectionSymphonyOptions,
): RefObject<T | null> {
  const scope = useRef<T>(null);
  const { preset, selectors, extra } = options;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add({ reduceMotion: MOTION_MEDIA.reduceMotion }, (context) => {
        const root = scope.current;
        if (!root) return;

        if (context.conditions?.reduceMotion) {
          resetSymphonyVisible(root);
          return;
        }

        runSectionSymphony(root, preset, selectors, extra);
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          ScrollTrigger.update();
        });
      }, scope);

      return () => mm.revert();
    },
    { scope },
  );

  return scope;
}
