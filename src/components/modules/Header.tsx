import { FC, useState } from "react";

import DesktopHeader from "@/components/modules/DesktopHeader";
import MobileHeader from "@/components/modules/MobileHeader";

const Header: FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
