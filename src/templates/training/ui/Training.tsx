import React, { FC } from "react";

import Landing from "./sections/Landing/Landing";
import Professional from "./sections/Professional/Prefessional";
import WhatYouGet from "./sections/WhatYouGet/WhatYouGet";
import Contact from "./sections/Contact/Contact";
import Roadmap from "./sections/Roadmap/Roadmap";

const Training: FC = () => {
  return (
    <main className="flex flex-col gap-60">
      <Landing />
      <Professional />
      <WhatYouGet />
      <Roadmap />
      <Contact />
    </main>
  );
};

export default Training;
