'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number | null;
  market_cap: number | null;
  market_cap_rank: number | null;
  price_change_percentage_24h: number | null;
  total_volume: number | null;
  sparkline_in_7d: {
    price: number[];
  };
}

export default function Dashboard() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [filteredData, setFilteredData] = useState<CryptoData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);

  useEffect(() => {
    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const filtered = cryptoData.filter(crypto => 
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, cryptoData]);

  const fetchCryptoData = async () => {
    try {
      const response = await fetch('/api/crypto');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setCryptoData(data);
      setFilteredData(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load crypto data');
      setLoading(false);
    }
  };

  const formatNumber = (num: number | null) => {
    if (num === null) return '-';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const formatPercentage = (num: number | null) => {
    if (num === null) return '-';
    return `${num >= 0 ? '+' : ''}${num.toFixed(2)}%`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Cryptocurrencies</h1>
        
        {/* Search Bar */}
        <div className="mb-6 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search cryptocurrencies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Crypto List */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Coin</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">24h %</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Market Cap</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredData.map((crypto) => (
                      <motion.tr
                        key={crypto.id}
                        whileHover={{ backgroundColor: '#f9fafb' }}
                        onClick={() => setSelectedCrypto(crypto)}
                        className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img className="h-8 w-8 rounded-full" src={crypto.image} alt={crypto.name} />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{crypto.name}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{crypto.symbol.toUpperCase()}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900 dark:text-white">
                          {formatNumber(crypto.current_price)}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-right text-sm ${
                          crypto.price_change_percentage_24h && crypto.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {formatPercentage(crypto.price_change_percentage_24h)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900 dark:text-white">
                          {formatNumber(crypto.market_cap)}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Selected Crypto Details */}
          <div className="lg:col-span-1">
            {selectedCrypto ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center mb-6">
                  <img className="h-12 w-12 rounded-full" src={selectedCrypto.image} alt={selectedCrypto.name} />
                  <div className="ml-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{selectedCrypto.name}</h2>
                    <p className="text-gray-500 dark:text-gray-400">{selectedCrypto.symbol.toUpperCase()}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Current Price</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatNumber(selectedCrypto.current_price)}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">24h Change</p>
                    <p className={`text-xl font-bold ${
                      selectedCrypto.price_change_percentage_24h && selectedCrypto.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {formatPercentage(selectedCrypto.price_change_percentage_24h)}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Market Cap</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{formatNumber(selectedCrypto.market_cap)}</p>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">7-Day Price Trend</p>
                    <div className="h-48">
                      <Line
                        data={{
                          labels: Array.from({ length: selectedCrypto.sparkline_in_7d.price.length }, (_, i) => i + 1),
                          datasets: [
                            {
                              label: 'Price',
                              data: selectedCrypto.sparkline_in_7d.price,
                              borderColor: selectedCrypto.price_change_percentage_24h && selectedCrypto.price_change_percentage_24h >= 0 ? '#059669' : '#dc2626',
                              tension: 0.4,
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              display: false,
                            },
                          },
                          scales: {
                            y: {
                              display: false,
                            },
                            x: {
                              display: false,
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center text-gray-500 dark:text-gray-400">
                Select a cryptocurrency to view details
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 