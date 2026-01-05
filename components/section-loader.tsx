"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Skeleton } from "./skeleton-loader"

interface SectionLoaderProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function SectionLoader({ children, delay = 0, className = "" }: SectionLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  if (!isLoaded) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="space-y-4">
          <Skeleton width="60%" height={32} />
          <Skeleton width="100%" height={20} />
          <Skeleton width="100%" height={20} />
          <Skeleton width="80%" height={20} />
        </div>
      </div>
    )
  }

  return <div className={`animate-fadeIn ${className}`}>{children}</div>
}
