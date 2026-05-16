"use client";

export default function InputPanel({ onGenerate }: any) {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 space-y-5">

      <h2 className="text-lg font-semibold">Email Input</h2>

      {/* Email Box */}
      <textarea
        placeholder="Paste your email or thread here..."
        className="w-full h-40 bg-black border border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4">

        <select className="bg-black border border-gray-700 rounded-lg p-2 text-sm">
          <option>Professional</option>
          <option>Friendly</option>
          <option>Strict</option>
        </select>

        <select className="bg-black border border-gray-700 rounded-lg p-2 text-sm">
          <option>Support</option>
          <option>Manager</option>
          <option>Sales</option>
        </select>

      </div>

      {/* Keywords */}
      <input
        placeholder="Keywords (ETA, Quotation...)"
        className="w-full bg-black border border-gray-700 rounded-lg p-2 text-sm"
      />

      {/* Attachments note */}
      <input
        placeholder="Attachment description"
        className="w-full bg-black border border-gray-700 rounded-lg p-2 text-sm"
      />

      {/* Button */}
      <button
        onClick={onGenerate}
        className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-medium transition shadow-[0_0_20px_rgba(249,115,22,0.4)]"
      >
        Generate Reply
      </button>

    </div>
  );
}