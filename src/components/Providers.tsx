"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import { LenisProvider } from "@/components/LenisProvider";

const Sonner = dynamic(
  () => import("@/components/ui/sonner").then((m) => ({ default: m.Toaster })),
  { ssr: false },
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <LenisProvider>
        {children}
        <Sonner />
      </LenisProvider>
    </ThemeProvider>
  );
}
