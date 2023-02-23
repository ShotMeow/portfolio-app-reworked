import React, { FC } from "react";

import Auto from "@/components/elements/Icons/Auto";

const ThemeSwitcherButtonSkeleton: FC = () => {
  return (
    <div className="bg-white w-10 h-10 rounded-full dark:bg-black shadow-2xl p-3">
      <Auto />
    </div>
  );
};

export default ThemeSwitcherButtonSkeleton;
