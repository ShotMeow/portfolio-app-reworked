import React, { forwardRef, HTMLAttributes } from "react";

import styles from "./ThemeSwitcherButton.module.scss";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  onShownChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeSwitcherButton = forwardRef<HTMLButtonElement, Props>(
  ({ onShownChange, ...props }, ref) => {
    return (
      <button
        className={styles.button}
        ref={ref}
        onClick={() => onShownChange((prev) => !prev)}
        {...props}
      >
        Button
      </button>
    );
  }
);

ThemeSwitcherButton.displayName = "ThemeSwitcherButton";

export default ThemeSwitcherButton;
