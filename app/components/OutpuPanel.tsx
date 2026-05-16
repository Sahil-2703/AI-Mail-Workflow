"use client";

export default function OutputPanel({ result }: any) {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 flex flex-col">

      <h2 className="text-lg font-semibold mb-4">AI Output</h2>

      {/* Output Box */}
      <div className="flex-1 bg-black border border-gray-700 rounded-lg p-4 text-sm whitespace-pre-wrap">
        {result || "Your AI-generated reply will appear here..."}
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-4">
        <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 rounded-lg text-sm">
          Copy
        </button>

        <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 rounded-lg text-sm">
          Regenerate
        </button>

        <button className="flex-1 bg-orange-500 hover:bg-orange-600 py-2 rounded-lg text-sm">
          Send
        </button>
      </div>
    </div>
  );
}