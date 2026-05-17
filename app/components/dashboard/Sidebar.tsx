"use client";

interface SidebarProps {
  history: any[];
  selectedId: string | null;
  onSelect: (item: any) => void;
  onNewChat: () => void;
}

export default function Sidebar({
  history,
  selectedId,
  onSelect,
  onNewChat,
}: SidebarProps) {

  return (
    <div className="w-[320px] border-r border-white/10 bg-[#0b1120] flex flex-col">

      {/* Header */}
      <div className="p-5 border-b border-white/10">

        <button
          onClick={onNewChat}
          className="w-full bg-orange-500 hover:bg-orange-600 rounded-2xl py-3 font-medium transition"
        >
          + New Workspace
        </button>

      </div>

      {/* History */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {history.map((item) => (

          <button
            key={item.id}
            onClick={() => onSelect(item)}
            className={`w-full text-left rounded-2xl p-4 border transition ${
              selectedId === item.id
                ? "border-orange-500 bg-orange-500/10"
                : "border-white/5 bg-white/5 hover:border-white/20"
            }`}
          >

            <p className="font-medium line-clamp-1">
              {item.workflow}
            </p>

            <p className="text-xs text-gray-400 mt-2 line-clamp-2">
              {item.input}
            </p>

            <p className="text-[11px] text-gray-500 mt-3">
              {new Date(
                item.created_at
              ).toLocaleString()}
            </p>

          </button>

        ))}

      </div>

    </div>
  );
}