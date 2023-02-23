import { FC } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import GitHub from "@/components/elements/Icons/GitHub";
import Telegram from "@/components/elements/Icons/Telegram";
import Vkontakte from "@/components/elements/Icons/Vkontakte";
import Behance from "@/components/elements/Icons/Behance";
import Menu from "@/components/elements/Icons/Menu";

import ThemeSwitcherButtonSkeleton from "@/features/colorScheme/components/ThemeSwitcherButton/ThemeSwitcherButtonSkeleton";
import LanguageSwitcherButtonSkeleton from "@/features/language/components/LanguageSwitcherButton/LanguageSwitcherButtonSkeleton";
import { fromTopAnimation } from "@/animations/base.animations";

const LanguageSwitcher = dynamic(
  import("@/features/language/components/LanguageSwitcher/LanguageSwitcher"),
  {
    ssr: false,
    loading: () => <LanguageSwitcherButtonSkeleton />,
  }
);

const ThemeSwitcher = dynamic(
  import("@/features/colorScheme/components/ThemeSwitcher/ThemeSwitcher"),
  {
    ssr: false,
    loading: () => <ThemeSwitcherButtonSkeleton />,
  }
);

const Header: FC = () => {
  return (
    <motion.header
      className="flex items-center justify-between pt-6 relative z-20"
      {...fromTopAnimation}
    >
      <motion.div whileTap={{ scale: 0.95 }}>
        <Link className="text-4xl font-bold" href="/">
          Данила Маврин
        </Link>
      </motion.div>
      <div className="hidden md:flex items-center gap-16">
        <nav>
          <ul className="flex items-center gap-6 mr-10">
            <motion.li whileTap={{ scale: 0.95 }}>
              <Link href="/blog">Блог</Link>
            </motion.li>
            <motion.li whileTap={{ scale: 0.95 }}>
              <Link href="/resources">Ресурсы</Link>
            </motion.li>
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <ul className="flex items-center gap-4">
          <motion.li
            className="transition-transform hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://github.com/ShotMeow"
              aria-label="Ссылка на GitHub"
            >
              <GitHub />
            </Link>
          </motion.li>
          <motion.li
            className="transition-transform hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://t.me/sexy_shotmeow"
              aria-label="Ссылка на Telegram"
            >
              <Telegram />
            </Link>
          </motion.li>
          <motion.li
            className="transition-transform hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            <Link href="https://vk.com/sexy_shotmeow" aria-label="Ссылка на VK">
              <Vkontakte />
            </Link>
          </motion.li>
          <motion.li
            className="transition-transform hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://www.behance.net/shotmeow"
              aria-label="Ссылка на Behance"
            >
              <Behance />
            </Link>
          </motion.li>
        </ul>
      </div>
      <button className="md:hidden">
        <Menu />
      </button>
    </motion.header>
  );
};

export default Header;
