import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchMenus } from '../../../services/menu/menuService';
import { buildMenuTree, renderIcon, type MenuNode } from '../../../utils/menuUtils';
import { Loader2, Search, ChevronsLeft, LogOut } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

export default function Sidebar() {
  const [menus, setMenus] = useState<MenuNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterQuery, setFilterQuery] = useState('');
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadMenus() {
      try {
        const flatMenus = await fetchMenus('SAAS_ADMIN');
        const tree = buildMenuTree(flatMenus);
        setMenus(tree);
      } finally {
        setLoading(false);
      }
    }
    loadMenus();
  }, []);

  const handleSignOut = () => {
    logout();
    navigate('/login');
  };

  const filteredMenus = menus.filter((m) =>
    m.menu_name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <aside className="sidebar-gradient-surface hidden w-[236px] shrink-0 flex-col shadow-[1px_0_10px_rgba(0,0,0,0.02)] lg:flex">
      {/* Top Hairline Gradient Accent */}
      <div className="h-[2.5px] w-full bg-theme-gradient" />

      {/* Brand Header with subtle gradient sweep */}
      <div className="flex h-[58px] shrink-0 items-center justify-between border-b border-theme/20 px-4 bg-gradient-to-r from-white via-white to-theme-light/30">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-theme-gradient text-[12px] font-black text-white shadow-theme-glow">
            G
          </div>
          <span className="text-[16px] font-bold tracking-tight text-slate-800">
            Gym<span className="text-theme">Hood</span>
          </span>
        </div>
        <button className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-md hover:bg-theme-light">
          <ChevronsLeft size={16} />
        </button>
      </div>

      {/* Search Menu input like Image 2 */}
      <div className="px-3 pt-3 pb-1">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 text-slate-400" size={13} />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search menu..."
            className="w-full rounded-lg border border-slate-200/90 bg-white/90 py-1.5 pl-8 pr-3 text-[12px] text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-theme focus:ring-2 focus:ring-theme/20 shadow-sm"
          />
        </div>
      </div>

      {/* Navigation Sections */}
      <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-4">
        {loading ? (
          <div className="flex justify-center p-8 text-theme">
            <Loader2 className="animate-spin" size={20} />
          </div>
        ) : (
          <div>
            <p className="px-2 mb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Main
            </p>
            <div className="space-y-1">
              {filteredMenus.map((menu) => (
                <NavLink
                  key={menu.id}
                  to={menu.route}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 rounded-xl px-3 py-2 text-[13px] font-medium transition-all ${
                      isActive
                        ? 'active-menu-gradient'
                        : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-950'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {renderIcon(
                        menu.icon,
                        16,
                        isActive ? 'text-white' : 'text-slate-400'
                      )}
                      <span>{menu.menu_name}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Sign Out like Image 2 */}
      <div className="border-t border-slate-100 p-3 bg-white">
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-[12.5px] font-medium text-slate-600 hover:text-red-600 hover:bg-red-50/50 transition-colors"
        >
          <LogOut size={15} className="text-slate-400 group-hover:text-red-500" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
