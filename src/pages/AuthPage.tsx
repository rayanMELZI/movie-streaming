// // src/pages/AuthPage.tsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthPage: React.FC = () => {
//   const [isLoginMode, setIsLoginMode] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const apiUrl = "https://api.example.com"; // Replace with actual API URL

//// const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

//   const handleAuth = async () => {
//     const endpoint = isLoginMode ? "/login" : "/signup";
//     const body = {
//       email,
//       password,
//     };

//     try {
//       const response = await fetch(`${apiUrl}${endpoint}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Assuming the API returns a token upon successful login
//         localStorage.setItem("token", data.token);
//         navigate("/"); // Redirect to home after successful login
//       } else {
//         setError(data.message || "An error occurred");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("Something went wrong, please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           {isLoginMode ? "Login" : "Sign Up"}
//         </h2>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full mt-1 p-2 border rounded"
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-700">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full mt-1 p-2 border rounded"
//             placeholder="Enter your password"
//           />
//         </div>

//         <button
//           onClick={handleAuth}
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           {isLoginMode ? "Login" : "Sign Up"}
//         </button>

//         <p className="mt-4 text-center">
//           {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
//           <span
//             className="text-blue-500 cursor-pointer hover:underline"
//             onClick={() => setIsLoginMode(!isLoginMode)}
//           >
//             {isLoginMode ? "Sign Up" : "Login"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;

// src/pages/AuthPage.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthPage: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Authentication</h2>

        {isAuthenticated ? (
          <div className="text-center">
            <h3 className="text-lg">Welcome, {user?.name}</h3>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={loginWithRedirect}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Login / Sign Up
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
