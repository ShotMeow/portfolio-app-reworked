import React, { FC, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Technologies.module.scss";
import Frontend from "@/components/Sections/HomePage/AboutSection/Technologies/Frontend/Frontend";
import Backend from "@/components/Sections/HomePage/AboutSection/Technologies/Backend/Backend";
import Design from "@/components/Sections/HomePage/AboutSection/Technologies/Design/Design";
import { AnimatePresence } from "framer-motion";
import Arrow from "@/components/Icons/Arrow";
import classNames from "classnames";

const Technologies: FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  return (
    <motion.div
      className={styles.technologies}
      initial={{ translateX: "200px", opacity: 0 }}
      animate={{ translateX: "0px", opacity: 1 }}
    >
      <article className={styles.item}>
        <button
          className={classNames({
            [styles.active]: step === 1,
          })}
          onClick={() => setStep(1)}
        >
          <h3>Front-end (Клиентская разработка)</h3>
          <Arrow />
        </button>
        <AnimatePresence>{step === 1 && <Frontend />}</AnimatePresence>
      </article>
      <article className={styles.item}>
        <button
          className={classNames({
            [styles.active]: step === 2,
          })}
          onClick={() => setStep(2)}
        >
          <h3>Back-end (Серверная разработка)</h3>
          <Arrow />
        </button>
        <AnimatePresence>{step === 2 && <Backend />}</AnimatePresence>
      </article>
      <article className={styles.item}>
        <button
          className={classNames({
            [styles.active]: step === 3,
          })}
          onClick={() => setStep(3)}
        >
          <h3>Design</h3>
          <Arrow />
        </button>
        <AnimatePresence>{step === 3 && <Design />}</AnimatePresence>
      </article>
    </motion.div>
  );
};

export default Technologies;
