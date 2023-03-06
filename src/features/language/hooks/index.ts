import { Dispatch, useEffect, useState } from "react";

import { Locale } from "../types";
import { applyLocale, getSavedLocale } from "../utils";

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
