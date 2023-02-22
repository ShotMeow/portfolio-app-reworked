import React, { forwardRef, HTMLAttributes } from "react";

import { Locale } from "@/features/language/types";
import Arrow from "@/components/elements/Icons/Arrow";
import classNames from "classnames";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  shown: boolean;
  locale: Locale;
}

const LanguageSwitcherButton = forwardRef<HTMLButtonElement, Props>(
  ({ shown, locale, ...props }, ref) => {
    return (
      <motion.div whileTap={{ scale: 0.95 }}>
        <button
          className="relative flex items-center gap-2"
          ref={ref}
          {...props}
        >
          <span className="text-xl absolute right-6">
            {locale === Locale.EN && "ENG"}
            {locale === Locale.RU && "RU"}
          </span>
          <span>
            <Arrow
              className={classNames(
                {
                  "rotate-180": shown,
                },
                "transition-transform"
              )}
            />
          </span>
        </button>
      </motion.div>
    );
  }
);

LanguageSwitcherButton.displayName = "LanguageSwitcherButton";

export default LanguageSwitcherButton;
