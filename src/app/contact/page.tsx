"use client";

import { outlineGradientOnHover } from "@/components/styleUtils";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted, VscMail } from "react-icons/vsc";

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
];

const Contact = () => {
  return (
    <div className="mx-auto mt-16 grid h-full grid-cols-1 gap-12 xl:grid-cols-3">
      {contactAlternatives.map((item) => (
        <div
          key={item.alternative}
          onClick={() => window.open(item.link, "_blank")}
          className={`h-full min-h-[20vh] w-full min-w-fit cursor-pointer rounded-lg border-2 border-solid p-4 shadow-lg ${outlineGradientOnHover} hover:text-orange-800 xl:min-h-[55vh]`}
        >
          <div className="text-md mx-auto my-auto flex h-full min-w-fit items-center justify-center gap-2 font-semibold sm:text-xl">
            {item.icon} <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
