"use client";

import { useMemo, type CSSProperties } from "react";

type Beam = {
  id: number;
  type: "primary" | "secondary";
  style: CSSProperties;
};

function unit(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function buildBeams(count: number): Beam[] {
  return Array.from({ length: count }, (_, i) => {
    const rise = unit(i + 1) * 3 + 5;
    return {
      id: i,
      type: unit(i + 41) < 0.15 ? "secondary" : "primary",
      style: {
        left: `${unit(i + 7) * 100}%`,
        width: `${Math.floor(unit(i + 19) * 2) + 1}px`,
        animationDelay: `${unit(i + 29) * 6}s`,
        animationDuration: `${rise}s, ${rise}s`,
      },
    };
  });
}

type AtmosphereGridProps = {
  beamCount?: number;
};

export function AtmosphereGrid({ beamCount = 70 }: AtmosphereGridProps) {
  const beams = useMemo(() => buildBeams(beamCount), [beamCount]);

  return (
    <div className="cybercore-scene" role="presentation" aria-hidden>
      <div className="cybercore-floor" />
      <div className="cybercore-main-column" />
      <div className="cybercore-light-stream">
        {beams.map((beam) => (
          <div
            key={beam.id}
            className={`cybercore-light-beam cybercore-light-beam--${beam.type}`}
            style={beam.style}
          />
        ))}
      </div>
    </div>
  );
}
