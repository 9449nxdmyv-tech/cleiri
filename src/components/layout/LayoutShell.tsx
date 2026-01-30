'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      {!isHomePage && <Header />}
      <main className="flex-grow">{children}</main>
      {!isHomePage && <Footer />}
    </>
  );
}
