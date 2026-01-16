import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

// 
export const metadata: Metadata = {
  // 
  title: "Crypto Arbitrage Calculator | Instant Profit & Spread Analysis",
  description: "Free tool to calculate crypto arbitrage profits instantly. Check ROI for Bitcoin, Ethereum, and USDT spreads between exchanges. Powered by Quant Lab.",
  keywords: ["Crypto Arbitrage", "Bitcoin Spread", "Trading Calculator", "Arbitrage Bot", "ROI Calculator"],
  
  //
  openGraph: {
    title: "Crypto Arbitrage Profit Calculator",
    description: "Calculate your potential trading profits in real-time.",
    type: "website",
    siteName: "Quant Lab Tools",
  },

  // 
  // 
  verification: {
    google: "EKIrs1-K1lSp0Mm6q_9rYIulT-13t_zf_N-z0zZO-R0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
        <Analytics /> {/* Vercel */}
      </body>
    </html>
  );
}