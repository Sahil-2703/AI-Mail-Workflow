"use client";

import { supabase } from "@/lib/supabase";

const roles = [
  {
    title: "Student",
    description: "Study notes, summaries, assignments",
  },

  {
    title: "Employee",
    description: "Emails, meetings, escalations",
  },

  {
    title: "Creator",
    description: "Scripts, captions, content ideas",
  },

  {
    title: "Developer",
    description: "Code explanation, debugging, SQL",
  },

  {
    title: "Business",
    description: "Clients, proposals, support",
  },
];

export default function OnboardingPage() {

  const handleSelectRole = async (
  role: string
) => {

  try {

    // Get session
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const user = session?.user;

    if (!user) {
      window.location.href = "/login";
      return;
    }

    // Update profile
    const { error } = await supabase
      .from("profiles")
      .update({
        role,
        onboarding_complete: true,
      })
      .eq("id", user.id);

    if (error) {
      console.error(error);
      alert("Failed to save role.");
      return;
    }

    // 🔥 IMPORTANT
    // wait a little for DB sync
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    // Redirect
    window.location.href = "/dashboard";

  } catch (err) {

    console.error(err);

    alert("Something went wrong.");
  }
};

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-5xl">

        {/* Header */}
        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold mb-4">
            Welcome to AI Workspace
          </h1>

          <p className="text-gray-400 text-lg">
            Personalize your workspace experience
          </p>

        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {roles.map((role) => (

            <button
              key={role.title}
              onClick={() => handleSelectRole(role.title)}
              className="bg-[#111827] border border-gray-800 hover:border-orange-500 rounded-2xl p-8 text-left transition duration-300 hover:scale-[1.02]"
            >

              <h2 className="text-2xl font-semibold mb-3">
                {role.title}
              </h2>

              <p className="text-gray-400 text-sm leading-6">
                {role.description}
              </p>

            </button>

          ))}

        </div>

      </div>

    </div>
  );
}