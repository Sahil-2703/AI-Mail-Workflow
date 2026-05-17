"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSignup = async () => {

    try {

      setLoading(true);

      // 🔥 Create Auth User
      const {
        data,
        error,
      } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      // 🔥 Get user
      const user = data.user;

      if (!user) {
        alert("User creation failed.");
        setLoading(false);
        return;
      }

      // 🔥 Insert profile
      const { error: profileError } =
        await supabase
          .from("profiles")
          .insert({
            id: user.id,
            email: user.email,
          });

      if (profileError) {
        console.error(profileError);
        alert(profileError.message);
        setLoading(false);
        return;
      }

      // 🔥 Redirect
      window.location.href =
        "/onboarding";

    } catch (err) {

      console.error(err);

      alert("Something went wrong.");

    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="w-full max-w-md bg-[#111827] border border-gray-800 rounded-3xl p-8">

        <h1 className="text-3xl font-bold mb-8">
          Create Account
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
            onClick={handleSignup}
            className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-medium"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

        </div>

      </div>

    </div>
  );
}