import React, { FC } from "react";
import { motion } from "framer-motion";
import styles from "./AboutMe.module.scss";

const AboutMe: FC = () => {
  return (
    <motion.div
      className={styles.aboutMe}
      initial={{ translateX: "200px", opacity: 0 }}
      animate={{ translateX: "0px", opacity: 1 }}
    >
      <h4>Маврин Данила Андреевич</h4>
      <h5>Full-stack JavaScript Developer</h5>
      <div className={styles.text}>
        <p>
          Frontend разработчик из компании А-БТ. Веду свой личный блог, где
          делюсь своими мыслями относительно IT-индустрии и мировозрения.
        </p>
        <p>
          Веду активную преподавательскую деятельность, пишу статьи для TProger
          и Habr сообщества. <br /> Занимаюсь Backend разработкой и дизайном, в
          качестве хобби.
        </p>
        <h6 className={styles.traits}>
          Ответственный, Коммуникабельный, Целеустремленный
        </h6>
      </div>
    </motion.div>
  );
};

export default AboutMe;
