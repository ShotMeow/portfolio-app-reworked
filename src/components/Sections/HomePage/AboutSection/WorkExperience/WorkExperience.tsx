import React, { FC } from "react";
import { motion } from "framer-motion";
import styles from "./WorkExperience.module.scss";
import Link from "next/link";

const WorkExperience: FC = () => {
  return (
    <motion.div
      className={styles.experience}
      initial={{ translateX: "200px", opacity: 0 }}
      animate={{ translateX: "0px", opacity: 1 }}
    >
      <article className={styles.item}>
        <div className={styles.logo}>
          <h4>Pictus</h4>
        </div>
        <div className={styles.info}>
          <h3>Pictus Media</h3>
          <h5>Агентство интернет-маркетинга</h5>
          <div className={styles.spec}>
            <h6>Стаж: 3 месяца</h6>
            <div className={styles.circle} />
            <h6>Позиция: Веб-дизайнер</h6>
          </div>
          <p>
            Разрабатывал UI/UX дизайн для приложений клиентов компании. Я
            работал над проектами таких компаний, как: Vestel и aerobubble
          </p>
          <button>
            <Link href="https://pictus.media/">Перейти</Link>
          </button>
        </div>
      </article>
      <article className={styles.item}>
        <div className={styles.logo}>
          <h4>Kodland</h4>
        </div>
        <div className={styles.info}>
          <h3>Kodland</h3>
          <h5>Онлайн-школа цифровых навыков</h5>
          <div className={styles.spec}>
            <h6>Стаж: 1 год</h6>
            <div className={styles.circle} />
            <h6>Позиция: Преподаватель</h6>
          </div>
          <p>
            Преподавал уроки по направлениям “Веб-дизайн” и “Программирование на
            JS”. Помимо этого работал над доработкой методологических материалов
            этих же направлений.
          </p>
          <button>
            <Link href="https://www.kodland.org/">Перейти</Link>
          </button>
        </div>
      </article>
      <article className={styles.item}>
        <div className={styles.logo}>
          <h4>А-БТ</h4>
        </div>
        <div className={styles.info}>
          <h3>А-БТ</h3>
          <h5>IT-компания полного цикла</h5>
          <div className={styles.spec}>
            <h6>Стаж: работаю в текущее время</h6>
            <div className={styles.circle} />
            <h6>Позиция: Front-end Developer</h6>
          </div>
          <p>
            Разработка интерфейсов для терминалов, поддержка интерфейсов,
            разработка административных панелей
          </p>
          <button>
            <Link href="https://a-bt.ru/">Перейти</Link>
          </button>
        </div>
      </article>
    </motion.div>
  );
};

export default WorkExperience;
