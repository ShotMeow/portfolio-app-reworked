import React, { FC } from "react";
import { motion } from "framer-motion";

import { inViewFromBottomAnimation } from "@/shared/lib/framer";
import { FormattedMessage } from "react-intl";

const WhatYouGet: FC = () => {
  return (
    <motion.section className="space-y-6" {...inViewFromBottomAnimation}>
      <h3 className="text-4xl text-center">
        <FormattedMessage
          id="pages.training.get.heading"
          values={{ _: (chunks) => chunks }}
        />
      </h3>
      <ul className="text-xl font-thin list-disc space-y-4 pl-4">
        <li>
          <FormattedMessage
            id="pages.training.get.text1"
            values={{ _: (chunks) => chunks }}
          />
        </li>
        <li>
          <FormattedMessage
            id="pages.training.get.text2"
            values={{ _: (chunks) => chunks }}
          />
        </li>
        <li>
          <FormattedMessage
            id="pages.training.get.text3"
            values={{ _: (chunks) => chunks }}
          />
        </li>
        <li>
          <FormattedMessage
            id="pages.training.get.text4"
            values={{ _: (chunks) => chunks }}
          />
        </li>
      </ul>
    </motion.section>
  );
};

export default WhatYouGet;
