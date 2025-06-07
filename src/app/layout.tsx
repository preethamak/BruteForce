import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'BruteForce Crypto Dashboard',
  description: 'Professional crypto dashboard with live data, analytics, and beautiful design.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <div className="pt-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
