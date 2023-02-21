import { Locale } from "@/features/language/types";
import { Dispatch, useEffect, useState } from "react";
import { applyLocale, getSavedLocale } from "@/features/language/utils";

export const useLocale = (): {
  locale: Locale;
  setLocale: Dispatch<Locale>;
} => {
  const [locale, setLocale] = useState(getSavedLocale());

  useEffect(() => {
    applyLocale(locale);
  }, [locale]);

  return { locale, setLocale };
};
