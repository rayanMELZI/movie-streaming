// src/pages/LoginSignUpPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginSignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock authentication, redirect to home
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login / Sign Up
        </h2>
        <input
          className="w-full p-2 mb-4 border rounded"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full p-2 mb-4 border rounded"
          type="password"
          placeholder="Password"
        />
        <button
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginSignUpPage;
