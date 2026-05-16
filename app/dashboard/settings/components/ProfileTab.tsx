export default function ProfileTab() {
  return (
    <div className="space-y-6 max-w-xl">

      <div>
        <h2 className="text-lg font-semibold">Profile</h2>
        <p className="text-sm text-gray-400">
          Manage your personal information
        </p>
      </div>

      <div className="bg-black border border-gray-800 rounded-xl p-5 space-y-4">

        <div>
          <label className="text-sm text-gray-400">Full Name</label>
          <input
            className="mt-1 w-full bg-[#0f172a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Email</label>
          <input
            className="mt-1 w-full bg-[#0f172a] border border-gray-700 rounded-lg p-3"
            placeholder="Enter your email"
          />
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm">
          Save Changes
        </button>

      </div>
    </div>
  );
}