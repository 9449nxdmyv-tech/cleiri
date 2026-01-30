import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/layout/LayoutShell";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Cleiri Quezada | Singer & Songwriter",
    template: "%s | Cleiri Quezada",
  },
  description:
    "Award-winning artist from the Rio Grande Valley, blending Spanish ballads with the soulful sound of mariachi.",
};

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
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} bg-[var(--color-bone)] font-sans flex flex-col min-h-screen antialiased`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
