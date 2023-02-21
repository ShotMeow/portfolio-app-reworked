import React, { FC, useRef, useState } from "react";
import { useLocale } from "@/features/Layout/Header/LanguageSwitcher/hooks";

import styles from "./LanguageSwitcher.module.scss";
import LanguageSwitcherButton from "@/features/Layout/Header/LanguageSwitcher/components/LanguageSwitcherButton/LanguageSwitcherButton";
import LanguageSwitcherMenu from "@/features/Layout/Header/LanguageSwitcher/components/LanguageSwitcherMenu/LanguageSwitcherMenu";
import Dropdown from "@/components/Dropdown/Dropdown";
import { AnimatePresence } from "framer-motion";

const LanguageSwitcher: FC = () => {
  const { locale, setLocale } = useLocale();
  const [dropdownShown, setDropdownShown] = useState<boolean>(false);
  const targetRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.switcher}>
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
          <Dropdown targetRef={targetRef} onShownChange={setDropdownShown}>
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
