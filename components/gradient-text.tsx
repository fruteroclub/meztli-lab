import type React from "react"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
}

export default function GradientText({ children, className = "", variant = "primary" }: GradientTextProps) {
  const gradientClass = variant === "primary" ? "gradient-text-primary" : "gradient-text-secondary"

  return <span className={`${gradientClass} ${className}`}>{children}</span>
}