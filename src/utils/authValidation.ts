/**
 * Client-side validation helpers for the login form.
 * These are UX conveniences — the backend is the authority.
 */

export interface ValidationResult {
  valid: boolean;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(value: string): ValidationResult {
  if (!value.trim()) return { valid: false, message: 'Email is required' };
  if (!EMAIL_RE.test(value)) return { valid: false, message: 'Enter a valid email address' };
  return { valid: true, message: '' };
}

export function validatePassword(value: string): ValidationResult {
  if (!value) return { valid: false, message: 'Password is required' };
  if (value.length < 4) return { valid: false, message: 'Password is too short' };
  return { valid: true, message: '' };
}

export function validateOtp(value: string): ValidationResult {
  if (!value.trim()) return { valid: false, message: 'OTP is required' };
  if (!/^\d{4,8}$/.test(value.trim())) return { valid: false, message: 'Enter a valid OTP' };
  return { valid: true, message: '' };
}

