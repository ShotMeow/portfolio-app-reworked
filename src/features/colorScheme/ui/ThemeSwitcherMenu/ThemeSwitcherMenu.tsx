import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";

import { ColorScheme } from "../../types";

import { SunIcon } from "@/shared/ui";
import { MoonIcon } from "@/shared/ui";
import { AutoIcon } from "@/shared/ui";
import { FormattedMessage } from "react-intl";

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
            "flex items-center gap-4 px-6 py-3 w-full rounded-t-lg"
          )}
          onClick={() => setColorScheme(ColorScheme.AUTO)}
        >
          <AutoIcon />
          <FormattedMessage
            id="theme.auto"
            values={{ _: (chunks) => chunks }}
          />
        </button>
      </li>
      <li>
        <button
          className={classNames(
            {
              "text-white bg-blue": colorScheme === ColorScheme.LIGHT,
            },
            "flex items-center gap-4 px-6 py-3 w-full"
          )}
          onClick={() => setColorScheme(ColorScheme.LIGHT)}
        >
          <SunIcon />
          <FormattedMessage
            id="theme.light"
            values={{ _: (chunks) => chunks }}
          />
        </button>
      </li>
      <li>
        <button
          className={classNames(
            {
              "text-white bg-blue": colorScheme === ColorScheme.DARK,
            },
            "flex items-center gap-4 px-6 py-3 w-full rounded-b-lg"
          )}
          onClick={() => setColorScheme(ColorScheme.DARK)}
        >
          <MoonIcon />
          <FormattedMessage
            id="theme.dark"
            values={{ _: (chunks) => chunks }}
          />
        </button>
      </li>
    </ul>
  );
};

export default ThemeSwitcherMenu;
