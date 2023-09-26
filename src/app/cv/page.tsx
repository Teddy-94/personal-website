"use client"

import Education from "./components/education"
import Skills from "./components/skills"
import Work from "./components/work"

const Cv = () => {
  return (
    <div className="h-full gap-2">
      <div className="container h-full grid grid-cols-1 gap-4 xl:grid-cols-2 mx-auto my-auto">
        <Education />
        <Work />
      </div>
      <Skills />
    </div >
  )
}

export default Cv

