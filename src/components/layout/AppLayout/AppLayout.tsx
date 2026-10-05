import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function AppLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-ambient-gradient">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-2 sm:p-2.5">
          <div className="w-full">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
