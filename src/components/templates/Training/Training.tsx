import React, { FC } from "react";

import Landing from "@/components/templates/Training/Sections/Landing/Landing";
import Professional from "@/components/templates/Training/Sections/Professional/Prefessional";
import WhatYouGet from "@/components/templates/Training/Sections/WhatYouGet/WhatYouGet";
import Contact from "@/components/templates/Training/Sections/Contact/Contact";
import dynamic from "next/dynamic";

const Roadmap = dynamic(
  () => import("@/components/templates/Training/Sections/Roadmap/Roadmap"),
  {
    ssr: false,
  }
);

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
