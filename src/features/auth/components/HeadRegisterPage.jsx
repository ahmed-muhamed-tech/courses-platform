import React from "react";
import { Link } from "react-router";

function HeadRegisterPage() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-100 mb-1">إنشاء حساب جديد</h2>
      <h3>
        <span className="text-sm font-normal text-[#888888]">
          لديك حساب بالفعل؟{" "}
        </span>
        <Link className="text-[#1D2E9E] ">تسجيل الدخول</Link>
      </h3>
    </div>
  );
}

export default HeadRegisterPage;
