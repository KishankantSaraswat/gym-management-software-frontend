import { Dumbbell, Users, CreditCard, BarChart3 } from 'lucide-react';

const features = [
  { icon: Users, text: 'Member Management' },
  { icon: Dumbbell, text: 'Attendance Tracking' },
  { icon: CreditCard, text: 'Billing & Subscriptions' },
  { icon: BarChart3, text: 'Analytics & Reports' },
];

export default function LoginHero() {
  return (
    <div className="login-hero">
      {/* Decorative glass orbs */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-[100px]" />
      <div className="absolute -bottom-32 -right-20 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]" />
      <div className="absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-400/10 blur-[80px]" />

      <div className="relative z-10 flex h-full w-full flex-col justify-center px-10 py-16 lg:px-20 xl:px-24">
        {/* Logo */}
        <div className="mb-12 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl font-black text-white shadow-inner backdrop-blur-md border border-white/20">
            G
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">GymHood</span>
        </div>

        {/* Headline */}
        <h2 className="mb-6 text-5xl font-extrabold leading-[1.15] text-white lg:text-6xl">
          Gym Management
          <br />
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Made Simple
          </span>
        </h2>

        <p className="mb-12 max-w-lg text-lg leading-relaxed text-indigo-100/70">
          Manage members, attendance, memberships, and billing — all from one
          powerful, beautiful platform.
        </p>

        {/* Feature chips */}
        <div className="grid max-w-lg grid-cols-2 gap-4">
          {features.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-200">
                <Icon size={20} />
              </div>
              <span className="text-sm font-semibold text-white/90">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
