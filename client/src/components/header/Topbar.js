import React from "react";
import Dropdown from "../Dropdown";

const Topbar = () => {
  let countryList = [
    {
      img: "/Images/united-states.png",
      link: "#",
    },
    {
      img: "/Images/germany.png",
      link: "#",
    },
    {
      img: "/Images/france.png",
      link: "#",
    },
  ];

  let currencyList = [
    {
      img: "/Images/dollar.png",
      link: "#",
    },
    {
      img: "/Images/pound.png",
      link: "#",
    },
    {
      img: "/Images/yuan.png",
      link: "#",
    },
  ];

  return (
    <div className="topbar w-full h-[40px] bg-[#2F3C7E] text-[#fff] flex justify-center items-center">
      <div className="w-[15%] h-[40px] flex">
        <div className="w-[50%] h-[40px] flex justify-center items-center">
          <Dropdown List={countryList} />
        </div>

        <div className="w-[50%] h-[40px]">
          <Dropdown List={currencyList} />
        </div>
      </div>

      <div className="w-[60%] h-[40px] flex justify-center items-center">
        <u>
          <a href="#">
            <h1>
              Express delivery with DHL & easy 30 days returns or exchanges
            </h1>
          </a>
        </u>
      </div>

      <div className="w-[15%] h-[40px] flex justify-center items-center">
        <a href="#" className="h-[40px] flex justify-between items-center">
          <h1>16299 reviews</h1>
          <img className="h-[20px]" src="/Images/star.png" alt="rating" />
        </a>
      </div>
    </div>
  );
};

export default Topbar;
