import React, { forwardRef, HTMLAttributes } from "react";

import styles from "./ThemeSwitcherButton.module.scss";
import { ColorScheme } from "@/features/theme/types";
import Sun from "@/components/Icons/Sun";
import Moon from "@/components/Icons/Moon";
import Auto from "@/components/Icons/Auto";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  colorScheme: ColorScheme;
}

const ThemeSwitcherButton = forwardRef<HTMLButtonElement, Props>(
  ({ colorScheme, ...props }, ref) => {
    return (
      <button
        className={classNames(
          {
            [styles.button]: true,
          },
          "dark:bg-black"
        )}
        ref={ref}
        {...props}
      >
        {colorScheme === ColorScheme.AUTO && <Auto />}
        {colorScheme === ColorScheme.LIGHT && <Sun />}
        {colorScheme === ColorScheme.DARK && <Moon />}
      </button>
    );
  }
);

ThemeSwitcherButton.displayName = "ThemeSwitcherButton";

export default ThemeSwitcherButton;
