import React, { FC } from "react";
import { motion } from "framer-motion";

const Backend: FC = () => {
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
        <h5>Node.js & NestJS</h5>
      </li>
      <li>
        <h6>ORM</h6>
        <h5>TypeORM & Sequelize</h5>
      </li>
      <li>
        <h6>Аутентификация</h6>
        <h5>Passport.js & JWT</h5>
      </li>
    </motion.ul>
  );
};

export default Backend;
