import Link from "next/link"
import { IconType } from "react-icons"
import { FaLinkedin } from "react-icons/fa"
import { VscGithubInverted } from "react-icons/vsc"
import { textGradientOnHover } from "./styleUtils"

interface menuItem {
  item: string,
  link: string,
  icon?: IconType
}

const menuItems = [
  { item: "Projects", link: "/projects" },
  { item: "CV", link: "/cv" },
  { item: "Projects", lin: "/projects" },
  { item: "Contact", lin: "/contact" },

]

const col = "h-fit flex flex-col p-4 justify-center items-center gap-4"
const row = "hidden xl:flex h-fit flex-row p-4 justify-center items-center gap-4"

const menuLinkStyle = `text-black-500 mr-4 font-bold text-3xl w-fit ${textGradientOnHover}`

// interface menuProps {
//   direction: string
//   }

const Menu = (props: { column: boolean }) => {
  return (
    <div className={props.column ? col : row}>
      <Link
        href="/"
        target='_self'
        className={menuLinkStyle}
      >
        Home
      </Link>
      <Link
        href="/projects"
        target='_self'
        className={menuLinkStyle}
      >
        Projects
      </Link>
      <Link
        href="/cv"
        target='_self'
        className={menuLinkStyle}
      >
        CV
      </Link>
      <Link
        href="/contact"
        target='_self'
        className={menuLinkStyle}
      >
        Contact
      </Link>
      <div className="h-0.5 w-full bg-gray-200 xl:hidden" />
      <div
        className="flex flex-row gap-5 hover:underline mr-4 text-3xl w-fit"
      >
        <Link
          href="https://www.linkedin.com/in/teodor-adolfsson"
          target="_blank"
          className={`hover:text-emerald-500 transition-all duration-1000`}
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://www.github.com/teddy-94"
          target="_blank"
          className={`hover:text-emerald-500 transition-all duration-1000`}
        >
          <VscGithubInverted />
        </Link>
      </div>
    </div>
  )
}

export default Menu

