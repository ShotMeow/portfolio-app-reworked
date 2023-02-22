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
          Человек, обожающий свою работу и всегда идущий вперёд. Я верю, что
          человек может добиться всего, если он поставит цель и будет к ней
          идти.
        </p>
        <p>
          С 14 лет я увлекаюсь веб-технологиями, мне всегда было интересно, как
          устроена всемирная паутина. Для меня главное в жизни - саморазвитие, я
          ценю в людях ум и креативность, помешан на здоровом образе жизни и
          волейболе.
        </p>
        <h6 className={styles.traits}>
          Ответственный, Коммуникабельный, Целеустремленный
        </h6>
      </div>
    </motion.div>
  );
};

export default AboutMe;
