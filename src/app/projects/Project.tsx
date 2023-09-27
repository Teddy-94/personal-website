import { FaPython, FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiLua,
  SiNextdotjs,
  SiRust,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const icons = {
  Html5: <SiHtml5 />,
  Javascript: <SiJavascript />,
  React: <FaReact />,
  Nextdotjs: <SiNextdotjs />,
  Typescript: <SiTypescript />,
  Tailwindcss: <SiTailwindcss />,
  Python: <FaPython />,
  Rust: <SiRust />,
  Lua: <SiLua />,
};

export type IconKeys = typeof icons;

export default interface Project {
  title: string;
  shortDescription: string;
  projectPageLink: string;
  builtWith: (keyof IconKeys)[];
  links: {
    github: string;
    deployment: string | undefined;
  };
  description?: string;
}
