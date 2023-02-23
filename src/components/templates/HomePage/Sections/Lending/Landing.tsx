import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import Image from "next/image";
import { motion } from "framer-motion";

import swiperSlideImageFirst from "./images/swiperSlideImageFirst.webp";
import swiperSlideImageSecond from "./images/swiperSlideImageSecond.webp";
import swiperSlideImageThird from "./images/swiperSlideImageThird.webp";

import "swiper/css";
import "swiper/css/effect-cards";

import {
  fromLeftAnimation,
  fromRightAnimation,
} from "@/animations/base.animations";

const Landing: FC = () => {
  return (
    <section className="grid items-center lg:grid-cols-2 my-40 gap-10">
      <motion.div {...fromLeftAnimation}>
        <h1 className="text-5xl md:text-6xl font-black">
          Full-stack{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-red to-orange">
            JavaScript
          </span>{" "}
          Developer
        </h1>
        <h2 className="text-2xl font-bold mt-4">
          Front-end Developer из А-БТ. Веду свой блог и помогаю другим
          разработчикам становиться сильнее.
        </h2>
        <p className="mt-10">
          React, Next, TypeScript, SASS, CSS Modules, Vite, Tailwind, Redux,
          Node, Nest, Postgres, TypeORM, Git, Prettier, ESLint, Figma
        </p>
      </motion.div>
      <motion.div {...fromRightAnimation}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-48 md:w-96"
        >
          <SwiperSlide className="rounded-lg shadow-custom">
            <Image
              src={swiperSlideImageFirst}
              alt="Моё фото"
              width={400}
              priority
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg shadow-custom">
            <Image
              src={swiperSlideImageSecond}
              alt="Моё второе фото"
              width={400}
              priority
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-lg shadow-custom">
            <Image
              src={swiperSlideImageThird}
              alt="Моё третье фото"
              width={400}
              priority
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Landing;
