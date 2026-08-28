"use client";

import { useEffect, useRef } from "react";
import { gsap, MOTION_MEDIA } from "@/lib/gsap";
import { useCopy } from "@/i18n/LocaleProvider";

type AnimatedNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
};

function formatValue(val: number, decimals: number, locale: string) {
  if (!Number.isFinite(val)) return decimals > 0 ? (0).toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : "0";
  if (decimals > 0) {
    return val.toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }
  return Math.round(val).toLocaleString(locale);
}

export function AnimatedNumber({ value, prefix = "", suffix = "", duration = 0.55, decimals = 0 }: AnimatedNumberProps) {
  const { copy } = useCopy();
  const locale = copy.intlLocale;
  const displayRef = useRef<HTMLSpanElement>(null);
  const prevValue = useRef(value);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const formatted = `${prefix}${formatValue(value, decimals, locale)}${suffix}`;

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
        el.textContent = `${prefix}${formatValue(counter.val, decimals, locale)}${suffix}`;
      },
      onComplete: () => {
        prevValue.current = value;
        el.textContent = formatted;
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [value, prefix, suffix, duration, decimals, formatted, locale]);

  return (
    <span className="tabular-nums">
      <span ref={displayRef}>{formatted}</span>
    </span>
  );
}
