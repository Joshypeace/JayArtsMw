"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale"
}

export function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Set initial state based on direction
    const initialTransform = {
      up: "translateY(30px)",
      down: "translateY(-30px)",
      left: "translateX(30px)",
      right: "translateX(-30px)",
      fade: "translateY(0px)",
      scale: "translateY(0px) scale(0.9)",
    }

    element.style.opacity = "0"
    element.style.transform = initialTransform[direction]
    element.style.transition = `all 0.6s ease-out ${delay}ms`

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            // Trigger animation
            setTimeout(() => {
              const el = entry.target as HTMLElement
              el.style.opacity = "1"
              el.style.transform =
                direction === "scale" ? "translateY(0px) scale(1)" : "translateY(0px) translateX(0px)"
            }, delay)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, delay, direction])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
