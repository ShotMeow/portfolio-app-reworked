import React, { FC } from "react";
import { TechnologyType } from "@/components/templates/Home/Sections/About/Technologies/Technologies.types";
import { motion } from "framer-motion";
import { heightAutoAnimation } from "@/animations/base.animations";
interface Props {
  items: TechnologyType[];
}

const TechnologiesList: FC<Props> = ({ items }) => {
  return (
    <motion.ul className="space-y-4 mt-6" {...heightAutoAnimation}>
      {items.map((item) => (
        <li key={item.heading}>
          <h6 className="text-gray">{item.heading}</h6>
          <p className="text-xl font-bold">{item.description}</p>
        </li>
      ))}
    </motion.ul>
  );
};

export default TechnologiesList;
