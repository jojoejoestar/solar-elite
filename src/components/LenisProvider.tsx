"use client";

import { useEffect, useState, type ReactNode } from "react";
import { setLenis } from "@/lib/lenis";

type LenisInstance = import("lenis").default;

export function LenisProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let lenis: LenisInstance | null = null;
    let cancelled = false;
    let lateRefresh = 0;
    let lateUpdate = 0;

    const init = async () => {
      const [{ default: Lenis }, { gsap, ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("@/lib/gsap"),
      ]);

      if (cancelled) return;

      const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
      const useSmooth = !coarsePointer;

      lenis = new Lenis({
        lerp: coarsePointer ? 0.1 : 0.075,
        smoothWheel: useSmooth,
        syncTouch: false,
        wheelMultiplier: 0.85,
        touchMultiplier: 1,
      });

      document.documentElement.classList.add("lenis");
      if (useSmooth) document.documentElement.classList.add("lenis-smooth");
      setLenis(lenis);
      setReady(true);

      const onScroll = () => ScrollTrigger.update();
      lenis.on("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });

      const onTick = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      if (useSmooth) {
        ScrollTrigger.scrollerProxy(document.documentElement, {
          scrollTop(value) {
            if (arguments.length && typeof value === "number") {
              lenis?.scrollTo(value, { immediate: true });
              return;
            }
            return lenis?.scroll || document.documentElement.scrollTop;
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

      lateRefresh = window.setTimeout(() => ScrollTrigger.refresh(), 400);
      lateUpdate = window.setTimeout(() => ScrollTrigger.update(), 500);

      return () => {
        window.clearTimeout(lateRefresh);
        window.clearTimeout(lateUpdate);
        window.removeEventListener("scroll", onScroll);
        gsap.ticker.remove(onTick);
      };
    };

    let cleanupInner: (() => void) | undefined;

    const teardown = async () => {
      cleanupInner?.();
      const { ScrollTrigger } = await import("@/lib/gsap");
      ScrollTrigger.scrollerProxy(document.documentElement, {});
      setLenis(null);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      lenis?.destroy();
    };

    const boot = () => {
      init().then((cleanup) => {
        if (!cancelled) cleanupInner = cleanup;
      });
    };

    const ric = window.requestIdleCallback;

    if (ric) {
      const id = ric(boot, { timeout: 1200 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
        void teardown();
      };
    }

    const t = setTimeout(boot, 80);
    return () => {
      cancelled = true;
      clearTimeout(t);
      void teardown();
    };
  }, []);

  return <div className={ready ? "lenis-ready" : undefined}>{children}</div>;
}
