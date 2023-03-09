import React, { FC } from "react";
import { motion } from "framer-motion";

import { inViewFromBottomAnimation } from "@/shared/lib/framer";
import { FormattedMessage } from "react-intl";

const Professional: FC = () => {
  return (
    <motion.section className="space-y-6" {...inViewFromBottomAnimation}>
      <h3 className="text-4xl text-center">
        <FormattedMessage
          id="pages.training.professional.heading"
          values={{ _: (chunks) => chunks }}
        />
      </h3>
      <p className="text-xl font-thin text-gray">
        <FormattedMessage
          id="pages.training.professional.text1"
          values={{ _: (chunks) => chunks }}
        />
      </p>
      <p className="text-xl font-thin text-gray">
        <FormattedMessage
          id="pages.training.professional.text2"
          values={{ _: (chunks) => chunks }}
        />
      </p>
      <p className="text-xl font-thin text-gray">
        <FormattedMessage
          id="pages.training.professional.text3"
          values={{ _: (chunks) => chunks }}
        />
      </p>
    </motion.section>
  );
};

export default Professional;
