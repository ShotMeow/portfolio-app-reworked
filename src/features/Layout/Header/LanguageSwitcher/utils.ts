import { Locale } from "@/features/Layout/Header/LanguageSwitcher/types";

const LS_LOCALE_KEY = "portfolio:locale";

export const applyLocale = (locale: Locale) => {
  localStorage.setItem(LS_LOCALE_KEY, locale);

  document.documentElement.lang = locale;
};

export const getSavedLocale = (): Locale => {
  const lsLang = localStorage.getItem(LS_LOCALE_KEY) as Locale | null;

  if (lsLang) {
    return lsLang;
  }

  const navLang = window.navigator.language.split("-")[0] as Locale;

  if (Object.values(Locale).includes(navLang)) {
    return navLang;
  }

  return Locale.en;
};
