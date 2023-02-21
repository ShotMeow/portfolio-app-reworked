import React, { FC } from "react";

import styles from "./LanguageSwitcherMenu.module.scss";
import { Locale } from "@/features/language/types";
import classNames from "classnames";

interface Props {
  locale: Locale;
  onChangeLocale: (value: Locale) => void;
}

const LanguageSwitcherMenu: FC<Props> = ({ locale, onChangeLocale }) => {
  return (
    <ul
      className={classNames(
        {
          [styles.menu]: true,
        },
        "dark:bg-black"
      )}
    >
      <li>
        <button
          className={classNames({
            [styles.active]: locale === Locale.RU,
          })}
          onClick={() => onChangeLocale(Locale.RU)}
        >
          Русский
        </button>
      </li>
      <li>
        <button
          className={classNames({
            [styles.active]: locale === Locale.EN,
          })}
          onClick={() => onChangeLocale(Locale.EN)}
        >
          English
        </button>
      </li>
    </ul>
  );
};

export default LanguageSwitcherMenu;
