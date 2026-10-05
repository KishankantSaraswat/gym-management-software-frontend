import { TrendingUp, Download, Activity } from 'lucide-react';

export default function Reports() {
  const branchPerformance = [
    { branch: 'Main Floor Hub', members: '1,050', revenue: '$14,200', occupancy: '88%', growth: '+15%' },
    { branch: 'Downtown VIP Club', members: '680', revenue: '$9,800', occupancy: '92%', growth: '+22%' },
    { branch: 'North Wing Fitness', members: '420', revenue: '$3,150', occupancy: '65%', growth: '+8%' },
    { branch: 'Westside Center', members: '255', revenue: '$1,300', occupancy: '45%', growth: '+4%' },
  ];

  return (
    <div className="w-full space-y-3 pb-3">
      {/* Header Banner */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-[17px] font-bold text-slate-800 tracking-tight">Analytics & Reports</h1>
          <p className="text-[11.5px] text-slate-500 mt-0.5">Comprehensive gym revenue, attendance throughput, and growth projections.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-lg bg-theme-gradient px-3.5 py-1.5 text-[11.5px] font-semibold text-white shadow-theme-glow hover:opacity-95 transition-all">
            <Download size={13} />
            <span>Generate Full PDF Report</span>
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <p className="text-[11.5px] font-semibold text-slate-600">Member Retention Rate</p>
            <span className="p-1 rounded-md bg-emerald-50 text-emerald-600"><TrendingUp size={14} /></span>
          </div>
          <p className="text-[22px] font-black text-slate-900 mt-1">94.2%</p>
          <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[94.2%] bg-emerald-500 rounded-full" />
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5">+2.1% improvement over past 90 days</p>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <p className="text-[11.5px] font-semibold text-slate-600">Average Session Duration</p>
            <span className="p-1 rounded-md bg-purple-50 text-purple-600"><ClockIcon size={14} /></span>
          </div>
          <p className="text-[22px] font-black text-slate-900 mt-1">68 mins</p>
          <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[70%] bg-purple-500 rounded-full" />
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5">Peak workout duration: 55–75 mins</p>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <p className="text-[11.5px] font-semibold text-slate-600">Monthly Churn Projection</p>
            <span className="p-1 rounded-md bg-amber-50 text-amber-600"><Activity size={14} /></span>
          </div>
          <p className="text-[22px] font-black text-slate-900 mt-1">1.4%</p>
          <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[14%] bg-amber-500 rounded-full" />
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5">Lowest churn rate recorded in Q3</p>
        </div>
      </div>

      {/* Branch Performance Table */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
        <h3 className="text-[13px] font-bold text-slate-800 mb-2.5">Branch Comparison & Revenue Metrics</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11.5px]">
            <thead className="bg-slate-50/80 text-[10.5px] font-bold uppercase tracking-wider text-slate-500 border-y border-slate-200/80">
              <tr>
                <th className="py-2 px-3">Branch Location</th>
                <th className="py-2 px-3">Active Members</th>
                <th className="py-2 px-3">Monthly Revenue</th>
                <th className="py-2 px-3">Avg Occupancy</th>
                <th className="py-2 px-3">MoM Growth</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {branchPerformance.map((b) => (
                <tr key={b.branch} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-slate-800">{b.branch}</td>
                  <td className="py-2.5 px-3 text-slate-700">{b.members}</td>
                  <td className="py-2.5 px-3 font-bold text-slate-800">{b.revenue}</td>
                  <td className="py-2.5 px-3 text-slate-600">{b.occupancy}</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-600">{b.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ClockIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
