import React from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

export default function Header() {
  return (
    <div className="bg-blue-700">
      <div className="max-w-[1240px] py-[15px] items-center flex justify-between mx-auto">
        <div className="text-3xl font-bold">WsCube Tech</div>
        <IoIosMenu className="text-white text-3xl md:hidden block" />
        {/* <IoMdClose className="text-white text-3xl md:hidden block" /> */}
        <ul className="md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
