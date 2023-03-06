import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

import { inViewFromBottomAnimation } from "@/shared/lib/framer";

const Heading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center"
      {...inViewFromBottomAnimation}
    >
      <b className="absolute bottom-0 text-8xl z-0 blur-sm text-black/10 dark:text-white/10 select-none uppercase font-black hidden md:block">
        {children}
      </b>
      <h3 className="relative z-10 text-5xl sm:text-6xl font-black">
        {children}
      </h3>
    </motion.div>
  );
};

export default Heading;
