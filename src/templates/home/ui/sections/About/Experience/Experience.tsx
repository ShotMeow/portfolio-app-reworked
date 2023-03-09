import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { inViewFromBottomAnimation } from "@/shared/lib/framer";
import { FormattedMessage } from "react-intl";

const Experience: FC = () => {
  return (
    <div className="w-full space-y-6">
      <motion.article
        className="backdrop-blur-xl bg-white/5 rounded-lg p-6 flex items-center flex-col lg:flex-row gap-10 shadow-custom"
        {...inViewFromBottomAnimation}
      >
        <div className="backdrop-blur-xl bg-white/5 w-full h-32 lg:w-60 lg:h-60 rounded-lg shrink-0 flex items-center justify-center shadow-custom">
          <p className="text-3xl font-black uppercase">Pictus</p>
        </div>
        <div>
          <p className="text-2xl font-black">Pictus Media</p>
          <p className="text-gray text-sm">
            <FormattedMessage
              id="pages.main.experience.pictus.subtitle"
              values={{ _: (chunks) => chunks }}
            />
          </p>
          <div className="flex items-start flex-col sm:items-center sm:flex-row gap-2 sm:gap-6 mt-4">
            <p>
              <FormattedMessage
                id="pages.main.experience.pictus.experience"
                values={{ _: (chunks) => chunks }}
              />
            </p>
            <div className="h-1 w-1 bg-white rounded-full hidden sm:block" />
            <p>
              <FormattedMessage
                id="pages.main.experience.pictus.position"
                values={{ _: (chunks) => chunks }}
              />
            </p>
          </div>
          <p className="mt-6">
            <FormattedMessage
              id="pages.main.experience.pictus.text"
              values={{ _: (chunks) => chunks }}
            />
          </p>
          <button className="underline text-lg mt-4">
            <Link href="https://pictus.media/">
              <FormattedMessage
                id="pages.main.experience.link"
                values={{ _: (chunks) => chunks }}
              />
            </Link>
          </button>
        </div>
      </motion.article>
      <motion.article
        className="backdrop-blur-xl bg-white/5 rounded-lg p-6 flex items-center flex-col lg:flex-row gap-10 shadow-custom"
        {...inViewFromBottomAnimation}
      >
        <div className="backdrop-blur-xl bg-white/5 w-full h-32 lg:w-60 lg:h-60 rounded-lg shrink-0 flex items-center justify-center shadow-custom">
          <p className="text-3xl font-black uppercase">Kodland</p>
        </div>
        <div>
          <p className="text-2xl font-black">Kodland</p>
          <p className="text-gray text-sm">
            <FormattedMessage
              id="pages.main.experience.kodland.subtitle"
              values={{ _: (chunks) => chunks }}
            />
          </p>
          <div className="flex items-start flex-col sm:items-center sm:flex-row gap-2 sm:gap-6 mt-4">
            <p>
              <FormattedMessage
                id="pages.main.experience.kodland.experience"
                values={{ _: (chunks) => chunks }}
              />
            </p>
            <div className="h-1 w-1 bg-white rounded-full hidden sm:block" />
            <p>
              <FormattedMessage
                id="pages.main.experience.kodland.position"
                values={{ _: (chunks) => chunks }}
              />
            </p>
          </div>
          <p className="mt-6">
            <FormattedMessage
              id="pages.main.experience.kodland.text"
              values={{ _: (chunks) => chunks }}
            />
          </p>
          <button className="underline text-lg mt-4">
            <Link href="https://www.kodland.org/">
              <FormattedMessage
                id="pages.main.experience.link"
                values={{ _: (chunks) => chunks }}
              />
            </Link>
          </button>
        </div>
      </motion.article>
      <motion.article
        className="backdrop-blur-xl bg-white/5 rounded-lg p-6 flex items-center flex-col lg:flex-row gap-10 shadow-custom"
        {...inViewFromBottomAnimation}
      >
        <div className="backdrop-blur-xl bg-white/5 w-full h-32 lg:w-60 lg:h-60 rounded-lg shrink-0 flex items-center justify-center shadow-custom">
          <p className="text-3xl font-black uppercase">А-БТ</p>
        </div>
        <div>
          <p className="text-2xl font-black">А-БТ</p>
          <p className="text-gray text-sm">
            <FormattedMessage
              id="pages.main.experience.abt.subtitle"
              values={{ _: (chunks) => chunks }}
            />
          </p>
          <div className="flex items-start flex-col sm:items-center sm:flex-row gap-2 sm:gap-6 mt-4">
            <p>
              <FormattedMessage
                id="pages.main.experience.abt.experience"
                values={{ _: (chunks) => chunks }}
              />
            </p>
            <div className="h-1 w-1 bg-white rounded-full hidden sm:block" />
            <p>
              <FormattedMessage
                id="pages.main.experience.abt.position"
                values={{ _: (chunks) => chunks }}
              />
            </p>
          </div>
          <p className="mt-6">
            <FormattedMessage
              id="pages.main.experience.abt.text"
              values={{ _: (chunks) => chunks }}
            />
          </p>
          <button className="underline text-lg mt-4">
            <Link href="https://a-bt.ru/">
              <FormattedMessage
                id="pages.main.experience.link"
                values={{ _: (chunks) => chunks }}
              />
            </Link>
          </button>
        </div>
      </motion.article>
    </div>
  );
};

export default Experience;
