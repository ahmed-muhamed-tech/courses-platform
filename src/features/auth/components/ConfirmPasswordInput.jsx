import React from "react";
import useRegister from "../hooks/useRegister";

import { BiShowAlt } from "react-icons/bi";
import {
  FaCheckCircle,
  FaCircle,
  FaEyeSlash,
  FaRegCheckCircle,
  FaRegCircle,
} from "react-icons/fa";
function ConfirmPasswordInput({
  errors,
  showConfirmPassword,
  userData,
  setShowConfirmPassword,
  handleInputChange
}) {
  return (
    <div>
      <label
        className="text-xs font-medium text-[#AAAAAA] block mb-2"
        htmlFor="password"
      >
        تأكيد كلمة المرور
      </label>
      <div
        className={`flex justify-between items-center bg-[#1A1A1A] pl-2 rounded-lg border ${errors.confirmPassword ? "border-red-500" : "border-[#2A2A2A]"} text-sm font-normal 
            outline-none text-gray-200 hover:border-[#1D2E9E] focus-within:border-[#1D2E9E] transition-all duration-200 w-full`}
      >
        <input
          className="outline-none py-1 flex-1 px-4 bg-transparent"
          type={showConfirmPassword ? "text" : "password"}
          id="password"
          placeholder="********"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={(e) => handleInputChange(e)}
          minLength={8}
        />
        <div
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="cursor-pointer"
        >
          {showConfirmPassword ? <FaEyeSlash /> : <BiShowAlt />}
        </div>
      </div>
      <div>
        {errors.confirmPassword === "noConfirm" ? (
          <span className="text-red-500 text-xs font-normal">
            لا تتطابق كلمه المرور
          </span>
        ) : (
          <span className="text-xs font-normal text-transparent">
            لا تتطابق كلمه المرور
          </span>
        )}
      </div>
    </div>
  );
}

export default ConfirmPasswordInput;
