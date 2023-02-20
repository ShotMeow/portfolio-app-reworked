import React, { FC, useRef, useState } from "react";

import styles from "./ThemeSwitcher.module.scss";
import ThemeSwitcherButton from "@/features/Layout/Header/ThemeSwitcher/components/ThemeSwitcherButton/ThemeSwitcherButton";
import ThemeSwitcherMenu from "@/features/Layout/Header/ThemeSwitcher/components/ThemeSwitcherMenu/ThemeSwitcherMenu";
import dynamic from "next/dynamic";

const Dropdown = dynamic(import("@/components/Dropdown/Dropdown"), {
  ssr: false,
});

const ThemeSwitcher: FC = () => {
  const [dropdownShown, setDropdownShown] = useState<boolean>(false);
  const targetRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.switcher}>
      <ThemeSwitcherButton ref={targetRef} onShownChange={setDropdownShown} />
      <Dropdown
        targetRef={targetRef}
        shown={dropdownShown}
        onShownChange={setDropdownShown}
      >
        <ThemeSwitcherMenu />
      </Dropdown>
    </div>
  );
};

export default ThemeSwitcher;
