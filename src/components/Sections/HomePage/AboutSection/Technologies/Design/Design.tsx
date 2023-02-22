import React, { FC } from "react";
import { motion } from "framer-motion";

const Design: FC = () => {
  return (
    <motion.ul
      initial={{ height: 0, marginTop: 0 }}
      animate={{ height: "auto", marginTop: 24 }}
      exit={{ height: 0, marginTop: 0 }}
      style={{ overflow: "hidden", marginTop: 24 }}
    >
      <li>
        <h6>Инструмент</h6>
        <h5>Figma & Adobe Photoshop</h5>
      </li>
      <li>
        <h6>Анимации</h6>
        <h5>Adobe After Effects</h5>
      </li>
    </motion.ul>
  );
};

export default Design;
