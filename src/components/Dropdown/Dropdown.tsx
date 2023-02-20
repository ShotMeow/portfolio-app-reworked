import React, {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { createFocusTrap } from "focus-trap";
import classNames from "classnames";

import styles from "./Dropdown.module.scss";
import { createPortal } from "react-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {
  targetRef: RefObject<HTMLElement>;
  shown: boolean;
  onShownChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const calcPosition = (targetElement: HTMLElement) => {
  const rect = targetElement.getBoundingClientRect();

  return {
    top: window.scrollY + rect.bottom + 12,
    right: window.innerWidth - rect.right - window.scrollX,
  };
};

const Dropdown: FC<PropsWithChildren<Props>> = ({
  children,
  shown,
  onShownChange,
  targetRef,
  className,
  ...props
}) => {
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const trap = createFocusTrap(ref.current as HTMLDivElement, {
      allowOutsideClick: true,
    });

    if (shown) {
      trap.activate();
      setPosition(calcPosition(targetRef.current as HTMLElement));
    }

    return () => {
      trap.deactivate();
    };
  }, [shown, targetRef]);

  return createPortal(
    <div
      ref={ref}
      className={classNames(
        {
          [styles.dropdown]: true,
          [styles.shown]: shown,
        },
        className
      )}
      style={position}
      {...props}
    >
      {children}
    </div>,
    document.getElementById("overlay") as HTMLElement
  );
};

export default Dropdown;
