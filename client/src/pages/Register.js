import React from "react";

const Register = () => {
  return (
    <div className="w-full h-[500px] flex justify-center items-center">
      <div className="w-[600px] h-[500px]">
        <h1 className="text-[25px] text-[#2F3C7E] font-bold mb-[20px]">
          Create an account
        </h1>

        <h2 className="text-[15px] text-[#E4552D] font-semibold">
          <u>
            <a href="/login">Already have an account? Log in instead</a>
          </u>
        </h2>
      </div>
    </div>
  );
};

export default Register;
