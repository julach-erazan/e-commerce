import React from "react";
import Reassuarance from "../components/Reassuarance";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  return (
    <div className="w-full">
      <div className="banner w-full h-[700px] flex justify-end items-center">
        <div className="w-[35%] h-full flex flex-col justify-center items-center">
          <h1 className="w-full text-[70px] text-[#f4f4f4] font-bold">
            Lorem ipsum dolor
          </h1>
          <a href="/newarrivals">
            <button className="w-[120px] h-[40px] bg-[#f4f4f4] hover:bg-[#2F3C7E] mt-[20px] text-[#2F3C7E] hover:text-[#f4f4f4] font-semibold">
              Shop Now
            </button>
          </a>
        </div>
      </div>

      <div className="w-full h-[600px] flex flex-col justify-center items-center p-[20px]">
        <h1 className="w-full text-[30px] text-[#2F3C7E] font-bold">
          New arrivals
        </h1>
        <div className="w-full h-[500px] mt-[25px] px-[20px]">
          <ImageCarousel />
        </div>
      </div>
      <Reassuarance />
      <Footer />
    </div>
  );
};

export default Home;
