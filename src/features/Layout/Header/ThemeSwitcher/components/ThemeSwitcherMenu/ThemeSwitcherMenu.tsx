import React, { FC } from "react";

import styles from "./ThemeSwitcherMenu.module.scss";

const ThemeSwitcherMenu: FC = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <button>Русский</button>
      </li>
      <li>
        <button>English</button>
      </li>
    </ul>
  );
};

export default ThemeSwitcherMenu;
