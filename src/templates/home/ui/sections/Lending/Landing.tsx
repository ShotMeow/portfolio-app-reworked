import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import Image from "next/image";
import { motion } from "framer-motion";

import { slides } from "@/shared/assets/swiper/slides";

import "swiper/css";
import "swiper/css/effect-cards";

import { fromLeftAnimation, fromRightAnimation } from "@/shared/lib/framer";
import { FormattedMessage } from "react-intl";

const Landing: FC = () => {
  return (
    <section className="grid items-center lg:grid-cols-2 my-20 lg:my-40 gap-10">
      <motion.div {...fromLeftAnimation}>
        <h1 className="text-5xl md:text-6xl font-black">
          Full-stack{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-red to-orange">
            JavaScript
          </span>{" "}
          Developer
        </h1>
        <h2 className="text-2xl font-bold mt-4">
          <FormattedMessage
            id="pages.main.landing.subtitle"
            values={{ _: (chunks) => chunks }}
          />
        </h2>
        <p className="mt-10">
          React, Next, TypeScript, SASS, CSS Modules, Vite, Tailwind, Redux,
          Node, Nest, Postgres, TypeORM, Git, Prettier, ESLint, Figma
        </p>
      </motion.div>
      <motion.div className="relative" {...fromRightAnimation}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-48 md:w-96"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.src} className="rounded-lg shadow-custom">
              <Image src={slide} alt="Моё фото" width={400} priority />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-0 left-20 w-32 h-32 md:w-60 md:h-60 bg-blue rounded-full filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-20 w-32 h-32 md:w-72 md:h-72 bg-red rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-40 w-32 h-32 md:w-40 md:h-40 bg-orange rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </motion.div>
    </section>
  );
};

export default Landing;
