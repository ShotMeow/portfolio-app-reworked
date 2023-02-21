import React, { FC } from "react";

import styles from "./Header.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import GitHub from "@/components/Icons/GitHub";
import Telegram from "@/components/Icons/Telegram";
import Vkontakte from "@/components/Icons/Vkontakte";
import Behance from "@/components/Icons/Behance";

const LanguageSwitcher = dynamic(
  import("@/features/language/components/LanguageSwitcher/LanguageSwitcher"),
  {
    ssr: false,
  }
);

const ThemeSwitcher = dynamic(
  import("@/features/theme/components/ThemeSwitcher/ThemeSwitcher"),
  {
    ssr: false,
  }
);

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h2>
        <Link href="/">Данила Маврин</Link>
      </h2>
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
            <Link href="https://github.com/ShotMeow">
              <GitHub />
            </Link>
          </li>
          <li>
            <Link href="https://t.me/shotmeow">
              <Telegram />
            </Link>
          </li>
          <li>
            <Link href="https://vk.com/shotmeow">
              <Vkontakte />
            </Link>
          </li>
          <li>
            <Link href="https://www.behance.net/shotmeow">
              <Behance />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
