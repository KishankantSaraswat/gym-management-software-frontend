import type { LoginMode } from '../../types/auth';

interface LoginTabsProps {
  active: LoginMode;
  onChange: (mode: LoginMode) => void;
}

const tabs: { key: LoginMode; label: string }[] = [
  { key: 'password', label: 'Password' },
  { key: 'otp', label: 'OTP Login' },
];

export default function LoginTabs({ active, onChange }: LoginTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Login method"
      className="mb-8 flex rounded-xl bg-gray-100 p-1.5"
    >
      {tabs.map((t) => (
        <button
          key={t.key}
          role="tab"
          type="button"
          aria-selected={active === t.key}
          onClick={() => onChange(t.key)}
          className={`
            flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all duration-200 ease-out
            ${
              active === t.key
                ? 'bg-white text-gray-900 shadow-sm ring-1 ring-black/5'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
            }
          `}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
