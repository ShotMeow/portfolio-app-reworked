import React, { forwardRef, HTMLAttributes } from "react";

import styles from "./LanguageSwitcherButton.module.scss";
import { Locale } from "@/features/Layout/Header/LanguageSwitcher/types";
import Arrow from "@/components/Icons/Arrow";
import classNames from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  shown: boolean;
  locale: Locale;
}

const LanguageSwitcherButton = forwardRef<HTMLButtonElement, Props>(
  ({ shown, locale, ...props }, ref) => {
    return (
      <button
        className={classNames({
          [styles.button]: true,
          [styles.active]: shown,
        })}
        ref={ref}
        {...props}
      >
        <span className={styles.text}>
          {locale === Locale.EN && "ENG"}
          {locale === Locale.RU && "RU"}
        </span>
        <span className={styles.icon}>
          <Arrow />
        </span>
      </button>
    );
  }
);

LanguageSwitcherButton.displayName = "LanguageSwitcherButton";

export default LanguageSwitcherButton;
