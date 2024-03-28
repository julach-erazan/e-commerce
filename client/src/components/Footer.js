import React from "react";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogo } from "react-icons/pi";
import { SlSocialYoutube } from "react-icons/sl";
import { ImPinterest2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-full h-[225px] bg-[#2F3C7E] text-[#fff] flex justify-evenly items-center mt-[30px]">
      <div className="w-[20%] h-[90%] p-[10px]">
        <h1 className="text-[18px] font-semibold">Contact us</h1>
        <h1 className="text-[18px] font-semibold mt-[20px]">Follow us!</h1>
        <div className="min-w-[150px] text-[40px] font-semibold mt-[20px] flex justify-between flex-wrap">
          <a href="#">
            <CiFacebook className="my-[5px]" />
          </a>
          <a href="#">
            <PiInstagramLogo className="my-[5px]" />
          </a>
          <a href="#">
            <SlSocialYoutube className="my-[5px]" />
          </a>
          <a href="#">
            <ImPinterest2 className="text-[35px] my-[5px]" />
          </a>
        </div>
      </div>
      <div className="w-[20%] h-[90%] p-[10px]">
        <h1 className="text-[18px] font-semibold">About us</h1>
        <div className="w-[70%] text-[14px] font-semibold flex flex-col mt-[20px]">
          <a href="#">
            <h1 className="hover:underline">Our mission</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Our philosophy</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Our team</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Customer reviews</h1>
          </a>
        </div>
      </div>
      <div className="w-[20%] h-[90%] p-[10px]">
        <h1 className="text-[18px] font-semibold">Useful links</h1>
        <div className="w-[70%] text-[14px] font-semibold flex flex-col mt-[20px]">
          <a href="#">
            <h1 className="hover:underline">Delivery costs</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Exchange and return</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Size guides</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Our guides and tutorials</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Privacy notice</h1>
          </a>
          <a href="#">
            <h1 className="hover:underline">Terms and conditions</h1>
          </a>
        </div>
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
