"use client";

import { useEffect, useState } from "react";

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

export default function CoinGeckoCoins() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch coin data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg text-blue-600 font-semibold">Loading coins...</p>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg text-red-600 font-semibold">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Top Cryptocurrencies (Powered by CoinGecko)</h2>
        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
          <table className="min-w-full divide-y divide-blue-100">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">#</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Coin</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Price</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">24h %</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Market Cap</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">Volume</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-blue-50">
              {coins.map((coin) => (
                <tr key={coin.id} className="hover:bg-blue-50 transition">
                  <td className="px-4 py-2 font-bold text-blue-600">{coin.market_cap_rank}</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <img src={coin.image} alt={coin.name} className="w-6 h-6 rounded-full mr-2" />
                    <span className="font-semibold text-black">{coin.name}</span>
                    <span className="uppercase text-xs text-gray-500 ml-1">{coin.symbol}</span>
                  </td>
                  <td className="px-4 py-2 text-black">${coin.current_price.toLocaleString()}</td>
                  <td className={`px-4 py-2 font-semibold ${coin.price_change_percentage_24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                  </td>
                  <td className="px-4 py-2 text-black">${coin.market_cap.toLocaleString()}</td>
                  <td className="px-4 py-2 text-black">${coin.total_volume.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-500 text-center">Data from <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">CoinGecko API</a></p>
      </div>
    </section>
  );
}
