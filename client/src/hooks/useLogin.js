import { useState } from "react";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const login = async (email, password) => {
    const success = handleInputErrors(email, password);

    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      toast.success(`Logged in successfully. Welcome, ${data.fullName}`);
      localStorage.setItem("chatterbox-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

function handleInputErrors(email, password) {
  // Missing input fields
  if (!email || !password) {
    toast.error("Please fill all the fields.");
    return false;
  }

  return true;
}
