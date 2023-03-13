import React, { FC, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor: FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const springBigConfig = { damping: 20, stiffness: 100 };
  const cursorBigXSpring = useSpring(cursorX, springBigConfig);
  const cursorBigYSpring = useSpring(cursorY, springBigConfig);

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      cursorX.set(event.clientX - 16);
      cursorY.set(event.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="pointer-events-none relative hidden lg:block">
      <motion.div
        className="fixed w-4 h-4 rounded-full bg-black dark:bg-white z-50"
        style={{
          top: "8px",
          left: "8px",
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          mixBlendMode: "difference",
        }}
      />
      <motion.div
        className="fixed w-5 h-5 rounded-full bg-black/20 dark:bg-white/20 z-50"
        style={{
          top: "6px",
          left: "6px",
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-14 h-14 rounded-full border-2 border-black/10 dark:border-white/10 z-0"
        style={{
          top: "-12px",
          left: "-12px",
          translateX: cursorBigXSpring,
          translateY: cursorBigYSpring,
        }}
      />
    </div>
  );
};
