import React, { FC } from "react";

import Landing from "./sections/Lending/Landing";
import About from "./sections/About/About";

const Home: FC = () => {
  return (
    <main>
      <Landing />
      <About />
    </main>
  );
};

export default Home;
