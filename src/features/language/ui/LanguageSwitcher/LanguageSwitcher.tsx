import React, { FC, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import LanguageSwitcherButton from "../LanguageSwitcherButton/LanguageSwitcherButton";
import LanguageSwitcherMenu from "../LanguageSwitcherMenu/LanguageSwitcherMenu";
import { useRouter } from "next/router";
import { Locale } from "../../types";

const Dropdown = dynamic(
  () => import("@/shared/ui").then((imports) => imports.Dropdown),
  {
    ssr: false,
  }
);

const LanguageSwitcher: FC = () => {
  const { locale } = useRouter();

  const [dropdownShown, setDropdownShown] = useState<boolean>(false);
  const targetRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <LanguageSwitcherButton
        onClick={(event) => {
          event.stopPropagation();
          setDropdownShown(!dropdownShown);
        }}
        locale={locale as Locale}
        ref={targetRef}
        shown={dropdownShown}
      />
      <AnimatePresence>
        {dropdownShown && (
          <Dropdown
            shown={dropdownShown}
            targetRef={targetRef}
            onShownChange={setDropdownShown}
          >
            <LanguageSwitcherMenu locale={locale as Locale} />
          </Dropdown>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
