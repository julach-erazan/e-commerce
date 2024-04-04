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
    <div className="topbar w-full h-[45px] bg-[#2F3C7E] text-[#fff] flex justify-evenly items-center px-[25px] py-[5px]">
      <div className="h-[40px] flex justify-center items-center">
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
          className={`w-[60px] h-[90px] bg-[#ddd] relative left-[-120px] top-[67px] z-20 ${
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
          className={`w-[60px] h-[90px] bg-[#ddd] relative left-[-120px] top-[67px] z-20 ${
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

      <div className="w-[450px] h-[30px] flex justify-center items-center mr-[120px]">
        <a href="#">
          <h1 className="underline">
            Express delivery with DHL & easy 30 days returns or exchanges
          </h1>
        </a>
      </div>

      <div className="w-[200px] h-[30px] flex justify-center items-center">
        <a href="#" className="h-[30px] flex justify-between items-center">
          <h1>16299 reviews</h1>
          <img className="h-[20px]" src="/Images/star.png" alt="rating" />
        </a>
      </div>
    </div>
  );
};

export default Topbar;
