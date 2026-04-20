import React from "react";
import useRegister from "../hooks/useRegister";
import { CgMail } from "react-icons/cg";
function GmailInputs({handleInputChange, userData, errors}) {

  return (
    <div className="mb-4">
      <label
        className="text-xs font-medium text-[#AAAAAA] block mb-2"
        htmlFor="email"
      >
        البريد الإلكتروني
      </label>
      <div
        className={`flex justify-between items-center bg-[#1A1A1A] pl-2 rounded-lg border  ${errors.email ? "border-red-500" : "border-[#2A2A2A]"} text-sm font-normal 
                  outline-none text-gray-200 hover:border-[#1D2E9E] focus-within:border-[#1D2E9E] transition-all duration-200 w-full`}
      >
        <input
          className="outline-none py-1 flex-1 px-4 bg-transparent"
          type="email"
          id="email"
          placeholder="example@gmail.com"
          name="email"
          value={userData.email}
          onChange={(e) => handleInputChange(e)}
        />
        <CgMail />
      </div>
    </div>
  );
}

export default GmailInputs;
