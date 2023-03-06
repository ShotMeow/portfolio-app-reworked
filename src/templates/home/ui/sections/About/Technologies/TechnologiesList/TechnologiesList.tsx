import React, { FC } from "react";
import { motion } from "framer-motion";

import { TechnologyType } from "../Technologies.types";
import { heightAutoAnimation } from "@/shared/lib/framer";

interface Props {
  items: TechnologyType[];
}

const TechnologiesList: FC<Props> = ({ items }) => {
  return (
    <motion.ul className="space-y-4 mt-6" {...heightAutoAnimation}>
      {items.map((item) => (
        <li key={item.heading}>
          <p className="text-gray">{item.heading}</p>
          <p className="text-xl font-bold">{item.description}</p>
        </li>
      ))}
    </motion.ul>
  );
};

export default TechnologiesList;
