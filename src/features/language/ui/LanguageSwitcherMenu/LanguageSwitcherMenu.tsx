import React, { FC } from "react";
import classNames from "classnames";

import { Locale } from "../../types";
import Link from "next/link";

interface Props {
  locale: Locale;
  onChangeLocale: (value: Locale) => void;
}

const LanguageSwitcherMenu: FC<Props> = ({ locale, onChangeLocale }) => {
  return (
    <ul className="bg-white dark:bg-black rounded-lg shadow-lg">
      <li>
        <Link href="" locale="ru">
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
        </Link>
      </li>
      <li>
        <Link href="" locale="en">
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
        </Link>
      </li>
    </ul>
  );
};

export default LanguageSwitcherMenu;
