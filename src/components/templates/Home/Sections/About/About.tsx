import React, { FC, useState } from "react";
import classNames from "classnames";
import AboutMe from "@/components/templates/Home/Sections/About/AboutMe/AboutMe";
import Experience from "@/components/templates/Home/Sections/About/Experience/Experience";
import Technologies from "@/components/templates/Home/Sections/About/Technologies/Technologies";
import Heading from "@/components/elements/Heading";
import { motion } from "framer-motion";
import { inViewFromLeftAnimation } from "@/animations/inView.animations";

const About: FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <section>
      {step === 1 && <Heading>Обо мне</Heading>}
      {step === 2 && <Heading>Опыт работы</Heading>}
      {step === 3 && <Heading>Технологии</Heading>}
      <div className="flex flex-col items-center md:flex-row md:items-start gap-20 my-10 md:my-24">
        <motion.aside className="shrink-0" {...inViewFromLeftAnimation}>
          <ul className="flex items-center gap-6 flex-col sm:flex-row md:flex-col md:items-start">
            <li>
              <motion.button
                className={classNames({
                  "text-gray": step !== 1,
                })}
                onClick={() => setStep(1)}
                whileTap={{ scale: 0.95 }}
              >
                /01 Обо мне
              </motion.button>
            </li>
            <li>
              <motion.button
                className={classNames({
                  "text-gray": step !== 2,
                })}
                onClick={() => setStep(2)}
                whileTap={{ scale: 0.95 }}
              >
                /02 Опыт работы
              </motion.button>
            </li>
            <li>
              <motion.button
                className={classNames({
                  "text-gray": step !== 3,
                })}
                onClick={() => setStep(3)}
                whileTap={{ scale: 0.95 }}
              >
                /03 Технологии
              </motion.button>
            </li>
          </ul>
        </motion.aside>
        {step === 1 && <AboutMe />}
        {step === 2 && <Experience />}
        {step === 3 && <Technologies />}
      </div>
    </section>
  );
};

export default About;
