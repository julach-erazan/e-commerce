import React from "react";
import Reassuarance from "../components/Reassuarance";
import Footer from "../components/Footer";

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  fetch("https://fakestoreapi.com/users", {
    method: "POST",
    body: JSON.stringify({
      email: "John@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "John",
        lastname: "Doe",
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

  // // Logging form data
  // console.log({
  //   title: formData.get("title"),
  //   firstName: formData.get("firstName"),
  //   lastName: formData.get("lastName"),
  //   email: formData.get("email"),
  //   password: formData.get("password"),
  // });
};

const Register = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-[150px]">
      <form onSubmit={handleSubmit} className="w-[400px] flex flex-col">
        <h1 className="text-[30px] text-[#2F3C7E] text-center font-bold mb-[20px]">
          Create an account
        </h1>
        <h2 className="text-[15px] text-[#E4552D] text-center font-semibold mb-[20px]">
          <u>
            <a href="/login">Already have an account? Log in instead!</a>
          </u>
        </h2>

        <label htmlFor="title" className="text-left">
          Social title
        </label>
        <div className="flex items-center">
          <input
            type="radio"
            id="title"
            name="title"
            value="Mr."
            className="m-0"
          />
          <label htmlFor="title" className="ml-[10px] mr-[20px]">
            Mr.
          </label>

          <input
            type="radio"
            id="title"
            name="title"
            value="Ms."
            className="m-0 ml-[10px]"
          />
          <label htmlFor="title" className="ml-[10px] mr-[20px]">
            Ms.
          </label>

          <input
            type="radio"
            id="title"
            name="title"
            value="Miss."
            className="m-0 ml-[10px]"
          />
          <label htmlFor="title" className="ml-[10px] mr-[20px]">
            Miss.
          </label>
        </div>

        <label htmlFor="firstName" className="text-left">
          First name
        </label>
        <input type="text" id="firstName" name="firstName" />

        <label htmlFor="lastName" className="text-left">
          Last name
        </label>
        <input type="text" id="lastName" name="lastName" />

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
      <Footer />
    </div>
  );
};

export default Register;
