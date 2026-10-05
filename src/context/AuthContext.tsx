import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import type { AuthContextValue, AuthUser } from '../types/auth';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

/** Read persisted auth state from localStorage. */
function loadPersistedAuth(): { token: string | null; user: AuthUser | null } {
  const token = localStorage.getItem('auth_token');
  const raw = localStorage.getItem('auth_user');
  let user: AuthUser | null = null;
  if (raw) {
    try {
      user = JSON.parse(raw) as AuthUser;
    } catch {
      localStorage.removeItem('auth_user');
    }
  }
  return { token, user };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => loadPersistedAuth().token);
  const [user, setUser] = useState<AuthUser | null>(() => loadPersistedAuth().user);

  const login = useCallback((newToken: string, newUser: AuthUser) => {
    localStorage.setItem('auth_token', newToken);
    localStorage.setItem('auth_user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    setToken(null);
    setUser(null);
  }, []);

  /* Keep state in sync if another tab modifies localStorage. */
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === 'auth_token' || e.key === 'auth_user') {
        const { token: t, user: u } = loadPersistedAuth();
        setToken(t);
        setUser(u);
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const value: AuthContextValue = {
    user,
    token,
    isAuthenticated: !!token && !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}

