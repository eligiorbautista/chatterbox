import React from "react";
import { useState } from "react";

import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";

const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const { authUser, setAuthUser } = useAuthContext();

  const register = async ({
    fullName,
    email,
    password,
    confirmPassword,
  //  gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      email,
      password,
      confirmPassword,
     // gender,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
       //   gender: gender,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // localstorage
      localStorage.setItem("chatterbox-user", JSON.stringify(data));
      // context
      setAuthUser(data);

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, register };
};

export default useRegister;

function handleInputErrors({
  fullName,
  email,
  password,
  confirmPassword,
 // gender,
}) {
  // Missing input fields
  if (!fullName || !email || !password || !confirmPassword) {
    toast.error("Please fill all the fields.");
    return false;
  }

  // Password does not meet requirements
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  if (password.length < 6 || !hasLetter || !hasNumber) {
    toast.error(
      "Password must be at least 6 characters long and include both letters and numbers."
    );
    return false;
  }

  // Password and confirm password do not match
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  return true;
}
