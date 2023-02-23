import { ColorScheme } from "@/features/colorScheme/types";

const LS_COLOR_SCHEME_KEY = "portoflio:scheme";

export function applyScheme(scheme: ColorScheme, persist = false): void {
  if (scheme === ColorScheme.DARK) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  persist && localStorage.setItem(LS_COLOR_SCHEME_KEY, scheme);
}

export function getSystemScheme(): ColorScheme {
  return window.matchMedia("(prefers-color-scheme:dark)").matches
    ? ColorScheme.DARK
    : ColorScheme.LIGHT;
}

export function getSavedScheme(): ColorScheme {
  return localStorage.getItem(LS_COLOR_SCHEME_KEY) as ColorScheme;
}

export function removeSavedScheme(): void {
  localStorage.removeItem(LS_COLOR_SCHEME_KEY);
}
