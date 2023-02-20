import React, { FC } from "react";

import styles from "./Layout.module.scss";
import Header from "@/features/Layout/Header/Header";

const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Layout;
