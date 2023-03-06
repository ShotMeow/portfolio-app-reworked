import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { inViewFromBottomAnimation } from "@/shared/lib/framer";

const Experience: FC = () => {
  return (
    <div className="w-full space-y-6">
      <motion.article
        className="backdrop-blur-xl bg-white/5 rounded-lg p-6 flex items-center flex-col lg:flex-row gap-10 shadow-custom"
        {...inViewFromBottomAnimation}
      >
        <div className="backdrop-blur-xl bg-white/5 w-full h-32 lg:w-60 lg:h-60 rounded-lg shrink-0 flex items-center justify-center shadow-custom">
          <p className="text-3xl font-black uppercase">Pictus</p>
        </div>
        <div>
          <p className="text-2xl font-black">Pictus Media</p>
          <p className="text-gray text-sm">Агентство интернет-маркетинга</p>
          <div className="flex items-start flex-col sm:items-center sm:flex-row gap-2 sm:gap-6 mt-4">
            <p>Стаж: 3 месяца</p>
            <div className="h-1 w-1 bg-white rounded-full hidden sm:block" />
            <p>Позиция: Веб-дизайнер</p>
          </div>
          <p className="mt-6">
            Разрабатывал UI/UX дизайн для приложений клиентов компании. Я
            работал над проектами таких компаний, как: Vestel и aerobubble
          </p>
          <button className="underline text-lg mt-4">
            <Link href="https://pictus.media/">Перейти</Link>
          </button>
        </div>
      </motion.article>
      <motion.article
        className="backdrop-blur-xl bg-white/5 rounded-lg p-6 flex items-center flex-col lg:flex-row gap-10 shadow-custom"
        {...inViewFromBottomAnimation}
      >
        <div className="backdrop-blur-xl bg-white/5 w-full h-32 lg:w-60 lg:h-60 rounded-lg shrink-0 flex items-center justify-center shadow-custom">
          <p className="text-3xl font-black uppercase">Kodland</p>
        </div>
        <div>
          <p className="text-2xl font-black">Kodland</p>
          <p className="text-gray text-sm">Онлайн-школа цифровых навыков</p>
          <div className="flex items-start flex-col sm:items-center sm:flex-row gap-2 sm:gap-6 mt-4">
            <p>Стаж: 1 год</p>
            <div className="h-1 w-1 bg-white rounded-full hidden sm:block" />
            <p>Позиция: Преподаватель</p>
          </div>
          <p className="mt-6">
            Преподавал уроки по направлениям “Веб-дизайн” и “Программирование на
            JS”. Помимо этого работал над доработкой методологических материалов
            этих же направлений.
          </p>
          <button className="underline text-lg mt-4">
            <Link href="https://www.kodland.org/">Перейти</Link>
          </button>
        </div>
      </motion.article>
      <motion.article
        className="backdrop-blur-xl bg-white/5 rounded-lg p-6 flex items-center flex-col lg:flex-row gap-10 shadow-custom"
        {...inViewFromBottomAnimation}
      >
        <div className="backdrop-blur-xl bg-white/5 w-full h-32 lg:w-60 lg:h-60 rounded-lg shrink-0 flex items-center justify-center shadow-custom">
          <p className="text-3xl font-black uppercase">А-БТ</p>
        </div>
        <div>
          <p className="text-2xl font-black">А-БТ</p>
          <p className="text-gray text-sm">IT-компания полного цикла</p>
          <div className="flex items-start flex-col sm:items-center sm:flex-row gap-2 sm:gap-6 mt-4">
            <p>Стаж: работаю в текущее время</p>
            <div className="h-1 w-1 bg-white rounded-full hidden sm:block" />
            <p>Позиция: Front-end Developer</p>
          </div>
          <p className="mt-6">
            Разработка интерфейсов для терминалов, поддержка интерфейсов,
            разработка административных панелей
          </p>
          <button className="underline text-lg mt-4">
            <Link href="https://a-bt.ru/">Перейти</Link>
          </button>
        </div>
      </motion.article>
    </div>
  );
};

export default Experience;
