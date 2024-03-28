import React from "react";
import Reassuarance from "../components/Reassuarance";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <img className="w-full" src="/Images/shoppingGirls.jpg" alt="" />
      </div>
      <Reassuarance />
      <Footer />
    </div>
  );
};

export default Home;
