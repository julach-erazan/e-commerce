import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GrUpdate } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { TfiWallet } from "react-icons/tfi";

const Reassuarance = () => {
  return (
    <div className="w-full min-w-[350px] lg:h-[110px] mt-[30px] text-[#2F3C7E] flex flex-wrap justify-evenly items-center">
      <a
        href="#"
        className="flex flex-col justify-center items-center mb-[10px]"
      >
        <LiaShippingFastSolid className="text-[50px]" />
        <h1 className="text-[15px] font-bold hover:text-[#E4552D]">
          Fast delivery
        </h1>
        <h2 className="text-[12px] ">Free delivery in E.U from $150*.</h2>
      </a>

      <a
        href="#"
        className="flex flex-col justify-center items-center mb-[10px]"
      >
        <GrUpdate className="text-[40px]" />
        <h1 className="text-[15px] font-bold hover:text-[#E4552D]">
          100% satisfied
        </h1>
        <h2 className="text-[12px] ">Easy 30 days returns or exchanges</h2>
      </a>

      <a
        href="#"
        className="flex flex-col justify-center items-center mb-[10px]"
      >
        <BiPhoneCall className="text-[45px]" />
        <h1 className="text-[15px] font-bold hover:text-[#E4552D]">
          Contact us
        </h1>
        <h2 className="text-[12px] ">A question, an advice?</h2>
      </a>

      <a
        href="#"
        className="flex flex-col justify-center items-center mb-[10px]"
      >
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
