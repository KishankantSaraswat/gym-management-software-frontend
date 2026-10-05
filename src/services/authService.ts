import api from './api';
import type {
  AuthResponse,
  LoginCredentials,
  OtpRequestPayload,
  OtpVerifyPayload,
} from '../types/auth';

/**
 * All authentication-related API calls live here.
 * UI components never call axios directly.
 */

/** Password-based login. */
export async function loginWithPassword(
  credentials: LoginCredentials,
): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>('/auth/login', {
    ...credentials,
    role: 'Admin',
  });
  return data;
}

/**
 * Request an OTP to be sent to the user's email/phone.
 *
 * TODO: Wire to real backend endpoint once available.
 */
export async function requestOtp(
  payload: OtpRequestPayload,
): Promise<{ message: string }> {
  const { data } = await api.post<{ message: string }>('/auth/otp/request', {
    ...payload,
    role: 'Admin',
  });
  return data;
}

/**
 * Verify the OTP and authenticate.
 *
 * TODO: Wire to real backend endpoint once available.
 */
export async function verifyOtp(
  payload: OtpVerifyPayload,
): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>('/auth/otp/verify', {
    ...payload,
    role: 'Admin',
  });
  return data;
}

