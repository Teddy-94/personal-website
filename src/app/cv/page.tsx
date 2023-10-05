"use client";

import Education from "./components/education";
import Skills from "./components/skills";
import Work from "./components/work";

const Cv = () => {
  return (
    <div className="h-full gap-2">
      <div className="container mx-auto my-auto grid h-full grid-cols-1 gap-4 lg:grid-cols-2">
        <Education />
        <Work />
      </div>
      <Skills />
    </div>
  );
};

export default Cv;
