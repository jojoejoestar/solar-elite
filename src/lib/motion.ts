import type { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, MOTION_MEDIA } from "./gsap";
import { MOTION_EASE } from "./gsap";

type ScrollOpts = {
  start?: string;
  end?: string;
  once?: boolean;
  scrub?: number | false;
};

/** Scoped selector helper — always pass the section root ref */
export function scopeQuery(root: HTMLElement | null) {
  return gsap.utils.selector(root);
}

/** Standard reveal: fromTo + immediateRender:false (React Strict Mode safe) */
export function revealTo(
  targets: gsap.TweenTarget,
  from: gsap.TweenVars = {},
  to: gsap.TweenVars = {},
) {
  return gsap.fromTo(
    targets,
    { autoAlpha: 0, y: 28, ...from },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.85,
      ease: MOTION_EASE.entrance,
      immediateRender: false,
      ...to,
    },
  );
}

/** Scroll-linked reveal with transform-only props */
export function scrollReveal(
  trigger: Element | string | null | undefined,
  targets: gsap.TweenTarget,
  from: gsap.TweenVars = {},
  to: gsap.TweenVars = {},
  opts: ScrollOpts = {},
) {
  if (!trigger) return;

  const { start = "top 85%", end, once = true, scrub = false } = opts;
  const scrollTrigger: ScrollTrigger.Vars = {
    trigger,
    start,
    ...(scrub ? { scrub, end: end ?? "top 35%" } : { once }),
  };

  return gsap.fromTo(
    targets,
    { autoAlpha: 0, y: 32, ...from },
    {
      autoAlpha: 1,
      y: 0,
      duration: scrub ? 1 : 0.85,
      ease: scrub ? "none" : MOTION_EASE.entrance,
      immediateRender: false,
      scrollTrigger,
      ...to,
    },
  );
}

/** Reset all motion targets inside a scope for reduced-motion */
export function setMotionVisible(root: HTMLElement | null, selector = "[data-motion]") {
  if (!root) return;
  gsap.set(scopeQuery(root)(selector), {
    autoAlpha: 1,
    y: 0,
    x: 0,
    scale: 1,
    clearProps: "transform",
  });
}

export const STAGGER = {
  tight: 0.06,
  normal: 0.1,
  wide: 0.14,
} as const;

/** Premium card hover — transform-only, respects reduced-motion */
export function cardHoverIn(el: HTMLElement | null, iconSelector = "[data-card-icon]") {
  if (!el || window.matchMedia(MOTION_MEDIA.reduceMotion).matches) return;
  gsap.to(el, { y: -8, scale: 1.02, duration: 0.45, ease: "power2.out", overwrite: "auto" });
  const icon = el.querySelector(iconSelector);
  if (icon) gsap.to(icon, { scale: 1.12, rotate: -4, duration: 0.45, ease: "back.out(2)", overwrite: "auto" });
}

export function cardHoverOut(el: HTMLElement | null, iconSelector = "[data-card-icon]") {
  if (!el || window.matchMedia(MOTION_MEDIA.reduceMotion).matches) return;
  gsap.to(el, { y: 0, scale: 1, duration: 0.5, ease: "power2.out", overwrite: "auto" });
  const icon = el.querySelector(iconSelector);
  if (icon) gsap.to(icon, { scale: 1, rotate: 0, duration: 0.5, ease: "power2.out", overwrite: "auto" });
}
