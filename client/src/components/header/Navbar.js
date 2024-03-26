import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { GrShop } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="navbar w-full h-[80px] flex justify-center items-center">
      <div className="w-[15%] h-[50px]">
        <a href="/">
          <h1 className="text-[25px] text-[#2F3C7E] font-bold">THE SEVEN</h1>
        </a>
      </div>
      <div className="w-[60%] h-[50px]">Menu</div>
      <div className="w-[15%] h-[50px] text-[25px] flex justify-evenly items-center">
        <a href="#">
          <IoSearchOutline />
        </a>
        <a href="#">
          <IoNotificationsOutline />
        </a>
        <a href="/login">
          <LuUser2 />
        </a>
        <a href="#">
          <GrShop />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
