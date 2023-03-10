import React, {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
} from "react";
import { createFocusTrap } from "focus-trap";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement> {
  targetRef: RefObject<HTMLElement>;
  onShownChange: React.Dispatch<React.SetStateAction<boolean>>;
  shown: boolean;
}

const Dropdown: FC<PropsWithChildren<Props>> = ({
  children,
  onShownChange,
  targetRef,
  className,
  shown,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const trap = createFocusTrap(ref.current as HTMLDivElement, {
      allowOutsideClick: true,
      clickOutsideDeactivates: true,
    });

    shown && trap.activate();

    return () => {
      trap.deactivate();
    };
  }, [shown, targetRef]);

  useEffect(() => {
    const documentClickListener = () => {
      onShownChange(false);
    };

    document.addEventListener("click", documentClickListener);

    return () => {
      document.removeEventListener("click", documentClickListener);
    };
  }, [onShownChange]);

  useEffect(() => {
    onShownChange(shown);
  }, [shown, onShownChange]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -40, scale: 0 }}
      animate={{ opacity: 1, y: -20, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <div ref={ref} className="absolute right-0 top-10" {...props}>
        {children}
      </div>
    </motion.div>
  );
};

export default Dropdown;
