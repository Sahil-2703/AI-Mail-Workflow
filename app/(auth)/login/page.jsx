"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // 🔥 Check existing session
  useEffect(() => {

    const checkUser = async () => {

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        window.location.href = "/dashboard";
      }
    };

    checkUser();

  }, []);

  // 🔥 Login
  const handleLogin = async () => {

    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {

      alert(error.message);

      setLoading(false);
      return;
    }

    // Redirect after successful login
    window.location.href = "/dashboard";

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="w-full max-w-md bg-[#111827] border border-gray-800 rounded-3xl p-8">

        <h1 className="text-3xl font-bold mb-8">
          Welcome Back
        </h1>

        <div className="space-y-5">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-black border border-gray-700 rounded-xl p-4 outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-black border border-gray-700 rounded-xl p-4 outline-none"
          />

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-medium"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </div>

      </div>

    </div>
  );
}