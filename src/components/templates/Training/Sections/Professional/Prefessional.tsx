import React, { FC } from "react";
import { motion } from "framer-motion";
import { inViewFromBottomAnimation } from "@/animations/inView.animations";

const Professional: FC = () => {
  return (
    <motion.section className="space-y-6" {...inViewFromBottomAnimation}>
      <h3 className="text-4xl text-center">Стань профессионалом</h3>
      <p className="text-xl font-thin text-gray">
        Создавая этот курс, я ориентировался на технологии, используемые в
        крупных международных компаниях. На курсе я помогу сформировать вам
        полную картину современной веб-разработки.
      </p>
      <p className="text-xl font-thin text-gray">
        Курс рассчитан для начинающих и продвинутых разработчиков, которые хотят
        повысить свою квалификацию в сфере клиентской и серверной разработки,
        или переквалифицироваться в Full-stack разработчика. Помимо основных
        технологий мы поверхностно изучим сопровождающие технологии для
        появления более объемной картины полного цикла разработки.
      </p>
      <p className="text-xl font-thin text-gray">
        По завершении курса ты станешь сильным Front-end разработчиком с хорошим
        знанием серверной разработки, чётко понимающим как работает веб, умеющим
        глубоко копать и выбирать между идеальным и быстрым решением. Ты
        научишься уверенно общаться с backend, QA и DevOps специалистами, а
        также сможешь самостоятельно выполнить их базовую работу.
      </p>
    </motion.section>
  );
};

export default Professional;
