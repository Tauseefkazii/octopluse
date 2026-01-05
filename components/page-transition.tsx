"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: React.ReactNode
}

const loadingMessages = [
  "Let's go...",
  "Almost there...",
  "Just a moment...",
  "Getting ready...",
  "Hang tight...",
  "Loading magic...",
  "All set!"
]

export function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState(loadingMessages[0])
  const pathname = usePathname()
  const totalSegments = 20 // battery segments

  useEffect(() => {
    let msgIndex = 0
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.floor(Math.random() * 5 + 1)
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }

        const newMsgIndex = Math.floor((next / 100) * (loadingMessages.length - 1))
        if (newMsgIndex !== msgIndex) {
          msgIndex = newMsgIndex
          setMessage(loadingMessages[msgIndex])
        }

        return next
      })
    }, 100)

    return () => clearInterval(interval)
  }, [pathname])

  const filledSegments = Math.round((progress / 100) * totalSegments)

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ease-out">
          <div className="relative w-48 h-48 mb-6">
            {/* Animated SVG */}
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

              {/* Moving paths */}
              <path
                d="M30 55 C20 55 15 45 15 35 C15 15 45 15 45 35 C45 45 40 50 35 55"
                stroke="url(#loaderGradient)"
                strokeWidth="4"
                className="animate-pulse"
              />
              <path
                d="M25 55 C25 70 15 75 10 65"
                opacity="0.6"
                stroke="url(#loaderGradient)"
                strokeWidth="4"
                className="animate-pulse"
              />
              <path
                d="M30 55 C30 65 25 70 20 60"
                opacity="0.4"
                stroke="url(#loaderGradient)"
                strokeWidth="4"
                className="animate-pulse"
              />
              {/* Animated drawing path */}
              <path
                d="M35 55 C40 60 45 60 50 50 L60 75 L75 25 L85 50 H95"
                stroke="url(#loaderGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-path"
              />

              {/* Circles (blinking eyes/hands) */}
              <circle cx="38" cy="35" r="3" fill="url(#loaderGradient)" />
              <circle cx="25" cy="35" r="3" fill="url(#loaderGradient)" />
            </svg>
          </div>

          <h2 className="text-3xl font-heading font-bold text-dark mb-4 tracking-tight animate-pulse">
            {message} ({progress}%)
          </h2>

          {/* Battery segmented loader */}
          <div className="flex space-x-1 w-48 h-4 mb-3">
            {Array.from({ length: totalSegments }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-full rounded-sm transition-colors duration-300 ${
                  i < filledSegments ? "bg-gradient-to-r from-primary to-secondary" : "bg-blue-500"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Page content */}
      <div className={`transition-all duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes drawPath {
          0% {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
          }
          100% {
            stroke-dasharray: 200;
            stroke-dashoffset: 0;
          }
        }

        .animate-draw-path {
          animation: drawPath 3s linear infinite;
        }

        @keyframes handMove {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(10deg); }
        }

        .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  )
}
