import React, { FC } from "react";
import { motion } from "framer-motion";

import { fromBottomAnimation } from "@/shared/lib/framer";
import { FormattedMessage } from "react-intl";
import { cards } from "../utils";
import Link from "next/link";

const MotionLink = motion(Link);

const Resources: FC = () => {
  return (
    <motion.main className="mt-20" {...fromBottomAnimation}>
      <div className="space-y-4">
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
      </div>
      <div className="grid xl:grid-cols-4 mt-10 gap-6">
        {cards.map((card) => (
          <MotionLink
            className="inline-block"
            key={card.id}
            href={card.url}
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
          >
            <article
              className="flex flex-col justify-end p-6 rounded-lg shadow-2xl h-48 bg-cover"
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
      </div>
    </motion.main>
  );
};

export default Resources;
