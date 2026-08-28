"use client";

import { useSyncExternalStore } from "react";
import { AtmosphereGrid } from "@/components/AtmosphereGrid";

const MOBILE_BEAMS = 14;
const DESKTOP_BEAMS = 42;
const COARSE_QUERY = "(max-width: 767px), (pointer: coarse)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(COARSE_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function beamCountFromViewport() {
  return window.matchMedia(COARSE_QUERY).matches ? MOBILE_BEAMS : DESKTOP_BEAMS;
}

export function PageAtmosphere() {
  const beamCount = useSyncExternalStore(subscribe, beamCountFromViewport, () => MOBILE_BEAMS);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="cybercore-backdrop">
        <AtmosphereGrid beamCount={beamCount} />
      </div>
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="noise-overlay" />
      <div className="vignette-overlay" />
    </div>
  );
}
