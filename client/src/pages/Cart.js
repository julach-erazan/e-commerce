import React from "react";
import Reassuarance from "../components/Reassuarance";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <div className="w-full min-w-[1000px] pt-[100px]">
      <h1 className="text-[30px] text-[#2F3C7E] text-center font-bold mb-[20px]">
        Shopping cart
      </h1>
      <div className="w-full h-[650px] flex justify-center items-center">
        <div className="w-[70%] h-full px-[25px]">
          <h1 className="text-[15px] text-[#2F3C7E] font-semibold mb-[20px]">
            There are no more items in your cart
          </h1>
        </div>
        <div className="w-[30%] h-full flex flex-col justify-between items-center px-[25px]">
          <div className="w-full h-[280px] text-[#E4552D] bg-[#EEEDED] p-[20px] flex flex-col justify-evenly">
            <h1 className="text-[30px] text-[#2F3C7E] font-bold mb-[20px]">
              Your cart
            </h1>
            <div className="w-full flex justify-between items-center">
              <h2 className="text-[15px] font-semibold">0 items</h2>
              <h2 className="text-[15px] text-[#000] font-semibold">$0.00</h2>
            </div>
            <div className="w-full flex justify-between items-center border-t-[1px] border-[#ddd] pt-[10px] mb-[20px]">
              <h2 className="text-[20px] font-semibold">Total (tax incl.)</h2>
              <h2 className="text-[20px] font-semibold">$0.00</h2>
            </div>
            <button className="w-full h-[45px] text-[#fff] font-semibold text-center bg-[#2F3C7E] hover:bg-[#E4552D]">
              Checkout
            </button>
          </div>
          <div className="w-full h-[330px] bg-[#EEEDED] p-[20px]">
            <h1 className="text-[30px] text-[#2F3C7E] font-bold mb-[10px]">
              Informations
            </h1>
            <h2 className="text-[15px] text-[#2F3C7E] font-bold mb-[20px]">
              Free delivery from $150
            </h2>
            <h3 className="text-[15px] text-[#2F3C7E]">
              Secure payment <br />
              <br />
              Same day shipping on all orders placed before 12pm, excluding
              weekends and public holidays*
              <br />
              <br /> Free returns & 30-day exchanges*
              <br />
              <br /> (*) Metropolitan France only
            </h3>
          </div>
        </div>
      </div>
      <Reassuarance />
      <Footer />
    </div>
  );
};

export default Cart;
