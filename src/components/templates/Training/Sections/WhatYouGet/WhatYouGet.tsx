import React, { FC } from "react";
import { motion } from "framer-motion";
import { inViewFromBottomAnimation } from "@/animations/inView.animations";

const WhatYouGet: FC = () => {
  return (
    <motion.section className="space-y-6" {...inViewFromBottomAnimation}>
      <h3 className="text-4xl text-center">Что вы получите</h3>
      <ul className="text-xl font-thin list-disc space-y-4 pl-4">
        <li>
          Индивидуального преподавателя, сопровождающего вас на пути к
          трудоустройству.
        </li>
        <li>Доступ к закрытому чату в Telegram.</li>
        <li>
          Отличные теоретические и практические знания после прохождения курса.
        </li>
        <li>Интересные проекты в портфолио.</li>
      </ul>
    </motion.section>
  );
};

export default WhatYouGet;
