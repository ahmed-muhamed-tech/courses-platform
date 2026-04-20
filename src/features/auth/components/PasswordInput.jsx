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
function PasswordInput({
  userData,
  handleInputChange,
  showPassword,
  setShowPassword,
  errors,
  passwordValidation,
}) {
  return (
    <div className="mb-4">
      <label
        className="text-xs font-medium text-[#AAAAAA] block mb-2"
        htmlFor="password"
      >
        كلمة المرور
      </label>
      <div
        className={`flex justify-between items-center bg-[#1A1A1A] pl-2 rounded-lg border ${errors.password ? "border-red-500" : "border-[#2A2A2A]"} text-sm font-normal 
                          outline-none text-gray-200 hover:border-[#1D2E9E] focus-within:border-[#1D2E9E] transition-all duration-200 w-full`}
      >
        <input
          className="outline-none py-1 flex-1 px-4 bg-transparent"
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="********"
          name="password"
          value={userData.password}
          onChange={(e) => handleInputChange(e)}
          minLength={8}
        />
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer"
        >
          {showPassword ? <FaEyeSlash /> : <BiShowAlt />}
        </div>
      </div>
      <div className="mt-3 bg-[#141414] border border-[#2A2A2A] rounded-xl p-3 space-y-2">
        <h4 className="text-[11px] text-[#666] mb-1">
          يجب أن تحتوي كلمة المرور على:
        </h4>

        {[
          {
            label: "حرف كبير (A-Z)",
            valid: passwordValidation.capitalLetter,
          },
          {
            label: "حرف صغير (a-z)",
            valid: passwordValidation.smallLetter,
          },
          { label: "رقم (0-9)", valid: passwordValidation.number },
          {
            label: "رمز (!@#...)",
            valid: passwordValidation.spatialCharacter,
          },
          {
            label: "8 أحرف على الأقل",
            valid: passwordValidation.length,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 text-xs transition-all duration-200
                            ${item.valid ? "text-[#1D2E9E]" : "text-[#777]"}`}
          >
            {item.valid ? (
              <FaCheckCircle className="text-[10px] text-[#1D2E9E]" />
            ) : (
              <FaRegCircle className="text-[10px]" />
            )}

            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PasswordInput;
