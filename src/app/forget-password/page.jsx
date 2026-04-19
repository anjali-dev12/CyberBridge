"use client";
import Image from "next/image";
import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Yahan API call lagega (backend integration)
    console.log("Reset link sent to:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://www.acmewebtechnology.com/api/wp-content/uploads/2025/05/logo.svg"
            alt="Logo"
            width={170}
            height={40}
          />
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Reset Password
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email or username and we’ll send you a reset link.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* INPUT */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address or Username
            </label>
            <input
              type="text"
              placeholder="Enter email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Reset Password
          </button>

        </form>

      </div>
    </div>
  );
}