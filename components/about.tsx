"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const highlightColor = "rgb(246, 190, 45)";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="brand"
      className="w-full bg-[#F9FAFB] px-4 sm:px-6 py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start md:items-center">
          {/* ================= LEFT : OCTOPULSE ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="rounded-3xl md:rounded-none bg-white md:bg-transparent p-6 sm:p-8 md:p-0 shadow-sm md:shadow-none text-center md:text-left"
          >
            <span className="inline-block mb-4 rounded-full border border-gray-300 px-4 py-2 text-xs tracking-wide text-gray-600">
              Parent Brand · Digital Marketing Agency
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1E1B4B]">
              OCTOPULSE
              <span className="block mt-1 text-base sm:text-lg tracking-[0.28em] text-gray-700">
                DIGITAL MARKETING
              </span>
            </h1>

            {/* <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-gray-600 leading-relaxed mx-auto md:mx-0">
              <span style={{ color: highlightColor }} className="font-medium">
                {" "}
                Octopulse
              </span>{" "}
              is a strategy-driven digital marketing agency built for brands
              that want more than visibility. We design intelligent digital
              systems that combine brand identity measurable growth in
              competitive markets.
            </p> */}

            {/* Quote */}
            <div className="mt-6 sm:mt-8 max-w-xl mx-auto md:mx-0 border-l-4 border-[#1E1B4B] pl-5">
              <p className="text-sm sm:text-base italic text-gray-700 leading-relaxed">
                “Strong brands don’t chase attention — they earn authority
                through clarity, consistency, and performance.”
              </p>
              <span className="mt-2 block text-xs tracking-wide text-gray-500">
                — Octopulse Philosophy
              </span>
            </div>

            {/* Pills */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 justify-center md:justify-start text-sm">
              {[
                "Brand Strategy",
                "SEO & Organic Growth",
                "Performance Marketing",
                "Website & UX Design",
                "Marketing Automation",
              ].map((item, i) => (
                <span
                  key={i}
                  className="rounded-full border border-gray-300 px-4 py-2 text-gray-700 hover:border-[rgb(246,190,45)] transition"
                >
                  {item}
                </span>
              ))}
            </div>
            {/* CTA */}

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="https://www.instagram.com/octopulse.uk?igsh=MWl5NHlieDdsOTFpeQ=="
                className="rounded-full px-7 py-3 sm:px-8 sm:py-4 text-sm tracking-wide text-[#1E1B4B] border border-[#1E1B4B] hover:bg-[#1E1B4B] hover:text-white transition"
              >
                Our Social Media
              </Link>

              <Link
                href="mailto:contact@octopulse.co.uk"
                style={{ backgroundColor: highlightColor }}
                className="rounded-full px-7 py-3 sm:px-8 sm:py-4 text-sm tracking-wide text-black hover:opacity-90 transition"
              >
                Contact OCTOPULSE
              </Link>
            </div>
          </motion.div>

          {/* ================= RIGHT : ASTRA ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-3xl md:rounded-none bg-white md:bg-transparent p-6 sm:p-8 md:p-0 shadow-sm md:shadow-none text-center md:text-left"
          >
            <span className="inline-block mb-4 rounded-full border border-gray-300 px-4 py-2 text-xs tracking-wide text-gray-600">
              Strategic Marketing Sub-Brand · Franchise Ready
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1E1B4B]">
              ASTRA
              <span className="block mt-1 text-base sm:text-lg tracking-[0.28em] text-gray-700">
                MARKETING
              </span>
            </h2>

            <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-gray-600 leading-relaxed mx-auto md:mx-0">
              ASTRA Marketing is Octopulse’s dedicated growth engine — built to
              scale Indian businesses through
              <span style={{ color: highlightColor }} className="font-medium">
                {" "}
                performance
              </span>
              ,
              <span style={{ color: highlightColor }} className="font-medium">
                {" "}
                conversion-focused execution
              </span>{" "}
              and
              <span style={{ color: highlightColor }} className="font-medium">
                {" "}
                local market dominance
              </span>
              .
            </p>

            {/* Pills */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 justify-center md:justify-start text-sm">
              {[
                "Performance Marketing",
                "SEO & Organic Growth",
                "Website & Funnel Design",
                "Local Market Expansion",
                "Social Media Marketing",
              ].map((item, i) => (
                <span
                  key={i}
                  className="rounded-full border border-gray-300 px-4 py-2 text-gray-700 hover:border-[rgb(246,190,45)] transition"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="https://www.instagram.com/astramarketing.in"
                className="rounded-full px-7 py-3 sm:px-8 sm:py-4 text-sm tracking-wide text-[#1E1B4B] border border-[#1E1B4B] hover:bg-[#1E1B4B] hover:text-white transition"
              >
                Our Social Media
              </Link>

              <Link
                href="mailto:contact@astramarketing.in"
                style={{ backgroundColor: highlightColor }}
                className="rounded-full px-7 py-3 sm:px-8 sm:py-4 text-sm tracking-wide text-black hover:opacity-90 transition"
              >
                Contact ASTRA
              </Link>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <p className="mt-16 sm:mt-20 text-center text-xs tracking-wide text-gray-500">
          Structured for scale · Designed for franchises · Powered by Octopulse
        </p>
      </div>
    </section>
  );
}
