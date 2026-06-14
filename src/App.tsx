import { Outlet } from 'react-router';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

export function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black focus:outline-none"
      >
        Skip to content
      </a>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
