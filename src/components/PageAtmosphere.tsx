"use client";

import { useEffect, useState } from "react";
import CybercoreBackground from "@/components/cybercore-section-hero";

export function PageAtmosphere() {
  const [beamCount, setBeamCount] = useState(65);

  useEffect(() => {
    const coarse = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
    setBeamCount(coarse ? 28 : 65);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="cybercore-backdrop">
        <CybercoreBackground beamCount={beamCount} />
      </div>
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="noise-overlay" />
      <div className="vignette-overlay" />
    </div>
  );
}
