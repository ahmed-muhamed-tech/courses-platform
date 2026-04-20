import React from "react";
import useRegister from "../hooks/useRegister";

function PhoneNumberInput({errors, handleInputChange, userData}) {

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <label
          className="text-xs font-medium text-[#AAAAAA] block"
          htmlFor="phone-number"
        >
          رقم الهاتف
        </label>
        <span className="inline font-medium text-[10px] bg-[#1A1A1A] py-0.5 px-2 rounded-sm text-[#666666]">
          اختياري
        </span>
      </div>
      <div
        className={`flex justify-between items-center px-4 bg-[#1A1A1A] pl-2 rounded-lg border ${errors.phoneNumber ? "border-red-500" : "border-[#2A2A2A]"} text-sm font-normal 
                          outline-none text-gray-200 hover:border-[#1D2E9E] focus-within:border-[#1D2E9E] transition-all duration-200 w-full`}
      >
        <div className="w-12 border-l border-gray-700">
          <span>+20</span>
        </div>
        <input
          className="outline-none py-1 flex-1 px-4"
          type="text"
          id="phone-number"
          placeholder="1234567890"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
}

export default PhoneNumberInput;
