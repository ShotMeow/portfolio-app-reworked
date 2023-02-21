import React, { FC, PropsWithChildren } from "react";

import styles from "./Layout.module.scss";
import Header from "@/components/Header/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.noise}>
        <div>
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
