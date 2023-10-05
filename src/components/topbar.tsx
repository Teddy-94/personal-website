"use client";

import Link from "next/link";
import MenuButton from "./menuButton";
import { textGradientOnHover } from "./styleUtils";
import Menu from "./menu";

const Topbar = () => {
  return (
    <div className="inline-flex w-full justify-between border-b-2">
      <h1
        className={`mb-4 text-2xl font-bold ${textGradientOnHover} xl:text-3xl`}
      >
        <Link href="/" target="_self">
          Teodor Adolfsson
        </Link>
      </h1>
      <MenuButton />
      <Menu column={false} />
    </div>
  );
};

export default Topbar;
