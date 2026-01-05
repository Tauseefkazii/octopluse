"use client"

interface SkeletonProps {
  className?: string
  variant?: "text" | "rectangular" | "circular" | "rounded"
  width?: string | number
  height?: string | number
  animation?: "pulse" | "wave" | "none"
}

export function Skeleton({
  className = "",
  variant = "rectangular",
  width,
  height,
  animation = "pulse",
}: SkeletonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "text":
        return "h-4 rounded"
      case "circular":
        return "rounded-full"
      case "rounded":
        return "rounded-lg"
      default:
        return "rounded"
    }
  }

  const getAnimationClasses = () => {
    switch (animation) {
      case "wave":
        return "animate-wave"
      case "pulse":
        return "animate-pulse"
      default:
        return ""
    }
  }

  const style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  }

  return (
    <div
      className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 ${getVariantClasses()} ${getAnimationClasses()} ${className}`}
      style={style}
    >
      {animation === "wave" && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
      )}
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-orange-200 to-white px-6">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-start lg:items-center gap-12">
        
        {/* Left side - Text and button */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} width="100%" height={120} className="rounded-2xl" />
          ))}
        </div>

        {/* Right side - Hero image/grid placeholders */}
        <div className="flex-1 space-y-6">
          <Skeleton width="80%" height={60} className="mb-4" /> {/* Main Heading */}
          <Skeleton width="90%" height={20} className="mb-2" /> {/* Paragraph line 1 */}
          <Skeleton width="85%" height={20} className="mb-2" /> {/* Paragraph line 2 */}
          <Skeleton width="60%" height={48} className="rounded-full mt-6" /> {/* Button */}
        </div>
      </div>
    </div>
  );
}


export function AboutSkeleton() {
  return (
    <div className="py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Skeleton width={200} height={24} className="mx-auto mb-4" />
            <Skeleton width="60%" height={60} className="mx-auto mb-6" />
            <Skeleton width="80%" height={24} className="mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg">
                <Skeleton variant="circular" width={48} height={48} className="mx-auto mb-4" />
                <Skeleton width="80%" height={32} className="mx-auto mb-2" />
                <Skeleton width="60%" height={16} className="mx-auto" />
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Skeleton width="100%" height={500} className="rounded-3xl" />
            </div>
            <div className="space-y-6">
              <Skeleton width="80%" height={36} />
              <Skeleton width="100%" height={20} />
              <Skeleton width="100%" height={20} />
              <Skeleton width="90%" height={20} />
              <Skeleton width="100%" height={80} className="rounded-2xl" />

              <div className="grid md:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                    <Skeleton variant="circular" width={48} height={48} className="mb-4" />
                    <Skeleton width="80%" height={20} className="mb-2" />
                    <Skeleton width="100%" height={16} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SkillsSkeleton() {
  return (
    <div className="py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Skeleton width={200} height={24} className="mx-auto mb-4" />
            <Skeleton width="50%" height={60} className="mx-auto mb-6" />
            <Skeleton width="70%" height={24} className="mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <Skeleton variant="circular" width={64} height={64} className="mx-auto mb-4" />
                  <Skeleton width="60%" height={24} className="mx-auto" />
                </div>
                <div className="space-y-6">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="space-y-2">
                      <div className="flex justify-between">
                        <Skeleton width="40%" height={16} />
                        <Skeleton width="20%" height={16} />
                      </div>
                      <Skeleton width="100%" height={12} className="rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  <Skeleton variant="circular" width={56} height={56} />
                  <div className="flex-1">
                    <Skeleton width="60%" height={24} className="mb-3" />
                    <Skeleton width="100%" height={16} className="mb-6" />
                    <div className="flex flex-wrap gap-2">
                      {[...Array(4)].map((_, j) => (
                        <Skeleton key={j} width={80} height={24} className="rounded-full" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSkeleton() {
  return (
    <div className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Skeleton width={200} height={24} className="mx-auto mb-4" />
            <Skeleton width="40%" height={60} className="mx-auto mb-6" />
            <Skeleton width="70%" height={24} className="mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-xl overflow-hidden">
                <Skeleton width="100%" height={256} />
                <div className="p-8">
                  <Skeleton width="80%" height={28} className="mb-3" />
                  <Skeleton width="100%" height={16} className="mb-6" />

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="text-center">
                        <Skeleton width="60%" height={20} className="mx-auto mb-1" />
                        <Skeleton width="40%" height={14} className="mx-auto" />
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <Skeleton width="40%" height={20} className="mb-3" />
                    <div className="grid grid-cols-2 gap-2">
                      {[...Array(4)].map((_, j) => (
                        <Skeleton key={j} width="100%" height={16} />
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <Skeleton width="40%" height={20} className="mb-3" />
                    <div className="flex flex-wrap gap-2">
                      {[...Array(6)].map((_, j) => (
                        <Skeleton key={j} width={80} height={24} className="rounded" />
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Skeleton width="50%" height={40} className="rounded" />
                    <Skeleton width="50%" height={40} className="rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function BlogSkeleton() {
  return (
    <div className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Skeleton width={200} height={24} className="mx-auto mb-4" />
            <Skeleton width="30%" height={60} className="mx-auto mb-6" />
            <Skeleton width="80%" height={24} className="mx-auto" />
          </div>

          {/* Featured post skeleton */}
          <div className="mb-20">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <Skeleton width="100%" height={400} />
                <div className="p-12">
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Skeleton width={100} height={16} />
                      <Skeleton width={80} height={16} />
                    </div>
                    <Skeleton width="90%" height={36} className="mb-4" />
                    <Skeleton width="100%" height={20} className="mb-2" />
                    <Skeleton width="100%" height={20} className="mb-2" />
                    <Skeleton width="80%" height={20} className="mb-8" />
                  </div>
                  <Skeleton width={150} height={40} className="rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Blog posts grid skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-xl overflow-hidden">
                <Skeleton width="100%" height={192} />
                <div className="p-6">
                  <Skeleton width="80%" height={24} className="mb-4" />
                  <Skeleton width="100%" height={16} className="mb-2" />
                  <Skeleton width="100%" height={16} className="mb-2" />
                  <Skeleton width="60%" height={16} className="mb-6" />

                  <div className="flex items-center justify-between mb-6">
                    <Skeleton width={80} height={14} />
                    <Skeleton width={60} height={14} />
                  </div>

                  <Skeleton width={100} height={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
