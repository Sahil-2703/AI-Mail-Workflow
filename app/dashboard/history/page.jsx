"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(data);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">

      {/* 📜 LEFT: List */}
      <div className="col-span-1 space-y-3">

        <h2 className="text-lg font-semibold mb-2">History</h2>

        {history.length === 0 && (
          <p className="text-gray-500 text-sm">
            No history yet
          </p>
        )}

        {history.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="p-3 bg-[#111827] border border-gray-800 rounded-lg cursor-pointer hover:border-orange-500"
          >
            <p className="text-sm truncate">
              {item.input}
            </p>
            <span className="text-xs text-gray-400">
              {item.createdAt}
            </span>
          </div>
        ))}
      </div>

      {/* 📄 RIGHT: Detail */}
      <div className="col-span-2 bg-[#111827] border border-gray-800 rounded-xl p-5">

        {selected ? (
          <div className="space-y-4">

            <div>
              <p className="text-sm text-gray-400">Input</p>
              <div className="bg-black p-3 rounded-lg text-sm">
                {selected.input}
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400">Output</p>
              <div className="bg-black p-3 rounded-lg text-sm whitespace-pre-wrap">
                {selected.output}
              </div>
            </div>

          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a history item
          </div>
        )}

      </div>

    </div>
  );
}