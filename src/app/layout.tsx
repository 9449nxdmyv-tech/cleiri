'use client';

import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { usePathname } from 'next/navigation';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

// Note: Metadata export is typically for Server Components.
// For Client Components that need dynamic metadata, you'd handle it differently
// or leave static metadata here if it's broadly applicable.
// Since we're making this a client component primarily for the header conditional,
// we'll keep the static metadata for now.


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} bg-[#FCF8F3] font-sans flex flex-col min-h-screen`}
      >
        {!isHomePage && <Header />}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
