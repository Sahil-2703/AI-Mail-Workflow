"use client";

import { useState } from "react";

const mockTemplates = [
  {
    id: 1,
    title: "Escalation Mail",
    category: "Escalation",
    content: "Dear Sir,\n\nThis is to escalate the issue regarding...",
  },
  {
    id: 2,
    title: "Quotation Reply",
    category: "Quotation",
    content: "Please find the quotation attached...",
  },
];

export default function TemplatesPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-6">
      {/* 🔝 Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Templates</h1>

        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm">
          + New Template
        </button>
      </div>

      {/* 📂 Categories */}
      <div className="flex gap-3 text-sm">
        <button className="bg-gray-800 px-3 py-1 rounded-lg">All</button>
        <button className="bg-gray-800 px-3 py-1 rounded-lg">Escalation</button>
        <button className="bg-gray-800 px-3 py-1 rounded-lg">Quotation</button>
        <button className="bg-gray-800 px-3 py-1 rounded-lg">Follow-up</button>
      </div>

      {/* ⚡ Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* 📜 LEFT: Template List */}
        <div className="col-span-1 space-y-4">
          {mockTemplates.map((tpl) => (
            <div
              key={tpl.id}
              onClick={() => setSelected(tpl)}
              className="p-4 bg-[#111827] border border-gray-800 rounded-xl cursor-pointer hover:border-orange-500 transition"
            >
              <p className="font-semibold">{tpl.title}</p>

              <span className="text-xs text-gray-400">{tpl.category}</span>
            </div>
          ))}
        </div>

        {/* 📄 RIGHT: Template Detail */}
        <div className="col-span-2 bg-[#111827] border border-gray-800 rounded-xl p-6 flex flex-col">
          {selected ? (
            <>
              <h2 className="text-lg font-semibold mb-2">{selected.title}</h2>

              <p className="text-gray-400 text-sm mb-4">{selected.category}</p>

              <textarea
                defaultValue={selected.content}
                className="flex-1 bg-black border border-gray-700 rounded-lg p-4 text-sm mb-4"
              />

              {/* Actions */}
              <div className="flex gap-3">
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm">
                  Save
                </button>

                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm">
                  Delete
                </button>

                <button
                  onClick={() => {
                    localStorage.setItem(
                      "selectedTemplate",
                      JSON.stringify(selected),
                    );
                    window.location.href = "/dashboard";
                  }}
                  className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm"
                >
                  Use Template
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a template to view/edit
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
