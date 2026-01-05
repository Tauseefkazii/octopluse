"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    title: "Performance-driven marketing",
    content:
      "We focus on real business outcomes — qualified leads, conversions, and revenue — not vanity metrics or short-term wins."
  },
  {
    title: "Built for growing startups",
    content:
      "Our strategies are designed for startups that need traction fast, with scalable systems that evolve as your business grows."
  },
  {
    title: "Data-led strategy & execution",
    content:
      "Every campaign is guided by analytics, user behaviour, and continuous optimisation to improve ROI over time."
  },
  {
    title: "End-to-end in-house team",
    content:
      "From strategy and design to development and marketing execution, everything is handled by our in-house specialists."
  }
];

export default function WhyBlend() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-5 py-20 lg:py-28">
        <h2 className="text-[32px] lg:text-[40px] font-normal text-[#1b1464] mb-10 lg:mb-16">
          Why Octopulse?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT IMAGE — DESKTOP ONLY */}
          <div className="hidden lg:block rounded-[24px] max-w-lg overflow-hidden">
            <Image
              src="/octo1.png"
              alt="Why Octopulse"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* RIGHT ACCORDION */}
          <div className="space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-[18px] border border-[#e5e7eb] bg-[#ffffff] transition-all duration-300 ${
                    isOpen ? "shadow-sm" : ""
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between px-6 py-5 text-left text-[18px] font-medium text-[#1b1464]"
                  >
                    {item.title}
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                    )}
                  </button>

                  {/* CONTENT WITH MOBILE-FRIENDLY EFFECT */}
                 {/* CONTENT */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {item.content}
                    </p>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
