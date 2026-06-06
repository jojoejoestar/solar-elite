"use client";

import dynamic from "next/dynamic";

const PageAtmosphere = dynamic(
  () => import("@/components/PageAtmosphere").then((m) => ({ default: m.PageAtmosphere })),
  { ssr: false },
);

export function DeferredPageAtmosphere() {
  return <PageAtmosphere />;
}
