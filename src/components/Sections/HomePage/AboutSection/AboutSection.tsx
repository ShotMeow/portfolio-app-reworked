import React, { FC, useState } from "react";

import styles from "./AboutSection.module.scss";
import AboutMe from "@/components/Sections/HomePage/AboutSection/AboutMe/AboutMe";
import WorkExperience from "@/components/Sections/HomePage/AboutSection/WorkExperience/WorkExperience";
import Technologies from "@/components/Sections/HomePage/AboutSection/Technologies/Technologies";
import classNames from "classnames";
import { motion } from "framer-motion";

const AboutSection: FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <motion.section className={styles.about}>
      {step === 1 && (
        <motion.div
          initial={{ translateY: "20px", opacity: 0 }}
          whileInView={{ translateY: "0px", opacity: 1 }}
          viewport={{ once: true }}
          className={styles.heading}
        >
          <b className="text-black/30 dark:text-white/10">Обо мне</b>
          <h3>Обо мне</h3>
        </motion.div>
      )}
      {step === 2 && (
        <motion.div
          initial={{ translateY: "20px", opacity: 0 }}
          whileInView={{ translateY: "0px", opacity: 1 }}
          viewport={{ once: true }}
          className={styles.heading}
        >
          <b className="text-black/30 dark:text-white/10">Опыт работы</b>
          <h3>Опыт работы</h3>
        </motion.div>
      )}
      {step === 3 && (
        <motion.div
          initial={{ translateY: "20px", opacity: 0 }}
          whileInView={{ translateY: "0px", opacity: 1 }}
          viewport={{ once: true }}
          className={styles.heading}
        >
          <b className="text-black/30 dark:text-white/10">Технологии</b>
          <h3>Технологии</h3>
        </motion.div>
      )}
      <div className={styles.main}>
        <motion.aside
          className={styles.navigation}
          initial={{ translateX: "-200px", opacity: 0 }}
          whileInView={{ translateX: "0px", opacity: 1 }}
          viewport={{ once: true }}
        >
          <ul className="dark:text-white/30">
            <li
              className={classNames({
                "dark:text-white text-black": step === 1,
                "dark:text-white/30 text-gray-light": step !== 1,
              })}
            >
              <button onClick={() => setStep(1)}>/01 Обо мне</button>
            </li>
            <li
              className={classNames({
                "dark:text-white text-black": step === 2,
                "dark:text-white/30 text-gray-light": step !== 2,
              })}
            >
              <button onClick={() => setStep(2)}>/02 Опыт работы</button>
            </li>
            <li
              className={classNames({
                "dark:text-white text-black": step === 3,
                "dark:text-white/30 text-gray-light": step !== 3,
              })}
            >
              <button onClick={() => setStep(3)}>/03 Технологии</button>
            </li>
          </ul>
        </motion.aside>
        <motion.div
          initial={{ translateX: "200px", opacity: 0 }}
          whileInView={{ translateX: "0px", opacity: 1 }}
          viewport={{ once: true }}
        >
          {step === 1 && <AboutMe />}
          {step === 2 && <WorkExperience />}
          {step === 3 && <Technologies />}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
