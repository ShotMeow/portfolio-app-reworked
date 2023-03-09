import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { inViewFromBottomAnimation } from "@/shared/lib/framer";
import { FormattedMessage } from "react-intl";

const Contact: FC = () => {
  return (
    <motion.section className="space-y-10 mb-20" {...inViewFromBottomAnimation}>
      <h3 className="text-4xl text-center">
        <FormattedMessage
          id="pages.training.questions.heading"
          values={{ _: (chunks) => chunks }}
        />
      </h3>
      <p className="text-center text-2xl">
        <Link className="underline text-blue" href="https://t.me/shotmeow">
          Telegram: @shotmeow
        </Link>
      </p>
    </motion.section>
  );
};

export default Contact;
