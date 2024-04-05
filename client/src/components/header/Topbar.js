import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Topbar = () => {
  if (!sessionStorage.getItem("currencySymbol")) {
    sessionStorage.setItem("currencySymbol", "$");
  }
  const [showCountry, setShowCountry] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);

  const handleCountry = () => {
    setShowCountry(!showCountry);
    setShowCurrency(false);
  };

  const handleCurrrency = () => {
    setShowCountry(false);
    setShowCurrency(!showCurrency);
  };

  let countryList = [
    {
      img: "/Images/united-states.png",
      link: "#",
    },

    {
      img: "/Images/france.png",
      link: "#",
    },

    {
      img: "/Images/germany.png",
      link: "#",
    },
  ];

  let currencyList = [
    {
      img: "/Images/dollar.png",
      link: "#",
      symbol: "$",
    },

    {
      img: "/Images/euro.png",
      link: "#",
      symbol: "€",
    },

    {
      img: "/Images/pound.png",
      link: "#",
      symbol: "£",
    },
  ];

  const [countryImage, setCountryImage] = useState(countryList[0].img);
  const [currencyImage, setCurrencyImage] = useState(currencyList[0].img);

  const handleSelectedCountry = (index) => {
    setCountryImage(countryList[index].img);
    setCurrencyImage(currencyList[index].img);
    sessionStorage.setItem("currencySymbol", currencyList[index].symbol);
    setShowCountry(false);
  };

  const handleSelectedCurrency = (index) => {
    setCurrencyImage(currencyList[index].img);
    sessionStorage.setItem("currencySymbol", currencyList[index].symbol);
    setShowCurrency(false);
  };

  return (
    <div className="topbar w-full min-w-[350px] xl:h-[45px] bg-[#2F3C7E] text-[#fff] flex flex-wrap-reverse justify-evenly items-center py-[5px]">
      <div className="w-full lg:w-[240px] h-[30px] flex justify-start items-center pl-[10px]">
        <button
          className="w-[60px] h-[30px] flex justify-evenly items-center"
          onClick={handleCountry}
        >
          <img className="w-[30px] h-[30px]" src={countryImage} alt="country" />
          <FaChevronDown className="text-[15px]" />
        </button>
        <button
          className="w-[60px] h-[30px] flex justify-evenly items-center"
          onClick={handleCurrrency}
        >
          <img
            className="w-[30px] h-[30px]"
            src={currencyImage}
            alt="currency"
          />
          <FaChevronDown className="text-[15px]" />
        </button>
        <div
          className={`w-[60px] h-[90px] bg-[#ddd] relative left-[-120px] top-[65px] xl:top-[67px] z-20 ${
            showCountry ? "visible" : "invisible"
          }`}
        >
          <ul>
            {countryList.map((items, index) => (
              <li
                key={index}
                className="flex justify-center items-center hover:bg-[#2F3C7E]"
              >
                <a href={items.link} className="w-[30px] h-[30px]">
                  <button onClick={() => handleSelectedCountry(index)}>
                    <img className="w-[30px] h-[30px]" src={items.img} alt="" />
                  </button>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`w-[60px] h-[90px] bg-[#ddd] relative left-[-120px] top-[65px] xl:top-[67px] z-20 ${
            showCurrency ? "visible" : "invisible"
          }`}
        >
          <ul>
            {currencyList.map((items, index) => (
              <li
                key={index}
                className="flex justify-center items-center hover:bg-[#2F3C7E]"
              >
                <a href={items.link} className="w-[30px] h-[30px]">
                  <button onClick={() => handleSelectedCurrency(index)}>
                    <img className="w-[30px] h-[30px]" src={items.img} alt="" />
                  </button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-[10px]">
        <div className="w-full lg:w-[450px] lg:h-[30px] text-center lg:text-left flex justify-center items-center mr-[120px]">
          <a href="#">
            <h1 className="text-[12px] md:text-[15px] font-semibold underline">
              Express delivery with DHL & easy 30 days returns or exchanges
            </h1>
          </a>
        </div>

        <div className="w-full lg:w-[200px] h-[30px] flex justify-center items-center">
          <a href="#" className="h-[30px] flex justify-between items-center">
            <h1 className="text-[12px] md:text-[15px] font-semibold">
              16299 reviews
            </h1>
            <img className="h-[20px]" src="/Images/star.png" alt="rating" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
