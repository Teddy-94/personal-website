"use client"
import { outlineGradientOnHover } from '@/components/styleUtils';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="border-2 rounded-md shadow-md m-2 p-2">
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="flex flex-col m-auto">
          <p className="text-gray-600">Hi, I'm Teddy!</p>
          <p className="text-gray-600">I am a Fullstack developer, Investor. Learner.</p>
          <p className="text-gray-600">If you need an eager, motivated, and engaged junior developer on your team, don't hesitate to <Link href="/contact" className="underline text-decoration-gray-600">contact me</Link>!</p>
        </div>
        <div className="flex flex-col mx-auto my-5 gap-4 w-full">
          <Link href="/projects"><div className={`border-2 border-solid p-6 rounded-md ${outlineGradientOnHover}`}>Check out some of my projects</div></Link>
          <Link href="/cv"><div className={`border-2 border-solid p-6 rounded-md ${outlineGradientOnHover}`}>Take a look at my CV</div></Link>
          <Link href="/contact"><div className={`border-2 border-solid p-6 rounded-md ${outlineGradientOnHover}`}>Contact me</div></Link>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
