"use client"
import { outlineGradientOnHover } from '@/components/styleUtils';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs"

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto mt-16 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="grid grid-cols-1 m-auto h-full p-4">
          <p>Hi, I'm Teddy!</p>
          <p>I am a Fullstack developer, passionate about creating great websites and apps! If you need an eager, motivated, and engaged junior developer on your team, don't hesitate to <Link href="/contact" className="underline text-decoration-gray-600">contact me</Link>!</p>
        </div>
        <div className="grid grid-cols-1 mx-auto my-5 gap-12 w-full">
          <Link href="/projects">
            <div className={`flex flex-row border-2 border-solid p-6 rounded-md ${outlineGradientOnHover} shadow-xl`}>
              <p>Check out some of my projects</p>
              <BsArrowRight className="flex ms-auto me-4 text-xl" />
            </div>
          </Link>
          <Link href="/cv">
            <div className={`flex flex-row border-2 border-solid p-6 rounded-md ${outlineGradientOnHover} shadow-xl`}>
              <p>Take a look at my CV</p>
              <BsArrowRight className="flex ms-auto me-4 text-xl" />
            </div>
          </Link>
          <Link href="/contact">
            <div className={`flex flex-row border-2 border-solid p-6 rounded-md ${outlineGradientOnHover} shadow-xl`}>
              <p>Contact me</p>
              <BsArrowRight className="flex ms-auto me-4 text-xl" />
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
