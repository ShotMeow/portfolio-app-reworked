import React, { FC, PropsWithChildren } from "react";

import styles from "./Layout.module.scss";
import Header from "@/components/Header/Header";
import classNames from "classnames";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={classNames({
        [styles.layout]: true,
      })}
    >
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
