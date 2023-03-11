import React, { FC } from "react";
import { motion } from "framer-motion";

import { fromLeftAnimation } from "@/shared/lib/framer";
import { FormattedMessage } from "react-intl";
import { cards } from "../utils";
import Link from "next/link";

const MotionLink = motion(Link);

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Resources: FC = () => {
  return (
    <main className="mt-20">
      <motion.div className="space-y-4" {...fromLeftAnimation}>
        <h1 className="text-5xl font-black">
          <FormattedMessage
            id="pages.resources.heading"
            values={{ _: (chunks) => chunks }}
          />
        </h1>
        <p className="text-lg text-gray xl:w-2/6">
          <FormattedMessage
            id="pages.resources.subtitle"
            values={{ _: (chunks) => chunks }}
          />
        </p>
      </motion.div>
      <motion.div
        variants={variants}
        className="grid xl:grid-cols-4 mt-10 gap-6"
        initial="hidden"
        animate="show"
      >
        {cards.map((card) => (
          <MotionLink
            className="inline-block"
            key={card.id}
            href={card.url}
            target="_blank"
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", velocity: 0.5 },
            }}
            variants={item}
            whileTap={{ scale: 0.9 }}
          >
            <article
              className="flex flex-col justify-end p-6 rounded-lg shadow-2xl h-48 bg-cover text-white"
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${card.image})`,
                backgroundSize: "cover",
              }}
            >
              <h3 className="text-2xl">{card.title}</h3>
              <p className="text-white/60 font-light">
                <FormattedMessage
                  id={`pages.resources.resource${card.id}.description`}
                  values={{ _: (chunks) => chunks }}
                />
              </p>
            </article>
          </MotionLink>
        ))}
      </motion.div>
    </main>
  );
};

export default Resources;
