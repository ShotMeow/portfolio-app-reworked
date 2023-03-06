import React, { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

import { fromTopAndExit } from "@/shared/lib/framer";

import { GithubIcon } from "@/shared/ui";
import { TelegramIcon } from "@/shared/ui";
import { VkontakteIcon } from "@/shared/ui";
import { BehanceIcon } from "@/shared/ui";
import { MenuIcon } from "@/shared/ui";

const MotionLink = motion(Link);

const LanguageSwitcher = dynamic(
  import("@/features/language").then((imports) => imports.LanguageSwitcher),
  {
    ssr: false,
  }
);

const ThemeSwitcher = dynamic(
  import("@/features/colorScheme").then((imports) => imports.ThemeSwitcher),
  {
    ssr: false,
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
      <header className="relative flex items-center justify-between pt-6 z-20">
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
          <MenuIcon />
        </button>
      </header>
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
                  <li>
                    <MotionLink href="/training" whileTap={{ scale: 0.95 }}>
                      Обучение
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
                      <GithubIcon />
                    </MotionLink>
                  </li>
                  <li className="transition-transform hover:scale-105">
                    <MotionLink
                      whileTap={{ scale: 0.95 }}
                      href="https://t.me/sexy_shotmeow"
                      aria-label="Ссылка на Telegram"
                    >
                      <TelegramIcon />
                    </MotionLink>
                  </li>
                  <li className="transition-transform hover:scale-105">
                    <MotionLink
                      whileTap={{ scale: 0.95 }}
                      href="https://vk.com/sexy_shotmeow"
                      aria-label="Ссылка на VK"
                    >
                      <VkontakteIcon />
                    </MotionLink>
                  </li>
                  <li className="transition-transform hover:scale-105">
                    <MotionLink
                      whileTap={{ scale: 0.95 }}
                      href="https://www.behance.net/shotmeow"
                      aria-label="Ссылка на Behance"
                    >
                      <BehanceIcon />
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
