import React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const register = async (inputs) => {
    const { fullName, email, password, confirmPassword, profilePic } = inputs;

    const success = handleInputErrors({
      fullName,
      email,
      password,
      confirmPassword,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
          confirmPassword,
          profilePic, // send base64-encoded profile picture
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chatterbox-user", JSON.stringify(data));
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

function handleInputErrors({ fullName, email, password, confirmPassword }) {
  if (!fullName || !email || !password || !confirmPassword) {
    toast.error("Please fill all the fields.");
    return false;
  }

  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  if (password.length < 6 || !hasLetter || !hasNumber) {
    toast.error("Password must be at least 6 characters long and include both letters and numbers.");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords don't match.");
    return false;
  }

  return true;
}
