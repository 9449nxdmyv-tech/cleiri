'use client';

import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { usePathname } from 'next/navigation';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <head>
        <title>Cleiri | Singer &amp; Songwriter</title>
        <meta name="description" content="Award-winning artist from the Rio Grande Valley, blending Spanish ballads with the soulful sound of mariachi." />
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} bg-[#FAF7F2] font-sans flex flex-col min-h-screen antialiased`}
      >
        {!isHomePage && <Header />}
        <main className="flex-grow">{children}</main>
        {!isHomePage && <Footer />}
      </body>
    </html>
  );
}
