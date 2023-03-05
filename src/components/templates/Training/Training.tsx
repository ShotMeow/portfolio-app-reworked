import React, { FC } from "react";
import Image from "next/image";
import roadmapSrc from "./images/roadmap.png";
import Link from "next/link";

const Training: FC = () => {
  return (
    <main className="flex flex-col gap-60">
      <section className="text-center flex flex-col items-center justify-center mt-20 md:mt-40 lg:mt-80">
        <h2 className="text-5xl md:text-6xl font-black">
          Full-stack{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-red to-orange">
            JavaScript
          </span>{" "}
          Course
        </h2>
        <p className="text-2xl font-thin text-gray mt-4">
          Стань востребованным специалистом в сфере IT.
        </p>
      </section>
      <section className="space-y-6 text-center">
        <h3 className="text-4xl">Для кого этот курс</h3>
        <p className="text-xl font-thin text-gray">
          Курс рассчитан для начинающих и продвинутых разработчиков, которые
          хотят повысить свою квалификацию в сфере клиентской и серверной
          разработки, или переквалифицироваться в Full-stack разработчика.
        </p>
      </section>
      <section className="space-y-10">
        <h3 className="text-4xl text-center">Программа курса</h3>
        <Image className="" src={roadmapSrc} alt="Roadmap" />
      </section>
      <section className="space-y-10 mb-20">
        <h3 className="text-4xl text-center">Записаться</h3>
        <p className="text-center text-2xl">
          <Link className="underline text-blue" href="https://t.me/shotmeow">
            Telegram: @shotmeow
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Training;
