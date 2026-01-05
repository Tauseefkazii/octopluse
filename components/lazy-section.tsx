"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface LazySectionProps {
  children: ReactNode
  skeleton: ReactNode
  threshold?: number
  rootMargin?: string
}

export function LazySection({ children, skeleton, threshold = 0.1, rootMargin = "50px" }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsVisible(true)
          // Simulate loading time
          setTimeout(() => {
            setIsLoaded(true)
          }, 500)
        }
      },
      { threshold, rootMargin },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, isLoaded])

  return (
    <div ref={sectionRef} className="min-h-[200px]">
      {isLoaded ? (
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {children}
        </div>
      ) : (
        <div className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>{skeleton}</div>
      )}
    </div>
  )
}
