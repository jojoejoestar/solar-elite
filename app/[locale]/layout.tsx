import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Providers } from "@/components/Providers";
import { SITE } from "@/data/site";
import { isLocale, LOCALES, parseLocale } from "@/i18n/config";
import { buildMetadata } from "@/i18n/metadata";
import "../globals.css";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b1220",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    ...buildMetadata(parseLocale(locale)),
    metadataBase: new URL(SITE.url),
    icons: {
      icon: "/images/logosolarelite.webp",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = parseLocale(localeParam);

  return (
    <html
      lang={locale === "en" ? "en-US" : "pt-BR"}
      className={`dark ${ibmPlex.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preload" as="image" href="/images/hero-solar.jpg" fetchPriority="high" />
      </head>
      <body className="font-sans antialiased">
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
