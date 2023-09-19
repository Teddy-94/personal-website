"use client"

import Link from "next/link"
import MenuButton from "./menuButton"
import { textGradientOnHover } from "./styleUtils"

const Topbar: React.FC = () => {
  return (
    <div className="inline-flex justify-between w-full">
      <h1 className={`text-3xl font-bold mb-4 ${textGradientOnHover}`}>
        <Link href="/" target="_self">
          Teodor Adolfsson
        </Link>
      </h1>
      < MenuButton />
    </div >
  )
}
export default Topbar
