import React, { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

import { GithubIcon } from "@/shared/ui";
import { TelegramIcon } from "@/shared/ui";
import { VkontakteIcon } from "@/shared/ui";
import { BehanceIcon } from "@/shared/ui";

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

const DesktopHeader: FC = () => {
  return (
    <header className="flex items-center justify-between pt-6 relative z-20">
      <MotionLink
        className="text-4xl font-bold"
        href="/"
        whileTap={{ scale: 0.95 }}
      >
        Данила Маврин
      </MotionLink>
      <div className="flex items-center gap-16">
        <nav>
          <ul className="flex items-center gap-6 mr-10">
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
    </header>
  );
};

export default DesktopHeader;