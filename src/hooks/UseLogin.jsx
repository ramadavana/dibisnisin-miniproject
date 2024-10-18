import { useState } from "react";

const UseLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setToken(data.token);
        localStorage.setItem("token", data.token); // Store the token in localStorage
        return data.token; // Return the token for further use
      } else {
        throw new Error(data.error || "Login failed");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token"); // Remove the token from localStorage on logout
  };

  return { login, logout, loading, error, success, token };
};

export default UseLogin;
