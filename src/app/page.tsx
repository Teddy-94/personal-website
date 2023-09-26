"use client";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { outlineGradientOnHover } from "@/components/styleUtils";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-16 h-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"></div>
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2">
        <div className="m-auto grid h-full grid-cols-1 p-4">
          <p>Hi, I'm Teddy!</p>
          <p>
            I am a Fullstack developer, passionate about creating great websites
            and apps! If you need an eager, motivated, and engaged junior
            developer on your team, don't hesitate to{" "}
            <Link
              href="/contact"
              className="text-decoration-gray-600 underline"
            >
              contact me
            </Link>
            !
          </p>
        </div>
        <div className="mx-auto my-5 grid w-full grid-cols-1 gap-12">
          <Link href="/projects">
            <div
              className={`flex flex-row rounded-md border-2 border-solid p-6 ${outlineGradientOnHover} shadow-xl`}
            >
              <p>Check out some of my projects</p>
              <BsArrowRight className="me-4 ms-auto flex text-xl" />
            </div>
          </Link>
          <Link href="/cv">
            <div
              className={`flex flex-row rounded-md border-2 border-solid p-6 ${outlineGradientOnHover} shadow-xl`}
            >
              <p>Take a look at my CV</p>
              <BsArrowRight className="me-4 ms-auto flex text-xl" />
            </div>
          </Link>
          <Link href="/contact">
            <div
              className={`flex flex-row rounded-md border-2 border-solid p-6 ${outlineGradientOnHover} shadow-xl`}
            >
              <p>Contact me</p>
              <BsArrowRight className="me-4 ms-auto flex text-xl" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
