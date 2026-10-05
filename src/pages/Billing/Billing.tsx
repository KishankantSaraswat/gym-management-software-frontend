import { useState } from 'react';
import {
  CreditCard,
  Download,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  DollarSign,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

interface Invoice {
  id: string;
  member: string;
  email: string;
  plan: string;
  amount: string;
  date: string;
  status: 'Paid' | 'Pending' | 'Overdue';
}

const INVOICES: Invoice[] = [
  { id: 'INV-2026-001', member: 'Alex Morgan', email: 'alex.m@example.com', plan: 'VIP Elite Annual', amount: '$1,200.00', date: 'Oct 04, 2026', status: 'Paid' },
  { id: 'INV-2026-002', member: 'Sarah Jenkins', email: 's.jenkins@example.com', plan: 'Pro Athlete Monthly', amount: '$120.00', date: 'Oct 03, 2026', status: 'Paid' },
  { id: 'INV-2026-003', member: 'Michael Chang', email: 'm.chang@example.com', plan: 'Basic Fitness', amount: '$65.00', date: 'Oct 02, 2026', status: 'Pending' },
  { id: 'INV-2026-004', member: 'Emma Watson', email: 'emma.w@example.com', plan: 'VIP Elite Annual', amount: '$1,200.00', date: 'Oct 01, 2026', status: 'Paid' },
  { id: 'INV-2026-005', member: 'David Miller', email: 'david.m@example.com', plan: 'Pro Athlete Monthly', amount: '$120.00', date: 'Sep 29, 2026', status: 'Overdue' },
  { id: 'INV-2026-006', member: 'Jessica Taylor', email: 'jess.t@example.com', plan: 'Basic Fitness', amount: '$65.00', date: 'Sep 28, 2026', status: 'Paid' },
];

const PLANS = [
  { name: 'Basic Fitness', price: '$65', period: '/month', activeCount: '840 members', features: ['Gym Floor Access', 'Locker & Showers', 'Standard Hours'], badge: 'Standard' },
  { name: 'Pro Athlete', price: '$120', period: '/month', activeCount: '1,120 members', features: ['All Basic Features', 'Unlimited Classes', 'Sauna & Pool', '2 Guest Passes/mo'], badge: 'Most Popular', highlight: true },
  { name: 'VIP Elite', price: '$1,200', period: '/year', activeCount: '445 members', features: ['24/7 All-Branch Access', 'Personal Trainer (4x)', 'Recovery Lounge', 'Nutrition Coach'], badge: 'Premium' },
];

export default function Billing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const filteredInvoices = INVOICES.filter((inv) => {
    const matchesSearch =
      inv.member.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.plan.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || inv.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-full space-y-3 pb-3">
      {/* Header Banner */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-[17px] font-bold text-slate-800 tracking-tight">Billing & Subscriptions</h1>
          <p className="text-[11.5px] text-slate-500 mt-0.5">Manage subscription tiers, payment gateways, and member invoice history.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11.5px] font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs">
            <Download size={13} className="text-slate-500" />
            <span>Export CSV</span>
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-theme-gradient px-3.5 py-1.5 text-[11.5px] font-semibold text-white shadow-theme-glow hover:opacity-95 transition-all">
            <Plus size={13} />
            <span>New Invoice</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-emerald-100 bg-[#edf9f3] p-3 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-600">Total Billed (MTD)</p>
            <p className="text-[20px] font-black text-emerald-600 tracking-tight mt-0.5">$28,450</p>
            <p className="text-[10px] font-medium text-emerald-700 flex items-center gap-0.5 mt-0.5">
              <TrendingUp size={11} /> +12.4% from last month
            </p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs">
            <DollarSign size={15} />
          </div>
        </div>

        <div className="rounded-xl border border-purple-100 bg-[#f4f2fe] p-3 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-600">Active Subscriptions</p>
            <p className="text-[20px] font-black text-purple-600 tracking-tight mt-0.5">2,405</p>
            <p className="text-[10px] font-medium text-purple-700 flex items-center gap-0.5 mt-0.5">
              <ShieldCheck size={11} /> 98.2% collection rate
            </p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white shadow-xs">
            <CreditCard size={15} />
          </div>
        </div>

        <div className="rounded-xl border border-amber-100 bg-[#fef6ed] p-3 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-600">Pending Invoices</p>
            <p className="text-[20px] font-black text-amber-600 tracking-tight mt-0.5">$1,820</p>
            <p className="text-[10px] font-medium text-amber-700 mt-0.5">3 invoices awaiting clearance</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white shadow-xs">
            <Clock size={15} />
          </div>
        </div>

        <div className="rounded-xl border border-rose-100 bg-[#fef2f4] p-3 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-600">Overdue Invoices</p>
            <p className="text-[20px] font-black text-rose-600 tracking-tight mt-0.5">$120</p>
            <p className="text-[10px] font-medium text-rose-700 mt-0.5">1 member action required</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white shadow-xs">
            <AlertCircle size={15} />
          </div>
        </div>
      </div>

      {/* Subscription Plans Row */}
      <div>
        <h2 className="text-[13px] font-bold text-slate-800 mb-2">Membership Plans</h2>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-3.5 bg-white shadow-2xs transition-all relative overflow-hidden ${
                plan.highlight ? 'border-theme ring-1 ring-theme/30' : 'border-slate-200/90'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-theme-gradient text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-bl-lg shadow-xs">
                  {plan.badge}
                </div>
              )}
              <div className="flex items-baseline gap-1">
                <span className="text-[22px] font-black text-slate-900">{plan.price}</span>
                <span className="text-[11px] font-medium text-slate-500">{plan.period}</span>
              </div>
              <p className="text-[13px] font-bold text-slate-800 mt-0.5">{plan.name}</p>
              <p className="text-[10.5px] font-semibold text-theme mt-0.5">{plan.activeCount}</p>

              <div className="my-2.5 border-t border-slate-100" />

              <ul className="space-y-1 text-[11px] text-slate-600">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Invoices Table Card */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-3">
          <div>
            <h3 className="text-[13px] font-bold text-slate-800">Recent Invoices</h3>
            <p className="text-[10.5px] text-slate-500">Live payment transactions across all branches.</p>
          </div>

          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 text-slate-400" size={12} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search member or invoice..."
                className="w-48 sm:w-56 rounded-lg border border-slate-200 bg-slate-50/50 py-1 pl-7 pr-2.5 text-[11.5px] text-slate-700 outline-none focus:border-theme focus:bg-white focus:ring-1 focus:ring-theme"
              />
            </div>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white py-1 px-2 text-[11.5px] font-medium text-slate-700 outline-none focus:border-theme"
            >
              <option value="All">All Statuses</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11.5px]">
            <thead className="bg-slate-50/80 text-[10.5px] font-bold uppercase tracking-wider text-slate-500 border-y border-slate-200/80">
              <tr>
                <th className="py-2 px-3">Invoice</th>
                <th className="py-2 px-3">Member</th>
                <th className="py-2 px-3">Plan</th>
                <th className="py-2 px-3">Amount</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2 px-3 font-semibold text-slate-800 flex items-center gap-1.5">
                    <FileText size={13} className="text-slate-400" />
                    <span>{inv.id}</span>
                  </td>
                  <td className="py-2 px-3">
                    <p className="font-semibold text-slate-800">{inv.member}</p>
                    <p className="text-[10px] text-slate-400">{inv.email}</p>
                  </td>
                  <td className="py-2 px-3 text-slate-600">{inv.plan}</td>
                  <td className="py-2 px-3 font-bold text-slate-800">{inv.amount}</td>
                  <td className="py-2 px-3 text-slate-500">{inv.date}</td>
                  <td className="py-2 px-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        inv.status === 'Paid'
                          ? 'bg-emerald-100 text-emerald-700'
                          : inv.status === 'Pending'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-rose-100 text-rose-700'
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-2 px-3 text-right">
                    <button
                      title="Download PDF"
                      className="p-1 rounded-md text-slate-400 hover:text-theme hover:bg-theme-light transition-colors"
                    >
                      <Download size={13} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
