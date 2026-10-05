import { useState, useRef, useEffect } from 'react';
import { RotateCw, ChevronDown, Check } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ProfileMenu from '../../profile/ProfileMenu/ProfileMenu';
import { toast } from 'sonner';

interface FilterConfig {
  id: string;
  label: string;
  options: string[];
}

const FILTER_CONFIGS: FilterConfig[] = [
  {
    id: 'date',
    label: 'Date',
    options: ['Today', 'Yesterday', 'Last 7 Days', 'This Month', 'All Time'],
  },
  {
    id: 'branch',
    label: 'Branch',
    options: ['All Branches', 'Main Floor Hub', 'North Fitness Center', 'Downtown VIP Club'],
  },
  {
    id: 'plan',
    label: 'Plan',
    options: ['All Plans', 'Annual Pro', 'Monthly Flex', 'Elite VIP', 'Trial Pass'],
  },
  {
    id: 'trainer',
    label: 'Trainer',
    options: ['All Trainers', 'Alex Morgan', 'Sarah Connor', 'Marcus Vance', 'David Miller'],
  },
];

export default function Header() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const routeTitles: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/members': 'Members Directory',
    '/billing': 'Billing & Subscriptions',
    '/reports': 'Reports & Analytics',
    '/settings': 'Settings',
  };
  const pageTitle = routeTitles[location.pathname] || 'Dashboard';

  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({
    date: 'Today',
    branch: 'All Branches',
    plan: 'All Plans',
    trainer: 'All Trainers',
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectOption = (filterId: string, option: string) => {
    setSelectedValues((prev) => ({ ...prev, [filterId]: option }));
    setActiveDropdown(null);
    toast.success(`Filter applied: ${option}`);
  };

  const handleRefresh = () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    toast.info('Fetching latest dashboard metrics...');
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success('Dashboard metrics updated');
    }, 700);
  };

  return (
    <header className="header-gradient-surface relative z-40 flex h-[58px] shrink-0 items-center justify-between px-5 shadow-[0_1px_8px_rgba(0,0,0,0.02)]">
      {/* Top Hairline Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-theme-gradient opacity-90 pointer-events-none" />

      {/* Left: Breadcrumb / Title & Quick Filter Dropdowns */}
      <div className="flex items-center gap-4" ref={containerRef}>
        <div className="flex items-center gap-1.5 text-[13px]">
          <span className="font-bold text-slate-800">Admin</span>
          <span className="text-slate-300">/</span>
          <span className="font-semibold text-theme">{pageTitle}</span>
        </div>

        {/* Interactive Filter dropdown pills */}
        <div className="hidden md:flex items-center gap-2">
          {FILTER_CONFIGS.map((filter) => {
            const isMenuOpen = activeDropdown === filter.id;
            const currentVal = selectedValues[filter.id] || filter.options[0];

            return (
              <div key={filter.id} className="relative">
                <button
                  type="button"
                  onClick={() => setActiveDropdown(isMenuOpen ? null : filter.id)}
                  aria-expanded={isMenuOpen}
                  className={`flex items-center gap-1.5 rounded-lg border px-3 py-1 text-[11.5px] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all ${
                    isMenuOpen
                      ? 'border-theme bg-theme-light text-theme font-semibold shadow-xs'
                      : 'border-slate-200/90 bg-white/90 text-slate-600 hover:border-theme hover:bg-theme-light/40 hover:text-theme'
                  }`}
                >
                  <span>{currentVal}</span>
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${
                      isMenuOpen ? 'rotate-180 text-theme' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div className="absolute left-0 top-full mt-1.5 min-w-[150px] rounded-xl border border-slate-200/90 bg-white p-1 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-100">
                    <div className="py-0.5">
                      {filter.options.map((option) => {
                        const isSelected = currentVal === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleSelectOption(filter.id, option)}
                            className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-left text-[11.5px] transition-colors ${
                              isSelected
                                ? 'bg-theme-light text-theme font-semibold'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                          >
                            <span>{option}</span>
                            {isSelected && <Check size={13} className="text-theme" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Refresh button and Profile Avatar */}
      <div className="flex items-center gap-3">
        {/* Refresh button with theme gradient and click spin feedback */}
        <button
          type="button"
          onClick={handleRefresh}
          title="Refresh Data"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-gradient shadow-theme-glow hover:scale-105 active:scale-95 transition-all"
        >
          <RotateCw
            size={14}
            className={`text-white transition-transform ${isRefreshing ? 'animate-spin' : ''}`}
          />
        </button>

        {/* Profile with circular gradient avatar */}
        <ProfileMenu />
      </div>
    </header>
  );
}
