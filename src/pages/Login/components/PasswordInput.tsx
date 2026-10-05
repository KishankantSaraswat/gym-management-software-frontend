import { forwardRef, useState, type InputHTMLAttributes } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label = 'Password', error, id, className = '', ...rest }, ref) => {
    const [visible, setVisible] = useState(false);
    const inputId = id ?? 'password';

    return (
      <div className="mb-4">
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>

        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <Lock size={18} />
          </span>

          <input
            ref={ref}
            id={inputId}
            type={visible ? 'text' : 'password'}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className={`
              block w-full rounded-xl border py-2.5 text-sm transition-all focus:outline-none focus:ring-4 pl-11 pr-11
              ${
                error
                  ? 'border-red-300 bg-red-50/50 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500/20'
                  : 'border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500/20'
              }
              ${className}
            `}
            {...rest}
          />

          <button
            type="button"
            aria-label={visible ? 'Hide password' : 'Show password'}
            onClick={() => setVisible((v) => !v)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            {visible ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
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

PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
