import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GrUpdate } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { TfiWallet } from "react-icons/tfi";

const Reassuarance = () => {
  return (
    <div className="w-full min-w-[1000px] h-[100px] mt-[30px] text-[#2F3C7E] flex justify-evenly items-center">
      <a href="#" className="flex flex-col justify-center items-center">
        <LiaShippingFastSolid className="text-[50px]" />
        <h1 className="text-[15px] font-bold hover:text-[#E4552D]">
          Fast delivery
        </h1>
        <h2 className="text-[12px] ">Free delivery in E.U from 150€*.</h2>
      </a>

      <a href="#" className="flex flex-col justify-center items-center">
        <GrUpdate className="text-[40px]" />
        <h1 className="text-[15px] font-bold hover:text-[#E4552D]">
          100% satisfied
        </h1>
        <h2 className="text-[12px] ">Easy 30 days returns or exchanges</h2>
      </a>

      <a href="#" className="flex flex-col justify-center items-center">
        <BiPhoneCall className="text-[45px]" />
        <h1 className="text-[15px] font-bold hover:text-[#E4552D]">
          Contact us
        </h1>
        <h2 className="text-[12px] ">A question, an advice?</h2>
      </a>

      <a href="#" className="flex flex-col justify-center items-center">
        <TfiWallet className="text-[45px]" />
        <h1 className="text-[15px] font-bold hover:text-[#E4552D]">
          Secure payments
        </h1>
        <h2 className="text-[12px] ">3x payment with Klarna</h2>
      </a>
    </div>
  );
};

export default Reassuarance;
