export default function PreferencesTab() {
  return (
    <div className="space-y-6 max-w-xl">

      <div>
        <h2 className="text-lg font-semibold">Preferences</h2>
        <p className="text-sm text-gray-400">
          Customize your experience
        </p>
      </div>

      <div className="bg-black border border-gray-800 rounded-xl p-5 space-y-5">

        {/* Tone */}
        <div>
          <label className="text-sm text-gray-400">
            Default Tone
          </label>
          <select className="mt-1 w-full bg-[#0f172a] border border-gray-700 rounded-lg p-3">
            <option>Professional</option>
            <option>Friendly</option>
            <option>Strict</option>
          </select>
        </div>

        {/* Toggle */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">AI Auto Suggestions</p>
            <p className="text-xs text-gray-400">
              Automatically suggest replies
            </p>
          </div>

          <input type="checkbox" className="accent-orange-500 w-5 h-5" />
        </div>

      </div>

    </div>
  );
}