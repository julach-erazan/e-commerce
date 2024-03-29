import React from "react";
import Reassuarance from "../components/Reassuarance";
import Footer from "../components/Footer";

const Login = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Logging form data
    const email = formData.get("email");
    const password = formData.get("password");

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        // Log the response
        console.log("Response:", res);
        return res.json();
      })
      .then((json) => console.log(json))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pt-[150px]">
      <form onSubmit={handleSubmit} className="w-[400px] flex flex-col">
        <h1 className="text-[30px] text-[#2F3C7E] text-center font-bold mb-[20px]">
          Login in to your account
        </h1>
        <h2 className="text-[15px] text-[#E4552D] text-center font-semibold mb-[20px]">
          <u>
            <a href="/register">No account? Create one here</a>
          </u>
        </h2>

        <label htmlFor="email" className="text-left">
          Email
        </label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password" className="text-left">
          Password
        </label>
        <input type="password" id="password" name="password" />

        <h2 className="text-[15px] text-[#E4552D] text-center font-semibold">
          <u>
            <a href="#">Forgot your password?</a>
          </u>
        </h2>

        <button
          className="h-[40px] text-[#fff] font-semibold bg-[#2F3C7E] hover:bg-[#E4552D] mt-[50px]"
          type="submit"
        >
          Sign in
        </button>
      </form>
      <Reassuarance />
      <Footer />
    </div>
  );
};

export default Login;
