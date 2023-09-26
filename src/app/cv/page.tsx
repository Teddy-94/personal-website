"use client"

import Education from "./components/education"
import Skills from "./components/skills"
import Work from "./components/work"

export const box = "flex flex-col border-2 rounded-md m-2"
export const boxinner = "flex flex-col gap-2 p-3"
export const ul = "list-disc list-inside"

const Cv = () => {
  // TODO: make this component
  return (
    <div className="h-full gap-2">
      <h1 className="text-2xl text-gray-600">Cv</h1>
      <div className="container h-full grid grid-cols-1 gap-4 xl:grid-cols-2 mx-auto my-auto">
        <Education />
        <Work />
      </div>
      <Skills />
    </div >
  )
}

export default Cv

