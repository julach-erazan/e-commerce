import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { GrShop } from "react-icons/gr";

const Navbar = (props) => {
  var queryString = window.location.search;
  var queryParams = new URLSearchParams(queryString);
  var data = queryParams.get("data");

  const Links = [
    {
      name: "NEW ARRIVALS",
      link: "/newarrivals",
    },
    {
      name: "T-SHIRTS",
      link: "/tshirts",
    },
    {
      name: "CLOTHS",
      link: "/cloths",
    },
    {
      name: "JEVELERY",
      link: "/jewelery",
    },
  ];

  return (
    <nav
      className={`navbar w-full h-[70px] flex justify-center items-center ${
        props.scrollPosition >= 40
          ? "fixed top-0 text-[#2F3C7E] bg-[#fff] drop-shadow"
          : "text-[#cacafa] absolute"
      }`}
    >
      <div className="w-[15%] h-[50px] flex justify-center items-center">
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
                      : "hover:text-[#2F3C7e]"
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
          <a href="/login?data=1">
            <LuUser2 />
          </a>
        </button>
        <a href="#">
          <GrShop />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
