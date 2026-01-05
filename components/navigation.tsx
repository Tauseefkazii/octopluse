"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { OctopulseLogo } from "@/components/OctopulseLogo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface NavigationProps {
  setPendingScrollTarget?: (id: string | null) => void
}

export function Navigation({ setPendingScrollTarget }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  /* ------------------ Scroll Detection ------------------ */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "process", "client", "result", "brand"]

      const current = sections.find((section) => {
        const el = document.getElementById(section)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })

      if (current) setActiveSection(current)
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Our Services" },
    { href: "#client", label: "Client Reviews" },
    { href: "#result", label: "Our Results" },
    { href: "#brand", label: "Partner Brand" },
  ]

  /* ------------------ Navigation Click ------------------ */
  const handleNavClick = (href: string) => {
    setIsOpen(false)

    const alreadyShown = localStorage.getItem("websitePopupShown")
    if (!alreadyShown) {
      setShowPopup(true)
      localStorage.setItem("websitePopupShown", "true")
    }

    const id = href.slice(1)

    setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return

      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
      setPendingScrollTarget?.(null)
    }, 100)
  }

  return (
    <>
      {/* ================== NAVBAR ================== */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-white/80 backdrop-blur shadow-sm" : "bg-white"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2"
            >
              <OctopulseLogo size={70} className="animate-float" />

              {/* <span className="text-2xl font-bold text-[#1b1464] sekuya-regular">
                Octopulses */}
              {/* </span> */}
            </Link>


            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative font-bold transition-colors
                    ${activeSection === item.href.slice(1)
                      ? "text-[#ff7a59]"
                      : "text-[#1b1464] hover:text-[#ff7a59]"
                    }
                  `}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#ff7a59]" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Button
                onClick={() => handleNavClick("#contact")}
                className="bg-[#17c1bd] hover:bg-[#13a9a0] text-white rounded-full px-6"
              >
                Talk to us →
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="lg:hidden bg-white shadow-lg"
            >
              <div className="px-4 py-6">

                <div className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left text-lg font-medium text-[#1b1464]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t">
                  <Button
                    onClick={() => handleNavClick("#contact")}
                    className="w-full bg-[#17c1bd] hover:bg-[#13a9a0] text-white rounded-full py-5 text-lg shadow-md"
                  >
                    Talk to us →
                  </Button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ================== FIRST TIME POPUP ================== */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-6 max-w-sm text-center shadow-xl"
            >
              <h3 className="text-xl font-bold text-[#1b1464] mb-2">
                Welcome 👋
              </h3>
              <p className="text-gray-600 mb-5">
                Please explore our full website to understand our services,
                results, and brand vision.
              </p>

              <Button
                onClick={() => setShowPopup(false)}
                className="bg-[#17c1bd] hover:bg-[#13a9a0] text-white rounded-full px-6"
              >
                Got it!
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
