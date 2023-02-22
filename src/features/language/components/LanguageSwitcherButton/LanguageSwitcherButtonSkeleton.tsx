import React, { FC } from "react";

import styles from "./LanguageSwitcherButton.module.scss";
import classNames from "classnames";
import Arrow from "@/components/Icons/Arrow";

const ThemeSwitcherButtonSkeleton: FC = () => {
  return (
    <div
      className={classNames({
        [styles.skeleton]: true,
      })}
    >
      <span className={styles.text}>RU</span>
      <span className={styles.icon}>
        <Arrow />
      </span>
    </div>
  );
};

export default ThemeSwitcherButtonSkeleton;
