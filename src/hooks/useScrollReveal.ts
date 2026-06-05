"use client";

import { useRef, type RefObject } from "react";
import { gsap, useGSAP, MOTION_MEDIA } from "@/lib/gsap";
import { scrollReveal, setMotionVisible, STAGGER } from "@/lib/motion";

type ScrollRevealOptions = {
  headingSelector?: string;
  itemSelector?: string;
  itemStagger?: number;
  itemFrom?: gsap.TweenVars;
  itemY?: number;
  start?: string;
  scrub?: boolean | number;
};

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {},
): RefObject<T | null> {
  const scope = useRef<T>(null);
  const {
    headingSelector = "[data-reveal='heading']",
    itemSelector = "[data-reveal='item']",
    itemStagger = STAGGER.normal,
    itemFrom = {},
    itemY = 36,
    start = "top 85%",
    scrub = false,
  } = options;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add({ reduceMotion: MOTION_MEDIA.reduceMotion }, (context) => {
        const root = scope.current;
        if (!root) return;

        if (context.conditions?.reduceMotion) {
          setMotionVisible(root);
          const heading = root.querySelector(headingSelector);
          const items = root.querySelectorAll(itemSelector);
          if (heading) gsap.set(heading, { autoAlpha: 1, y: 0, clearProps: "transform" });
          if (items.length) gsap.set(items, { autoAlpha: 1, y: 0, scale: 1, clearProps: "transform" });
          return;
        }

        const heading = root.querySelector(headingSelector);
        const items = root.querySelectorAll(itemSelector);
        const scrubVal = scrub ? (typeof scrub === "number" ? scrub : 1) : false;

        if (heading) {
          scrollReveal(heading, heading, { y: itemY }, {}, { start, scrub: scrubVal });
        }

        if (items.length) {
          scrollReveal(
            items[0],
            items,
            { y: itemY, ...itemFrom },
            { stagger: itemStagger },
            { start, scrub: scrubVal },
          );
        }
      }, scope);

      return () => mm.revert();
    },
    { scope },
  );

  return scope;
}
