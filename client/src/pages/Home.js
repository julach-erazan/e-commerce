import React from "react";
import Reassuarance from "../components/Reassuarance";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <img
          className="w-full"
          src="/Images/shoppingGirls.jpg"
          alt="bg-image"
        />
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
