import React, { FC, HTMLAttributes } from "react";

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
  ...props
}) => {
  return (
    <ul className="bg-white rounded-lg shadow-lg dark:bg-black" {...props}>
      <li>
        <button
          className={classNames(
            {
              "text-white bg-blue": colorScheme === ColorScheme.AUTO,
            },
            "flex items-center gap-4 px-6 py-3 w-full hover:text-white hover:bg-blue rounded-t-lg"
          )}
          onClick={() => setColorScheme(ColorScheme.AUTO)}
        >
          <Auto />
          Авто
        </button>
      </li>
      <li>
        <button
          className={classNames(
            {
              "text-white bg-blue": colorScheme === ColorScheme.LIGHT,
            },
            "flex items-center gap-4 px-6 py-3 w-full hover:text-white hover:bg-blue"
          )}
          onClick={() => setColorScheme(ColorScheme.LIGHT)}
        >
          <Sun />
          Светлая
        </button>
      </li>
      <li>
        <button
          className={classNames(
            {
              "text-white bg-blue": colorScheme === ColorScheme.DARK,
            },
            "flex items-center gap-4 px-6 py-3 w-full hover:text-white hover:bg-blue rounded-b-lg"
          )}
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
