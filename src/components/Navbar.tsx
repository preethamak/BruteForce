'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [folderOpen, setFolderOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const folderRef = useRef<HTMLDivElement | null>(null);
  const settingsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (folderRef.current && !folderRef.current.contains(event.target as Node)) {
        setFolderOpen(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setSettingsOpen(false);
      }
    }
    if (folderOpen || settingsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [folderOpen, settingsOpen]);

  // Dropdown menu links
  const folderLinks = [
    {
      href: '/about',
      label: 'About',
      icon: (
        <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
      ),
    },
    {
      href: '/cryptocurrencies',
      label: 'Cryptocurrencies',
      icon: (
        <svg className="w-5 h-5 mr-3 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12h8m-4-4v8" stroke="currentColor" strokeWidth="2" /></svg>
      ),
    },
    {
      href: '/products',
      label: 'Products',
      icon: (
        <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="2" /></svg>
      ),
    },
    {
      href: '/pricing',
      label: 'Pricing',
      icon: (
        <svg className="w-5 h-5 mr-3 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
    },
    {
      href: '/developers',
      label: 'Developers',
      icon: (
        <svg className="w-5 h-5 mr-3 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
      ),
    },
    {
      href: '/timeline',
      label: 'Timeline',
      icon: (
        <svg className="w-5 h-5 mr-3 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white dark:bg-gray-900 shadow-md border-b border-blue-100/30 dark:border-gray-800/40 ${isScrolled ? 'backdrop-blur-xl' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Folder Icon and Brand */}
          <div className="flex items-center gap-2 relative" ref={folderRef}>
            <button
              onClick={() => setFolderOpen((open) => !open)}
              className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none border border-transparent hover:border-blue-200 dark:hover:border-gray-700 transition"
              aria-label="Open folder menu"
              tabIndex={0}
            >
              {/* Modern Folder SVG Icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="10" width="26" height="15" rx="3" fill={theme === 'dark' ? '#1e293b' : '#e0e7ef'} stroke="#2563eb" strokeWidth="2"/>
                <path d="M5 10V8a2 2 0 012-2h6l2 4h12a2 2 0 012 2v1" fill={theme === 'dark' ? '#334155' : '#f1f5fa'} stroke="#2563eb" strokeWidth="2"/>
              </svg>
            </button>
            {/* Special Dropdown Menu */}
            {folderOpen && (
              <div className="absolute -left-8 top-16 w-56 bg-white dark:bg-gray-900 shadow-2xl rounded-xl border border-blue-200 dark:border-gray-800 py-2 animate-fade-in-down z-50 transition-all duration-200" style={{boxShadow: '0 8px 32px 0 rgba(37,99,235,0.15)'}}>
                {/* Arrow Pointer */}
                <div className="absolute -top-3 left-10 w-6 h-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24"><polygon points="12,0 24,24 0,24" fill="#2563eb" className="drop-shadow-lg"/></svg>
                </div>
                <div className="rounded-xl overflow-hidden">
                  {folderLinks.map(link => {
                    // Redirect to /coming-soon for Products, Pricing, Timeline
                    const comingSoonLabels = ["Products", "Pricing", "Timeline"];
                    if (comingSoonLabels.includes(link.label)) {
                      return (
                        <Link
                          key={link.href}
                          href={"/coming-soon"}
                          className="block px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-base font-semibold tracking-wide border-b border-blue-50 last:border-b-0 dark:border-gray-800"
                          onClick={e => {
                            e.preventDefault();
                            setFolderOpen(false);
                            window.location.href = "/coming-soon";
                          }}
                        >
                          <span className="flex items-center">{link.icon}{link.label}</span>
                        </Link>
                      );
                    }
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-base font-semibold tracking-wide border-b border-blue-50 last:border-b-0 dark:border-gray-800"
                        onClick={() => setFolderOpen(false)}
                      >
                        <span className="flex items-center">{link.icon}{link.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
            <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-widest select-none ml-4">
              {/* Lightning Bolt Symbol for Tech/Finance Vibe */}
              <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bolt-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563eb" />
                    <stop offset="1" stopColor="#a21caf" />
                  </linearGradient>
                </defs>
                <path d="M18 2L6 18h7l-1 12 11-16h-7l2-12z" fill="url(#bolt-gradient)"/>
              </svg>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg text-3xl font-black tracking-widest uppercase">BRUTEFORCE</span>
            </Link>
          </div>

          {/* Desktop Nav - Only Login/Signup/Theme/Settings */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6 xl:gap-10">
            <Link
              href="/login"
              className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 font-semibold bg-white hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-300 dark:border-blue-300 dark:hover:bg-gray-800 transition-colors duration-150 text-base"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-extrabold shadow-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 transition-all duration-200 text-base tracking-wide drop-shadow-md border-2 border-transparent hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.18)' }}
            >
              SIGNUP
            </Link>
            {/* Settings Dropdown */}
            <div className="relative" ref={settingsRef}>
              <button
                onClick={() => setSettingsOpen((open) => !open)}
                className="ml-2 p-2 rounded-full border border-blue-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 shadow hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                aria-label="Open settings menu"
              >
                {/* Gear Icon */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.25 2.25c.47-1.1 2.03-1.1 2.5 0l.4.94a1.5 1.5 0 002.1.81l.9-.52c1.04-.6 2.3.66 1.7 1.7l-.52.9a1.5 1.5 0 00.81 2.1l.94.4c1.1.47 1.1 2.03 0 2.5l-.94.4a1.5 1.5 0 00-.81 2.1l.52.9c.6 1.04-.66 2.3-1.7 1.7l-.9-.52a1.5 1.5 0 00-2.1.81l-.4.94c-.47 1.1-2.03 1.1-2.5 0l-.4-.94a1.5 1.5 0 00-2.1-.81l-.9.52c-1.04.6-2.3-.66-1.7-1.7l.52-.9a1.5 1.5 0 00-.81-2.1l-.94-.4c-1.1-.47-1.1-2.03 0-2.5l.94-.4a1.5 1.5 0 00.81-2.1l-.52-.9c-.6-1.04.66-2.3 1.7-1.7l.9.52a1.5 1.5 0 002.1-.81l.4-.94z" />
                  <circle cx="12" cy="12" r="3" stroke="#2563eb" strokeWidth="2" fill={theme === 'dark' ? '#1e293b' : '#fff'} />
                </svg>
              </button>
              {settingsOpen && (
                <div className="absolute right-0 top-14 w-56 bg-white dark:bg-gray-900 shadow-2xl rounded-xl border border-blue-200 dark:border-gray-800 py-2 animate-fade-in-down z-50 transition-all duration-200" style={{boxShadow: '0 8px 32px 0 rgba(37,99,235,0.15)'}}>
                  {/* Arrow Pointer */}
                  <div className="absolute -top-3 right-10 w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24"><polygon points="12,0 24,24 0,24" fill="#2563eb" className="drop-shadow-lg"/></svg>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    <Link
                      href="/profile"
                      className="block px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-base font-semibold tracking-wide border-b border-blue-50 dark:border-gray-800"
                      onClick={() => setSettingsOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => { toggleTheme(); setSettingsOpen(false); }}
                      className="w-full text-left px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-base font-semibold tracking-wide border-b border-blue-50 dark:border-gray-800"
                    >
                      Switch Theme
                    </button>
                    <Link
                      href="/docs"
                      className="block px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-base font-semibold tracking-wide border-b border-blue-50 dark:border-gray-800"
                      onClick={() => setSettingsOpen(false)}
                    >
                      Docs
                    </Link>
                    <button
                      onClick={() => { setSettingsOpen(false); /* Add logout logic here */ }}
                      className="w-full text-left px-6 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-800 hover:text-red-700 dark:hover:text-red-300 transition-colors text-base font-semibold tracking-wide"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger - Only Login/Signup/Theme */}
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
      {/* Mobile Menu - Only Login/Signup/Theme */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-blue-100 dark:border-gray-800 animate-fade-in-down">
          <div className="flex flex-col gap-1 py-2 px-4">
            <Link
              href="/login"
              className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 font-semibold bg-white hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-300 dark:border-blue-300 dark:hover:bg-gray-800 transition-colors duration-150 text-base"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-extrabold shadow-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 transition-all duration-200 text-base self-start tracking-wide drop-shadow-md border-2 border-transparent hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.18)' }}
              onClick={() => setMenuOpen(false)}
            >
              SIGNUP
            </Link>
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
