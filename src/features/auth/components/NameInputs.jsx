import React from "react";
import useRegister from "../hooks/useRegister";

function NameInputs({handleInputChange, errors, userData}) {
 
  return (
    <div className="flex items-center flex-col w-full lg:flex-row gap-5 mb-4">
      <div className="w-full">
        <label
          className="text-xs font-medium text-[#AAAAAA] block mb-2"
          htmlFor="first-name"
        >
          الاسم الأول
        </label>
        <input
          className={`bg-[#1A1A1A] py-1 px-4 rounded-lg border ${errors.firstName ? "border-red-500" : "border-[#2A2A2A]"} text-sm font-normal 
                  outline-none text-gray-200 hover:border-[#1D2E9E] focus:border-[#1D2E9E] transition-all duration-200 w-full`}
          type="text"
          id="first-name"
          placeholder="محمد"
          name="firstName"
          value={userData.firstName}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <div className="w-full">
        <label
          className="text-xs font-medium text-[#AAAAAA] block mb-2"
          htmlFor="last-name"
        >
          الاسم الاخير
        </label>
        <input
          className={`bg-[#1A1A1A] py-1 px-4 rounded-lg border ${errors.lastName ? "border-red-500" : "border-[#2A2A2A]"} text-sm font-normal 
                  outline-none text-gray-200 hover:border-[#1D2E9E] focus:border-[#1D2E9E] transition-all duration-200 w-full`}
          type="text"
          id="last-name"
          placeholder="أحمد"
          name="lastName"
          value={userData.lastName}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
}

export default NameInputs;
