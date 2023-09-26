"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { textGradientOnHover } from "./styleUtils";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "CV", link: "/cv" },
  { name: "Contact", link: "/contact" },
];

const col = "h-fit flex flex-col p-4 justify-center items-center gap-6";
const row = "hidden lg:flex my-auto p-4 justify-center items-center gap-4";

const menuLinkStyle = `text-black-500 mr-4 font-bold text-2xl w-fit ${textGradientOnHover}`;
const menuLinkStyleSelected = `text-cyan-500 mr-4 font-bold text-2xl w-fit ${textGradientOnHover}`;

const Menu = (props: { column: boolean }) => {
  const path = usePathname();
  return (
    <div className={props.column ? col : row}>
      {menuItems.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          target="_self"
          className={item.link === path ? menuLinkStyleSelected : menuLinkStyle}
        >
          {item.name}
        </Link>
      ))}
      <div className="h-0.5 w-full bg-gray-200 xl:hidden" />
      <div className="mr-4 flex w-fit flex-row gap-5 text-3xl hover:underline">
        <Link
          href="https://www.linkedin.com/in/teodor-adolfsson"
          target="_blank"
          className={`transition-all duration-1000 hover:text-emerald-500`}
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://www.github.com/teddy-94"
          target="_blank"
          className={`transition-all duration-1000 hover:text-emerald-500`}
        >
          <VscGithubInverted />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
