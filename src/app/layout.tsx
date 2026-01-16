import type { Metadata } from "next";
// 引入 Google Fonts (就像 Python import matplotlib.font_manager)
import { Inter } from "next/font/google"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// === SEO 設定區 (The Metadata API) ===
// 這就像 HTML <head> 的 Python 字典版本
export const metadata: Metadata = {
  // 瀏覽器標籤頁顯示的標題 (權重最高)
  title: "Crypto Arbitrage Calculator | Instant Profit & Spread Analysis",
  
  // 搜尋結果摘要
  description: "Free tool to calculate crypto arbitrage profits instantly. Check ROI for Bitcoin, Ethereum, and USDT spreads between exchanges. Powered by Quant Lab.",
  
  // 關鍵字 (雖然 Google 現在不看重這個，但其他搜尋引擎會看)
  keywords: ["Crypto Arbitrage", "Bitcoin Spread", "Trading Calculator", "Arbitrage Bot", "ROI Calculator"],
  
  // OpenGraph: 當你把連結貼到 Telegram/Twitter 時顯示的預覽卡片
  openGraph: {
    title: "Crypto Arbitrage Profit Calculator",
    description: "Calculate your potential trading profits in real-time.",
    type: "website",
    siteName: "Quant Lab Tools",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 在這裡強制加入 "dark" class，這就是 Tailwind 深色模式的開關
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}