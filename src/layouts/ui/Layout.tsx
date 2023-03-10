import React, { FC, PropsWithChildren } from "react";

import { Header } from "@/widgets";
import { Cursor } from "@/features/cursor";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full bg-white dark:bg-gradient-to-t from-bg-dark to-bg-light text-black dark:text-white overflow-x-hidden">
      <div className="container mx-auto">
        <Header />
        {children}
      </div>
      <Cursor />
    </div>
  );
};

export default Layout;
