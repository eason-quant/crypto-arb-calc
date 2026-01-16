export const coins = {
  bitcoin: {
    name: "Bitcoin",
    symbol: "BTC",
    defaultPrice: "65000",
    color: "text-orange-500", // BTC 
  },
  ethereum: {
    name: "Ethereum",
    symbol: "ETH",
    defaultPrice: "3500",
    color: "text-blue-500", // ETH 
  },
  solana: {
    name: "Solana",
    symbol: "SOL",
    defaultPrice: "150",
    color: "text-purple-500", // SOL 
  },
  dogecoin: {
    name: "Dogecoin",
    symbol: "DOGE",
    defaultPrice: "0.15",
    color: "text-yellow-500", // DOGE 
  },
  binancecoin: {
    name: "BNB",
    symbol: "BNB",
    defaultPrice: "600",
    color: "text-yellow-400",
  },
  ripple: {
    name: "XRP",
    symbol: "XRP",
    defaultPrice: "0.60",
    color: "text-slate-200",
  }
};

export type CoinKey = keyof typeof coins;