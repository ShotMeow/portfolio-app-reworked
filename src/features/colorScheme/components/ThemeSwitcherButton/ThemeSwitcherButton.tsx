import React, { forwardRef, HTMLAttributes } from "react";

import { ColorScheme } from "@/features/colorScheme/types";
import Sun from "@/components/elements/Icons/Sun";
import Moon from "@/components/elements/Icons/Moon";
import Auto from "@/components/elements/Icons/Auto";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  colorScheme: ColorScheme;
}

const ThemeSwitcherButton = forwardRef<HTMLButtonElement, Props>(
  ({ colorScheme, ...props }, ref) => {
    return (
      <motion.div whileTap={{ scale: 0.95 }}>
        <button
          className="bg-white dark:bg-black p-3 rounded-full shadow-custom"
          ref={ref}
          aria-label="Переключатель цветовой схемы сайта"
          {...props}
        >
          {colorScheme === ColorScheme.AUTO && <Auto />}
          {colorScheme === ColorScheme.LIGHT && <Sun />}
          {colorScheme === ColorScheme.DARK && <Moon />}
        </button>
      </motion.div>
    );
  }
);

ThemeSwitcherButton.displayName = "ThemeSwitcherButton";

export default ThemeSwitcherButton;
