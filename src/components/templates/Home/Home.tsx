import React, { FC } from "react";

import Landing from "@/components/templates/Home/Sections/Lending/Landing";
import About from "@/components/templates/Home/Sections/About/About";

const Home: FC = () => {
  return (
    <main>
      <Landing />
      <About />
    </main>
  );
};

export default Home;
