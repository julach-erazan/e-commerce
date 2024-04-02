import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { GrShop } from "react-icons/gr";

const Navbar = (props) => {
  const [onSearch, setOnSearch] = useState(false);
  // var queryString = window.location.search;
  // var queryParams = new URLSearchParams(queryString);
  // var data = queryParams.get("data");

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

  const handleSearch = () => {
    setOnSearch(!onSearch);
  };

  const searchRoute = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const searchKey = formData.get("search");

    window.location = `/search?key=${searchKey}`;
  };

  return (
    <nav
      className={`navbar w-full min-w-[1000px] h-[70px] text-[#2F3C7E] flex justify-evenly items-center ${
        props.scrollPosition >= 40
          ? "fixed top-0 bg-[#fff] drop-shadow"
          : " absolute"
      }`}
    >
      <div className="w-[15%] min-w-[150px] h-[50px] flex justify-center items-center">
        <a href="/">
          <h1 className="text-[25px] font-bold">THE SEVEN</h1>
        </a>
      </div>
      <div className="w-[60%] min-w-[550px] h-[50px] mx-[10px] flex justify-evenly items-center">
        <ul className="flex justify-evenly items-center">
          {Links.map((data) => (
            <li key={data.name}>
              <a href={data.link}>
                <h1 className="font-semibold hover:text-[#E4552D] mx-[10px]">
                  {data.name}
                </h1>
              </a>
            </li>
          ))}
        </ul>
        <form
          onSubmit={searchRoute}
          className={`w-[200px] h-[40px] flex justify-evenly items-center border-[1px] border-solid border-[#2f3c7e] bg-white ${
            onSearch ? "visible" : "hidden"
          }`}
        >
          <input
            type="text"
            name="search"
            id="search"
            className="w-[150px] h-[35px] border-none focus:border-none m-0"
          />
          <button
            type="submit"
            className="w-[40px] h-[40px] flex justify-center items-center"
          >
            <h1>OK</h1>
          </button>
        </form>
      </div>
      <div className="w-[15%] h-[50px] text-[25px] flex justify-evenly items-center">
        <button
          className="w-[50px] h-[50px] flex justify-center items-center"
          onClick={handleSearch}
        >
          <IoSearchOutline />
        </button>

        <a
          href="#"
          className="w-[50px] h-[50px] flex justify-center items-center"
        >
          <IoNotificationsOutline />
        </a>

        <button className="w-[50px] h-[50px] flex justify-center items-center">
          <a href="/login?data=1">
            <LuUser2 />
          </a>
        </button>

        <a
          href="/cart"
          className="w-[50px] h-[50px] flex justify-center items-center"
        >
          <GrShop />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
