import React, { FC, useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Technologies from "./Technologies/Technologies";
import { Heading } from "@/shared/ui";
import { inViewFromLeftAnimation } from "@/shared/lib/framer";
import { FormattedMessage } from "react-intl";

const About: FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <section>
      {step === 1 && (
        <Heading>
          <FormattedMessage
            id="pages.main.heading.about"
            values={{ _: (chunks) => chunks }}
          />
        </Heading>
      )}
      {step === 2 && (
        <Heading>
          <FormattedMessage
            id="pages.main.heading.experience"
            values={{ _: (chunks) => chunks }}
          />
        </Heading>
      )}
      {step === 3 && (
        <Heading>
          <FormattedMessage
            id="pages.main.heading.technologies"
            values={{ _: (chunks) => chunks }}
          />
        </Heading>
      )}
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
                /01{" "}
                <FormattedMessage
                  id="pages.main.heading.about"
                  values={{ _: (chunks) => chunks }}
                />
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
                /02{" "}
                <FormattedMessage
                  id="pages.main.heading.experience"
                  values={{ _: (chunks) => chunks }}
                />
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
                /03{" "}
                <FormattedMessage
                  id="pages.main.heading.technologies"
                  values={{ _: (chunks) => chunks }}
                />
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
