import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-blue-100/30 dark:border-gray-800/40 py-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand and tagline */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <span className="text-2xl font-extrabold tracking-widest bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase">BRUTEFORCE</span>
          <span className="text-gray-600 dark:text-gray-300 text-base font-medium">Empowering your financial future with AI-driven investment solutions.</span>
        </div>
        {/* Product */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Product</h3>
          <ul className="space-y-1">
            <li><Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Features</Link></li>
            <li><Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Pricing</Link></li>
            <li><Link href="/security" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Security</Link></li>
            <li><Link href="/api" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">API</Link></li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Company</h3>
          <ul className="space-y-1">
            <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link></li>
            <li><Link href="/careers" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Careers</Link></li>
            <li><Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Legal</h3>
          <ul className="space-y-1">
            <li><Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Privacy</Link></li>
            <li><Link href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Terms</Link></li>
            <li><Link href="/security" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Security</Link></li>
          </ul>
        </div>
      </div>
          </footer>
  );
}
