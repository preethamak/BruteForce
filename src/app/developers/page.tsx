import Navbar from "@/components/Navbar";
import { GradientText } from "@/components/AnimatedText";
import Waves from "@/components/Waves";

export default function Developers() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-indigo-200 relative overflow-hidden">
      <Waves
        lineColor="#1e3a8a"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <Navbar />
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-white/80 rounded-3xl shadow-xl p-8 backdrop-blur-md">
          <h1 className="text-5xl font-extrabold text-black mb-6 drop-shadow-lg">
            <GradientText>Developers</GradientText>
          </h1>
          <p className="text-xl text-black mb-10 max-w-2xl mx-auto">
            Build, integrate, and innovate with BruteForce's powerful APIs and developer tools. Empower your apps and workflows with real-time crypto data and analytics.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 bg-white/80 rounded-3xl shadow-xl p-8 backdrop-blur-md">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-black mb-4 drop-shadow">
              <GradientText>API & Integration</GradientText>
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Access real-time cryptocurrency prices, market data, and analytics via our robust API. Seamlessly integrate BruteForce into your trading bots, dashboards, or financial apps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow text-center">
              <h3 className="text-2xl font-bold text-black mb-2">REST API</h3>
              <p className="text-black">
                Simple, secure, and well-documented endpoints for all your crypto data needs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl shadow text-center">
              <h3 className="text-2xl font-bold text-black mb-2">Webhooks & Events</h3>
              <p className="text-black">
                Get notified instantly about price changes, market events, and portfolio updates.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center bg-white/80 rounded-3xl shadow-xl p-8 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-black mb-4 drop-shadow">
            <GradientText>Developer Resources</GradientText>
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto mb-8">
            Explore our guides, SDKs, and sample projects to get started quickly. Join our developer community for support, updates, and collaboration.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="/coming-soon" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">API Docs</a>
            <a href="/coming-soon" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium border border-blue-200 hover:bg-blue-50 transition-colors">SDKs & Tools</a>
            <a href="/coming-soon" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium border border-blue-200 hover:bg-blue-50 transition-colors">Community</a>
          </div>
        </div>
      </section>
      {/* Meet the Developers Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 bg-white/80 rounded-3xl shadow-xl p-8 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-black text-center mb-12 drop-shadow">
            <GradientText>Meet the Developers</GradientText>
          </h2>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            {/* Developer 1 */}
            <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl shadow-xl p-8 w-full max-w-md flex flex-col items-center transition-transform hover:scale-105 duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center mb-4 shadow-lg">
                <span className="text-4xl font-bold text-white select-none">BB</span>
              </div>
              <h3 className="text-2xl font-extrabold text-black mb-1">Bhuvan Bhat</h3>
              <p className="text-blue-700 font-semibold mb-2">Smart Contract & Backend Developer, Stock Market Advisor & Trader</p>
              <p className="text-gray-700 mb-4 text-center">Bhuvan is a multi-talented developer and financial expert. He specializes in building robust smart contracts, scalable backend systems, and also provides valuable insights as a stock market advisor and active trader. His deep understanding of both crypto and traditional markets ensures BruteForce delivers secure, reliable, and innovative solutions for all investors.</p>
              <a href="mailto:bhuvan1000000@gmail.com" className="text-blue-600 font-medium hover:underline">bhuvan1000000@gmail.com</a>
            </div>
            {/* Developer 2 */}
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl shadow-xl p-8 w-full max-w-md flex flex-col items-center transition-transform hover:scale-105 duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-400 via-blue-400 to-purple-400 flex items-center justify-center mb-4 shadow-lg">
                <span className="text-4xl font-bold text-white select-none">PA</span>
              </div>
              <h3 className="text-2xl font-extrabold text-black mb-1">Preetham AK</h3>
              <p className="text-pink-700 font-semibold mb-2">NFT & Smart Contract Developer, Auditor, AI Tools & Frontend Engineer</p>
              <p className="text-gray-700 mb-4 text-center">Preetham is a versatile developer with a passion for innovation. He builds and audits smart contracts, creates cutting-edge NFT projects, develops AI-powered tools, and crafts seamless frontend experiences. His commitment to security, creativity, and user experience drives the continuous evolution of BruteForce.</p>
              <a href="mailto:preethamak07@gmail.com" className="text-pink-600 font-medium hover:underline">preethamak07@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
