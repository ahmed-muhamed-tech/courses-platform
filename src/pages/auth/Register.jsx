import RegisterForm from "../../features/auth/components/RegisterForm";
import Roundes from "../../features/auth/components/Roundes";
import LogoLeftAuthpage from "../../features/auth/components/LogoLeftAuthpage";
import HeadRegisterPage from "../../features/auth/components/HeadRegisterPage";

function Register() {
  return (
    <div className="bg-black flex gap-20 justify-between  min-h-screen relative">
      {/* Roundes */}
      <Roundes />
      {/* Roundes */}

      {/* Info Register Data */}
      <div className="bg-[#111111] w-full lg:w-1/2 py-5 px-5 lg:px-20 relative">
        {/* Logo */}
        <h1 className="text-gray-100 font-bold text-xl text-left">
          <span className="text-[#1D2E9E]">Hub</span> Learn
        </h1>
        {/* Logo */}

        <div className="w-full mx-auto mt-12 ">
          {/* Head */}
          <HeadRegisterPage />
          {/*=== Head ===*/}

          {/* Form */}
          <RegisterForm />
          {/*=== Form ===*/}
        </div>
      </div>
      {/* Info Register Data */}

      {/* Logo */}
      <div className="border w-0 lg:w-1/2  justify-center items-center relative hidden lg:flex ">
        <LogoLeftAuthpage />
      </div>
      {/* Logo */}
    </div>
  );
}

export default Register;
