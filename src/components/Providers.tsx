"use client";

import dynamic from "next/dynamic";
import { LenisProvider } from "@/components/LenisProvider";

const Sonner = dynamic(
  () => import("@/components/ui/sonner").then((m) => ({ default: m.Toaster })),
  { ssr: false },
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      {children}
      <Sonner />
    </LenisProvider>
  );
}
