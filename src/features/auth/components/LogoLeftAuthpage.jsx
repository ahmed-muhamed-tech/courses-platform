import React from "react";
import logo from "../../../assets/images/Vector.svg";
function LogoLeftAuthpage() {
  return (
    <div className="text-center relative">
      <img className="mx-auto" src={logo} alt="logo" />
      <h2 className="font-bold text-3xl text-gray-100 my-3">LearnHub</h2>
      <h3 className="font-semibold text-2xl text-gray-100">انضم إلى مجتمعنا</h3>
      <p className="font-normal text-lg text-[#888888] my-3">
        أكثر من 200,000 طالب بدأوا رحلتهم معنا — أنت التالي
      </p>
      <div className="flex gap-2 items-center mx-auto w-fit">
        <div>
          <h4 className="text-[#1D2E9E] font-bold text-xl">200K+</h4>
          <h4 className="text-[#888888] font-normal text-xs">طالب</h4>
        </div>
        <div>
          <h4 className="text-[#1D2E9E] font-bold text-xl">850+</h4>
          <h4 className="text-[#888888] font-normal text-xs">مدرس</h4>
        </div>
        <div>
          <h4 className="text-[#1D2E9E] font-bold text-xl">12K+</h4>
          <h4 className="text-[#888888] font-normal text-xs">كورس</h4>
        </div>
      </div>
    </div>
  );
}

export default LogoLeftAuthpage;
