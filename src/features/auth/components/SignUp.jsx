import Google from "../../../assets/icons/google.svg";
import Facebook from "../../../assets/icons/facebook.svg";

function SignUp() {
  return (
    <>
      <div className="text-center mt-4">
        <h4 className="text-[#AAAAAA] text-sm font-medium">
          أوافق على{" "}
          <span className="text-[#1D2E9E] cursor-pointer">الشروط والأحكام</span>{" "}
          ,<span className="text-[#1D2E9E] cursor-pointer">سياسة الخصوصية</span>
        </h4>

        <button className="bg-[#1D2E9E] hover:scale-98 transition-all duration-200 cursor-pointer text-sm font-bold text-gray-100 py-4 w-full rounded-lg mt-3">
          إنشاء الحساب{" "}
        </button>

        <div className="my-3 flex gap-3 items-center text-sm font-normal text-gray-200">
          <span className="bg-[#2A2A2A] h-px flex-1"></span>
          أو
          <span className="bg-[#2A2A2A] h-px flex-1"></span>
        </div>

        <div className="mb-2 flex justify-center gap-2 items-center text-sm text-gray-200 font-medium bg-[#1A1A1A] borde border-[#2A2A2A] py-3.5 rounded-xl cursor-pointer border hover:border-gray-300 transition-all duration-200">
          <span>المتابعة بحساب Google</span>
          <img src={Google} alt="facebook-icon" className="w-4 h-4" />
        </div>

        <div className="flex justify-center gap-2 items-center text-sm text-gray-200 font-medium bg-[#1A1A1A] borde border-[#2A2A2A] py-3.5 rounded-xl cursor-pointer border hover:border-gray-300 transition-all duration-200">
          <span>المتابعة بحساب Facebook</span>
          <img src={Facebook} alt="facebook-icon" className="w-4 h-4" />
        </div>
      </div>
      <h5 className="text-[#888888] text-sm font-normal mt-12 text-center">
        بتسجيل الدخول فأنت توافق على{" "}
        <span className="text-[#1D2E9E] cursor-pointer">الشروط والأحكام</span> ,{" "}
        <span className="text-[#1D2E9E] cursor-pointer">سياسة الخصوصية</span>
      </h5>
    </>
  );
}

export default SignUp;
