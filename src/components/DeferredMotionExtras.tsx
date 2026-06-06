"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ScrollProgress = dynamic(
  () => import("@/components/motion/ScrollProgress").then((m) => ({ default: m.ScrollProgress })),
  { ssr: false },
);

const PageScrollOrchestrator = dynamic(
  () =>
    import("@/components/motion/PageScrollOrchestrator").then((m) => ({
      default: m.PageScrollOrchestrator,
    })),
  { ssr: false },
);

export function DeferredMotionExtras() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);
    const ric = window.requestIdleCallback;

    if (ric) {
      const id = ric(enable, { timeout: 1800 });
      return () => window.cancelIdleCallback(id);
    }

    const t = setTimeout(enable, 400);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return null;

  return (
    <>
      <PageScrollOrchestrator />
      <ScrollProgress />
    </>
  );
}
