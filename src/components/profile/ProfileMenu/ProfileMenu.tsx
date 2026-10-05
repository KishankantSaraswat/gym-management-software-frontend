import { useState, useRef, useEffect } from 'react';
import { Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useTheme, type Theme } from '../../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const THEME_COLORS: { id: Theme; label: string; color: string }[] = [
  { id: 'base', label: 'Base', color: 'bg-indigo-500' },
  { id: 'yellow', label: 'Yellow', color: 'bg-yellow-500' },
  { id: 'green', label: 'Green', color: 'bg-green-500' },
  { id: 'blue', label: 'Blue', color: 'bg-blue-500' },
  { id: 'orange', label: 'Orange', color: 'bg-orange-500' },
  { id: 'red', label: 'Red', color: 'bg-red-500' },
  { id: 'violet', label: 'Violet', color: 'bg-purple-500' },
];

export default function ProfileMenu() {
  const { user, logout } = useAuth();
  const { theme: activeTheme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initials = user?.name?.substring(0, 1).toLowerCase() || 'a';

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-full border border-slate-200/90 bg-white/90 p-0.5 transition-all hover:scale-105 hover:border-theme focus:outline-none shadow-sm"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-theme-gradient text-[12.5px] font-black text-white shadow-sm">
          {initials}
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl z-[100] animate-in fade-in zoom-in-95 duration-150">
          {/* Header */}
          <div className="px-3 py-2 border-b border-slate-100">
            <p className="text-[13.5px] font-bold text-slate-800">{user?.name || 'admin'}</p>
            <p className="text-[11px] text-slate-500 truncate">{user?.email || 'admin@gymhood.com'}</p>
          </div>

          {/* Profile Details */}
          <button className="mt-1 flex w-full items-center gap-2.5 rounded-xl px-2.5 py-1.5 text-[12.5px] font-medium text-slate-700 transition-colors hover:bg-slate-50">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
              <Settings size={14} />
            </div>
            <span>Profile Details</span>
          </button>

          {/* Theme Colors section */}
          <div className="mt-2 px-2.5">
            <p className="mb-1.5 text-[9.5px] font-bold tracking-wider text-slate-400 uppercase">
              Theme Color
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {THEME_COLORS.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setTheme(theme.id)}
                  className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-all ${
                    activeTheme === theme.id
                      ? 'border-theme bg-theme-light text-theme font-semibold shadow-xs'
                      : 'border-slate-100 bg-white text-slate-600 hover:border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className={`h-3 w-3 rounded-full ${theme.color} shrink-0`} />
                  <span className="truncate">{theme.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="my-2 border-t border-slate-100 mx-2" />

          {/* Sign Out */}
          <div className="px-1 pb-0.5">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-2 rounded-xl px-2.5 py-1.5 text-[12.5px] font-bold text-red-600 transition-colors hover:bg-red-50"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-50 text-red-500">
                <LogOut size={14} />
              </div>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
