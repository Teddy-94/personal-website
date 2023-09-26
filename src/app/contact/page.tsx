"use client"

import { outlineGradientOnHover } from "@/components/styleUtils"
import Link from "next/link"
import { IconType } from "react-icons"
import { FaLinkedin } from "react-icons/fa"
import { VscGithubInverted, VscMail } from "react-icons/vsc"

interface contactAlternative {
  alternative: string,
  link: string,
  icon: IconType
  text: string
}

const contactAlternatives = [
  {
    alternative: "github",
    link: "https://github.com/teddy-94",
    icon: <VscGithubInverted />,
    text: "@teddy-94",
  },
  {
    alternative: "email",
    link: "mailto:teodor.adolfsson@gmail.com",
    icon: <VscMail />,
    text: "Email: teodor.adolfsson@gmail.com",
  },
  {
    alternative: "LinkedIn",
    link: "https://www.linkedin.com/in/teodor-adolfsson/",
    icon: <FaLinkedin />,
    text: "@teodor-adolfsson",
  },
]

const Contact = () => {
  return (
    <div className="container mx-auto my-16 p-8 h-3/4">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-12 h-full">
        {contactAlternatives.map((item) => (
          <div onClick={() => window.open(item.link, "_blank")} className={`cursor-pointer p-4 w-full h-full border-solid border-2 shadow-lg rounded-lg ${outlineGradientOnHover}`}>
            <div className="h-full text-xl flex gap-2 items-center justify-center mx-auto my-auto">
              {item.icon} <p>{item.text}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )

}

export default Contact

