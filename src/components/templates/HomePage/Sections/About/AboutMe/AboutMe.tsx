import React, { FC } from "react";
import { motion } from "framer-motion";
import {
  inViewFromBottomAnimation,
  inViewFromRightAnimation,
  inViewFromTopAnimation,
} from "@/animations/inView.animations";

const AboutMe: FC = () => {
  return (
    <div className="w-full">
      <motion.div {...inViewFromTopAnimation}>
        <h4 className="text-2xl font-bold">Маврин Данила Андреевич</h4>
        <h5 className="text-sm text-gray">Full-stack JavaScript Developer</h5>
      </motion.div>
      <motion.div {...inViewFromRightAnimation}>
        <p className="mt-6 text-xl">
          Frontend разработчик из компании А-БТ. Веду свой личный блог, где
          делюсь своими мыслями относительно IT-индустрии и мировозрения.
        </p>
        <p className="mt-4 text-xl">
          Веду активную преподавательскую деятельность, пишу статьи для TProger
          и Habr сообщества. <br /> Занимаюсь Backend разработкой и дизайном, в
          качестве хобби.
        </p>
      </motion.div>
      <motion.h6 className="text-gray mt-6" {...inViewFromBottomAnimation}>
        Ответственный, Коммуникабельный, Целеустремленный
      </motion.h6>
    </div>
  );
};

export default AboutMe;
