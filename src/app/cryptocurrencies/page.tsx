"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  sparkline_in_7d: { price: number[] };
}

export default function Cryptocurrencies() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true"
      );
      const data = await res.json();
      setCryptos(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <main className={`min-h-screen pb-10 pt-24 px-4 bg-gradient-to-br ${theme === "dark" ? "from-gray-900 to-gray-800" : "from-blue-50 to-indigo-100"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Top Cryptocurrencies</h1>
          <Link href="/" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline text-lg">← Back to Home</Link>
        </div>
        <div className="overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-900">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-blue-600 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Logo</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Symbol</th>
                <th className="px-4 py-3 text-right text-xs font-bold text-white uppercase tracking-wider">Price</th>
                <th className="px-4 py-3 text-right text-xs font-bold text-white uppercase tracking-wider">24h %</th>
                <th className="px-4 py-3 text-right text-xs font-bold text-white uppercase tracking-wider">Market Cap</th>
                <th className="px-4 py-3 text-right text-xs font-bold text-white uppercase tracking-wider">Volume</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-white uppercase tracking-wider">7D Trend</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
              {loading ? (
                <tr>
                  <td colSpan={8} className="text-center py-8 text-lg text-gray-500 dark:text-gray-400">Loading...</td>
                </tr>
              ) : (
                cryptos.map((coin, idx) => (
                  <motion.tr
                    key={coin.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-4 py-3"><img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" /></td>
                    <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">{coin.name}</td>
                    <td className="px-4 py-3 uppercase text-gray-500 dark:text-gray-400">{coin.symbol}</td>
                    <td className="px-4 py-3 text-right font-mono text-blue-700 dark:text-blue-300">${coin.current_price.toLocaleString()}</td>
                    <td className={`px-4 py-3 text-right font-semibold ${coin.price_change_percentage_24h >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                      {coin.price_change_percentage_24h?.toFixed(2)}%
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">${coin.market_cap.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">${coin.total_volume.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center">
                      <Sparkline data={coin.sparkline_in_7d.price} color={coin.price_change_percentage_24h >= 0 ? '#16a34a' : '#dc2626'} />
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

function Sparkline({ data, color }: { data: number[]; color: string }) {
  // Simple SVG sparkline
  if (!data || data.length === 0) return null;
  const w = 80, h = 32;
  const min = Math.min(...data), max = Math.max(...data);
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * (h - 4) - 2;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={w} height={h} className="inline-block">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
}
