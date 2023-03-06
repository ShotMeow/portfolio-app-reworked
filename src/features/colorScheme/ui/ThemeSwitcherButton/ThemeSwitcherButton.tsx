import React, { forwardRef, HTMLAttributes } from "react";
import { motion } from "framer-motion";

import { ColorScheme } from "../../types";

import { SunIcon } from "@/shared/ui";
import { MoonIcon } from "@/shared/ui";
import { AutoIcon } from "@/shared/ui";

interface Props extends HTMLAttributes<HTMLDivElement> {
  colorScheme: ColorScheme;
}

const ThemeSwitcherButton = forwardRef<HTMLButtonElement, Props>(
  ({ colorScheme, ...props }, ref) => {
    return (
      <div {...props}>
        <motion.button
          className="bg-white dark:bg-black p-3 rounded-full shadow-custom"
          aria-label="Переключатель цветовой схемы сайта"
          whileTap={{ scale: 0.95 }}
          ref={ref}
        >
          {colorScheme === ColorScheme.AUTO && <AutoIcon />}
          {colorScheme === ColorScheme.LIGHT && <SunIcon />}
          {colorScheme === ColorScheme.DARK && <MoonIcon />}
        </motion.button>
      </div>
    );
  }
);

ThemeSwitcherButton.displayName = "ThemeSwitcherButton";

export default ThemeSwitcherButton;
