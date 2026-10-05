import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { useAuth } from '../context/AuthContext';
import {
  loginWithPassword,
  requestOtp,
  verifyOtp,
} from '../services/authService';
import {
  validateEmail,
  validatePassword,
  validateOtp,
} from '../utils/authValidation';
import type { LoginMode } from '../types/auth';

/**
 * Central hook that owns ALL login business logic.
 * UI components receive state + callbacks — nothing else.
 */
export function useLogin() {
  const navigate = useNavigate();
  const { login: setAuth } = useAuth();

  /* ── shared state ─────────────────────────────────────────────── */
  const [mode, setMode] = useState<LoginMode>('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ── helpers ──────────────────────────────────────────────────── */
  const clearErrors = useCallback(() => setErrors({}), []);

  const switchMode = useCallback(
    (next: LoginMode) => {
      setMode(next);
      setOtp('');
      setOtpSent(false);
      clearErrors();
    },
    [clearErrors],
  );

  /* ── password login ───────────────────────────────────────────── */
  const handlePasswordLogin = useCallback(async () => {
    const emailCheck = validateEmail(email);
    const passCheck = validatePassword(password);
    if (!emailCheck.valid || !passCheck.valid) {
      setErrors({
        ...(emailCheck.valid ? {} : { email: emailCheck.message }),
        ...(passCheck.valid ? {} : { password: passCheck.message }),
      });
      return;
    }

    setLoading(true);
    clearErrors();

    try {
      const res = await loginWithPassword({ email, password });
      setAuth(res.token, res.user);
      toast.success(res.message || 'Welcome back!');
      navigate('/dashboard', { replace: true });
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ?? 'Login failed. Please check your credentials.';
      toast.error(message);
      setErrors({ form: message });
    } finally {
      setLoading(false);
    }
  }, [email, password, setAuth, navigate, clearErrors]);

  /* ── OTP request ──────────────────────────────────────────────── */
  const handleSendOtp = useCallback(async () => {
    const emailCheck = validateEmail(email);
    if (!emailCheck.valid) {
      setErrors({ email: emailCheck.message });
      return;
    }

    setLoading(true);
    clearErrors();

    try {
      const res = await requestOtp({ email });
      toast.success(res.message || 'OTP sent to your email');
      setOtpSent(true);
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ?? 'Failed to send OTP. Please try again.';
      toast.error(message);
      setErrors({ form: message });
    } finally {
      setLoading(false);
    }
  }, [email, clearErrors]);

  /* ── OTP verify ───────────────────────────────────────────────── */
  const handleVerifyOtp = useCallback(async () => {
    const otpCheck = validateOtp(otp);
    if (!otpCheck.valid) {
      setErrors({ otp: otpCheck.message });
      return;
    }

    setLoading(true);
    clearErrors();

    try {
      const res = await verifyOtp({ email, otp });
      setAuth(res.token, res.user);
      toast.success(res.message || 'Welcome back!');
      navigate('/dashboard', { replace: true });
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ?? 'Invalid OTP. Please try again.';
      toast.error(message);
      setErrors({ form: message });
    } finally {
      setLoading(false);
    }
  }, [email, otp, setAuth, navigate, clearErrors]);

  return {
    /* state */
    mode,
    email,
    password,
    otp,
    otpSent,
    loading,
    errors,
    /* setters */
    setEmail,
    setPassword,
    setOtp,
    switchMode,
    /* actions */
    handlePasswordLogin,
    handleSendOtp,
    handleVerifyOtp,
  };
}

