import React, { FC, useRef, useState } from "react";

import styles from "./ThemeSwitcher.module.scss";
import ThemeSwitcherButton from "@/features/theme/components/ThemeSwitcherButton/ThemeSwitcherButton";
import ThemeSwitcherMenu from "@/features/theme/components/ThemeSwitcherMenu/ThemeSwitcherMenu";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { useColorScheme } from "@/features/theme/hooks";

const Dropdown = dynamic(import("@/components/Dropdown/Dropdown"), {
  ssr: false,
});

const ThemeSwitcher: FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [dropdownShown, setDropdownShown] = useState<boolean>(false);
  const targetRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.switcher}>
      <ThemeSwitcherButton
        onClick={(event) => {
          event.stopPropagation();
          setDropdownShown(!dropdownShown);
        }}
        ref={targetRef}
        colorScheme={colorScheme}
      />
      <AnimatePresence>
        {dropdownShown && (
          <Dropdown
            shown={dropdownShown}
            targetRef={targetRef}
            onShownChange={setDropdownShown}
          >
            <ThemeSwitcherMenu
              colorScheme={colorScheme}
              setColorScheme={setColorScheme}
            />
          </Dropdown>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
