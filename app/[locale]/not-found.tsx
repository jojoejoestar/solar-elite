"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { getMessages } from "@/i18n/messages";

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
  const copy = getMessages(locale).notFound;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <div className="page-static-backdrop" aria-hidden />
      <div className="relative z-10 flex max-w-md flex-col items-center text-center">
        <BrandLogo variant="nav" />
        <p className="mt-10 font-display text-6xl font-bold text-primary">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-foreground">{copy.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{copy.body}</p>
        <Link
          href={locale === "en" ? "/en" : "/"}
          className="mt-8 inline-flex rounded-xl btn-primary-premium px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          {copy.cta}
        </Link>
      </div>
    </div>
  );
}
