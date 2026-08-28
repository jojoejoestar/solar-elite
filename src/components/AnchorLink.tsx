"use client";

import type { MouseEvent, ReactNode } from "react";
import { scrollToAnchor } from "@/lib/lenis";

type AnchorLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export function AnchorLink({ href, className, children, onNavigate }: AnchorLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    scrollToAnchor(href);
    onNavigate?.();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
