import React, { FC, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

import ThemeSwitcherButton from "../ThemeSwitcherButton/ThemeSwitcherButton";
import ThemeSwitcherMenu from "../ThemeSwitcherMenu/ThemeSwitcherMenu";

import { useColorScheme } from "../../hooks";

const Dropdown = dynamic(
  () => import("@/shared/ui").then((imports) => imports.Dropdown),
  {
    ssr: false,
  }
);

const ThemeSwitcher: FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [dropdownShown, setDropdownShown] = useState<boolean>(false);
  const targetRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
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
