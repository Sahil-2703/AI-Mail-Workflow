"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [thread, setThread] = useState("");
  const [loading, setLoading] = useState(false);

  // Extracted Data
  const [client, setClient] = useState("");
  const [issue, setIssue] = useState("");
  const [priority, setPriority] = useState("");
  const [action, setAction] = useState("");

  // Final Output
  const [output, setOutput] = useState("");

  // 🔥 Analyze Thread
  const handleAnalyze = async () => {
    if (!thread) return;

    setLoading(true);

    try {
      const res = await fetch("/api/analyze-thread", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ thread }),
      });

      const data = await res.json();

      setClient(data.client || "");
      setIssue(data.issue || "");
      setPriority(data.priority || "");
      setAction(data.action || "");

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  // 🔥 Generate Reply
  const handleGenerate = async () => {
    setLoading(true);

    const prompt = `
Client: ${client}

Issue: ${issue}

Priority: ${priority}

Pending Action: ${action}

Original Thread:
${thread}

Write a professional business email reply.
`;

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt }),
      });

      const data = await res.json();

      setOutput(data.output);

      // Save History
      const history = JSON.parse(
        localStorage.getItem("history") || "[]"
      );

      const newEntry = {
        id: Date.now(),
        thread,
        output: data.output,
        createdAt: new Date().toLocaleString(),
      };

      localStorage.setItem(
        "history",
        JSON.stringify([newEntry, ...history])
      );

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="grid grid-cols-2 gap-6">

      {/* 🧠 LEFT PANEL */}
      <div className="space-y-6">

        {/* Thread Input */}
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-4">
            Paste Email Thread
          </h2>

          <textarea
            value={thread}
            onChange={(e) => setThread(e.target.value)}
            placeholder="Paste Outlook/Gmail thread here..."
            className="w-full h-72 bg-black border border-gray-700 rounded-xl p-4 text-sm resize-none"
          />

          <button
            onClick={handleAnalyze}
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-medium"
          >
            {loading ? "Analyzing..." : "Analyze Thread"}
          </button>

        </div>

        {/* Extracted Insights */}
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">

          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold">
              Extracted Context
            </h2>

            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
              AI Powered
            </span>
          </div>

          <div className="space-y-4">

            {/* Client */}
            <div>
              <label className="text-sm text-gray-400">
                Client
              </label>

              <input
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="mt-1 w-full bg-black border border-gray-700 rounded-lg p-3"
              />
            </div>

            {/* Issue */}
            <div>
              <label className="text-sm text-gray-400">
                Issue
              </label>

              <input
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="mt-1 w-full bg-black border border-gray-700 rounded-lg p-3"
              />
            </div>

            {/* Priority */}
            <div>
              <label className="text-sm text-gray-400">
                Priority
              </label>

              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="mt-1 w-full bg-black border border-gray-700 rounded-lg p-3"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>

            {/* Action */}
            <div>
              <label className="text-sm text-gray-400">
                Pending Action
              </label>

              <input
                value={action}
                onChange={(e) => setAction(e.target.value)}
                className="mt-1 w-full bg-black border border-gray-700 rounded-lg p-3"
              />
            </div>

          </div>

          <button
            onClick={handleGenerate}
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-medium"
          >
            {loading ? "Generating..." : "Generate Reply"}
          </button>

        </div>

      </div>

      {/* 📤 RIGHT PANEL */}
      <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 flex flex-col">

        <div className="flex justify-between items-center mb-5">

          <h2 className="text-xl font-semibold">
            AI Generated Reply
          </h2>

          <button
            className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm"
            onClick={() => navigator.clipboard.writeText(output)}
          >
            Copy
          </button>

        </div>

        <div className="flex-1 bg-black border border-gray-700 rounded-xl p-5 whitespace-pre-wrap text-sm overflow-y-auto">
          {output || "AI-generated response will appear here"}
        </div>

      </div>

    </div>
  );
}