import { useState } from 'react';
import { Save, Building, Bell, Shield, CreditCard, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function Settings() {
  const [gymName, setGymName] = useState('GymHood Fitness');
  const [supportEmail, setSupportEmail] = useState('contact@gymhood.com');
  const [phone, setPhone] = useState('+1 (555) 234-5678');
  const [currency, setCurrency] = useState('USD ($)');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [autoRenew, setAutoRenew] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="w-full space-y-3 pb-3">
      {/* Header Banner */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-[17px] font-bold text-slate-800 tracking-tight">Platform Settings</h1>
          <p className="text-[11.5px] text-slate-500 mt-0.5">Manage organization profile, business hours, and payment configurations.</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-1.5 rounded-lg bg-theme-gradient px-3.5 py-1.5 text-[11.5px] font-semibold text-white shadow-theme-glow hover:opacity-95 transition-all"
        >
          <Save size={13} />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {/* Organization Profile */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
            <Building size={16} className="text-theme" />
            <h2 className="text-[13px] font-bold text-slate-800">Organization Profile</h2>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Gym Name</label>
            <input
              type="text"
              value={gymName}
              onChange={(e) => setGymName(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50/50 py-1.5 px-3 text-[12px] text-slate-800 outline-none focus:border-theme focus:bg-white focus:ring-1 focus:ring-theme"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Support Email</label>
            <input
              type="email"
              value={supportEmail}
              onChange={(e) => setSupportEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50/50 py-1.5 px-3 text-[12px] text-slate-800 outline-none focus:border-theme focus:bg-white focus:ring-1 focus:ring-theme"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50/50 py-1.5 px-3 text-[12px] text-slate-800 outline-none focus:border-theme focus:bg-white focus:ring-1 focus:ring-theme"
            />
          </div>
        </div>

        {/* Preferences & Billing Defaults */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
            <CreditCard size={16} className="text-theme" />
            <h2 className="text-[13px] font-bold text-slate-800">Billing & Regional Defaults</h2>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Default Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white py-1.5 px-2.5 text-[12px] text-slate-800 outline-none focus:border-theme"
            >
              <option value="USD ($)">USD ($) - US Dollar</option>
              <option value="EUR (€)">EUR (€) - Euro</option>
              <option value="INR (₹)">INR (₹) - Indian Rupee</option>
              <option value="GBP (£)">GBP (£) - British Pound</option>
            </select>
          </div>

          <div className="pt-2 space-y-2.5 border-t border-slate-100">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-[12px] font-semibold text-slate-800">Automated Subscription Renewals</p>
                <p className="text-[10px] text-slate-400">Charge members automatically when their plan cycle ends.</p>
              </div>
              <input
                type="checkbox"
                checked={autoRenew}
                onChange={(e) => setAutoRenew(e.target.checked)}
                className="h-4 w-4 rounded text-theme focus:ring-theme accent-indigo-600"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-[12px] font-semibold text-slate-800">Email Notification Reminders</p>
                <p className="text-[10px] text-slate-400">Send reminder emails 7 days prior to membership expiry.</p>
              </div>
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={(e) => setEmailAlerts(e.target.checked)}
                className="h-4 w-4 rounded text-theme focus:ring-theme accent-indigo-600"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
