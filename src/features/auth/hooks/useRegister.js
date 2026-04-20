import { useState } from "react";

export default function useRegister(){
    const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

// if founed any errorss in inputs
const [errors, setErrors] = useState({
  firstName: false,
  lastName: false,
  email: false,
  phoneNumber: false,
  password: false,
  confirmPassword: false,
  role: "student",
});

// Data for user
const [userData, setUserData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  role: "student",
  cvFile: "",
});

// set data from input into state data user
const handleInputChange = (e) => {
  const { name, value } = e.target;
  if (name === "password") {
    checkPasswordValidity(value);
  }

  setUserData((olduserData) => ({
    ...olduserData,
    [name]: value,
  }));
};

const [passwordValidation, setPasswordValidation] = useState({
  smallLetter: false,
  capitalLetter: false,
  number: false,
  spatialCharacter: false,
  length: false,
});

const checkPasswordValidity = (password) => {
  const newValid = {
    capitalLetter: /[A-Z]/.test(password),
    smallLetter: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    spatialCharacter: /[^a-zA-Z0-9]/.test(password),
    length: password?.length >= 8,
  };

  setPasswordValidation(newValid);

  return (
    newValid.capitalLetter &&
    newValid.smallLetter &&
    newValid.number &&
    newValid.spatialCharacter &&
    newValid.length
  );
};

const hasInvalidFormData = () => {
  setErrors({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
    role: "student",
  });

  let anyEnvalidValue = false;
  if (!checkPasswordValidity(userData.password)) {
    anyEnvalidValue = true;
  }

  if (!userData.firstName.trim()) {
    setErrors((old) => ({ ...old, firstName: true }));
    anyEnvalidValue = true;
  }

  if (!userData.lastName.trim()) {
    setErrors((old) => ({ ...old, lastName: true }));
    anyEnvalidValue = true;
  }

  if (!userData.email.trim()) {
    setErrors((old) => ({ ...old, email: true }));
    anyEnvalidValue = true;
  }

  if (!userData.phoneNumber.trim()) {
    setErrors((old) => ({ ...old, phoneNumber: true }));
    anyEnvalidValue = true;
  }

  if (!userData.password.trim()) {
    setErrors((old) => ({ ...old, password: true }));
    anyEnvalidValue = true;
  }

  if (!userData.confirmPassword.trim()) {
    setErrors((old) => ({ ...old, confirmPassword: true }));
    anyEnvalidValue = true;
  }
  if (userData.confirmPassword !== userData.password) {
    setErrors((old) => ({ ...old, confirmPassword: "noConfirm" }));
    anyEnvalidValue = true;
  }

  return anyEnvalidValue;
};

const handleDataForm = (e) => {
  e.preventDefault();
  if (hasInvalidFormData()) return;

  alert("welcome");
};

return {
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
};

}