import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import Image from "next/image";
import myPhoto from "@/assets/me.jpg";
import myPhotoTwo from "@/assets/me_2.jpg";
import myPhotoThree from "@/assets/me_3.jpg";

import "swiper/css";
import "swiper/css/effect-cards";

import styles from "./LandingSection.module.scss";
import { motion } from "framer-motion";

const LandingSection: FC = () => {
  return (
    <motion.section
      className={styles.landing}
      initial={{ translateX: "-200px", opacity: 0 }}
      animate={{ translateX: "0px", opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className={styles.text}>
        <h1>
          Full-stack <span>JavaScript</span> Developer
        </h1>
        <p className={styles.info}>
          Front-end Developer из А-БТ. Веду свой блог и помогаю другим
          разработчикам становиться сильнее.
        </p>
        <p className={styles.stack}>
          React, Next, TypeScript, SASS, CSS Modules, Vite, Tailwind, Redux,
          Node, Nest, Postgres, TypeORM, Git, Prettier, ESLint, Figma
        </p>
      </div>
      <div className={styles.picture}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.slide}>
            <Image
              className={styles.image}
              src={myPhoto}
              alt="Моё фото"
              width={400}
              priority
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              className={styles.image}
              src={myPhotoTwo}
              alt="Моё второе фото"
              width={400}
              priority
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              className={styles.image}
              src={myPhotoThree}
              alt="Моё третье фото"
              width={400}
              priority
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.section>
  );
};

export default LandingSection;
