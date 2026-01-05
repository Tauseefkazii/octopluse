"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function Results() {
  const results = [
    {
      percent: "78%",
      desc: "Increase in organic search visibility after improving website structure and content flow.",
      tags: ["SEO", "Web Optimization"],
      color: "from-purple-400 via-purple-500 to-pink-500",
    },
    {
      percent: "62%",
      desc: "Improvement in user engagement after redesigning the homepage and service pages.",
      tags: ["UI/UX", "Web Redesign"],
      color: "from-yellow-400 via-orange-500 to-red-500",
    },
    {
      percent: "1.8x",
      desc: "Increase in lead submissions after optimizing call-to-action placement and content hierarchy.",
      tags: ["Lead Optimization", "UX Strategy"],
      color: "from-green-400 via-emerald-500 to-teal-400",
    },
    {
      percent: "45%",
      desc: "Bounce rate reduction through performance enhancements and UX refinements.",
      tags: ["Performance", "Analytics"],
      color: "from-pink-500 via-rose-500 to-red-500",
    },
    {
      percent: "74%",
      desc: "Higher session duration achieved after restructuring the content layout for easier navigation.",
      tags: ["Content Strategy", "Web Design"],
      color: "from-blue-400 via-indigo-500 to-purple-500",
    },
  ];

  const [index, setIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % results.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Glass blocks in the background
  const glassBlocks = Array.from({ length: 5 }, (_, i) => ({
    size: Math.random() * 120 + 80,
    left: Math.random() * 100,
    top: Math.random() * 100,
    rotate: Math.random() * 360,
    duration: Math.random() * 20 + 15,
    clockwise: i % 2 === 0,
  }));

  return (
    <section id="result" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#ffffff] text-black py-20 px-6 md:px-12">
      
      {/* Background glass blocks */}
      {glassBlocks.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/20 backdrop-blur-xl"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            top: `${b.top}%`,
            transform: `translate(-50%, -50%) rotate(${b.rotate}deg)`,
            background: "rgba(255,255,255,0.1)",
          }}
          animate={{ rotate: b.clockwise ? 360 : -360 }}
          transition={{ repeat: Infinity, duration: b.duration, ease: "linear" }}
        />
      ))}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-3xl sm:text-4xl md:text-5xl text-center mb-14
                  bg-clip-text text-transparent"
        style={{ backgroundColor: "#1b1464" }}
      >
        OUR RESULTS
      </motion.h2>


      {/* Cards */}
      <div className="relative w-full max-w-4xl z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -80, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative backdrop-blur-[40px] bg-[rgb(243,246,255)] border border-white/20 shadow-2xl p-12 md:p-20
              rounded-[3rem] rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden"
          >
            <motion.div
              className="absolute top-8 right-8 text-black opacity-10"
              animate={{ scale: [1, 1.1, 1], rotate: [40, 60, 40] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp size={250} strokeWidth={1.2} />
            </motion.div>

            <div className="relative z-10">
              <motion.h3
                className={`text-7xl md:text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r ${results[index].color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {results[index].percent}
              </motion.h3>

              <p className="text-gray-700 text-lg md:text-xl mb-8">
                {results[index].desc}
              </p>

              <div className="flex justify-center flex-wrap gap-3 mb-8">
                {results[index].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border border-gray-400 rounded-full text-sm md:text-base hover:border-black hover:text-black transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bars Animation */}
              <div className="flex justify-center items-end gap-5 mt-8 h-44">
                <motion.div
                  className="w-8 bg-gradient-to-t from-gray-400 to-black rounded-t-lg"
                  animate={{ height: ["40%", "85%", "60%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-8 bg-gradient-to-t from-gray-400 to-black rounded-t-lg"
                  animate={{ height: ["70%", "100%", "80%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.3 }}
                />
                <motion.div
                  className="w-8 bg-gradient-to-t from-gray-400 to-black rounded-t-lg"
                  animate={{ height: ["50%", "90%", "60%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
