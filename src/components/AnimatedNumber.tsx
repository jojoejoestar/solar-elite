"use client";

import { useEffect, useRef } from "react";
import { gsap, MOTION_MEDIA } from "@/lib/gsap";

type AnimatedNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
};

function formatValue(val: number, decimals: number) {
  if (!Number.isFinite(val)) return decimals > 0 ? "0,0" : "0";
  if (decimals > 0) {
    return val.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }
  return Math.round(val).toLocaleString("pt-BR");
}

export function AnimatedNumber({ value, prefix = "", suffix = "", duration = 0.55, decimals = 0 }: AnimatedNumberProps) {
  const displayRef = useRef<HTMLSpanElement>(null);
  const prevValue = useRef(value);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const formatted = `${prefix}${formatValue(value, decimals)}${suffix}`;

  useEffect(() => {
    const el = displayRef.current;
    if (!el) return;

    tweenRef.current?.kill();

    if (window.matchMedia(MOTION_MEDIA.reduceMotion).matches) {
      el.textContent = formatted;
      prevValue.current = value;
      return;
    }

    const startVal = prevValue.current;
    if (startVal === value) {
      el.textContent = formatted;
      return;
    }

    const counter = { val: startVal };

    tweenRef.current = gsap.to(counter, {
      val: value,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${prefix}${formatValue(counter.val, decimals)}${suffix}`;
      },
      onComplete: () => {
        prevValue.current = value;
        el.textContent = formatted;
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [value, prefix, suffix, duration, decimals, formatted]);

  return (
    <span className="tabular-nums">
      <span ref={displayRef}>{formatted}</span>
    </span>
  );
}
