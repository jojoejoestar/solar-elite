"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { InteractiveTitle } from "@/components/motion/InteractiveTitle";
import { cn } from "@/lib/utils";

type SectionHeaderProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      {...props}
      className={cn(
        "section-head",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
        className,
      )}
    >
      <div className={cn("flex items-center gap-3 mb-5", align === "center" ? "justify-center" : "")}>
        <span className="section-eyebrow-line" aria-hidden />
        <p className="section-eyebrow">{eyebrow}</p>
        <span className="section-eyebrow-line" aria-hidden />
      </div>
      <InteractiveTitle className="text-section-title text-foreground mb-4 text-balance text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
        {title}
      </InteractiveTitle>
      {description && (
        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
