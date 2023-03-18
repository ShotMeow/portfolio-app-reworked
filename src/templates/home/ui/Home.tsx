import React, { FC } from "react";

import Landing from "@/templates/home/ui/sections/Landing/Landing";
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
