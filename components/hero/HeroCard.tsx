"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useEffect, useState } from "react"

/* ---------------------------------- */
/* DATA */
/* ---------------------------------- */

const CARD_DATA = [
  {
    title: "WEB DEVELOPMENT",
    subtitle: "Modern, scalable & performance-driven",
    accent: "#FACC15",
    items: [
      "Custom websites & web apps",
      "High-performance UI systems",
      "SEO-optimized builds",
      "Secure & scalable backend integration",
    ],
  },
  {
    title: "UI / UX DESIGN",
    subtitle: "Designs users love to use",
    accent: "#FACC15",
    items: [
      "User-centric interface design",
      "Wireframes & design systems",
      "Conversion-focused layouts",
      "Mobile-first experiences",
      "Brand-aligned visual identity",
    ],
  },
  {
    title: "DIGITAL STRATEGY",
    subtitle: "Turning vision into results",
    accent: "#FACC15",
    items: [
      "Product & growth strategy",
      "Market & competitor analysis",
      "User journey optimization",
      "Launch & scaling plans",
      "Data-driven decision making",
    ],
  },
  {
    title: "BRAND EXPERIENCE",
    subtitle: "Memorable, consistent & impactful",
    accent: "#FACC15",
    items: [
      "Brand positioning",
      "Visual & tone consistency",
      "Story-driven communication",
      "Digital brand guidelines",
      "Long-term brand growth",
    ],
  },
]


/* ---------------------------------- */
/* RESPONSIVE HOOK */
/* ---------------------------------- */

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return isMobile
}

/* ---------------------------------- */
/* MAIN EXPORT */
/* ---------------------------------- */

export default function AstraRailScroll() {
  const isMobile = useIsMobile()
  return isMobile ? <MobileSlider /> : <DesktopRail />
}

/* ---------------------------------- */
/* DESKTOP VERSION (UNCHANGED) */
/* ---------------------------------- */

function DesktopRail() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // shared transforms (ONLY ONCE)
  const baseY = useTransform(scrollYProgress, [0, 1], [120, -120])
  const baseOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])

  return (
    <section ref={ref} className="relative bg-[#F9FAFB] py-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E1B4B]">
            What We Do at <span className="text-[#FACC15]">Octopulse</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We design, build and scale digital products that create real business impact.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {CARD_DATA.map((data, i) => (
            <motion.div
              key={i}
              style={{
                y: baseY,
                opacity: baseOpacity,
              }}
              transition={{
                delay: i * 0.12,
              }}
            >
              <RailCard data={data} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



function RailCard({ data }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative h-[200px] bg-white rounded-xl shadow-xl overflow-hidden group"
    >
      {/* Diagonal Accent */}
      <div
        className="absolute top-0 right-0 h-full w-40 transform rotate-12 translate-x-20"
        style={{ backgroundColor: data.accent }}
      />

      {/* Content */}
      <div className="relative z-10 h-full p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xs tracking-widest font-semibold text-gray-500">
            OCTOPULSE
          </h3>

          <h2 className="mt-1 text-2xl font-bold text-[#1E1B4B]">
            {data.title}
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            {data.subtitle}
          </p>
        </div>

        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700">
          {data.items.map((item: string, i: number) => (
            <li key={i} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

/* ---------------------------------- */
/* MOBILE SLIDESHOW (PREMIUM) */
/* ---------------------------------- */

function MobileSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CARD_DATA.length)
    }, 2800) // pause timing

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-[#F9FAFB] py-24 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl font-bold text-[#1E1B4B] mb-2">
          Explore With <span className="text-[#FEB05D]">Octopulse</span>

        </h1>
        <p className="text-gray-600">
            Strategy, creativity, technology and production — built for modern brands.
          </p>
      </div>

      <div className="relative h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute w-[85%]"
          >
            <MobileCard data={CARD_DATA[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function MobileCard({ data }: any) {
  return (
    <div className="relative h-[350px] top-16 rounded-3xl bg-white p-6 shadow-2xl overflow-hidden">

      {/* Decorative shapes */}
      <span className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#FEB05D]/20" />
      <span className="absolute bottom-12 -left-12 h-32 w-32 rounded-full bg-[#1E1B4B]/10" />

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-sm tracking-widest font-semibold text-[#FEB05D]">
          {data.title}
        </h3>

        <h2 className="mt-2 text-2xl font-bold text-[#1E1B4B] leading-snug">
          Turning Ideas Into Impact
        </h2>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white-200 mb-4" />

      {/* Content */}
      <ul className="space-y-3 text-sm text-gray-700">
        {data.items.map((item: string, i: number) => (
          <li
            key={i}
            className="flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FEB05D]" />
            {item}
          </li>
        ))}
      </ul>

      {/* Footer */}
          <br/>
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Octopulse</span>
          {/* <span>Swipe →</span> */}
        </div>
      </div>
    </div>
  )
}
