
"use client"
import ProjectCard from "./components/projectCard"
import Link from "next/link"
import { FaGithub, FaReact } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si"
import { VscPreview } from "react-icons/vsc"

function Projects() {
  return (
    <div className="mx-auto xl:flex flex-row gap-24">
      <div className="">
        <h2 className="text-xl font-bold">Selected Projects</h2>
        <p>Below is a list of selected projects</p>
      </div>
      <div className="flex flex-col">
        <ProjectCard
          title="Project 1"
          description="This project lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
          builtWith={<><FaReact /> <SiNextdotjs /> <SiTypescript /> <SiTailwindcss /></>}
          links={<>
            <Link href="" target="_blank">
              <FaGithub />
            </Link>
            <Link href="" target="_blank">
              <VscPreview />
            </Link>
          </>
          } />
        <ProjectCard
          title="Project 2"
          description="This project project project  project project project project project project"
          builtWith={<><FaReact /> <SiNextdotjs />  <SiTypescript /><SiTailwindcss /></>}
          links={<>
            <Link href="" target="_blank">
              <FaGithub />
            </Link>
            <Link href="" target="_blank">
              <VscPreview />
            </Link>
          </>
          } />
        <ProjectCard
          title="Project 3"
          description="This project project project  project project project project project project"
          builtWith={<><FaReact /> <SiNextdotjs />  <SiTypescript /> <SiTailwindcss /></>}
          links={<>
            <Link href="" target="_blank">
              <FaGithub />
            </Link>
            <Link href="" target="_blank">
              <VscPreview />
            </Link>
          </>
          } />
      </div>
    </div>
  )

}

export default Projects

