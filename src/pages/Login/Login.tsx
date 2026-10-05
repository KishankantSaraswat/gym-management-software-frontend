import LoginHero from './LoginHero';
import LoginCard from './LoginCard';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import { useLogin } from '../../hooks/useLogin';

/**
 * Top-level login page.
 * Composes hero + card, delegates all business logic to useLogin.
 */
export default function Login() {
  const login = useLogin();

  return (
    <div className="login-page">
      {/* Left: hero */}
      <LoginHero />

      {/* Right: card */}
      <div className="login-card-wrapper">
        <LoginCard>
          <LoginHeader />
          <LoginForm
            mode={login.mode}
            email={login.email}
            password={login.password}
            otp={login.otp}
            otpSent={login.otpSent}
            loading={login.loading}
            errors={login.errors}
            onModeChange={login.switchMode}
            onEmailChange={login.setEmail}
            onPasswordChange={login.setPassword}
            onOtpChange={login.setOtp}
            onPasswordLogin={login.handlePasswordLogin}
            onSendOtp={login.handleSendOtp}
            onVerifyOtp={login.handleVerifyOtp}
          />
        </LoginCard>
      </div>
    </div>
  );
}
