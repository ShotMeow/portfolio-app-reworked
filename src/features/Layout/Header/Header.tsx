import React, { FC } from "react";

import styles from "./Header.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import GitHub from "@/components/Icons/GitHub";
import Telegram from "@/components/Icons/Telegram";
import Vkontakte from "@/components/Icons/Vkontakte";
import Behance from "@/components/Icons/Behance";

const LanguageSwitcher = dynamic(
  import(
    "@/features/Layout/Header/LanguageSwitcher/components/LanguageSwitcher/LanguageSwitcher"
  ),
  {
    ssr: false,
  }
);

const ThemeSwitcher = dynamic(
  import(
    "@/features/Layout/Header/ThemeSwitcher/components/ThemeSwitcher/ThemeSwitcher"
  ),
  {
    ssr: false,
  }
);

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">Данила Маврин</Link>
      </h1>
      <div className={styles.other}>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/blog">Блог</Link>
            </li>
            <li>
              <Link href="/resources">Ресурсы</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.switchers}>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <ul className={styles.socials}>
          <li>
            <button>
              <GitHub />
            </button>
          </li>
          <li>
            <button>
              <Telegram />
            </button>
          </li>
          <li>
            <button>
              <Vkontakte />
            </button>
          </li>
          <li>
            <button>
              <Behance />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
