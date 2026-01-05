"use client"

import { motion } from "framer-motion"

interface FlipCardProps {
  frontTitle: string
  frontDesc: string
  backTitle: string
  backDesc: string
  accentColor?: string
  index: number
}

export function FlipCard({
  frontTitle,
  frontDesc,
  backTitle,
  backDesc,
  accentColor = "rgb(246, 190, 45)",
  index,
}: FlipCardProps) {
  return (
    <div
      className="relative h-[320px] w-[260px]"
      style={{ perspective: "1400px" }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: [0, 180, 180, 0] }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          delay: index * 0.15,
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl bg-white p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          style={{
            backfaceVisibility: "hidden",
            borderTop: `4px solid ${accentColor}`,
          }}
        >
          <h3 className="text-xl font-semibold text-[#1E1B4B]">
            {frontTitle}
          </h3>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            {frontDesc}
          </p>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            backgroundColor: "#1E1B4B",
          }}
        >
          <h3 className="text-xl font-semibold" style={{ color: accentColor }}>
            {backTitle}
          </h3>
          <p className="mt-4 text-sm text-gray-200 leading-relaxed">
            {backDesc}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
