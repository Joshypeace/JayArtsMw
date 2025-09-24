"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, X } from "lucide-react"
import Link from "next/link"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [isDismissed])

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto z-40 max-w-sm sm:max-w-xs">
      <div className="bg-card border border-gold/50 rounded-lg p-3 sm:p-4 glow-gold animate-slide-up">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gold text-sm sm:text-base">Ready to Book?</h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-foreground flex-shrink-0"
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed">
          Get a free consultation and personalized quote for your project.
        </p>
        <Button asChild size="sm" className="w-full bg-gold text-deep-black hover:bg-gold/90 text-xs sm:text-sm">
          <Link href="/booking" className="flex items-center justify-center space-x-2">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Book Now</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
