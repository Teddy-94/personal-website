"use client"
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
  <div className="border-2 shadow-md m-2">
    <div className="flex flex-col lg:flex-row justify-evenly">
      <div className="flex flex-col m-auto">
        <p className="text-gray-600">Hi, I'm Teddy!</p>
        <p className="text-gray-600">Fullstack developer. investor. learner.</p>
      </div>
      <div className="flex flex-col m-auto">
        <Link href=""><div className="border-2 border-solid p-4 ring-1 rounded-md">asdfasdfas</div></Link>
        <Link href="">asdfasdfas</Link>
        <Link href="">asdfasdfas</Link>
        <Link href="">asdfasdfas</Link>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
