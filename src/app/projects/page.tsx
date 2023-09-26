import ProjectCard from "./components/projectCard"
import Link from "next/link"
import { FaGithub, FaPython, FaReact } from "react-icons/fa"
import { SiHtml5, SiJavascript, SiLua, SiNextdotjs, SiRust, SiTailwindcss, SiTypescript } from "react-icons/si"
import { VscPreview } from "react-icons/vsc"

const Projects = () => {
  return (
    <div className="">
      <div className="">
        <h2 className="text-xl font-bold">Selected Projects</h2>
        <p>Below is a list of selected projects</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto my-4">
        <ProjectCard
          title="Personal Website"
          description="This is the website you are currently on. It is meant to showcase some of my projects, and to collect information relevant for anyone interested in me and my skills. It is build using NextJS, and Tailwind, written using TypeScript. "
          projectLink="/projects/personal-website"
          builtWith={<><FaReact /> <SiNextdotjs /> <SiTypescript /> <SiTailwindcss /></>}
          links={<>
            <a href="https://github.com/Teddy-94/personal-website" target="_blank">
              <FaGithub />
            </a>
            <a href="" target="_blank">
              <VscPreview />
            </a>
          </>}
        />
        <ProjectCard
          title="CAGR Calculator Browser Plugin"
          description="A handy cagr calculator extension for Chrome and Firefox."
          projectLink="/projects/cagr-calculator-browser-plugin"
          builtWith={<><SiHtml5 /> <SiJavascript /></>}
          links={<>
            <a href="https://github.com/Teddy-94/cagr-calculator-browser-plugin" target="_blank">
              <FaGithub />
            </a>
            <a href="" target="_blank">
              <VscPreview />
            </a>
          </>}
        />
        <ProjectCard
          title="Advent of Code solutions"
          description="Not a completed project, but something that has been really fun and insightful is solving advent of code challenges. I have currently 44 stars, and I have solutions for various 'days' in Python, Rust, and TypeScript."
          projectLink="/projects/advent-of-code"
          builtWith={<><FaPython /> <SiRust />  <SiTypescript /> </>}
          links={<>
            <a href="https://github.com/Teddy-94/advent-of-code" target="_blank">
              <FaGithub />
            </a>
          </>}
        />
        <ProjectCard
          title="NeoVim Configuration"
          description="I enjoy coding in the fantastic open source, community driven editor NeoVim, which is a modernization of the editor Vim. I have spent quite some time tinkering with the configuration to find something that I really enjoy using, and since it is very much a 'build your own editor' experience, it is also an ever evolving code base. I have made an effort to keep the configuration files as clean as possible, and to use as few plugins I can manage."
          projectLink="/projects/neovim-configuration"
          builtWith={<><SiLua /> </>}
          links={<>
            <a href="https://github.com/Teddy-94/.config-nvim" target="_blank">
              <FaGithub />
            </a>
          </>}
        />
      </div>
    </div>
  )

}

export default Projects

