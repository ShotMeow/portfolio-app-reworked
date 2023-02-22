import React, { FC } from "react";

import styles from "./ThemeSwitcherButton.module.scss";
import classNames from "classnames";
import Moon from "@/components/Icons/Moon";

const ThemeSwitcherButtonSkeleton: FC = () => {
  return (
    <div
      className={classNames(
        {
          [styles.skeleton]: true,
        },
        "dark:bg-black"
      )}
    >
      <Moon />
    </div>
  );
};

export default ThemeSwitcherButtonSkeleton;
