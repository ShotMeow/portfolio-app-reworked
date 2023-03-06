import React, { FC, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import { useLocale } from "../../hooks";

import LanguageSwitcherButton from "../LanguageSwitcherButton/LanguageSwitcherButton";
import LanguageSwitcherMenu from "../LanguageSwitcherMenu/LanguageSwitcherMenu";

const Dropdown = dynamic(
  () => import("@/shared/ui").then((imports) => imports.Dropdown),
  {
    ssr: false,
  }
);

const LanguageSwitcher: FC = () => {
  const { locale, setLocale } = useLocale();
  const [dropdownShown, setDropdownShown] = useState<boolean>(false);
  const targetRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <LanguageSwitcherButton
        onClick={(event) => {
          event.stopPropagation();
          setDropdownShown(!dropdownShown);
        }}
        ref={targetRef}
        locale={locale}
        shown={dropdownShown}
      />
      <AnimatePresence>
        {dropdownShown && (
          <Dropdown
            shown={dropdownShown}
            targetRef={targetRef}
            onShownChange={setDropdownShown}
          >
            <LanguageSwitcherMenu
              locale={locale}
              onChangeLocale={(locale) => setLocale(locale)}
            />
          </Dropdown>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
