function IntegrationCard({
  title,
  desc,
  connected,
}: {
  title: string;
  desc: string;
  connected?: boolean;
}) {
  return (
    <div className="flex justify-between items-center bg-black border border-gray-800 rounded-xl p-5">
      
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>

      <button
        className={`px-4 py-2 rounded-lg text-sm ${
          connected
            ? "bg-gray-700 text-gray-300"
            : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        {connected ? "Connected" : "Connect"}
      </button>
    </div>
  );
}

export default function IntegrationsTab() {
  return (
    <div className="space-y-6 max-w-2xl">

      <div>
        <h2 className="text-lg font-semibold">Integrations</h2>
        <p className="text-sm text-gray-400">
          Connect your tools to automate workflows
        </p>
      </div>

      <IntegrationCard
        title="Microsoft Outlook"
        desc="Sync and send emails directly"
      />

      <IntegrationCard
        title="Gmail"
        desc="Connect your Gmail inbox"
        connected
      />

      <IntegrationCard
        title="CRM System"
        desc="Integrate your internal CRM"
      />

    </div>
  );
}