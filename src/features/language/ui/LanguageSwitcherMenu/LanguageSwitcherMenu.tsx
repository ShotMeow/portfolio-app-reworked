import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";

import { Locale } from "../../types";
import Link from "next/link";

interface Props extends HTMLAttributes<HTMLDivElement> {
  locale: Locale;
}

const LanguageSwitcherMenu: FC<Props> = ({ locale }) => {
  return (
    <ul className="bg-white dark:bg-black rounded-lg shadow-lg">
      <li>
        <Link href="" locale="ru">
          <button
            className={classNames(
              {
                "text-white bg-blue": locale === Locale.RU,
              },
              "px-10 py-3 rounded-t-lg"
            )}
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
              "px-10 py-3 rounded-b-lg"
            )}
          >
            English
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default LanguageSwitcherMenu;
