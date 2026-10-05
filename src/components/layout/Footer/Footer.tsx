export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-gradient-surface mt-auto px-6 py-3.5 text-center text-[11px] text-slate-500">
      <p>
        &copy; {year}{' '}
        <span className="font-semibold text-theme-gradient">
          GymHood SaaS Platform
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
}
