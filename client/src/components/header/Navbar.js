import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { GrShop } from "react-icons/gr";

const Navbar = (props) => {
  const [val, setVal] = useState(null);
  const Links = [
    {
      name: "NEW ARRIVALS",
      link: "#",
    },
    {
      name: "SHIRTS",
      link: "#",
    },
    {
      name: "SHOES",
      link: "#",
    },
    {
      name: "CLOTHS",
      link: "#",
    },
    {
      name: "ACCESSORIES",
      link: "#",
    },
  ];

  const handleNavColor = () => {
    // setVal(val);
    console.log("hi");
  };

  return (
    <nav
      className={`navbar w-full h-[70px] flex justify-center items-center ${
        props.scrollPosition >= 40
          ? "fixed top-0 text-[#2F3C7E] bg-[#fff]"
          : "text-[#fff] absolute"
      }`}
    >
      <div
        className={`w-[15%] h-[50px] flex justify-center items-center ${
          val != null ? "text-[#2F3C7E]" : ""
        }`}
      >
        <a href="/">
          <h1 className="text-[25px] font-bold">THE SEVEN</h1>
        </a>
      </div>
      <div className="w-[60%] h-[50px] px-[10px] flex justify-center items-center">
        <ul className="flex justify-evenly items-center">
          {Links.map((data) => (
            <li key={data.name}>
              <a href={data.link}>
                <h1
                  className={`font-semibold mx-[10px] ${
                    props.scrollPosition >= 40
                      ? "hover:text-[#E4552D]"
                      : "hover:text-[#2F3C7E]"
                  }`}
                >
                  {data.name}
                </h1>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[15%] h-[50px] text-[25px] flex justify-evenly items-center">
        <a href="#">
          <IoSearchOutline />
        </a>
        <a href="#">
          <IoNotificationsOutline />
        </a>
        <button>
          <a href="/login">
            <LuUser2 />
          </a>
        </button>
        <a href="#">
          <GrShop onClick={handleNavColor} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
