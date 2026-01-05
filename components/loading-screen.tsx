"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12 + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 600);
          return 100;
        }
        return next;
      });
    }, 220);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ease-out"
    >
      {/* Animated SVG Logo */}
      <div className="relative w-48 h-48 mb-6">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-2xl animate-float"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <defs>
            <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          <path
            d="M30 55 C20 55 15 45 15 35 C15 15 45 15 45 35 C45 45 40 50 35 55"
            stroke="url(#loaderGradient)"
            strokeWidth={4}
          />
          <path
            d="M25 55 C25 70 15 75 10 65"
            opacity={0.6}
            stroke="url(#loaderGradient)"
            strokeWidth={4}
          />
          <path
            d="M30 55 C30 65 25 70 20 60"
            opacity={0.4}
            stroke="url(#loaderGradient)"
            strokeWidth={4}
          />
          <path
            d="M35 55 C40 60 45 60 50 50 L60 75 L75 25 L85 50 H95"
            stroke="url(#loaderGradient)"
            strokeWidth={4}
            className="logo-pulse-path"
          />
          <circle cx="25" cy="35" r={3} fill="url(#loaderGradient)" />
          <circle cx="38" cy="35" r={3} fill="url(#loaderGradient)" />
        </svg>
      </div>

      {/* Loading Text */}
      <motion.h2
        className="text-3xl font-heading font-bold text-dark mb-2 tracking-tight animate-pulse"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      >
        Loading
      </motion.h2>

      {/* Progress Bar */}
      <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary animate-blob rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
