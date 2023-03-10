import React, { FC, useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowIcon } from "@/shared/ui";
import { TechnologiesEnum } from "./Technologies.types";
import {
  heightAutoAnimation,
  inViewFromBottomAnimation,
} from "@/shared/lib/framer";
import { FormattedMessage } from "react-intl";

const Technologies: FC = () => {
  const [shownTechnology, setShownTechnology] = useState<TechnologiesEnum>(
    TechnologiesEnum.FRONTEND
  );

  return (
    <div className="w-full space-y-6">
      <motion.article
        className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-6 flex flex-col shadow-custom"
        {...inViewFromBottomAnimation}
      >
        <button
          className="flex items-center justify-between select-none"
          onClick={() => setShownTechnology(TechnologiesEnum.FRONTEND)}
        >
          <p className="text-xl font-bold text-start">
            <FormattedMessage
              id="pages.main.technologies.frontend.heading"
              values={{ _: (chunks) => chunks }}
            />
          </p>
          <ArrowIcon
            className={classNames(
              {
                "rotate-180": shownTechnology === TechnologiesEnum.FRONTEND,
              },
              "shrink-0"
            )}
          />
        </button>
        <AnimatePresence>
          {shownTechnology === TechnologiesEnum.FRONTEND && (
            <motion.ul className="space-y-4 mt-6" {...heightAutoAnimation}>
              <li>
                <p className="text-gray select-none">
                  <FormattedMessage
                    id="pages.main.technologies.lang"
                    values={{ _: (chunks) => chunks }}
                  />
                </p>
                <p className="text-xl font-bold">JavaScript & TypeScript</p>
              </li>
              <li>
                <p className="text-gray select-none">
                  <FormattedMessage
                    id="pages.main.technologies.structure"
                    values={{ _: (chunks) => chunks }}
                  />
                </p>
                <p className="text-xl font-bold">React & Next.js</p>
              </li>
              <li>
                <p className="text-gray select-none">
                  <FormattedMessage
                    id="pages.main.technologies.state"
                    values={{ _: (chunks) => chunks }}
                  />
                </p>
                <p className="text-xl font-bold">
                  Redux Toolkit & React Context
                </p>
              </li>
              <li>
                <p className="text-gray select-none">
                  <FormattedMessage
                    id="pages.main.technologies.style"
                    values={{ _: (chunks) => chunks }}
                  />
                </p>
                <p className="text-xl font-bold">SASS & TailwindCSS</p>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.article>
      <motion.article
        className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-6 flex flex-col shadow-custom"
        {...inViewFromBottomAnimation}
      >
        <button
          className="flex items-center justify-between select-none"
          onClick={() => setShownTechnology(TechnologiesEnum.BACKEND)}
        >
          <p className="text-xl font-bold text-start">
            <FormattedMessage
              id="pages.main.technologies.backend.heading"
              values={{ _: (chunks) => chunks }}
            />
          </p>
          <ArrowIcon
            className={classNames(
              {
                "rotate-180": shownTechnology === TechnologiesEnum.BACKEND,
              },
              "shrink-0"
            )}
          />
        </button>
        <AnimatePresence>
          {shownTechnology === TechnologiesEnum.BACKEND && (
            <motion.ul className="space-y-4 mt-6" {...heightAutoAnimation}>
              <li>
                <p className="text-gray select-none">
                  <FormattedMessage
                    id="pages.main.technologies.lang"
                    values={{ _: (chunks) => chunks }}
                  />
                </p>
                <p className="text-xl font-bold">JavaScript & TypeScript</p>
              </li>
              <li>
                <p className="text-gray select-none">
                  <FormattedMessage
                    id="pages.main.technologies.structure"
                    values={{ _: (chunks) => chunks }}
                  />
                </p>
                <p className="text-xl font-bold">Node.js & NestJS</p>
              </li>
              <li>
                <p className="text-gray">ORM</p>
                <p className="text-xl font-bold">TypeORM</p>
              </li>
              <li>
                <p className="text-gray select-none">
                  <FormattedMessage
                    id="pages.main.technologies.db"
                    values={{ _: (chunks) => chunks }}
                  />
                </p>
                <p className="text-xl font-bold">PostgreSQL</p>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.article>
      <motion.article
        className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-6 flex flex-col shadow-custom"
        {...inViewFromBottomAnimation}
      >
        <button
          className="flex items-center justify-between select-none"
          onClick={() => setShownTechnology(TechnologiesEnum.DESIGN)}
        >
          <p className="text-xl font-bold text-start">
            <FormattedMessage
              id="pages.main.technologies.design.heading"
              values={{ _: (chunks) => chunks }}
            />
          </p>
          <ArrowIcon
            className={classNames(
              {
                "rotate-180": shownTechnology === TechnologiesEnum.DESIGN,
              },
              "shrink-0"
            )}
          />
        </button>
        <AnimatePresence>
          {shownTechnology === TechnologiesEnum.DESIGN && (
            <motion.ul className="space-y-4 mt-6" {...heightAutoAnimation}>
              <li>
                <p className="text-gray select-none">
                  <FormattedMessage
                    id="pages.main.technologies.tools"
                    values={{ _: (chunks) => chunks }}
                  />
                </p>
                <p className="text-xl font-bold">Figma & Adobe Photoshop</p>
              </li>
              <li>
                <p className="text-gray select-none">
                  <FormattedMessage
                    id="pages.main.technologies.animation"
                    values={{ _: (chunks) => chunks }}
                  />
                </p>
                <p className="text-xl font-bold">Adobe After Effects</p>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.article>
    </div>
  );
};

export default Technologies;
