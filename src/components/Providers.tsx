"use client";

import dynamic from "next/dynamic";
import { LenisProvider } from "@/components/LenisProvider";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/types";

const Sonner = dynamic(
  () => import("@/components/ui/sonner").then((m) => ({ default: m.Toaster })),
  { ssr: false },
);

export function Providers({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <LenisProvider>
        {children}
        <Sonner />
      </LenisProvider>
    </LocaleProvider>
  );
}
