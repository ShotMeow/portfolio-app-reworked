import React, {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
} from "react";
import { createFocusTrap } from "focus-trap";
import classNames from "classnames";
import { motion } from "framer-motion";

import styles from "./Dropdown.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  targetRef: RefObject<HTMLElement>;
  onShownChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: FC<PropsWithChildren<Props>> = ({
  children,
  onShownChange,
  targetRef,
  className,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const trap = createFocusTrap(ref.current as HTMLDivElement, {
      allowOutsideClick: true,
    });

    trap.activate();

    return () => {
      trap.deactivate();
    };
  }, [targetRef]);

  useEffect(() => {
    const documentClickListener = () => {
      onShownChange(false);
    };

    document.addEventListener("click", documentClickListener);

    return () => {
      document.removeEventListener("click", documentClickListener);
    };
  }, [onShownChange]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: -20 }}
      exit={{ opacity: 0 }}
    >
      <div
        ref={ref}
        className={classNames(
          {
            [styles.dropdown]: true,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Dropdown;
