import React, { forwardRef, HTMLAttributes } from "react";

import { ColorScheme } from "@/features/colorScheme/types";
import Sun from "@/components/elements/Icons/Sun";
import Moon from "@/components/elements/Icons/Moon";
import Auto from "@/components/elements/Icons/Auto";
import { motion } from "framer-motion";

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
          {colorScheme === ColorScheme.AUTO && <Auto />}
          {colorScheme === ColorScheme.LIGHT && <Sun />}
          {colorScheme === ColorScheme.DARK && <Moon />}
        </motion.button>
      </div>
    );
  }
);

ThemeSwitcherButton.displayName = "ThemeSwitcherButton";

export default ThemeSwitcherButton;
