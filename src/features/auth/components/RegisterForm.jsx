
import NameInputs from "./NameInputs";
import GmailInputs from "./GmailInputs";
import PhoneNumberInput from "./PhoneNumberInput";
import PasswordInput from "./PasswordInput";
import CVFileInput from "./CVFileInput";
import HeadRegisterPage from "./HeadRegisterPage";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import SignUp from "./SignUp";
import CustomSelect from "../../../components/ui/CostumSelect";
import useRegister from "../hooks/useRegister";


function RegisterForm() {
  const {
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    userData,
    setUserData,
    errors,
    setErrors,
    handleDataForm,
    hasInvalidFormData,
    checkPasswordValidity,
    passwordValidation,
    setPasswordValidation,
    handleInputChange,
  } = useRegister();

  return (
    <form className="mt-8" onSubmit={handleDataForm}>
      <NameInputs
        handleInputChange={handleInputChange}
        errors={errors}
        userData={userData}
      />

      <GmailInputs
        handleInputChange={handleInputChange}
        userData={userData}
        errors={errors}
      />

      <PhoneNumberInput
        errors={errors}
        handleInputChange={handleInputChange}
        userData={userData}
      />

      <PasswordInput
        userData={userData}
        handleInputChange={handleInputChange}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        errors={errors}
        passwordValidation={passwordValidation}
      />

      <ConfirmPasswordInput
        handleInputChange={handleInputChange}
        errors={errors}
        showConfirmPassword={showConfirmPassword}
        userData={userData}
        setShowConfirmPassword={setShowConfirmPassword}
      />

      <CustomSelect
        value={userData.role}
        onChange={(val) => setUserData((old) => ({ ...old, role: val }))}
      />

      <CVFileInput setUserData={setUserData} userData={userData} />

      <SignUp />
    </form>
  );
}

export default RegisterForm;
