"use client";

import { useEffect, useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";

import { supabase } from "@/lib/supabase";
import { streamText } from "@/lib/streamtext";

const workflowMap: Record<string, string[]> = {
  Student: ["Study Notes", "Summary", "Assignment Help"],

  Employee: ["Email Reply", "Meeting Summary", "Escalation Draft"],

  Creator: ["Script Generator", "Caption Writer", "Content Ideas"],

  Developer: ["Code Explanation", "Bug Fixing", "SQL Generator"],

  Business: ["Proposal Generator", "Client Reply", "Customer Support"],
};

export default function DashboardPage() {
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [role, setRole] = useState("Student");

  const [workflow, setWorkflow] = useState("");

  const [workflows, setWorkflows] = useState<string[]>([]);

  const [input, setInput] = useState("");

  const [output, setOutput] = useState("");

  const [loading, setLoading] = useState(false);

  const [history, setHistory] = useState<any[]>([]);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  // 🔥 Load User + History
  useEffect(() => {
    const loadData = async () => {
      // Session
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        window.location.href = "/login";
        return;
      }

      const user = session.user;

      // Profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (!profile?.onboarding_complete) {
        window.location.href = "/onboarding";
        return;
      }

      setRole(profile.role);

      const roleWorkflows = workflowMap[profile.role] || workflowMap["Student"];

      setWorkflows(roleWorkflows);

      setWorkflow(roleWorkflows[0]);

      // 🔥 History
      const { data: historyData } = await supabase
        .from("ai_history")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", {
          ascending: false,
        });

      setHistory(historyData || []);
      setCheckingAuth(false);
    };

    loadData();
  }, []);

  // 🔥 Generate AI
  const handleGenerate = async () => {
    if (!input) return;

    setLoading(true);

    setOutput("");

    await streamText(data.output, (streamedText) => {
      setOutput(streamedText);
    });

    const prompt = `
Role: ${role}

Workflow: ${workflow}

User Input:
${input}
`;

try {

  // API call
  const res = await fetch(
    "/api/generate",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        input: prompt,
      }),
    }
  );

  // Response JSON
  const data = await res.json();

  // Clear old output
  setOutput("");

  // 🔥 Streaming Effect
  await streamText(
    data.output,
    (streamedText) => {
      setOutput(streamedText);
    }
  );

  // Session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;

  if (!user) return;

  // Save history
  const { data: savedHistory } =
    await supabase
      .from("ai_history")
      .insert({
        user_id: user.id,
        role,
        workflow,
        input,
        output: data.output,
      })
      .select()
      .single();

  // Update sidebar
  if (savedHistory) {

    setHistory((prev) => [
      savedHistory,
      ...prev,
    ]);

    setSelectedId(savedHistory.id);
  }

} catch (err) {

  console.error(err);

  setOutput(
    "Something went wrong."
  );
}
  };

  // 🔥 Load history item
  const handleSelectHistory = (item: any) => {
    setSelectedId(item.id);

    setWorkflow(item.workflow);

    setInput(item.input);

    setOutput(item.output);
  };

  // 🔥 New Workspace
  const handleNewChat = () => {
    setSelectedId(null);

    setInput("");

    setOutput("");

    setWorkflow(workflows[0]);
  };

  if (checkingAuth) {
    return (
      <div className="h-screen bg-[#050816] flex items-center justify-center text-white">
        Loading Workspace...
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#050816] text-white flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        history={history}
        selectedId={selectedId}
        onSelect={handleSelectHistory}
        onNewChat={handleNewChat}
      />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-white/10 px-8 h-20 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">AI Workspace</h1>

            <p className="text-sm text-gray-400">{role} Mode</p>
          </div>

          {/* Workflow */}
          <select
            value={workflow}
            onChange={(e) => setWorkflow(e.target.value)}
            className="bg-[#111827] border border-white/10 rounded-xl px-4 py-2"
          >
            {workflows.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Workspace */}
        <div className="flex-1 grid grid-cols-2 gap-6 p-6 overflow-hidden">
          {/* Input */}
          <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-5">Input</h2>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste anything..."
              className="flex-1 bg-black border border-white/10 rounded-2xl p-5 resize-none outline-none"
            />

            <button
              onClick={handleGenerate}
              className="mt-5 bg-orange-500 hover:bg-orange-600 py-3 rounded-2xl font-medium"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>

          {/* Output */}
          <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold">AI Output</h2>

              <button
                onClick={() => navigator.clipboard.writeText(output)}
                className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-sm"
              >
                Copy
              </button>
            </div>

            <div className="flex-1 bg-black border border-white/10 rounded-2xl p-5 overflow-y-auto whitespace-pre-wrap">
              {output || "AI output will appear here"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
