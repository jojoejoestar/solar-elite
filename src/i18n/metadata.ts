import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { getMessages } from "./messages";
import type { Locale } from "./types";

export function buildMetadata(locale: Locale): Metadata {
  const copy = getMessages(locale);
  const url = locale === "en" ? `${SITE.url}/en` : SITE.url;

  return {
    title: {
      default: `${SITE.name} — ${copy.meta.tagline}`,
      template: `%s | ${SITE.name}`,
    },
    description: copy.meta.description,
    authors: [{ name: SITE.name }],
    openGraph: {
      title: SITE.name,
      description: copy.meta.description,
      type: "website",
      locale: copy.ogLocale,
      alternateLocale: locale === "en" ? ["pt_BR"] : ["en_US"],
      url,
      siteName: SITE.name,
    },
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": SITE.url,
        "en-US": `${SITE.url}/en`,
        "x-default": SITE.url,
      },
    },
  };
}
