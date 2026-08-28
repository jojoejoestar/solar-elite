import type { FocusEvent, MouseEvent } from "react";
import { gsap, MOTION_MEDIA } from "./gsap";

export function scopeQuery(root: HTMLElement | null) {
  return gsap.utils.selector(root);
}

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

const CARD_ICON = "[data-card-icon]";

export function cardHoverIn(el: HTMLElement | null, iconSelector = CARD_ICON) {
  if (!el || window.matchMedia(MOTION_MEDIA.reduceMotion).matches) return;
  gsap.to(el, { y: -8, scale: 1.02, duration: 0.45, ease: "power2.out", overwrite: "auto" });
  const icon = el.querySelector(iconSelector);
  if (icon) gsap.to(icon, { scale: 1.12, rotate: -4, duration: 0.45, ease: "back.out(2)", overwrite: "auto" });
}

export function cardHoverOut(el: HTMLElement | null, iconSelector = CARD_ICON) {
  if (!el || window.matchMedia(MOTION_MEDIA.reduceMotion).matches) return;
  gsap.to(el, { y: 0, scale: 1, duration: 0.5, ease: "power2.out", overwrite: "auto" });
  const icon = el.querySelector(iconSelector);
  if (icon) gsap.to(icon, { scale: 1, rotate: 0, duration: 0.5, ease: "power2.out", overwrite: "auto" });
}

type HoverTarget = { currentTarget: HTMLElement };

export function liftHandlers(iconSelector = CARD_ICON) {
  return {
    tabIndex: 0 as const,
    onMouseEnter: (e: MouseEvent<HTMLElement> | HoverTarget) => cardHoverIn(e.currentTarget, iconSelector),
    onMouseLeave: (e: MouseEvent<HTMLElement> | HoverTarget) => cardHoverOut(e.currentTarget, iconSelector),
    onFocus: (e: FocusEvent<HTMLElement> | HoverTarget) => cardHoverIn(e.currentTarget, iconSelector),
    onBlur: (e: FocusEvent<HTMLElement> | HoverTarget) => cardHoverOut(e.currentTarget, iconSelector),
  };
}
