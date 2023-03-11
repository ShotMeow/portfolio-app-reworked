import React, { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

import { GithubIcon } from "@/shared/ui";
import { TelegramIcon } from "@/shared/ui";
import { VkontakteIcon } from "@/shared/ui";
import { BehanceIcon } from "@/shared/ui";
import { FormattedMessage } from "react-intl";

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
    <header className="flex items-center justify-between pt-6 relative z-50">
      <MotionLink
        className="text-4xl font-bold"
        href="/"
        whileTap={{ scale: 0.95 }}
      >
        <FormattedMessage id="header.logo" values={{ _: (chunks) => chunks }} />
      </MotionLink>
      <div className="flex items-center gap-16">
        <nav>
          <ul className="flex items-center gap-6 mr-10">
            <li>
              <MotionLink
                className="inline-block"
                href="/blog"
                whileTap={{ scale: 0.95 }}
              >
                <FormattedMessage
                  id="header.nav.blog"
                  values={{ _: (chunks) => chunks }}
                />
              </MotionLink>
            </li>
            <li>
              <MotionLink
                className="inline-block"
                href="/resources"
                whileTap={{ scale: 0.95 }}
              >
                <FormattedMessage
                  id="header.nav.resources"
                  values={{ _: (chunks) => chunks }}
                />
              </MotionLink>
            </li>
            <li>
              <MotionLink
                className="inline-block"
                href="/training"
                whileTap={{ scale: 0.95 }}
              >
                <FormattedMessage
                  id="header.nav.training"
                  values={{ _: (chunks) => chunks }}
                />
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
              className="inline-block"
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ShotMeow"
              aria-label="Ссылка на GitHub"
              target="_blank"
            >
              <GithubIcon />
            </MotionLink>
          </li>
          <li className="transition-transform hover:scale-105">
            <MotionLink
              className="inline-block"
              whileTap={{ scale: 0.95 }}
              href="https://t.me/sexy_shotmeow"
              aria-label="Ссылка на Telegram"
              target="_blank"
            >
              <TelegramIcon />
            </MotionLink>
          </li>
          <li className="transition-transform hover:scale-105">
            <MotionLink
              className="inline-block"
              whileTap={{ scale: 0.95 }}
              href="https://vk.com/sexy_shotmeow"
              aria-label="Ссылка на VK"
              target="_blank"
            >
              <VkontakteIcon />
            </MotionLink>
          </li>
          <li className="transition-transform hover:scale-105">
            <MotionLink
              className="inline-block"
              whileTap={{ scale: 0.95 }}
              href="https://www.behance.net/shotmeow"
              aria-label="Ссылка на Behance"
              target="_blank"
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
