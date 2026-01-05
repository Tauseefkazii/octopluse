"use client"

export function OctopulseLogo({
  size = 40,
  className = "",
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`drop-shadow-md ${className}`}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      <path
        d="M30 55 C20 55 15 45 15 35 C15 15 45 15 45 35 C45 45 40 50 35 55"
        stroke="url(#loaderGradient)"
        strokeWidth={4}
      />
      <path
        d="M25 55 C25 70 15 75 10 65"
        opacity={0.6}
        stroke="url(#loaderGradient)"
        strokeWidth={4}
      />
      <path
        d="M30 55 C30 65 25 70 20 60"
        opacity={0.4}
        stroke="url(#loaderGradient)"
        strokeWidth={4}
      />
      <path
        d="M35 55 C40 60 45 60 50 50 L60 75 L75 25 L85 50 H95"
        stroke="url(#loaderGradient)"
        strokeWidth={4}
        className="logo-pulse-path"
      />
      <circle cx="25" cy="35" r={3} fill="url(#loaderGradient)" />
      <circle cx="38" cy="35" r={3} fill="url(#loaderGradient)" />
    </svg>
  )
}
