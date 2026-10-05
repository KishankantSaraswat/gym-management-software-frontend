import type { ReactNode } from 'react';

export default function LoginCard({ children }: { children: ReactNode }) {
  return (
    <div className="login-card">
      {children}
    </div>
  );
}
