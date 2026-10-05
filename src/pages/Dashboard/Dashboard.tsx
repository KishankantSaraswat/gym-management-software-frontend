import {
  IndianRupee,
  ShoppingCart,
  Zap,
  AlertCircle,
  Award,
  Layers,
  WifiOff,
  Activity,
  MoreVertical,
} from 'lucide-react';

export default function Dashboard() {
  const row1Stats = [
    {
      title: 'Total Revenue',
      value: '₹7,111',
      subtitle: 'Confirmed Revenue',
      icon: IndianRupee,
      bg: 'bg-[#edf9f3]',
      border: 'border-emerald-200/60',
      textColor: 'text-emerald-600',
      iconBg: 'bg-emerald-500',
      waveColor: '#10b981',
    },
    {
      title: 'Total Transactions',
      value: '41',
      subtitle: 'Successful Vends',
      icon: ShoppingCart,
      bg: 'bg-[#f4f2fe]',
      border: 'border-purple-200/60',
      textColor: 'text-purple-600',
      iconBg: 'bg-purple-600',
      waveColor: '#9333ea',
    },
    {
      title: 'Avg Order Value',
      value: '₹173',
      subtitle: 'Per Successful Vend',
      icon: Zap,
      bg: 'bg-[#fef6ed]',
      border: 'border-amber-200/60',
      textColor: 'text-amber-600',
      iconBg: 'bg-amber-500',
      waveColor: '#f59e0b',
    },
    {
      title: 'Revenue Lost',
      value: '₹0',
      subtitle: '0 dispensing errors',
      icon: AlertCircle,
      bg: 'bg-[#fef2f4]',
      border: 'border-rose-200/60',
      textColor: 'text-rose-600',
      iconBg: 'bg-rose-500',
      waveColor: '#f43f5e',
    },
  ];

  const row2Stats = [
    {
      title: 'Refund Failures',
      value: '0',
      subtitle: 'Failed refund transactions',
      icon: AlertCircle,
      bg: 'bg-[#fef2f4]',
      border: 'border-rose-200/60',
      textColor: 'text-rose-600',
      iconBg: 'bg-rose-500',
    },
    {
      title: 'Best Machine',
      value: 'T2 Gate 41-42',
      subtitle: '₹2,377',
      icon: Award,
      bg: 'bg-[#edf9f3]',
      border: 'border-emerald-200/60',
      textColor: 'text-emerald-700',
      iconBg: 'bg-emerald-500',
    },
    {
      title: 'Top Product',
      value: 'Iced Vanilla Latte NyMi',
      subtitle: '₹597',
      icon: Layers,
      bg: 'bg-[#f4f2fe]',
      border: 'border-purple-200/60',
      textColor: 'text-purple-700',
      iconBg: 'bg-purple-600',
    },
    {
      title: 'API Push Failures',
      value: '0',
      subtitle: 'Failed to sync',
      icon: WifiOff,
      bg: 'bg-[#eef8fd]',
      border: 'border-sky-200/60',
      textColor: 'text-sky-600',
      iconBg: 'bg-sky-500',
    },
  ];

  const hourlyBars = [
    { time: '2:00', height: '24%' },
    { time: '3:00', height: '14%' },
    { time: '4:00', height: '8%' },
    { time: '5:00', height: '10%' },
    { time: '6:00', height: '10%' },
    { time: '7:00', height: '6%' },
    { time: '8:00', height: '8%' },
    { time: '9:00', height: '12%' },
    { time: '10:00', height: '32%' },
    { time: '11:00', height: '48%' },
    { time: '12:00', height: '45%' },
    { time: '13:00', height: '14%' },
    { time: '14:00', height: '26%' },
    { time: '15:00', height: '10%' },
    { time: '16:00', height: '85%' },
    { time: '17:00', height: '65%' },
  ];

  return (
    <div className="w-full space-y-2.5 pb-2">
      {/* Metric Cards Row 1 */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {row1Stats.map((item) => (
          <div
            key={item.title}
            className={`relative overflow-hidden rounded-xl border ${item.border} ${item.bg} p-3 transition-all hover:shadow-md`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-semibold text-slate-700">{item.title}</p>
                <p className={`mt-0.5 text-[21px] font-black tracking-tight ${item.textColor}`}>
                  {item.value}
                </p>
                <p className="mt-0.5 text-[10px] font-medium text-slate-500">{item.subtitle}</p>
              </div>
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-white shadow-xs ${item.iconBg}`}
              >
                <item.icon size={13} />
              </div>
            </div>

            {/* Decorative wave */}
            <svg
              className="absolute -bottom-1 -right-2 h-8 w-24 opacity-80 pointer-events-none"
              viewBox="0 0 100 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 25 C20 10, 40 32, 60 18 C80 5, 90 28, 100 15"
                stroke={item.waveColor}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Metric Cards Row 2 */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {row2Stats.map((item) => (
          <div
            key={item.title}
            className={`relative overflow-hidden rounded-xl border ${item.border} ${item.bg} p-3 transition-all hover:shadow-md`}
          >
            <div className="flex items-start justify-between">
              <div className="max-w-[78%]">
                <p className="text-[11px] font-semibold text-slate-700">{item.title}</p>
                <p
                  className={`mt-0.5 truncate text-[16px] font-bold tracking-tight ${item.textColor}`}
                >
                  {item.value}
                </p>
                <p className="mt-0.5 text-[10px] font-medium text-slate-500 truncate">{item.subtitle}</p>
              </div>
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white shadow-xs ${item.iconBg}`}
              >
                <item.icon size={13} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-12">
        {/* Left Chart: Daily Revenue & Refunds Trend */}
        <div className="rounded-xl border border-slate-200/80 bg-white/95 p-3.5 shadow-sm lg:col-span-7">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[12.5px] font-bold text-slate-800">
              Daily Revenue & Refunds Trend
            </h3>
            <button className="text-slate-400 hover:text-slate-600 p-0.5">
              <MoreVertical size={14} />
            </button>
          </div>

          <div className="relative flex h-44 w-full items-center justify-center rounded-lg bg-gradient-to-b from-white to-slate-50 border border-dashed border-slate-200">
            <div className="text-center">
              <Activity className="mx-auto h-7 w-7 text-slate-400 mb-1" />
              <p className="text-[11.5px] font-medium text-slate-500">Live Trend Sync Active</p>
              <span className="inline-block mt-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-[9.5px] font-semibold text-emerald-700">
                Oct 1 - Oct 4
              </span>
            </div>
          </div>
        </div>

        {/* Right Chart: Hourly Usage Patterns */}
        <div className="rounded-xl border border-slate-200/80 bg-white/95 p-3.5 shadow-sm lg:col-span-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[12.5px] font-bold text-slate-800">Hourly Usage Patterns</h3>
            <button className="text-slate-400 hover:text-slate-600 p-0.5">
              <MoreVertical size={14} />
            </button>
          </div>

          {/* Gradient vertical bars */}
          <div className="flex h-44 w-full items-end justify-between gap-1 px-1 pb-2 pt-1">
            {hourlyBars.map((bar) => (
              <div key={bar.time} className="flex flex-1 flex-col items-center gap-1 h-full justify-end">
                <div
                  style={{ height: bar.height }}
                  className="w-full max-w-[13px] rounded-t-sm bg-theme-gradient shadow-xs transition-all hover:scale-y-105 hover:opacity-90"
                />
                <span className="text-[8px] font-medium text-slate-400">{bar.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 4: Machine / Gym Performance */}
      <div className="rounded-xl border border-slate-200/80 bg-white/95 p-3.5 shadow-sm">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="flex h-4.5 w-4.5 items-center justify-center rounded bg-theme-gradient text-[9px] text-white">
              ⚡
            </div>
            <h3 className="text-[12.5px] font-bold text-slate-800">Machine & Branch Performance</h3>
          </div>
          <button className="rounded-md border border-slate-200 px-2.5 py-0.5 text-[10.5px] font-medium text-slate-600 hover:bg-slate-50">
            All Machines ▾
          </button>
        </div>

        <div>
          <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-1">
            <span>T2 Gate 41 42 - Main Floor</span>
            <span className="font-bold text-slate-800">₹7,111 (100%)</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-full rounded-full bg-theme-gradient shadow-theme-glow" />
          </div>
        </div>
      </div>
    </div>
  );
}
