"use client"

import Link from "next/link"
import MenuButton from "./menuButton"
import { textGradientOnHover } from "./styleUtils"
import Menu from "./menu"

const Topbar = () => {
  return (
    <div className="inline-flex justify-between w-full">
      <h1 className={`text-3xl font-bold mb-4 ${textGradientOnHover} md:text-5xl`}>
        <Link href="/" target="_self">
          Teodor Adolfsson
        </Link>
      </h1>
      < MenuButton />
      < Menu column={false} />
    </div >
  )
}

export default Topbar

