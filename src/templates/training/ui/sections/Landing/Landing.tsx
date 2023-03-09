import React, { FC } from "react";
import { motion } from "framer-motion";

import { fromBottomAnimation } from "@/shared/lib/framer";
import { FormattedMessage } from "react-intl";

const Landing: FC = () => {
  return (
    <motion.section
      className="text-center flex flex-col items-center justify-center mt-20 md:mt-40 lg:mt-80"
      {...fromBottomAnimation}
    >
      <h2 className="text-5xl md:text-6xl font-black">
        Full-stack{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-red to-orange">
          JavaScript
        </span>{" "}
        Course
      </h2>
      <p className="text-2xl font-thin text-gray mt-4">
        <FormattedMessage
          id="pages.training.subtitle"
          values={{ _: (chunks) => chunks }}
        />
      </p>
    </motion.section>
  );
};

export default Landing;
