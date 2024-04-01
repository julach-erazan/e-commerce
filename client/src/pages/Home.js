import React from "react";
import Reassuarance from "../components/Reassuarance";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  const images = [
    "/Images/girl.jpg",
    "/Images/girl.png",
    "/Images/shoppingGirls.jpg",
    "/Images/girl.jpg",
    "/Images/girl.png",
    "/Images/shoppingGirls.jpg",
  ];

  return (
    <div className="w-full">
      <div className="w-full">
        <img
          className="w-full"
          src="/Images/shoppingGirls.jpg"
          alt="bg-image"
        />
      </div>

      <div className="w-full h-[500px] flex flex-col justify-center items-center">
        <h1 className="w-full text-[30px] text-[#2F3C7E] font-bold">
          New arrivals
        </h1>
        <div className="w-full h-[400px] flex justify-center items-center p-[20px]">
          <ImageCarousel images={images} interval={3000} />
        </div>
      </div>
      <Reassuarance />
      <Footer />
    </div>
  );
};

export default Home;
