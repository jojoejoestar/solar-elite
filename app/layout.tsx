import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import { SITE } from "@/data/site";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  authors: [{ name: SITE.name }],
  metadataBase: new URL(SITE.url),
  icons: {
    icon: "/images/logosolarelite.webp",
  },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${ibmPlex.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/hero-solar.jpg" fetchPriority="high" />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
