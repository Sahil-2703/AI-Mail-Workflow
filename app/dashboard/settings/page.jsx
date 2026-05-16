"use client";

import { useState } from "react";
import ProfileTab from "./components/ProfileTab";
import IntegrationsTab from "./components/IntegrationsTab";
import BillingTab from "./components/BillingTab";
import PreferencesTab from "./components/PreferencesTab";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-800 pb-2 text-sm">
        {["profile", "integrations", "billing", "preferences"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize px-3 py-1 rounded-lg ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "integrations" && <IntegrationsTab />}
        {activeTab === "billing" && <BillingTab />}
        {activeTab === "preferences" && <PreferencesTab />}
      </div>

    </div>
  );
}