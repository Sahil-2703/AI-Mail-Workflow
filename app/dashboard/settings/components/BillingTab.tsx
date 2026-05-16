export default function BillingTab() {
  return (
    <div className="space-y-6 max-w-xl">

      <div>
        <h2 className="text-lg font-semibold">Billing</h2>
        <p className="text-sm text-gray-400">
          Manage your subscription and payments
        </p>
      </div>

      {/* Current Plan */}
      <div className="bg-black border border-gray-800 rounded-xl p-5">
        <p className="text-sm text-gray-400">Current Plan</p>

        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-xl font-bold text-orange-500">
              Pro Plan
            </p>
            <p className="text-sm text-gray-400">
              ₹999 / month
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm">
            Upgrade
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-black border border-gray-800 rounded-xl p-5">
        <p className="text-sm text-gray-400 mb-2">
          Payment Method
        </p>
        <p className="font-medium">Visa •••• 4242</p>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
        <p className="text-red-400 font-medium mb-2">
          Cancel Subscription
        </p>
        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm">
          Cancel Plan
        </button>
      </div>

    </div>
  );
}