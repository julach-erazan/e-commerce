import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Newarrivals from "./pages/Newarrivals";
import Tshirts from "./pages/Tshirts";
import Cloths from "./pages/Cloths";
import Jewelery from "./pages/Jewelery";
import Search from "./pages/Search";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  const headerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setScrollPosition(headerRef.current.scrollTop);
      }
    };

    if (headerRef.current) {
      headerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (headerRef.current) {
        headerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="App w-screen min-w-[1000px] h-screen overflow-y-scroll"
    >
      <Header scrollPosition={scrollPosition} />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newarrivals" element={<Newarrivals />} />
          <Route path="/tshirts" element={<Tshirts />} />
          <Route path="/cloths" element={<Cloths />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
