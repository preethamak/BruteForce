'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/cryptocurrencies', label: 'Cryptocurrencies' },
    { href: '/products', label: 'Products' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" stroke="#2563eb" strokeWidth="3" fill={theme === 'dark' ? '#0f172a' : '#fff'} /><path d="M10 20l6-8 6 8" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            BruteForce
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full border border-blue-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 shadow hover:scale-110 transition-transform"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Open menu"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-blue-100 dark:border-gray-800">
          <div className="flex flex-col gap-1 py-2 px-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { toggleTheme(); setMenuOpen(false); }}
              className="mt-2 p-2 rounded-full border border-blue-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 shadow self-start"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 