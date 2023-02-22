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
      <motion.div className={styles.heading}>
        {step === 1 && (
          <motion.b
            initial={{ translateY: "20px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Обо мне
          </motion.b>
        )}
        {step === 2 && (
          <motion.b
            initial={{ translateY: "20px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Опыт работы
          </motion.b>
        )}
        {step === 3 && (
          <motion.b
            initial={{ translateY: "20px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Технологии
          </motion.b>
        )}
        {step === 1 && (
          <motion.h3
            initial={{ translateY: "20px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Обо мне
          </motion.h3>
        )}
        {step === 2 && (
          <motion.h3
            initial={{ translateY: "20px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Опыт работы
          </motion.h3>
        )}
        {step === 3 && (
          <motion.h3
            initial={{ translateY: "20px", opacity: 0 }}
            whileInView={{ translateY: "0px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Технологии
          </motion.h3>
        )}
      </motion.div>
      <div className={styles.main}>
        <motion.aside
          className={styles.navigation}
          initial={{ translateX: "-200px", opacity: 0 }}
          whileInView={{ translateX: "0px", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <ul>
            <li
              className={classNames({
                [styles.active]: step === 1,
              })}
            >
              <button onClick={() => setStep(1)}>/01 Обо мне</button>
            </li>
            <li
              className={classNames({
                [styles.active]: step === 2,
              })}
            >
              <button onClick={() => setStep(2)}>/02 Опыт работы</button>
            </li>
            <li
              className={classNames({
                [styles.active]: step === 3,
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
          transition={{ type: "spring", stiffness: 100 }}
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
