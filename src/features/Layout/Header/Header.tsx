import React, { FC } from "react";

import styles from "./Header.module.scss";
import Link from "next/link";
import ThemeSwitcher from "@/features/Layout/Header/ThemeSwitcher/components/ThemeSwitcher/ThemeSwitcher";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">Данила Маврин</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/blog">Блог</Link>
          </li>
          <li>
            <Link href="/resources">Ресурсы</Link>
          </li>
        </ul>
      </nav>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
