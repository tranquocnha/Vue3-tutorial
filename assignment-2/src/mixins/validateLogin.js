import { ref } from "vue";

export default function () {
  const emailError = ref("");
  const email = ref("");
  const password = ref("");
  const passwordError = ref("");

  function validateEmail() {
    if (!email.value) {
      emailError.value = "Email is required";
    } else if (!isEmailValid(email.value)) {
      emailError.value = "Please enter a valid email address";
    } else {
      emailError.value = "";
    }
  }
  function validatePassword() {
    if (!password.value) {
      passwordError.value = "Password is required";
    } else if (password.value.length < 8) {
      passwordError.value = "Password must be at least 8 characters long";
    } else {
      passwordError.value = "";
    }
  }
  function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return {
    email,
    emailError,
    password,
    passwordError,
    validatePassword,
    validateEmail,
  };
}
