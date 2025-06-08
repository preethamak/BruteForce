import Navbar from "@/components/Navbar";
import { GradientText } from "@/components/AnimatedText";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-indigo-200">
      <Navbar />
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 transition-opacity duration-700 opacity-100 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-black mb-6 drop-shadow-lg transition-opacity duration-700 opacity-100 animate-fade-in">
            <GradientText>About BruteForce</GradientText>
          </h1>
          <p className="text-xl text-black mb-10 max-w-2xl mx-auto transition-opacity duration-700 opacity-100 animate-fade-in">
            BruteForce is an AI-powered investment platform for modern investors. We provide real-time cryptocurrency prices, advanced analytics, and portfolio tracking in a beautiful, intuitive dashboard.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white transition-opacity duration-700 opacity-100 animate-fade-in">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-black mb-4 transition-opacity duration-700 opacity-100 animate-fade-in">
              <GradientText>Our Mission</GradientText>
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto transition-opacity duration-700 opacity-100 animate-fade-in">
              Our mission is to empower investors with cutting-edge AI tools and real-time data, making crypto investing accessible, transparent, and rewarding for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow text-center transition-opacity duration-700 opacity-100 animate-fade-in">
              <h3 className="text-2xl font-bold text-black mb-2">Transparency & Trust</h3>
              <p className="text-black">
                We believe in transparency, security, and putting our users first. Your data and investments are protected with industry-leading security practices.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl shadow text-center transition-opacity duration-700 opacity-100 animate-fade-in">
              <h3 className="text-2xl font-bold text-black mb-2">Innovation & Simplicity</h3>
              <p className="text-black">
                Our platform combines powerful analytics with a simple, elegant interface, so you can focus on making smart investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-100 transition-opacity duration-700 opacity-100 animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4 transition-opacity duration-700 opacity-100 animate-fade-in">
            <GradientText>Our Vision</GradientText>
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto transition-opacity duration-700 opacity-100 animate-fade-in">
            We envision a world where everyone can invest in crypto with confidence, clarity, and control. BruteForce is here to guide you on your journey to financial empowerment.
          </p>
        </div>
      </section>
      {/* What Makes Us Different Section */}
      <section className="py-16 bg-white transition-opacity duration-700 opacity-100 animate-fade-in">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12 transition-opacity duration-700 opacity-100 animate-fade-in">
            <GradientText>What Makes Us Different</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-2xl shadow text-center transition-opacity duration-700 opacity-100 animate-fade-in">
              <h4 className="text-xl font-bold text-black mb-2">AI Insights</h4>
              <p className="text-black">Our AI engine delivers actionable insights and personalized recommendations.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl shadow text-center transition-opacity duration-700 opacity-100 animate-fade-in">
              <h4 className="text-xl font-bold text-black mb-2">Real-Time Data</h4>
              <p className="text-black">Stay ahead with instant updates on prices, trends, and market movements.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-blue-100 p-6 rounded-2xl shadow text-center transition-opacity duration-700 opacity-100 animate-fade-in">
              <h4 className="text-xl font-bold text-black mb-2">User-Centric Design</h4>
              <p className="text-black">A beautiful, intuitive dashboard designed for investors of all levels.</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 p-6 rounded-2xl shadow text-center transition-opacity duration-700 opacity-100 animate-fade-in">
              <h4 className="text-xl font-bold text-black mb-2">Secure & Private</h4>
              <p className="text-black">We use industry-leading security and privacy practices to protect your data.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 transition-opacity duration-700 opacity-100 animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to experience the future of crypto investing?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of investors who trust BruteForce for their crypto journey.
          </p>
          <a
            href="/signup"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Create Free Account
          </a>
        </div>
      </section>
          </main>
  );
}
