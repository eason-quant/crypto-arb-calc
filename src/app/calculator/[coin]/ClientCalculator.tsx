"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

type CoinData = {
  name: string;
  symbol: string;
  defaultPrice: string;
  color: string;
};

export default function ClientCalculator({ data }: { data: CoinData }) {
  // 
  const [buyPrice, setBuyPrice] = useState<string>(data.defaultPrice);
  const [sellPrice, setSellPrice] = useState<string>("");
  const [amount, setAmount] = useState<string>("1000"); 
  
  const [profit, setProfit] = useState<number | null>(null);
  const [roi, setRoi] = useState<number | null>(null);

  useEffect(() => {
    // 
    setBuyPrice(data.defaultPrice);
    setSellPrice("");
  }, [data]);

  useEffect(() => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const inv = parseFloat(amount);

    if (!isNaN(buy) && !isNaN(sell) && !isNaN(inv) && buy > 0) {
      const grossProfit = (sell - buy) * (inv / buy);
      const roiPercent = ((sell - buy) / buy) * 100;
      setProfit(grossProfit);
      setRoi(roiPercent);
    } else {
      setProfit(null);
      setRoi(null);
    }
  }, [buyPrice, sellPrice, amount]);

  return (
    <Card className="w-full max-w-md bg-slate-900 border-slate-800 text-slate-100 shadow-2xl">
      <CardHeader className="text-center space-y-2">
        <div className="mx-auto bg-slate-800 p-3 rounded-full w-fit mb-2 border border-slate-700">
          {/*  */}
          <TrendingUp className={`w-8 h-8 ${data.color}`} />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight text-white">
          {data.name} Arbitrage Calculator
        </CardTitle>
        <CardDescription className="text-slate-400">
          Calculate {data.symbol} spreads & profit.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label className="text-slate-300">Investment (USDT)</Label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-slate-500">$</span>
            <Input 
              type="number" 
              className="pl-7 bg-slate-800 border-slate-700 text-white focus-visible:ring-blue-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-slate-300">Buy {data.symbol} ($)</Label>
            <Input 
              type="number" 
              className="bg-slate-800 border-slate-700 text-white focus-visible:ring-green-500"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-slate-300">Sell {data.symbol} ($)</Label>
            <Input 
              type="number" 
              className="bg-slate-800 border-slate-700 text-white focus-visible:ring-red-500"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Profit ({data.symbol})</span>
              <span className={`text-xl font-bold ${profit && profit > 0 ? 'text-green-400' : 'text-slate-500'}`}>
                {profit !== null ? `$${profit.toFixed(2)}` : "$0.00"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">ROI</span>
              <span className={`text-xl font-bold ${roi && roi > 0 ? 'text-green-400' : 'text-slate-500'}`}>
                {roi !== null ? `${roi.toFixed(2)}%` : "0.00%"}
              </span>
            </div>
          </div>
      </CardContent>

      <CardFooter className="flex flex-col space-y-3 pt-2">
          <Button 
            className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-semibold h-12 border border-slate-600"
            onClick={() => window.open("https://t.me/+GU_Dt0XWhIdlZThl", "_blank")}
          >
            <div className="flex items-center gap-2">
              <span>Join Arb Alert Bot Waitlist for Beta Access</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Button>
      </CardFooter>
    </Card>
  );
}