"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IntersectionObserver } from "@/components/intersection-observer"
import { ParallaxSection } from "@/components/parallax-section"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <ParallaxSection speed={0.3} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10" />
        <img
          src="/luxury-photography-studio-dark-elegant.jpg"
          alt="JayArts Studio"
          className="w-full h-full object-cover"
        />
      </ParallaxSection>

      {/* Floating Elements - Hidden on mobile for better performance */}
      <div className="absolute inset-0 z-5 hidden sm:block">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-pulse animate-float" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-silver rounded-full animate-pulse delay-1000 animate-float" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-gold rounded-full animate-pulse delay-2000 animate-float" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-silver rounded-full animate-pulse delay-500 animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <IntersectionObserver>
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Logo Animation */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <img
                src="/images/jayarts-logo.png"
                alt="JayArts Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
              <span className="text-gold animate-shimmer">Capture</span> <span className="text-foreground">Your</span>{" "}
              <span className="text-silver animate-shimmer">Perfect</span>
              <br />
              <span className="text-foreground">Moment</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto text-pretty animate-fade-in px-4 sm:px-0">
              Professional photography, videography, and graphic design services that transform your vision into
              stunning reality. From weddings to corporate events, we create memories that last forever.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-scale-in px-4 sm:px-0">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gold text-deep-black hover:bg-gold/90 glow-gold transition-all duration-300 group hover-lift"
              >
                <Link href="/booking" className="flex items-center justify-center space-x-2">
                  <span>Book Your Session</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-silver text-silver hover:bg-silver hover:text-deep-black transition-all duration-300 group hover-lift bg-transparent"
              >
                <Link href="/portfolio" className="flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>View Our Work</span>
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-xs sm:max-w-2xl mx-auto px-4 sm:px-0">
              <IntersectionObserver className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gold mb-1 animate-shimmer">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
              </IntersectionObserver>
              <IntersectionObserver className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-silver mb-1 animate-shimmer">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Events Captured</div>
              </IntersectionObserver>
              <IntersectionObserver className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gold mb-1 animate-shimmer">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </IntersectionObserver>
              <IntersectionObserver className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-silver mb-1 animate-shimmer">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Support</div>
              </IntersectionObserver>
            </div>
          </div>
        </IntersectionObserver>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-gold rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
