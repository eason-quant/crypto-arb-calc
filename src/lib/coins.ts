// src/lib/coins.ts

export const coins = {
  // === (Major) ===
  bitcoin: { name: "Bitcoin", symbol: "BTC", defaultPrice: "65000", color: "text-orange-500" },
  ethereum: { name: "Ethereum", symbol: "ETH", defaultPrice: "3500", color: "text-blue-500" },
  solana: { name: "Solana", symbol: "SOL", defaultPrice: "150", color: "text-purple-500" },
  binancecoin: { name: "BNB", symbol: "BNB", defaultPrice: "600", color: "text-yellow-500" },
  ripple: { name: "XRP", symbol: "XRP", defaultPrice: "0.60", color: "text-slate-200" },
  cardano: { name: "Cardano", symbol: "ADA", defaultPrice: "0.45", color: "text-blue-400" },
  avalanche: { name: "Avalanche", symbol: "AVAX", defaultPrice: "35", color: "text-red-500" },
  
  // === Meme Coins ===
  dogecoin: { name: "Dogecoin", symbol: "DOGE", defaultPrice: "0.15", color: "text-yellow-400" },
  shibainu: { name: "Shiba Inu", symbol: "SHIB", defaultPrice: "0.000025", color: "text-red-400" },
  pepe: { name: "Pepe", symbol: "PEPE", defaultPrice: "0.000007", color: "text-green-500" },
  floki: { name: "Floki", symbol: "FLOKI", defaultPrice: "0.00018", color: "text-yellow-600" },
  bonk: { name: "Bonk", symbol: "BONK", defaultPrice: "0.000025", color: "text-orange-400" },
  wif: { name: "dogwifhat", symbol: "WIF", defaultPrice: "3.50", color: "text-yellow-900" },
  
  // === Layer 2 & DeFi ===
  arbitrum: { name: "Arbitrum", symbol: "ARB", defaultPrice: "1.10", color: "text-blue-300" },
  optimism: { name: "Optimism", symbol: "OP", defaultPrice: "2.50", color: "text-red-500" },
  polygon: { name: "Polygon", symbol: "MATIC", defaultPrice: "0.70", color: "text-purple-600" },
  chainlink: { name: "Chainlink", symbol: "LINK", defaultPrice: "18.00", color: "text-blue-600" },
  near: { name: "NEAR Protocol", symbol: "NEAR", defaultPrice: "7.20", color: "text-slate-100" },
  toncoin: { name: "Toncoin", symbol: "TON", defaultPrice: "6.80", color: "text-blue-400" },
  
  // === others ===
  litecoin: { name: "Litecoin", symbol: "LTC", defaultPrice: "85", color: "text-slate-400" },
  bitcoincash: { name: "Bitcoin Cash", symbol: "BCH", defaultPrice: "450", color: "text-green-400" },
  polkadot: { name: "Polkadot", symbol: "DOT", defaultPrice: "7.00", color: "text-pink-500" },
  tron: { name: "TRON", symbol: "TRX", defaultPrice: "0.12", color: "text-red-600" },
};

export type CoinKey = keyof typeof coins;