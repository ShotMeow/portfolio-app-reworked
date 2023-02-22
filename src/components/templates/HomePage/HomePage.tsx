import React, { FC } from "react";

import Landing from "@/components/templates/HomePage/Sections/Lending/Landing";
import About from "@/components/templates/HomePage/Sections/About/About";

const HomePage: FC = () => {
  return (
    <main>
      <Landing />
      <About />
    </main>
  );
};

export default HomePage;
