import React from "react";
import { NextPage } from "next";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";

import BgEllipse from "@/components/Icons/BgEllipse";
import Image from "next/image";

import myPhoto from "@/assets/me.jpg";
import myPhotoTwo from "@/assets/me_2.jpg";
import myPhotoThree from "@/assets/me_3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import styles from "@/styles/Home.module.scss";
import { EffectCards } from "swiper";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Данила Маврин</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.landing}>
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
            <BgEllipse />
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
        </section>
        <section className={styles.about}></section>
        <section className={styles.technologies}></section>
        <section className={styles.work}></section>
        <section className={styles.portfolio}></section>
      </main>
    </Layout>
  );
};

export default HomePage;
