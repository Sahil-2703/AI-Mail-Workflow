"use client";

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">

      {/* 🔝 Header */}
      <div>
        <h1 className="text-2xl font-bold">Integrations</h1>
        <p className="text-sm text-gray-400">
          Manage and use your connected tools
        </p>
      </div>

      {/* 🔗 Connected Apps */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Outlook */}
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-5 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Outlook</h2>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
              Connected
            </span>
          </div>

          <p className="text-sm text-gray-400">
            Send and receive emails directly
          </p>

          <button className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-lg text-sm">
            Open Inbox
          </button>
        </div>

        {/* Gmail */}
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-5 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Gmail</h2>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
              Connected
            </span>
          </div>

          <p className="text-sm text-gray-400">
            Sync and manage Gmail emails
          </p>

          <button className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-lg text-sm">
            View Emails
          </button>
        </div>

        {/* CRM */}
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-5 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">CRM</h2>
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              Not Connected
            </span>
          </div>

          <p className="text-sm text-gray-400">
            Sync your internal CRM data
          </p>

          <button className="w-full bg-gray-700 py-2 rounded-lg text-sm">
            Connect
          </button>
        </div>

      </div>

      {/* ⚡ Activity / Logs */}
      <div className="bg-[#111827] border border-gray-800 rounded-xl p-6">

        <h2 className="font-semibold mb-4">Recent Activity</h2>

        <div className="space-y-3 text-sm text-gray-400">

          <div className="flex justify-between">
            <span>Email sent via Outlook</span>
            <span>2 mins ago</span>
          </div>

          <div className="flex justify-between">
            <span>Gmail synced successfully</span>
            <span>10 mins ago</span>
          </div>

          <div className="flex justify-between">
            <span>CRM connection failed</span>
            <span>1 hour ago</span>
          </div>

        </div>

      </div>

    </div>
  );
}