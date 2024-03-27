import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[225px] bg-[#2F3C7E] text-[#fff] flex justify-evenly items-center mt-[30px]">
      <div className="w-[20%] h-[90%] p-[10px]">
        <h1 className="text-[18px] font-semibold">Contact us</h1>
      </div>
      <div className="w-[20%] h-[90%] p-[10px]">
        <h1 className="text-[18px] font-semibold">About us</h1>
      </div>
      <div className="w-[20%] h-[90%] p-[10px]">
        <h1 className="text-[18px] font-semibold">Useful links</h1>
      </div>
      <div className="w-[20%] h-[90%] p-[10px]">
        <h1 className="text-[18px] font-semibold">
          Suscribe to our newsletter!
        </h1>
      </div>
    </div>
  );
};

export default Footer;
