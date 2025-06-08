import React, { useRef, useState } from 'react';

// Gradient Text
export function GradientText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}

// Blur Text
export function BlurText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`blur-sm hover:blur-none transition-all duration-300 cursor-pointer ${className}`}>{children}</span>
  );
}

// Pressure Text (scale on hover)
export function PressureText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block transition-transform duration-200 hover:scale-110 active:scale-95 ${className}`}>{children}</span>
  );
}

// Glitch Text
export function GlitchText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative glitch-text ${className}`}>{children}</span>
  );
}

// True Focus (shine effect on hover)
export function TrueFocusText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative true-focus-text ${className}`}>{children}</span>
  );
}

// Scroll Down Indicator
export function ScrollDown() {
  return (
    <div className="flex flex-col items-center mt-8 animate-bounce">
      <span className="text-gray-400 text-lg">Scroll Down</span>
      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

// CSS for Glitch and True Focus
// Add this to your global CSS or module CSS
// .glitch-text {
//   color: #fff;
//   position: relative;
// }
// .glitch-text::before, .glitch-text::after {
//   content: attr(data-text);
//   position: absolute;
//   left: 0;
//   width: 100%;
//   overflow: hidden;
//   color: #fff;
//   z-index: 1;
// }
// .glitch-text::before {
//   animation: glitchTop 1s infinite linear alternate-reverse;
//   color: #f0f;
//   z-index: 2;
// }
// .glitch-text::after {
//   animation: glitchBottom 1s infinite linear alternate-reverse;
//   color: #0ff;
//   z-index: 3;
// }
// @keyframes glitchTop {
//   0% { clip-path: inset(0 0 80% 0); transform: translate(-2px, -2px); }
//   20% { clip-path: inset(0 0 60% 0); transform: translate(2px, 2px); }
//   40% { clip-path: inset(0 0 40% 0); transform: translate(-2px, 2px); }
//   60% { clip-path: inset(0 0 20% 0); transform: translate(2px, -2px); }
//   80% { clip-path: inset(0 0 10% 0); transform: translate(-2px, 2px); }
//   100% { clip-path: inset(0 0 0 0); transform: translate(0, 0); }
// }
// @keyframes glitchBottom {
//   0% { clip-path: inset(80% 0 0 0); transform: translate(2px, 2px); }
//   20% { clip-path: inset(60% 0 0 0); transform: translate(-2px, -2px); }
//   40% { clip-path: inset(40% 0 0 0); transform: translate(2px, -2px); }
//   60% { clip-path: inset(20% 0 0 0); transform: translate(-2px, 2px); }
//   80% { clip-path: inset(10% 0 0 0); transform: translate(2px, -2px); }
//   100% { clip-path: inset(0 0 0 0); transform: translate(0, 0); }
// }
// .true-focus-text {
//   position: relative;
//   display: inline-block;
//   background: linear-gradient(90deg, #fff 0%, #fbbf24 50%, #fff 100%);
//   background-size: 200% 100%;
//   background-position: 100% 0;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   transition: background-position 0.5s;
// }
// .true-focus-text:hover {
//   background-position: 0 0;
// }
