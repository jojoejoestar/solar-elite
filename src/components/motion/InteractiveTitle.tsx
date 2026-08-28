"use client";

import { useRef, type ElementType, type HTMLAttributes, type MouseEvent, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_MEDIA } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type InteractiveTitleProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function InteractiveTitle({
  as: Tag = "h2",
  className,
  children,
  ...props
}: InteractiveTitleProps) {
  const rootRef = useRef<HTMLElement>(null);
  const motionEnabled = useRef(true);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          finePointer: "(hover: hover) and (pointer: fine)",
          reduceMotion: MOTION_MEDIA.reduceMotion,
        },
        (context) => {
          const { finePointer, reduceMotion } = context.conditions ?? {};
          motionEnabled.current = Boolean(finePointer && !reduceMotion);
        },
      );
      return () => mm.revert();
    },
    { scope: rootRef },
  );

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = rootRef.current;
    if (!el || !motionEnabled.current) return;

    const rect = el.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;

    el.style.setProperty("--title-scan-x", `${xPct}%`);
    el.dataset.active = "true";
  };

  const handleLeave = () => {
    const el = rootRef.current;
    if (!el) return;
    delete el.dataset.active;
  };

  return (
    <Tag
      ref={rootRef as never}
      className={cn("interactive-title", className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      <span className="interactive-title__hud" aria-hidden>
        <span className="interactive-title__corner interactive-title__corner--tl" />
        <span className="interactive-title__corner interactive-title__corner--tr" />
        <span className="interactive-title__corner interactive-title__corner--bl" />
        <span className="interactive-title__corner interactive-title__corner--br" />
      </span>
      <span className="interactive-title__glow" aria-hidden />
      <span className="interactive-title__beam" aria-hidden />
      <span className="interactive-title__content">{children}</span>
    </Tag>
  );
}
