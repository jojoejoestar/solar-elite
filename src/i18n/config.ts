import type { Locale } from "./types";

export const LOCALES = ["pt", "en"] as const;

export function parseLocale(value: string): Locale {
  return value === "en" ? "en" : "pt";
}

export function isLocale(value: string): value is Locale {
  return value === "pt" || value === "en";
}
