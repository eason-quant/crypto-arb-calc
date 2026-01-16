import { coins, CoinKey } from "@/lib/coins";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ClientCalculator from "./ClientCalculator";

// 
type Props = {
  params: Promise<{ coin: string }>;
};

// 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // 
  const resolvedParams = await params;
  const coinKey = resolvedParams.coin.toLowerCase();
  const coinData = coins[coinKey as CoinKey];

  if (!coinData) {
    return {
      title: "Crypto Arbitrage Calculator",
    };
  }

  return {
    title: `${coinData.name} (${coinData.symbol}) Arbitrage Profit Calculator`,
    description: `Calculate huge ${coinData.name} arbitrage spreads instantly. Free tool for ${coinData.symbol} traders to check ROI between exchanges.`,
    keywords: [`${coinData.name} arbitrage`, `${coinData.symbol} profit calculator`, "crypto spread tool"],
    openGraph: {
        title: `${coinData.name} Arbitrage Calculator`,
        description: `Check live spreads for ${coinData.name} now.`,
    }
  };
}

// === 
export default async function CoinPage({ params }: Props) {
  // 
  const resolvedParams = await params;
  const coinKey = resolvedParams.coin.toLowerCase();
  
  const coinData = coins[coinKey as CoinKey];

  // 
  if (!coinData) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      {/*  */}
      <ClientCalculator data={coinData} />
      
      {/*  */}
      <div className="mt-8 text-slate-500 text-sm space-x-4">
        <span>Popular:</span>
        {Object.entries(coins).map(([key, c]) => (
            <a key={key} href={`/calculator/${key}`} className="hover:text-blue-400 hover:underline capitalize">
                {c.symbol} Calc
            </a>
        ))}
        <a href="/" className="hover:text-blue-400 hover:underline">Home</a>
      </div>
    </main>
  );
}