"use client"
import { useState } from 'react';
import Menu from './menu';

// TODO make menu close on click outside or on link
const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:hidden">
      <button
        className="h-11 w-11 flex flex-col justify-between p-1.5 bg-white rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        <div className={`h-[5px] w-[40px] bg-gray-400 transform transition-all origin-center duration-300 rounded-md ${isOpen ? 'rotate-[225deg] translate-y-[13px]' : ''}`} />
        <div className={`h-[5px] w-[40px] bg-gray-400 opacity-100 transform transition-all duration-300 rounded-md ${isOpen ? 'opacity-0 scale-0' : ''}`} />
        <div className={`h-[5px] w-[40px] bg-gray-400 transform transition-all origin-center duration-300 rounded-md ${isOpen ? '-rotate-[225deg] -translate-y-[13px]' : ''}`} />

      </button>
      {isOpen && (
        <div className="absolute top-14 right-0 h-fit w-[60vw] bg-white shadow-lg">
          {<Menu column={true} />}
        </div>
      )}
    </div>
  );
};

export default MenuButton;
