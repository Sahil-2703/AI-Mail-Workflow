import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">

      {/* 🔝 NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold text-orange-500">
          MailPilot AI
        </h1>

        <div className="flex gap-8 text-gray-300">
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">How it Works</a>
          <a href="/pricing" className="hover:text-white">Pricing</a>
          <a href="/login" className="hover:text-white">Login</a>
        </div>

        <Link href="/dashboard">
          <button className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 transition">
            Get Started
          </button>
        </Link>
      </nav>

      {/* 🔥 HERO SECTION */}
      <section className="flex flex-col items-center text-center mt-20 px-6">

        <p className="text-sm text-orange-400 mb-4">
          AI-Powered Email Intelligence
        </p>

        <h1 className="text-5xl font-bold leading-tight max-w-3xl">
          Smart Email Analysis. <br />
          <span className="text-orange-500">
            Instant Replies.
          </span>{" "}
          Zero Stress.
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl">
          MailPilot AI reads, understands, and replies to your email threads
          so you can focus on what matters.
        </p>

        {/* CTA */}
        <div className="flex gap-4 mt-8">
          <Link href="/dashboard">
            <button className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Get Started Free
            </button>
          </Link>

          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            View Demo
          </button>
        </div>
      </section>

      {/* ✉️ ICON VISUAL */}
      <div className="flex justify-center mt-16">
        <div className="w-32 h-32 bg-orange-500/20 rounded-2xl flex items-center justify-center shadow-[0_0_80px_#f97316]">
          <span className="text-7xl">✉️</span>
        </div>
      </div>

      {/* ⚡ FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mt-20">

        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
          <h3 className="text-orange-400 mb-2">Understand Email</h3>
          <p className="text-gray-400 text-sm">
            Extract key points instantly from long email threads.
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
          <h3 className="text-orange-400 mb-2">Generate Smart Replies</h3>
          <p className="text-gray-400 text-sm">
            AI crafts context-aware responses in seconds.
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
          <h3 className="text-orange-400 mb-2">Save Time</h3>
          <p className="text-gray-400 text-sm">
            Boost productivity by automating repetitive emails.
          </p>
        </div>

      </section>

      {/* 🧾 FOOTER */}
      <footer className="text-center text-gray-500 text-sm mt-20 pb-10">
        © 2026 MailPilot AI. All rights reserved.
      </footer>

    </div>
  );
}