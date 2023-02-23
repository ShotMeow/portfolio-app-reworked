import React, { FC, HTMLAttributes } from "react";

import styles from "./ThemeSwitcherMenu.module.scss";
import { ColorScheme } from "@/features/colorScheme/types";
import classNames from "classnames";
import Auto from "@/components/elements/Icons/Auto";
import Sun from "@/components/elements/Icons/Sun";
import Moon from "@/components/elements/Icons/Moon";

interface Props extends HTMLAttributes<HTMLUListElement> {
  colorScheme: ColorScheme;
  setColorScheme: (value: ColorScheme) => void;
}

const ThemeSwitcherMenu: FC<Props> = ({
  colorScheme,
  setColorScheme,
  className,
  ...props
}) => {
  return (
    <ul
      className={classNames(
        {
          [styles.menu]: true,
        },
        "dark:bg-black",
        className
      )}
      {...props}
    >
      <li>
        <button
          className={classNames({
            [styles.active]: colorScheme === ColorScheme.AUTO,
          })}
          onClick={() => setColorScheme(ColorScheme.AUTO)}
        >
          <Auto />
          Авто
        </button>
      </li>
      <li>
        <button
          className={classNames({
            [styles.active]: colorScheme === ColorScheme.LIGHT,
          })}
          onClick={() => setColorScheme(ColorScheme.LIGHT)}
        >
          <Sun />
          Светлая
        </button>
      </li>
      <li>
        <button
          className={classNames({
            [styles.active]: colorScheme === ColorScheme.DARK,
          })}
          onClick={() => setColorScheme(ColorScheme.DARK)}
        >
          <Moon />
          Темная
        </button>
      </li>
    </ul>
  );
};

export default ThemeSwitcherMenu;
