import React, { FC, useState } from "react";
import Arrow from "@/components/elements/Icons/Arrow";
import { TechnologiesEnum } from "@/components/templates/HomePage/Sections/About/Technologies/Technologies.types";
import classNames from "classnames";
import TechnologiesList from "@/components/templates/HomePage/Sections/About/Technologies/TechnologiesList/TechnologiesList";
import {
  backendData,
  designData,
  frontendData,
} from "@/components/templates/HomePage/Sections/About/Technologies/Technologies.data";
import { AnimatePresence, motion } from "framer-motion";
import { inViewFromBottomAnimation } from "@/animations/inView.animations";

const Technologies: FC = () => {
  const [shownTechnology, setShownTechnology] = useState<TechnologiesEnum>(
    TechnologiesEnum.FRONTEND
  );

  return (
    <div className="w-full space-y-6">
      <motion.article
        className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-6 flex flex-col shadow-lg"
        {...inViewFromBottomAnimation}
      >
        <button
          className="flex items-center justify-between"
          onClick={() => setShownTechnology(TechnologiesEnum.FRONTEND)}
        >
          <h5 className="text-xl font-bold text-start">
            Front-end (Клиентская разработка)
          </h5>
          <Arrow
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
        className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-6 flex flex-col shadow-lg"
        {...inViewFromBottomAnimation}
      >
        <button
          className="flex items-center justify-between"
          onClick={() => setShownTechnology(TechnologiesEnum.BACKEND)}
        >
          <h5 className="text-xl font-bold text-start">
            Back-end (Серверная разработка)
          </h5>
          <Arrow
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
        className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-6 flex flex-col shadow-lg"
        {...inViewFromBottomAnimation}
      >
        <button
          className="flex items-center justify-between"
          onClick={() => setShownTechnology(TechnologiesEnum.DESIGN)}
        >
          <h5 className="text-xl font-bold text-start">Design</h5>
          <Arrow
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
