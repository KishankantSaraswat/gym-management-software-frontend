import { type FormEvent } from 'react';
import { Mail } from 'lucide-react';

import LoginTabs from './LoginTabs';
import LoginInput from './components/LoginInput';
import PasswordInput from './components/PasswordInput';
import LoginButton from './components/LoginButton';
import type { LoginMode } from '../../types/auth';

interface LoginFormProps {
  mode: LoginMode;
  email: string;
  password: string;
  otp: string;
  otpSent: boolean;
  loading: boolean;
  errors: Record<string, string>;
  onModeChange: (mode: LoginMode) => void;
  onEmailChange: (v: string) => void;
  onPasswordChange: (v: string) => void;
  onOtpChange: (v: string) => void;
  onPasswordLogin: () => void;
  onSendOtp: () => void;
  onVerifyOtp: () => void;
}

export default function LoginForm({
  mode,
  email,
  password,
  otp,
  otpSent,
  loading,
  errors,
  onModeChange,
  onEmailChange,
  onPasswordChange,
  onOtpChange,
  onPasswordLogin,
  onSendOtp,
  onVerifyOtp,
}: LoginFormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (mode === 'password') {
      onPasswordLogin();
    } else if (otpSent) {
      onVerifyOtp();
    } else {
      onSendOtp();
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <LoginTabs active={mode} onChange={onModeChange} />

      {/* ── Email (both modes) ───────────────────────────────────── */}
      <LoginInput
        label={mode === 'otp' ? 'Email / Mobile' : 'Email'}
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
        icon={<Mail size={18} />}
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        error={errors.email}
        disabled={mode === 'otp' && otpSent}
      />

      {/* ── Password mode ────────────────────────────────────────── */}
      {mode === 'password' && (
        <>
          <PasswordInput
            placeholder="Enter your password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            error={errors.password}
          />

          <div className="mb-6 flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-500"
            >
              Forgot Password?
            </a>
          </div>

          <LoginButton loading={loading}>Login</LoginButton>
        </>
      )}

      {/* ── OTP mode ─────────────────────────────────────────────── */}
      {mode === 'otp' && !otpSent && (
        <LoginButton loading={loading} loadingText="Sending OTP…">
          Send OTP
        </LoginButton>
      )}

      {mode === 'otp' && otpSent && (
        <>
          <LoginInput
            label="OTP"
            type="text"
            inputMode="numeric"
            placeholder="Enter OTP"
            autoComplete="one-time-code"
            value={otp}
            onChange={(e) => onOtpChange(e.target.value)}
            error={errors.otp}
          />

          <LoginButton loading={loading} loadingText="Verifying…">
            Verify OTP
          </LoginButton>
        </>
      )}

      {errors.form && (
        <p role="alert" className="mt-4 text-center text-sm text-red-500">
          {errors.form}
        </p>
      )}
    </form>
  );
}
