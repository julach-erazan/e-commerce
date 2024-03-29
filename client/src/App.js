import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  const headerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setScrollPosition(headerRef.current.scrollTop);
      }
    };

    // Add event listener to listen for scroll events on the header
    if (headerRef.current) {
      headerRef.current.addEventListener("scroll", handleScroll);
    }

    // Remove event listener when the component unmounts
    return () => {
      if (headerRef.current) {
        headerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div ref={headerRef} className="App w-screen h-screen overflow-y-scroll">
      <Header scrollPosition={scrollPosition} />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
