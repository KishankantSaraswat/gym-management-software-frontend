/** Shape of credentials sent for password-based login. */
export interface LoginCredentials {
  email: string;
  password: string;
  role?: string;
}

/** Shape of credentials sent for OTP-based login. */
export interface OtpRequestPayload {
  email: string;
  role?: string;
}

export interface OtpVerifyPayload {
  email: string;
  otp: string;
  role?: string;
}

/** The response the backend returns after successful authentication. */
export interface AuthResponse {
  success: boolean;
  message: string;
  token: string;
  user: AuthUser;
}

/** Minimal user representation stored in auth state. */
export interface AuthUser {
  id: number | string;
  email: string;
  name: string;
  role?: string;
  isSuperAdmin?: boolean;
  accountVerified?: boolean;
  client_id?: string;
  branch_id?: string;
  permissions?: string[];
}

/** Application context types supported by the platform. */
export type ApplicationType = 'SAAS_ADMIN' | 'GYM_WEB' | 'MOBILE_APP';

/** Login mode toggled via the tab component. */
export type LoginMode = 'password' | 'otp';

/** Auth context value exposed to the rest of the app. */
export interface AuthContextValue {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, user: AuthUser) => void;
  logout: () => void;
}

