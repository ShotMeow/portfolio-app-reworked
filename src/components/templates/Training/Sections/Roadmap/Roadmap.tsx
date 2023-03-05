import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import roadmapSrc from "./images/roadmap.jpg";
import { inViewFromBottomAnimation } from "@/animations/inView.animations";

const Roadmap: FC = () => {
  return (
    <motion.section className="space-y-10" {...inViewFromBottomAnimation}>
      <h3 className="text-4xl text-center">Программа курса</h3>
      <Image className="" src={roadmapSrc} alt="Roadmap" />
    </motion.section>
  );
};

export default Roadmap;
