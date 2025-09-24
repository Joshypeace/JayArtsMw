"use client"

import { useEffect, useState } from "react"

export function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-deep-black flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Outer ring */}
          <div className="w-32 h-32 relative">
            <svg className="w-full h-full animate-spin" style={{ animationDuration: "2s" }} viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="70 30"
                strokeLinecap="round"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Middle ring */}
          <div className="absolute inset-2 w-28 h-28">
            <svg
              className="w-full h-full animate-spin"
              style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="3"
                strokeDasharray="60 40"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Inner ring */}
          <div className="absolute inset-4 w-24 h-24">
            <svg className="w-full h-full animate-spin" style={{ animationDuration: "1s" }} viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="50 50"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Center ring */}
          <div className="absolute inset-6 w-20 h-20">
            <svg
              className="w-full h-full animate-spin"
              style={{ animationDuration: "0.8s", animationDirection: "reverse" }}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="4"
                strokeDasharray="40 60"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* Core circle */}
          <div className="absolute inset-10 w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 bg-white rounded-full opacity-80 animate-pulse"></div>
          </div>

          {/* Outer glow effect */}
          <div
            className="absolute inset-0 w-32 h-32 rounded-full bg-gold/10 animate-ping"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-white tracking-wide">JayArts Multimedia</h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-gold rounded-full animate-bounce delay-150" />
            <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-300" />
          </div>
          <p className="text-silver/80 text-sm font-light">Loading your creative experience...</p>
        </div>
      </div>
    </div>
  )
}
