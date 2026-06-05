"use client";

import dynamic from "next/dynamic";

const CursorSunlight = dynamic(
  () => import("@/components/LightEffects").then((m) => ({ default: m.CursorSunlight })),
  { ssr: false },
);

export function DeferredCursorSunlight() {
  return <CursorSunlight />;
}
