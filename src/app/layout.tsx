'use client';

import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { usePathname } from 'next/navigation';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
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
        <title>Cleiri Quezada | Singer &amp; Songwriter</title>
        <meta name="description" content="Award-winning artist from the Rio Grande Valley, blending Spanish ballads with the soulful sound of mariachi." />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} bg-[#E7DBCB] font-sans flex flex-col min-h-screen antialiased`}
      >
        {!isHomePage && <Header />}
        <main className="flex-grow">{children}</main>
        {!isHomePage && <Footer />}
      </body>
    </html>
  );
}
