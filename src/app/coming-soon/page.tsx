import Navbar from "@/components/Navbar";

export default function ComingSoon() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      <Navbar />
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id="aurora1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%" gradientTransform="rotate(20)">
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#f0abfc" stopOpacity="0.2" />
            </radialGradient>
            <radialGradient id="aurora2" cx="50%" cy="50%" r="80%" fx="50%" fy="50%" gradientTransform="rotate(-20)">
              <stop offset="0%" stopColor="#f472b6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <ellipse cx="720" cy="400" rx="700" ry="300" fill="url(#aurora1)" />
          <ellipse cx="900" cy="600" rx="500" ry="200" fill="url(#aurora2)" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="text-5xl font-extrabold text-black mb-6 drop-shadow-lg">Coming Soon</h1>
        <p className="text-xl text-gray-800 mb-8 max-w-xl">
          This feature is under development and will be available soon. Stay tuned for powerful new tools and resources from the BruteForce team!
        </p>
        <a href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">Back to Home</a>
      </div>
    </main>
  );
}
