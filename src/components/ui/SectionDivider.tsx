import { cn } from "@/lib/utils";

type SectionDividerProps = {
  variant?: "amber" | "emerald" | "neutral";
  className?: string;
};

export function SectionDivider({ variant = "amber", className }: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "section-divider relative z-[2] pointer-events-none",
        variant === "amber" && "section-divider-amber",
        variant === "emerald" && "section-divider-emerald",
        variant === "neutral" && "section-divider-neutral",
        className,
      )}
    >
      <div className="section-divider-beam" />
      <div className="section-divider-beam-glow" />
      <div className="section-divider-core">
        <span className="section-divider-ring" />
        <span className="section-divider-dot" />
      </div>
      <div className="section-divider-ticks">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="section-divider-tick" />
        ))}
      </div>
    </div>
  );
}
