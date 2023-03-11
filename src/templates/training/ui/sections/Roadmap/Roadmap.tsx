import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import roadmapSrc from "@/shared/assets/roadmap.jpg";
import { inViewFromBottomAnimation } from "@/shared/lib/framer";
import { FormattedMessage } from "react-intl";

const Roadmap: FC = () => {
  return (
    <motion.section
      className="relative space-y-10"
      {...inViewFromBottomAnimation}
    >
      <h3 className="text-4xl text-center">
        <FormattedMessage
          id="pages.training.program.heading"
          values={{ _: (chunks) => chunks }}
        />
      </h3>
      <Image
        placeholder="blur"
        className="rounded-lg shadow-2xl relative z-20"
        src={roadmapSrc}
        alt="Roadmap"
        priority
      />
      <div className="absolute -top-10 left-20 w-32 h-32 md:w-60 md:h-60 bg-blue rounded-full filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute -top-20 right-0 w-32 h-32 md:w-72 md:h-72 z-30 bg-red rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-40 w-32 h-32 md:w-40 md:h-40 z-30 bg-orange rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
    </motion.section>
  );
};

export default Roadmap;
