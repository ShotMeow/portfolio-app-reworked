import React, { FC } from "react";

import Arrow from "@/components/elements/Icons/Arrow";

const ThemeSwitcherButtonSkeleton: FC = () => {
  return (
    <div className="relative flex items-center gap-2">
      <span className="text-xl absolute right-6">RU</span>
      <span>
        <Arrow />
      </span>
    </div>
  );
};

export default ThemeSwitcherButtonSkeleton;
