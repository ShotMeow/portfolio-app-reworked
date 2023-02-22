import React, { FC } from "react";

import { Locale } from "@/features/language/types";
import classNames from "classnames";

interface Props {
  locale: Locale;
  onChangeLocale: (value: Locale) => void;
}

const LanguageSwitcherMenu: FC<Props> = ({ locale, onChangeLocale }) => {
  return (
    <ul className="bg-white dark:bg-black rounded-lg shadow-lg">
      <li>
        <button
          className={classNames(
            {
              "text-white bg-blue": locale === Locale.RU,
            },
            "px-10 py-3 hover:bg-blue hover:text-white rounded-t-lg"
          )}
          onClick={() => onChangeLocale(Locale.RU)}
        >
          Русский
        </button>
      </li>
      <li>
        <button
          className={classNames(
            {
              "text-white bg-blue": locale === Locale.EN,
            },
            "px-10 py-3 hover:bg-blue hover:text-white rounded-b-lg"
          )}
          onClick={() => onChangeLocale(Locale.EN)}
        >
          English
        </button>
      </li>
    </ul>
  );
};

export default LanguageSwitcherMenu;
