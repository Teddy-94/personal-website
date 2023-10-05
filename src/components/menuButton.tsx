"use client";
import { useState } from "react";
import Menu from "./menu";

// TODO make menu close on click outside or on link
const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:hidden">
      <button
        className="mt-[-10px] flex h-11 w-11 flex-col justify-between rounded-md bg-white p-1.5 focus:outline-none"
        onClick={toggleMenu}
      >
        <div
          className={`h-[5px] w-[40px] origin-center transform rounded-md bg-gray-400 transition-all duration-300 ${
            isOpen ? "translate-y-[13px] rotate-[225deg]" : ""
          }`}
        />
        <div
          className={`h-[5px] w-[40px] transform rounded-md bg-gray-400 opacity-100 transition-all duration-300 ${
            isOpen ? "scale-0 opacity-0" : ""
          }`}
        />
        <div
          className={`h-[5px] w-[40px] origin-center transform rounded-md bg-gray-400 transition-all duration-300 ${
            isOpen ? "-translate-y-[13px] -rotate-[225deg]" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-14 h-fit w-[60vw] bg-white shadow-lg">
          {<Menu column={true} />}
        </div>
      )}
    </div>
  );
};

export default MenuButton;
