import { useState } from 'react';
import {
  Users,
  UserPlus,
  Search,
  Filter,
  MoreVertical,
  Activity,
  Award,
  Clock,
  Phone,
  Mail,
} from 'lucide-react';

interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan: string;
  branch: string;
  joined: string;
  status: 'Active' | 'Expired' | 'Trial';
  avatarInitials: string;
}

const MEMBERS: Member[] = [
  { id: 'MEM-101', name: 'Alexander Stone', email: 'a.stone@gmail.com', phone: '+1 555-0192', plan: 'VIP Elite', branch: 'Main Floor Hub', joined: 'Jan 15, 2026', status: 'Active', avatarInitials: 'AS' },
  { id: 'MEM-102', name: 'Sophia Rossi', email: 'sophia.r@outlook.com', phone: '+1 555-0143', plan: 'Pro Athlete', branch: 'North Wing', joined: 'Feb 02, 2026', status: 'Active', avatarInitials: 'SR' },
  { id: 'MEM-103', name: 'Liam Davies', email: 'liam.d@gmail.com', phone: '+1 555-0188', plan: 'Basic Fitness', branch: 'Main Floor Hub', joined: 'Aug 10, 2026', status: 'Trial', avatarInitials: 'LD' },
  { id: 'MEM-104', name: 'Chloe Dubois', email: 'chloe.d@yahoo.com', phone: '+1 555-0129', plan: 'Pro Athlete', branch: 'Downtown VIP Club', joined: 'Mar 12, 2026', status: 'Active', avatarInitials: 'CD' },
  { id: 'MEM-105', name: 'Marcus Sterling', email: 'm.sterling@corp.com', phone: '+1 555-0190', plan: 'Basic Fitness', branch: 'Westside Center', joined: 'Sep 01, 2025', status: 'Expired', avatarInitials: 'MS' },
  { id: 'MEM-106', name: 'Aria Montgomery', email: 'aria.m@gmail.com', phone: '+1 555-0176', plan: 'VIP Elite', branch: 'Downtown VIP Club', joined: 'Apr 20, 2026', status: 'Active', avatarInitials: 'AM' },
];

export default function Members() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('All');

  const filteredMembers = MEMBERS.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.plan.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBranch = selectedBranch === 'All' || m.branch === selectedBranch;
    return matchesSearch && matchesBranch;
  });

  return (
    <div className="w-full space-y-3 pb-3">
      {/* Header Banner */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-[17px] font-bold text-slate-800 tracking-tight">Member Directory</h1>
          <p className="text-[11.5px] text-slate-500 mt-0.5">Manage 2,405 active gym memberships, attendance status, and profiles.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11.5px] font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs">
            <Filter size={13} className="text-slate-500" />
            <span>Export List</span>
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-theme-gradient px-3.5 py-1.5 text-[11.5px] font-semibold text-white shadow-theme-glow hover:opacity-95 transition-all">
            <UserPlus size={13} />
            <span>Add Member</span>
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-emerald-100 bg-[#edf9f3] p-3 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-600">Active Members</p>
            <p className="text-[20px] font-black text-emerald-600 tracking-tight mt-0.5">2,405</p>
            <p className="text-[10px] font-medium text-emerald-700 mt-0.5">+48 joined this month</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs">
            <Users size={15} />
          </div>
        </div>

        <div className="rounded-xl border border-purple-100 bg-[#f4f2fe] p-3 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-600">Checked In Today</p>
            <p className="text-[20px] font-black text-purple-600 tracking-tight mt-0.5">143</p>
            <p className="text-[10px] font-medium text-purple-700 mt-0.5">Peak capacity at 6:00 PM</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white shadow-xs">
            <Activity size={15} />
          </div>
        </div>

        <div className="rounded-xl border border-amber-100 bg-[#fef6ed] p-3 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-600">Expiring in 7 Days</p>
            <p className="text-[20px] font-black text-amber-600 tracking-tight mt-0.5">18</p>
            <p className="text-[10px] font-medium text-amber-700 mt-0.5">Auto-renewal reminders sent</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white shadow-xs">
            <Clock size={15} />
          </div>
        </div>

        <div className="rounded-xl border border-sky-100 bg-[#eef8fd] p-3 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-600">VIP & Elite Tier</p>
            <p className="text-[20px] font-black text-sky-600 tracking-tight mt-0.5">445</p>
            <p className="text-[10px] font-medium text-sky-700 mt-0.5">High-retention segment</p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white shadow-xs">
            <Award size={15} />
          </div>
        </div>
      </div>

      {/* Member Table Card */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-3">
          <div>
            <h3 className="text-[13px] font-bold text-slate-800">All Gym Members</h3>
            <p className="text-[10.5px] text-slate-500">Filter by branch, membership tier, or name.</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 text-slate-400" size={12} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search member name or plan..."
                className="w-48 sm:w-56 rounded-lg border border-slate-200 bg-slate-50/50 py-1 pl-7 pr-2.5 text-[11.5px] text-slate-700 outline-none focus:border-theme focus:bg-white focus:ring-1 focus:ring-theme"
              />
            </div>

            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white py-1 px-2 text-[11.5px] font-medium text-slate-700 outline-none focus:border-theme"
            >
              <option value="All">All Branches</option>
              <option value="Main Floor Hub">Main Floor Hub</option>
              <option value="North Wing">North Wing</option>
              <option value="Downtown VIP Club">Downtown VIP Club</option>
              <option value="Westside Center">Westside Center</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11.5px]">
            <thead className="bg-slate-50/80 text-[10.5px] font-bold uppercase tracking-wider text-slate-500 border-y border-slate-200/80">
              <tr>
                <th className="py-2 px-3">Member</th>
                <th className="py-2 px-3">Contact</th>
                <th className="py-2 px-3">Plan</th>
                <th className="py-2 px-3">Branch</th>
                <th className="py-2 px-3">Joined</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredMembers.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-theme-light text-theme font-bold text-[10.5px] border border-theme/20 shadow-2xs">
                        {m.avatarInitials}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{m.name}</p>
                        <p className="text-[10px] text-slate-400">{m.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-2.5 px-3">
                    <p className="text-slate-700 flex items-center gap-1"><Mail size={11} className="text-slate-400" /> {m.email}</p>
                    <p className="text-[10px] text-slate-400 flex items-center gap-1"><Phone size={10} className="text-slate-400" /> {m.phone}</p>
                  </td>
                  <td className="py-2.5 px-3 font-medium text-slate-700">{m.plan}</td>
                  <td className="py-2.5 px-3 text-slate-600">{m.branch}</td>
                  <td className="py-2.5 px-3 text-slate-500">{m.joined}</td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        m.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-700'
                          : m.status === 'Trial'
                          ? 'bg-sky-100 text-sky-700'
                          : 'bg-rose-100 text-rose-700'
                      }`}
                    >
                      {m.status}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <button className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
                      <MoreVertical size={13} />
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
