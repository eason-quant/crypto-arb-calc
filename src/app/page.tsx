import { coins } from "@/lib/coins";
import ClientCalculator from "./calculator/[coin]/ClientCalculator"; // 重用剛剛寫好的組件

export default function Home() {
  // 
  const defaultCoin = coins.bitcoin;

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      {/*  */}
      <ClientCalculator data={defaultCoin} />
      
      {/*  */}
      <div className="mt-12 text-center space-y-4">
        <h2 className="text-slate-400 text-sm font-medium uppercase tracking-wider">
          Supported Cryptocurrencies
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-lg">
          {Object.entries(coins).map(([key, c]) => (
            <a 
              key={key} 
              href={`/calculator/${key}`} 
              className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs hover:border-blue-500 hover:text-blue-400 transition-colors"
            >
              {c.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}