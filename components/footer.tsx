"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Heart, Code, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#cbd6ec] text-gray-800 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/50 via-transparent to-white/30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                {/* <Code className="w-6 h-6 text-purple-600" /> */}
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Octopulse
                </h3>
              </div>
              <p className="text-gray-700 mb-6 max-w-md leading-relaxed">
                Always Ahead Of The Current
              </p>

              <div className="flex space-x-4 lg:space-x-6">
                {[{
                  icon: Github,
                  href: "https://github.com/ARSLAn701",
                  label: "GitHub"
                },{
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/arslan-deshmukh-503357360",
                  label: "LinkedIn"
                },{
                  icon: Mail,
                  href: "mailto:arslanofficialworks@gmail.com",
                  label: "Email"
                }].map(({icon: Icon, href, label}) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5 text-gray-800 group-hover:text-purple-600 transition-colors duration-300" />
                    <span className="sr-only">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg lg:text-xl font-bold mb-4 text-gray-900">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: "#about", label: "Home" },
                  { href: "#experience", label: "Our Services" },
                  { href: "#skills", label: "Process" },
                  { href: "#projects", label: "Client" },
                  { href: "#blog", label: "FAQ" },
                  { href: "#contact", label: "Mail Us" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm lg:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div>
              <h4 className="text-lg lg:text-xl font-bold mb-4 text-gray-900">Expertise</h4>
              <ul className="space-y-3">
                {[
  "Search Engine Optimization (SEO)",
  "Content Marketing",
  "Social Media Marketing (SMM)",
  "Pay-Per-Click Advertising (PPC)",
  "Email Marketing",
  "Affiliate Marketing",
  "Influencer Marketing",
  "Web Analytics & Conversion Rate Optimization (CRO)"
]
.map((service) => (
                  <li key={service} className="text-gray-700 hover:text-purple-600 transition-colors duration-300 cursor-default text-sm lg:text-base">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300/20 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4 py-6 lg:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-700 text-sm lg:text-base">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by Octopulse © 2025-26. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-xs lg:text-sm">Privacy Policy</Link>
            <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-xs lg:text-sm">Terms of Service</Link>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:text-purple-600 hover:bg-white/20 rounded-full p-2 transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
