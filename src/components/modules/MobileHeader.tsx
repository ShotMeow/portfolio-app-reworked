import React, { FC, useEffect, useState } from "react";
import { fromTopAndExit, fromTopAnimation } from "@/animations/base.animations";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import GitHub from "@/components/elements/Icons/GitHub";
import Telegram from "@/components/elements/Icons/Telegram";
import Vkontakte from "@/components/elements/Icons/Vkontakte";
import Behance from "@/components/elements/Icons/Behance";
import Menu from "@/components/elements/Icons/Menu";
import dynamic from "next/dynamic";
import LanguageSwitcherButtonSkeleton from "@/features/language/components/LanguageSwitcherButton/LanguageSwitcherButtonSkeleton";
import ThemeSwitcherButtonSkeleton from "@/features/colorScheme/components/ThemeSwitcherButton/ThemeSwitcherButtonSkeleton";

const MotionLink = motion(Link);

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

const MobileHeader: FC = () => {
  const [dropdownShown, setDropdownShown] = useState<boolean>(false);

  useEffect(() => {
    const documentClickListener = () => {
      setDropdownShown(false);
    };

    document.addEventListener("click", documentClickListener);

    return () => {
      document.removeEventListener("click", documentClickListener);
    };
  }, [setDropdownShown]);

  useEffect(() => {
    setDropdownShown(dropdownShown);
  }, [dropdownShown, setDropdownShown]);

  return (
    <>
      <motion.header
        className="relative flex items-center justify-between pt-6 relative z-20"
        {...fromTopAnimation}
      >
        <MotionLink
          whileTap={{ scale: 0.95 }}
          className="text-4xl font-bold"
          href="/"
        >
          Данила Маврин
        </MotionLink>
        <button
          onClick={(event) => {
            event.stopPropagation();
            setDropdownShown(!dropdownShown);
          }}
          className="md:hidden"
        >
          <Menu />
        </button>
      </motion.header>
      <AnimatePresence>
        {dropdownShown && (
          <motion.div
            className="absolute p-4 w-full left-0 top-0 z-40 bg-white shadow-2xl dark:bg-gradient-to-b from-bg-light to-bg-dark"
            {...fromTopAndExit}
          >
            <div className="w-full flex items-center justify-between container mx-auto">
              <nav>
                <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 mr-10">
                  <li>
                    <MotionLink href="/blog" whileTap={{ scale: 0.95 }}>
                      Блог
                    </MotionLink>
                  </li>
                  <li>
                    <MotionLink href="/resources" whileTap={{ scale: 0.95 }}>
                      Ресурсы
                    </MotionLink>
                  </li>
                </ul>
              </nav>
              <div className="flex flex-col-reverse sm:flex-row items-end sm:items-center gap-4 sm:gap-10">
                <div className="flex items-center gap-6">
                  <LanguageSwitcher />
                  <ThemeSwitcher />
                </div>
                <ul className="flex items-center gap-4">
                  <li className="transition-transform hover:scale-105">
                    <MotionLink
                      whileTap={{ scale: 0.95 }}
                      href="https://github.com/ShotMeow"
                      aria-label="Ссылка на GitHub"
                    >
                      <GitHub />
                    </MotionLink>
                  </li>
                  <li className="transition-transform hover:scale-105">
                    <MotionLink
                      whileTap={{ scale: 0.95 }}
                      href="https://t.me/sexy_shotmeow"
                      aria-label="Ссылка на Telegram"
                    >
                      <Telegram />
                    </MotionLink>
                  </li>
                  <li className="transition-transform hover:scale-105">
                    <MotionLink
                      whileTap={{ scale: 0.95 }}
                      href="https://vk.com/sexy_shotmeow"
                      aria-label="Ссылка на VK"
                    >
                      <Vkontakte />
                    </MotionLink>
                  </li>
                  <li className="transition-transform hover:scale-105">
                    <MotionLink
                      whileTap={{ scale: 0.95 }}
                      href="https://www.behance.net/shotmeow"
                      aria-label="Ссылка на Behance"
                    >
                      <Behance />
                    </MotionLink>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
