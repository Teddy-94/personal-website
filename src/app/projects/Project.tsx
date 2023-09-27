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
  Html5: <SiHtml5 key="html" />,
  Javascript: <SiJavascript key="Javascript" />,
  React: <FaReact key="React" />,
  Nextdotjs: <SiNextdotjs key="Nextdotjs" />,
  Typescript: <SiTypescript key="Typescript" />,
  Tailwindcss: <SiTailwindcss key="Tailwindcss" />,
  Python: <FaPython key="Python" />,
  Rust: <SiRust key="Rust" />,
  Lua: <SiLua key="Lua" />,
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
