import { type ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
}

export default function LoginButton({
  children = 'Login',
  loading = false,
  loadingText = 'Logging in…',
  disabled,
  className = '',
  ...rest
}: LoginButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className={`
        group relative flex w-full items-center justify-center gap-2 rounded-xl 
        bg-theme-gradient px-4 py-3 text-sm font-bold shadow-theme-glow transition-all 
        hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 
        disabled:pointer-events-none disabled:opacity-70 disabled:shadow-none
        ${className}
      `}
      {...rest}
    >
      {loading ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
