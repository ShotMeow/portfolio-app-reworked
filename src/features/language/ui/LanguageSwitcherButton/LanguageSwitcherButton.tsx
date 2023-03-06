import React, { forwardRef, HTMLAttributes } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import { Locale } from "../../types";

import { ArrowIcon } from "@/shared/ui";

interface Props extends HTMLAttributes<HTMLDivElement> {
  shown: boolean;
  locale: Locale;
}

const LanguageSwitcherButton = forwardRef<HTMLButtonElement, Props>(
  ({ shown, locale, ...props }, ref) => {
    return (
      <div {...props}>
        <motion.button
          className="relative flex items-center gap-2"
          whileTap={{ scale: 0.95 }}
          aria-label="Переключатель языка сайта"
          ref={ref}
        >
          <span className="text-xl absolute right-6">
            {locale === Locale.EN && "ENG"}
            {locale === Locale.RU && "RU"}
          </span>
          <span>
            <ArrowIcon
              className={classNames(
                {
                  "rotate-180": shown,
                },
                "transition-transform"
              )}
            />
          </span>
        </motion.button>
      </div>
    );
  }
);

LanguageSwitcherButton.displayName = "LanguageSwitcherButton";

export default LanguageSwitcherButton;
