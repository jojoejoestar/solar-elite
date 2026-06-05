"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  children: ReactNode;
  strength?: number;
};

export function MagneticButton({
  href = "#",
  onClick,
  className,
  children,
  strength = 0.35,
}: MagneticButtonProps) {
  const wrapRef = useRef<HTMLAnchorElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);
  const quickX = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const quickY = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useGSAP(
    () => {
      if (!innerRef.current) return;
      quickX.current = gsap.quickTo(innerRef.current, "x", { duration: 0.4, ease: "power3.out" });
      quickY.current = gsap.quickTo(innerRef.current, "y", { duration: 0.4, ease: "power3.out" });
    },
    { scope: wrapRef },
  );

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect || !quickX.current || !quickY.current) return;
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    quickX.current(x);
    quickY.current(y);
  };

  const handleLeave = () => {
    quickX.current?.(0);
    quickY.current?.(0);
  };

  return (
    <a
      ref={wrapRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("inline-block will-change-transform", className)}
    >
      <span ref={innerRef} className="inline-flex items-center justify-center gap-2 will-change-transform">
        {children}
      </span>
    </a>
  );
}
