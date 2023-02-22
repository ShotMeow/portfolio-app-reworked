import React, { FC } from "react";
import { motion } from "framer-motion";

const Frontend: FC = () => {
  return (
    <motion.ul
      initial={{ height: 0, marginTop: 0 }}
      animate={{ height: "auto", marginTop: 24 }}
      exit={{ height: 0, marginTop: 0 }}
      style={{ overflow: "hidden", marginTop: 24 }}
    >
      <li>
        <h6>Язык</h6>
        <h5>JavaScript & TypeScript</h5>
      </li>
      <li>
        <h6>Структура</h6>
        <h5>React & Next.js</h5>
      </li>
      <li>
        <h6>Управление состоянием</h6>
        <h5>Redux Toolkit & React Context</h5>
      </li>
      <li>
        <h6>Стилизация</h6>
        <h5>TailwindCSS & SASS</h5>
      </li>
    </motion.ul>
  );
};

export default Frontend;
