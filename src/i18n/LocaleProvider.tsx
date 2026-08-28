"use client";

import { createContext, useContext, type ReactNode } from "react";
import { getMessages, type Messages } from "./messages";
import type { Locale } from "./types";

type LocaleContextValue = {
  locale: Locale;
  copy: Messages;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "pt",
  copy: getMessages("pt"),
});

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={{ locale, copy: getMessages(locale) }}>{children}</LocaleContext.Provider>;
}

export function useCopy() {
  return useContext(LocaleContext);
}
