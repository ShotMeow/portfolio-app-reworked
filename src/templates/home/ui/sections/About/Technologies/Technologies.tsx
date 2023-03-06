import React, { FC, useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowIcon } from "@/shared/ui";
import { TechnologiesEnum } from "./Technologies.types";
import TechnologiesList from "./TechnologiesList/TechnologiesList";
import { backendData, designData, frontendData } from "./Technologies.data";
import { inViewFromBottomAnimation } from "@/shared/lib/framer";

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
          className="flex items-center justify-between"
          onClick={() => setShownTechnology(TechnologiesEnum.FRONTEND)}
        >
          <p className="text-xl font-bold text-start">
            Front-end (Клиентская разработка)
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
            <TechnologiesList items={frontendData} />
          )}
        </AnimatePresence>
      </motion.article>
      <motion.article
        className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-6 flex flex-col shadow-custom"
        {...inViewFromBottomAnimation}
      >
        <button
          className="flex items-center justify-between"
          onClick={() => setShownTechnology(TechnologiesEnum.BACKEND)}
        >
          <p className="text-xl font-bold text-start">
            Back-end (Серверная разработка)
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
            <TechnologiesList items={backendData} />
          )}
        </AnimatePresence>
      </motion.article>
      <motion.article
        className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-6 flex flex-col shadow-custom"
        {...inViewFromBottomAnimation}
      >
        <button
          className="flex items-center justify-between"
          onClick={() => setShownTechnology(TechnologiesEnum.DESIGN)}
        >
          <p className="text-xl font-bold text-start">Design</p>
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
            <TechnologiesList items={designData} />
          )}
        </AnimatePresence>
      </motion.article>
    </div>
  );
};

export default Technologies;
