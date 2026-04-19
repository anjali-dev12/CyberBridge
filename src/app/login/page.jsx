"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Login Data:", { email, password });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-200">
        
        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img
            src="https://www.acmewebtechnology.com/api/wp-content/uploads/2025/05/logo.svg"
            alt="Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* HEADING */}
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Welcome back 👋
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-6 text-sm">
          Login to continue your journey
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">
          
          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-600">
              Email or Username
            </label>

            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />

              <input
                type="text"
                placeholder="Enter email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-600">
              Password
            </label>

            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter password"
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* SHOW/HIDE */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* REMEMBER + FORGOT */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>

            <Link
              href="/forget-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition flex items-center justify-center disabled:opacity-70 cursor-pointer"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* REGISTER */}
        <Link href="/registration">
          <button className="w-full border border-gray-300 hover:border-gray-400 py-3 rounded-lg transition text-gray-700 font-medium cursor-pointer">
            Create an account
          </button>
        </Link>

      </div>
    </div>
  );
}