"use client";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* 🔝 Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-400">
          Choose the plan that fits your workflow. Upgrade anytime.
        </p>
      </div>

      {/* 💳 Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* 🟢 Basic */}
        <div className="border border-gray-800 rounded-2xl p-6 bg-[#0f172a]">
          <h2 className="text-xl font-semibold mb-2">Basic</h2>
          <p className="text-gray-400 mb-4">For individuals</p>

          <p className="text-3xl font-bold mb-6">₹0</p>

          <ul className="space-y-2 text-sm text-gray-300 mb-6">
            <li>✔ 20 AI responses/day</li>
            <li>✔ Basic templates</li>
            <li>✔ Email copy assist</li>
          </ul>

          <button className="w-full bg-gray-800 py-2 rounded-lg">
            Get Started
          </button>
        </div>

        {/* 🔥 PRO (highlighted) */}
        <div className="border-2 border-orange-500 rounded-2xl p-6 bg-[#0f172a] scale-105 shadow-lg shadow-orange-500/10">

          <p className="text-xs text-orange-400 mb-2">
            MOST POPULAR
          </p>

          <h2 className="text-xl font-semibold mb-2">Pro</h2>
          <p className="text-gray-400 mb-4">
            For professionals
          </p>

          <p className="text-3xl font-bold mb-6">
            ₹999<span className="text-sm text-gray-400">/mo</span>
          </p>

          <ul className="space-y-2 text-sm text-gray-300 mb-6">
            <li>✔ Unlimited AI responses</li>
            <li>✔ Smart templates</li>
            <li>✔ History tracking</li>
            <li>✔ Priority processing</li>
          </ul>

          <button className="w-full bg-orange-500 py-2 rounded-lg hover:bg-orange-600">
            Upgrade to Pro
          </button>
        </div>

        {/* 🟣 Enterprise */}
        <div className="border border-gray-800 rounded-2xl p-6 bg-[#0f172a]">
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <p className="text-gray-400 mb-4">
            For teams & companies
          </p>

          <p className="text-3xl font-bold mb-6">
            Custom
          </p>

          <ul className="space-y-2 text-sm text-gray-300 mb-6">
            <li>✔ CRM Integration</li>
            <li>✔ Team workflows</li>
            <li>✔ Dedicated support</li>
            <li>✔ Custom AI training</li>
          </ul>

          <button className="w-full bg-gray-800 py-2 rounded-lg">
            Contact Sales
          </button>
        </div>

      </div>

      {/* 📊 Feature Comparison */}
      <div className="max-w-4xl mx-auto mt-20">

        <h2 className="text-2xl font-semibold text-center mb-8">
          Compare Features
        </h2>

        <div className="border border-gray-800 rounded-xl overflow-hidden">

          <div className="grid grid-cols-4 bg-[#111827] p-4 text-sm font-medium">
            <div>Feature</div>
            <div className="text-center">Basic</div>
            <div className="text-center">Pro</div>
            <div className="text-center">Enterprise</div>
          </div>

          {[
            ["AI Responses", "20/day", "Unlimited", "Unlimited"],
            ["Templates", "Basic", "Advanced", "Custom"],
            ["History", "❌", "✔", "✔"],
            ["Integrations", "❌", "✔", "✔"],
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-4 p-4 border-t border-gray-800 text-sm"
            >
              <div>{row[0]}</div>
              <div className="text-center">{row[1]}</div>
              <div className="text-center">{row[2]}</div>
              <div className="text-center">{row[3]}</div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}