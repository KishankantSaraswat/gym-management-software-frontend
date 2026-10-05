import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  error?: string;
}

const LoginInput = forwardRef<HTMLInputElement, LoginInputProps>(
  ({ label, icon, error, id, className = '', ...rest }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="mb-4">
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>

        <div className="relative">
          {icon && (
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className={`
              block w-full rounded-xl border py-2.5 text-sm transition-all focus:outline-none focus:ring-4
              ${icon ? 'pl-11 pr-4' : 'px-4'}
              ${
                error
                  ? 'border-red-300 bg-red-50/50 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500/20'
                  : 'border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500/20'
              }
              ${className}
            `}
            {...rest}
          />
        </div>

        {error && (
          <p
            id={`${inputId}-error`}
            role="alert"
            className="mt-1.5 text-sm font-medium text-red-500"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

LoginInput.displayName = 'LoginInput';
export default LoginInput;
