"use client"

import { Skeleton } from "./skeleton-loader"

// ---------------------------
// Navigation Skeleton
// ---------------------------
export function NavigationSkeleton() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-white/10 bg-white/60 dark:bg-black/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Skeleton className="h-8 w-28 rounded-md" />

          <div className="hidden lg:flex items-center space-x-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-20 rounded-full" />
            ))}
          </div>

          <Skeleton className="h-10 w-24 rounded-full" />
        </div>
      </div>
    </nav>
  )
}

// ---------------------------
// Card Skeleton
// ---------------------------
export function CardSkeleton() {
  return (
    <div className="rounded-xl p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md animate-pulse">
      <div className="flex items-center space-x-4 mb-4">
        <Skeleton className="h-12 w-12 rounded-full" />

        <div className="flex-1">
          <Skeleton className="h-4 w-3/5 mb-2" />
          <Skeleton className="h-3 w-2/5" />
        </div>
      </div>

      <Skeleton className="h-3 w-full mb-2" />
      <Skeleton className="h-3 w-full mb-2" />
      <Skeleton className="h-3 w-4/5 mb-4" />

      <div className="flex space-x-2">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
    </div>
  )
}

// ---------------------------
// Form Skeleton
// ---------------------------
export function FormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-32 w-full rounded-xl" />
      </div>

      <Skeleton className="h-14 w-full rounded-xl" />
    </div>
  )
}

// ---------------------------
// Timeline Skeleton
// ---------------------------
export function TimelineSkeleton() {
  return (
    <div className="relative">
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/20 rounded-full" />

      <div className="space-y-16">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="relative">
            <Skeleton
              className="h-8 w-8 rounded-full absolute left-4 md:left-1/2 transform md:-translate-x-1/2"
            />

            <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"}`}>
              <div className={`${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                <div className="bg-white/10 dark:bg-white/5 rounded-xl p-8 backdrop-blur-md">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <Skeleton className="h-6 w-2/3 mb-2" />
                      <Skeleton className="h-4 w-1/2 mb-2" />
                      <div className="flex items-center gap-4">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </div>
                    <Skeleton className="h-6 w-20 rounded-full" />
                  </div>

                  <Skeleton className="h-3 w-full mb-6" />

                  <div className="mb-6">
                    <Skeleton className="h-5 w-40 mb-3" />
                    <div className="space-y-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-3 w-5/6" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <Skeleton className="h-5 w-32 mb-3" />
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-6 w-20 rounded" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ---------------------------
// Stats Skeleton
// ---------------------------
export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl p-8 text-center bg-white/10 dark:bg-white/5 backdrop-blur-lg"
        >
          <Skeleton className="h-12 w-12 rounded-full mx-auto mb-4" />
          <Skeleton className="h-8 w-3/5 mx-auto mb-2" />
          <Skeleton className="h-4 w-4/5 mx-auto" />
        </div>
      ))}
    </div>
  )
}
