"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

gsap.defaults({
  duration: 0.8,
  ease: "power3.out",
});

export { gsap, useGSAP, ScrollTrigger };

export const MOTION_EASE = {
  entrance: "expo.out",
  cta: "back.out(1.35)",
} as const;

export const MOTION_MEDIA = {
  desktop: "(min-width: 1024px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;

export const SCROLL_START = {
  early: "top 90%",
  default: "top 85%",
} as const;
