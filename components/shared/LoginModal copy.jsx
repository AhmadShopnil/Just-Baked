"use client";

import { useContext, useState } from "react";
import { X, Facebook } from "lucide-react";
import { authAxios } from "@/helpers/axiosInstance";
import { UserContext } from "@/context/UserContext";

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { state, dispatch } = useContext(UserContext);

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await authAxios.post("/login", { email, password });
      const { access_token, user_data } = res.data;

      const user = {
        full_name: user_data?.full_name,
        email: user_data?.email,
        phone: user_data?.phone,
      };

      dispatch({ type: "LOGIN", payload: { user: user, token: access_token } });

      // Save token to localStorage (or cookie if needed)
      localStorage.setItem("token", access_token);
      localStorage.setItem("user", JSON.stringify(user));

      // Optional: show success toast, redirect, etc.
      onClose(); // Close modal
    } catch (err) {
      const message =
        err?.response?.data?.message || "Login failed. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-md w-full max-w-md p-6 relative animate-fade-in scale-95 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Log In</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <button className="flex items-center justify-center gap-2 bg-[#3b5998] text-white py-2 px-4 rounded">
            <Facebook size={20} />
            <span>FACEBOOK</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-blue-400 text-white py-2 px-4 rounded">
            {/* Google Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#fff"
              ></path>
              <path
                d="M17.8395 10.1018H12.2505V12.5678H15.4335C15.1705 13.9638 13.9565 14.8378 12.2505 14.8378C10.1935 14.8378 8.52949 13.1738 8.52949 11.1168C8.52949 9.05982 10.1935 7.39582 12.2505 7.39582C13.2255 7.39582 14.1115 7.77182 14.7675 8.38582L16.5235 6.62982C15.3995 5.55782 13.9205 4.91982 12.2505 4.91982C8.82749 4.91982 6.05249 7.69482 6.05249 11.1168C6.05249 14.5388 8.82749 17.3138 12.2505 17.3138C15.3285 17.3138 18.0005 15.0138 18.0005 11.1168C18.0005 10.7878 17.9395 10.4348 17.8395 10.1018Z"
                fill="#4285F4"
              ></path>
            </svg>
            <span>GOOGLE</span>
          </button>
        </div>

        {/* Phone Login */}
        <button className="w-full border border-primary-strong text-primary-strong py-2 rounded mb-4 text-sm">
          LOG IN WITH PHONE
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center mb-4">
          <span className="text-black-500 font-semibold text-sm">
            OR LOG IN WITH EMAIL
          </span>
        </div>

        {/* Email Login Form */}
        <form onSubmit={handleLogin} className="space-y-4 text-sm">
          <input
            type="email"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full text-sm bg-primary-strong text-white py-2 rounded"
            disabled={loading}
          >
            {loading ? "Logging in..." : "LOG IN"}
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 text-sm">
            Forgot Password?
          </a>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
