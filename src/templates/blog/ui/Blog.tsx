import React, { FC } from "react";
import { motion } from "framer-motion";

import { fromBottomAnimation } from "@/shared/lib/framer";

const Blog: FC = () => {
  return (
    <motion.main
      className="fixed left-0 top-0 h-full w-full"
      {...fromBottomAnimation}
    >
      <div className="h-full container mx-auto flex flex-col items-center justify-center text-center gap-4">
        <h6 className="text-3xl">Данный раздел находится в разработке</h6>
        <p className="text-xl text-gray">
          В этом разделе будут находиться мои статьи про IT-индустрию
        </p>
      </div>
    </motion.main>
  );
};

export default Blog;
