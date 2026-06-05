"use client";

import { useLayoutEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { setLenis } from "@/lib/lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const useSmooth = !coarsePointer;

    const lenis = new Lenis({
      lerp: coarsePointer ? 0.1 : 0.075,
      smoothWheel: useSmooth,
      syncTouch: false,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
    });

    document.documentElement.classList.add("lenis");
    if (useSmooth) document.documentElement.classList.add("lenis-smooth");
    setLenis(lenis);

    const getScrollTop = () =>
      useSmooth ? lenis.scroll || document.documentElement.scrollTop : document.documentElement.scrollTop;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    if (useSmooth) {
      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (arguments.length && typeof value === "number") {
            lenis.scrollTo(value, { immediate: true });
            return;
          }
          return getScrollTop();
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.documentElement.style.transform ? "transform" : "fixed",
      });
    }

    ScrollTrigger.defaults({ scroller: document.documentElement });
    ScrollTrigger.refresh();

    const lateRefresh = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    const lateUpdate = window.setTimeout(() => ScrollTrigger.update(), 500);

    return () => {
      window.clearTimeout(lateRefresh);
      window.clearTimeout(lateUpdate);
      window.removeEventListener("scroll", onScroll);
      setLenis(null);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      ScrollTrigger.scrollerProxy(document.documentElement, {});
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
