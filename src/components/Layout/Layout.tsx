import React, { FC } from "react";

import styles from "./Layout.module.scss";
import Header from "@/components/Header/Header";

const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.noise}>
        <div>
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Layout;
