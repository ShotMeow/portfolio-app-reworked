import {
  applyScheme,
  getSavedScheme,
  getSystemScheme,
  removeSavedScheme,
} from "@/features/colorScheme/utils";
import { Dispatch, useEffect, useState } from "react";
import { ColorScheme } from "@/features/colorScheme/types";

const matchMedia = window.matchMedia("(prefers-color-scheme:dark)");

export const useColorScheme = (): {
  colorScheme: ColorScheme;
  setColorScheme: Dispatch<ColorScheme>;
} => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    getSavedScheme() || ColorScheme.AUTO
  );

  useEffect(() => {
    if (colorScheme === ColorScheme.AUTO) {
      removeSavedScheme();
      applyScheme(getSystemScheme());
    } else {
      applyScheme(colorScheme, true);
    }
  }, [colorScheme]);

  useEffect(() => {
    const systemColorSchemeListener = () => {
      if (colorScheme === ColorScheme.AUTO) {
        applyScheme(getSystemScheme());
      }
    };
    matchMedia.addEventListener("change", systemColorSchemeListener);

    return () => {
      matchMedia.removeEventListener("change", systemColorSchemeListener);
    };
  }, [colorScheme]);

  return { colorScheme, setColorScheme };
};
