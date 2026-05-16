"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center px-4 text-white">

      {/* 🔲 Card */}
      <div className="w-full max-w-md bg-[#111827] border border-gray-800 rounded-2xl p-8 shadow-[0_0_60px_rgba(249,115,22,0.15)]">

        {/* 🔥 Logo */}
        <h1 className="text-2xl font-bold text-orange-500 text-center mb-2">
          MailPilot AI
        </h1>

        {/* 🧠 Heading */}
        <h2 className="text-xl font-semibold text-center mb-1">
          Create Your Account
        </h2>
        <p className="text-gray-400 text-center text-sm mb-6">
          Start your journey with smart email automation
        </p>

        {/* 👤 Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        {/* 📧 Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        {/* 🔒 Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        {/* 🔒 Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-6 px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        {/* 🚀 Create Account */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-lg font-medium mb-6">
          Create Account
        </button>

        {/* 🔗 Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-gray-500 text-sm">or sign up with</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* 🌐 Social Signup */}
        <div className="flex gap-4 mb-6">
          <button className="flex-1 bg-black border border-gray-700 py-2 rounded-lg hover:bg-gray-800 transition">
            Google
          </button>

          <button className="flex-1 bg-black border border-gray-700 py-2 rounded-lg hover:bg-gray-800 transition">
            Microsoft
          </button>
        </div>

        {/* 🔄 Login redirect */}
        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-400 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}