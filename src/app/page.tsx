"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { GradientText, TrueFocusText, ScrollDown } from "@/components/AnimatedText";

const features = [
  {
    title: "Real-Time Data",
    description: "Get instant updates on cryptocurrency prices and market movements.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Advanced Analytics",
    description: "Make informed decisions with our comprehensive market analysis tools.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Portfolio Tracking",
    description: "Monitor your investments and track your portfolio performance over time.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-indigo-200">
      <Navbar />
      {/* Hero Section */}
      <motion.section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="absolute inset-0 pointer-events-none select-none opacity-60">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#6366f1" fillOpacity="0.08" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left flex-1"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black mb-8 drop-shadow-lg">
              <TrueFocusText>
                Track Your <GradientText>Crypto Portfolio</GradientText>
                <span className="sr-only"> </span>
                <span className="text-blue-600"> in <GradientText>Real-Time</GradientText></span>
              </TrueFocusText>
            </h1>
            <p className="text-2xl text-black mb-12 max-w-3xl mx-auto md:mx-0">
              Get real-time cryptocurrency prices, market trends, and analytics.<br/>
              Make informed decisions with our comprehensive crypto dashboard.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/dashboard"
                  className="bg-blue-600 shadow-lg text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="bg-white shadow-lg text-gray-800 px-10 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors border border-gray-200 text-lg"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
            <ScrollDown />
          </motion.div>
          <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80" alt="Crypto Dashboard" className="w-[340px] md:w-[450px] h-auto rounded-2xl shadow-2xl object-cover" />
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section className="py-20 bg-white relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full opacity-30 blur-2xl z-0"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tr from-pink-100 via-blue-100 to-purple-100 rounded-full opacity-30 blur-2xl z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black">
              <GradientText>Why Choose Us</GradientText>
            </h2>
            <p className="mt-4 text-lg text-black">
              Everything you need to track your crypto investments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center border border-blue-50"
              >
                <div className="w-16 h-16 bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 rounded-full flex items-center justify-center mb-4 shadow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  <GradientText>{feature.title}</GradientText>
                </h3>
                <p className="text-black mb-2">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Animated Stats Section */}
      <motion.section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex-1 text-center">
            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">120K+</h3>
            <p className="mt-2 text-lg text-black">Active Users</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="flex-1 text-center">
            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 animate-pulse">$2.5B+</h3>
            <p className="mt-2 text-lg text-black">Assets Tracked</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }} className="flex-1 text-center">
            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse">8M+</h3>
            <p className="mt-2 text-lg text-black">Transactions</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial/Trust Section */}
      <motion.section className="py-20 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-2">
              <GradientText>Trusted by Investors Worldwide</GradientText>
            </h2>
            <p className="text-lg text-black">See what our users are saying</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="pixel-transition glare-hover bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow flex flex-col items-center text-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" className="w-16 h-16 rounded-full mb-4 border-4 border-blue-200" />
              <p className="text-black mb-2">“The best crypto dashboard I’ve ever used. Real-time data and beautiful UI!”</p>
              <span className="font-semibold text-blue-700">Alex P.</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="pixel-transition glare-hover bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl shadow flex flex-col items-center text-center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 2" className="w-16 h-16 rounded-full mb-4 border-4 border-purple-200" />
              <p className="text-black mb-2">“I love the analytics and the portfolio tracking. Highly recommended!”</p>
              <span className="font-semibold text-purple-700">Priya S.</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="pixel-transition glare-hover bg-gradient-to-br from-pink-50 to-blue-100 p-8 rounded-2xl shadow flex flex-col items-center text-center">
              <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="User 3" className="w-16 h-16 rounded-full mb-4 border-4 border-pink-200" />
              <p className="text-black mb-2">“Super easy to use and the design is stunning. My go-to crypto app!”</p>
              <span className="font-semibold text-pink-700">Michael T.</span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              <TrueFocusText>Ready to Start Tracking Your <GradientText>Crypto</GradientText>?</TrueFocusText>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of investors who trust our platform
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Create Free Account
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
