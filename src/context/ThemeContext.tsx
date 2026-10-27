'use client';

import { createContext, useContext, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function readTheme(): Theme {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
}
function subscribeTheme(listener: () => void) {
  const update = () => {
    document.documentElement.classList.toggle('dark', readTheme() === 'dark');
    listener();
  };
  update();
  window.addEventListener('storage', update);
  window.addEventListener('theme-change', update);
  return () => { window.removeEventListener('storage', update); window.removeEventListener('theme-change', update); };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, readTheme, () => 'light' as Theme);
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    window.dispatchEvent(new Event('theme-change'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 