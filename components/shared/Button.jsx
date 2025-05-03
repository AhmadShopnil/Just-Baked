"use client"

import Link from "next/link"

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  fullWidth = false,
  ...props
}) {
  const baseStyles = "px-4 py-2 rounded text-sm font-medium transition-colors"

  const variants = {
    primary: "bg-amber-800 text-white hover:bg-amber-900",
    secondary: "bg-white text-amber-800 border border-amber-800 hover:bg-amber-50",
    orange: "bg-orange-500 text-white hover:bg-orange-600",
  }

  const styles = `${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={styles} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
