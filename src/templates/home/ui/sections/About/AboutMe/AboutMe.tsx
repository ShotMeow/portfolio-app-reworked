import React, { FC } from "react";
import { motion } from "framer-motion";

import {
  inViewFromBottomAnimation,
  inViewFromRightAnimation,
  inViewFromTopAnimation,
} from "@/shared/lib/framer";
import { FormattedMessage } from "react-intl";

const AboutMe: FC = () => {
  return (
    <div className="w-full">
      <motion.div {...inViewFromTopAnimation}>
        <p className="text-2xl font-bold">
          <FormattedMessage
            id="pages.main.about.name"
            values={{ _: (chunks) => chunks }}
          />
        </p>
        <p className="text-sm text-gray">Full-stack JavaScript Developer</p>
      </motion.div>
      <motion.div {...inViewFromRightAnimation}>
        <p className="mt-6 text-xl">
          <FormattedMessage
            id="pages.main.about.text"
            values={{ _: (chunks) => chunks }}
          />
        </p>
        <p className="mt-4 text-xl">
          <FormattedMessage
            id="pages.main.about.text2"
            values={{ _: (chunks) => chunks }}
          />
        </p>
      </motion.div>
      <motion.p className="text-gray mt-6" {...inViewFromBottomAnimation}>
        <FormattedMessage
          id="pages.main.about.skills"
          values={{ _: (chunks) => chunks }}
        />
      </motion.p>
    </div>
  );
};

export default AboutMe;
