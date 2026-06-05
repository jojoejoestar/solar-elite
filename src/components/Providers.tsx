"use client";

import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { LenisProvider } from "@/components/LenisProvider";

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
