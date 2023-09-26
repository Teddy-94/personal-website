"use client"

import { outlineGradientOnHover } from "@/components/styleUtils"
import { FaLinkedin } from "react-icons/fa"
import { VscGithubInverted, VscMail } from "react-icons/vsc"

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
    text: "teodor.adolfsson@gmail.com",
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
    <div className="grid grid-cols-1 xl:grid-cols-3 mt-16 mx-auto gap-12 h-full">
      {contactAlternatives.map((item) => (
        <div
          key={item.alternative}
          onClick={() => window.open(item.link, "_blank")}
          className={`cursor-pointer p-4 w-full min-h-[20vh] min-w-fit h-full border-solid border-2 shadow-lg rounded-lg ${outlineGradientOnHover} xl:min-h-[55vh] hover:text-orange-800`}>
          <div className="h-full text-md flex gap-2 min-w-fit items-center justify-center mx-auto my-auto sm:text-xl font-semibold">
            {item.icon} <p>{item.text}</p>
          </div>
        </div>
      ))}

    </div>
  )

}

export default Contact

