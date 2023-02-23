import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { inViewFromBottomAnimation } from "@/animations/inView.animations";

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
          <h5 className="text-2xl font-black">Pictus Media</h5>
          <h6 className="text-gray text-sm">Агентство интернет-маркетинга</h6>
          <div className="flex items-start flex-col sm:items-center sm:flex-row gap-2 sm:gap-6 mt-4">
            <h6>Стаж: 3 месяца</h6>
            <div className="h-1 w-1 bg-white rounded-full hidden sm:block" />
            <h6>Позиция: Веб-дизайнер</h6>
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
          <h5 className="text-2xl font-black">Kodland</h5>
          <h6 className="text-gray text-sm">Онлайн-школа цифровых навыков</h6>
          <div className="flex items-center gap-6 mt-4">
            <h6>Стаж: 1 год</h6>
            <div className="h-1 w-1 bg-white rounded-full" />
            <h6>Позиция: Преподаватель</h6>
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
          <h5 className="text-2xl font-black">А-БТ</h5>
          <h6 className="text-gray text-sm">IT-компания полного цикла</h6>
          <div className="flex items-center gap-6 mt-4">
            <h6>Стаж: работаю в текущее время</h6>
            <div className="h-1 w-1 bg-white rounded-full" />
            <h6>Позиция: Front-end Developer</h6>
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
