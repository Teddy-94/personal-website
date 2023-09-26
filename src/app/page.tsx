"use client"
import { outlineGradientOnHover } from '@/components/styleUtils';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto mt-16 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="grid grid-cols-1 m-auto h-full p-4">
          <p>Hi, I'm Teddy!</p>
          <p>I am a Fullstack developer, passionate about creating great websites and apps! If you need an eager, motivated, and engaged junior developer on your team, don't hesitate to <Link href="/contact" className="underline text-decoration-gray-600">contact me</Link>!</p>
        </div>
        <div className="grid grid-cols-1 mx-auto my-5 gap-6 w-full">
          <Link href="/projects"><div className={`border-2 border-solid p-6 rounded-md ${outlineGradientOnHover} shadow-xl`}>Check out some of my projects</div></Link>
          <Link href="/cv"><div className={`border-2 border-solid p-6 rounded-md ${outlineGradientOnHover} shadow-xl`}>Take a look at my CV</div></Link>
          <Link href="/contact"><div className={`border-2 border-solid p-6 rounded-md ${outlineGradientOnHover} shadow-xl`}>Contact me</div></Link>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
