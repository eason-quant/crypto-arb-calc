"use client"; // Client Component

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Home() {
  // === 1. State (變量) ===
  const [buyPrice, setBuyPrice] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<string>("");
  const [amount, setAmount] = useState<string>(""); 
  
  // 結果
  const [profit, setProfit] = useState<number | null>(null);
  const [roi, setRoi] = useState<number | null>(null);

  // === 2. Logic (核心算法) ===
  useEffect(() => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const inv = parseFloat(amount);

    if (!isNaN(buy) && !isNaN(sell) && !isNaN(inv) && buy > 0) {
      // 算法: (Sell - Buy) * (Investment / Buy)
      const grossProfit = (sell - buy) * (inv / buy);
      const roiPercent = ((sell - buy) / buy) * 100;
      
      setProfit(grossProfit);
      setRoi(roiPercent);
    } else {
      setProfit(null);
      setRoi(null);
    }
  }, [buyPrice, sellPrice, amount]);

  // === 3. UI (視覺) ===
  return (
    // 背景：深色模式 (Slate-950)
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans">
      
      <Card className="w-full max-w-md bg-slate-900 border-slate-800 text-slate-100 shadow-2xl">
        
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto bg-blue-500/10 p-3 rounded-full w-fit mb-2">
            <TrendingUp className="w-8 h-8 text-blue-400" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-white">
            Crypto Arbitrage Calculator
          </CardTitle>
          <CardDescription className="text-slate-400">
            Calculate your potential spreads instantly.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Investment Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-slate-300">Investment Amount ($)</Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-500">$</span>
              <Input 
                id="amount" 
                type="number" 
                placeholder="1000" 
                className="pl-7 bg-slate-800 border-slate-700 text-white focus-visible:ring-blue-500 placeholder:text-slate-600"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Buy Price */}
            <div className="space-y-2">
              <Label htmlFor="buy" className="text-slate-300">Buy Price ($)</Label>
              <Input 
                id="buy" 
                type="number" 
                placeholder="65000" 
                className="bg-slate-800 border-slate-700 text-white focus-visible:ring-green-500 placeholder:text-slate-600"
                value={buyPrice}
                onChange={(e) => setBuyPrice(e.target.value)}
              />
            </div>
            
            {/* Sell Price */}
            <div className="space-y-2">
              <Label htmlFor="sell" className="text-slate-300">Sell Price ($)</Label>
              <Input 
                id="sell" 
                type="number" 
                placeholder="65500" 
                className="bg-slate-800 border-slate-700 text-white focus-visible:ring-red-500 placeholder:text-slate-600"
                value={sellPrice}
                onChange={(e) => setSellPrice(e.target.value)}
              />
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Estimated Profit</span>
              <span className={`text-xl font-bold ${profit && profit > 0 ? 'text-green-400' : 'text-slate-500'}`}>
                {profit !== null ? `$${profit.toFixed(2)}` : "$0.00"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">ROI (%)</span>
              <span className={`text-xl font-bold ${roi && roi > 0 ? 'text-green-400' : 'text-slate-500'}`}>
                {roi !== null ? `${roi.toFixed(2)}%` : "0.00%"}
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-3 pt-2">
          {/* CTA Button */}
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold h-12"
            onClick={() => window.open("https://t.me/+GU_Dt0XWhIdlZThl", "_blank")}
          >
            <div className="flex items-center gap-2">
              <span>Get Real-time Arb Alerts (Free)</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Button>
          <p className="text-xs text-center text-slate-500">
            Powered by Quant Lab &bull; Updates Every Second
          </p>
        </CardFooter>

      </Card>
    </main>
  );
}