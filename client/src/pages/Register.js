import React from "react";
import Reassuarance from "../components/Reassuarance";

const Register = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-[150px]">
      <form action="POST" className="w-[400px] flex flex-col">
        <h1 className="text-[30px] text-[#2F3C7E] text-center font-bold mb-[20px]">
          Create an account
        </h1>
        <h2 className="text-[15px] text-[#E4552D] text-center font-semibold mb-[20px]">
          <u>
            <a href="/login">Already have an account? Log in instead!</a>
          </u>
        </h2>

        <label htmlFor="firstName" className="text-left">
          Social title
        </label>
        <div className="flex items-center">
          <input type="radio" id="title" name="title" className="m-0" />
          <label htmlFor="title" className="ml-[10px] mr-[20px]">
            Mr.
          </label>

          <input
            type="radio"
            id="title"
            name="title"
            className="m-0 ml-[10px]"
          />
          <label htmlFor="title" className="ml-[10px] mr-[20px]">
            Ms.
          </label>

          <input
            type="radio"
            id="title"
            name="title"
            className="m-0 ml-[10px]"
          />
          <label htmlFor="title" className="ml-[10px] mr-[20px]">
            Miss.
          </label>
        </div>

        <label htmlFor="firstName" className="text-left">
          First name
        </label>
        <input type="text" />

        <label htmlFor="lastName" className="text-left">
          Last name
        </label>
        <input type="text" />

        <label htmlFor="email" className="text-left">
          Email
        </label>
        <input type="text" />

        <label htmlFor="password" className="text-left">
          Password
        </label>
        <input type="text" />

        <h2 className="text-[15px] text-[#E4552D] text-center font-semibold">
          <u>
            <a href="/register">Forgot your password?</a>
          </u>
        </h2>

        <button
          className="h-[40px] text-[#fff] font-semibold bg-[#2F3C7E] hover:bg-[#E4552D] mt-[50px]"
          type="submit"
        >
          Save
        </button>
      </form>
      <Reassuarance />
    </div>
  );
};

export default Register;
