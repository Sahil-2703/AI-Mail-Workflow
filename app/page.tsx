"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  BrainCircuit,
  Zap,
  Shield,
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* 🔥 BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">

        <div className="absolute top-[-150px] left-[-120px] w-[400px] h-[400px] bg-orange-500/20 blur-[140px]" />

        <div className="absolute top-[200px] right-[-120px] w-[350px] h-[350px] bg-purple-500/20 blur-[140px]" />

        <div className="absolute bottom-[-120px] left-[40%] w-[350px] h-[350px] bg-cyan-500/10 blur-[140px]" />

      </div>

      {/* 🔥 NAVBAR */}
      <header className="relative z-50 border-b border-white/5 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-2xl bg-orange-500 flex items-center justify-center font-bold text-lg">
              A
            </div>

            <div>
              <h1 className="font-bold text-xl">
                AI Workspace
              </h1>

              <p className="text-xs text-gray-400">
                Intelligent Operating System
              </p>
            </div>

          </div>

          {/* Nav */}
          <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">

            <a
              href="#features"
              className="hover:text-white transition"
            >
              Features
            </a>

            <a
              href="#workspace"
              className="hover:text-white transition"
            >
              Workspace
            </a>

            <a
              href="#pricing"
              className="hover:text-white transition"
            >
              Pricing
            </a>

          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">

            <Link
              href="/login"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-xl text-sm font-medium transition"
            >
              Get Started
            </Link>

          </div>

        </div>

      </header>

      {/* 🔥 HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">

        <div className="text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 mb-8 backdrop-blur-xl">

            <Sparkles size={16} className="text-orange-400" />

            AI-powered productivity operating system

          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">

            The AI Workspace
            <br />

            for the
            <span className="text-orange-500">
              {" "}Future
            </span>

          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-xl leading-9 mt-8 max-w-3xl mx-auto">

            Transform emails, documents, notes, code,
            meetings, ideas, and workflows into
            intelligent actions — powered by AI.

          </p>

          {/* CTA */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">

            <Link
              href="/login"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-lg font-medium transition flex items-center gap-2"
            >

              Start Building

              <ArrowRight size={20} />

            </Link>

            <button className="border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl text-lg transition">
              Live Demo
            </button>

          </div>

        </div>

        {/* 🔥 DASHBOARD PREVIEW */}
        <div
          id="workspace"
          className="relative mt-24"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-orange-500/10 blur-[100px]" />

          {/* Card */}
          <div className="relative bg-[#0f172a]/80 border border-white/10 backdrop-blur-2xl rounded-[32px] overflow-hidden shadow-2xl">

            {/* Top Bar */}
            <div className="border-b border-white/5 px-6 py-4 flex items-center gap-3">

              <div className="w-3 h-3 rounded-full bg-red-500" />

              <div className="w-3 h-3 rounded-full bg-yellow-500" />

              <div className="w-3 h-3 rounded-full bg-green-500" />

            </div>

            {/* Dashboard */}
            <div className="grid grid-cols-2 gap-0 min-h-[650px]">

              {/* LEFT */}
              <div className="border-r border-white/5 p-8">

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-2xl font-semibold">
                    Universal Workspace
                  </h2>

                  <div className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-xl text-sm">
                    Creator Mode
                  </div>

                </div>

                {/* Input */}
                <div className="bg-black/40 border border-white/10 rounded-3xl p-6 min-h-[500px]">

                  <p className="text-gray-500 text-sm mb-5">
                    Paste anything here...
                  </p>

                  <div className="space-y-4">

                    <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                      Generate viral YouTube video ideas
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                      Create short-form script from podcast
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                      Turn notes into Twitter thread
                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div className="p-8">

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-2xl font-semibold">
                    AI Output
                  </h2>

                  <div className="text-sm text-gray-400">
                    Generated in 3.2s
                  </div>

                </div>

                <div className="bg-black/40 border border-white/10 rounded-3xl p-8 min-h-[500px]">

                  <div className="space-y-5">

                    <div className="h-4 w-40 bg-white/10 rounded-full" />

                    <div className="h-4 w-full bg-white/5 rounded-full" />

                    <div className="h-4 w-[90%] bg-white/5 rounded-full" />

                    <div className="h-4 w-[80%] bg-white/5 rounded-full" />

                    <div className="h-4 w-[60%] bg-white/5 rounded-full" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 🔥 FEATURES */}
      <section
        id="features"
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
      >

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold mb-6">
            One AI. Infinite Workflows.
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Designed for students, creators, developers,
            employees, and businesses.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-orange-500/30 transition">

            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6">

              <BrainCircuit
                className="text-orange-400"
                size={28}
              />

            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Adaptive Intelligence
            </h3>

            <p className="text-gray-400 leading-8">
              AI dynamically adapts to your workflow,
              role, and intent automatically.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-orange-500/30 transition">

            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6">

              <Zap
                className="text-orange-400"
                size={28}
              />

            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Instant Productivity
            </h3>

            <p className="text-gray-400 leading-8">
              Summaries, emails, scripts, notes,
              analysis, and outputs generated instantly.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-orange-500/30 transition">

            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6">

              <Shield
                className="text-orange-400"
                size={28}
              />

            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Secure Workspace
            </h3>

            <p className="text-gray-400 leading-8">
              Cloud-powered architecture with secure
              authentication and scalable infrastructure.
            </p>

          </div>

        </div>

      </section>

      {/* 🔥 CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">

        <div className="relative overflow-hidden bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/20 rounded-[40px] p-16 text-center">

          <div className="absolute inset-0 bg-orange-500/5 blur-[120px]" />

          <div className="relative z-10">

            <h2 className="text-5xl font-bold leading-tight">
              Build your future
              <br />
              with AI Workspace
            </h2>

            <p className="text-gray-300 text-xl mt-6 max-w-2xl mx-auto leading-9">
              Stop switching between tools. Let AI
              transform your entire workflow in one place.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center gap-3 mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-lg font-medium transition"
            >

              Start Free

              <ArrowRight size={20} />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}