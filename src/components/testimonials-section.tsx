"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah & Michael Johnson",
      role: "Wedding Clients",
      content:
        "JayArts captured our wedding day perfectly! Every moment was beautifully documented, and the final photos exceeded our expectations. Their professionalism and artistic eye are unmatched.",
      rating: 5,
      image: "/happy-couple-wedding-portrait.jpg",
    },
    {
      name: "David Chen",
      role: "CEO, TechStart Inc.",
      content:
        "The corporate video JayArts produced for our company launch was exceptional. They understood our vision and delivered a product that perfectly represents our brand values.",
      rating: 5,
      image: "/business-executive-portrait.png",
    },
    {
      name: "Maria Rodriguez",
      role: "Fashion Designer",
      content:
        "Working with JayArts on my brand identity was a game-changer. Their creative approach and attention to detail helped establish my brand in the competitive fashion market.",
      rating: 5,
      image: "/creative-fashion-designer-portrait.jpg",
    },
    {
      name: "James Wilson",
      role: "Musician",
      content:
        "The music video JayArts created for my latest single was absolutely stunning. Their cinematic approach and creative vision brought my music to life visually.",
      rating: 5,
      image: "/musician-artist-portrait.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-16 sm:py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance">
            <span className="text-foreground">What Our</span> <span className="text-gold">Clients</span>{" "}
            <span className="text-silver">Say</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto text-pretty px-4 sm:px-0">
            {`Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
              JayArts Multimedia.`}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 glow-gold">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="text-center">
                <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-gold mx-auto mb-4 sm:mb-6" />

                <blockquote className="text-base sm:text-lg md:text-xl text-foreground mb-4 sm:mb-6 text-pretty leading-relaxed">
                  `{testimonials[currentIndex].content}`
                </blockquote>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-current" />
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gold"
                  />
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-foreground text-sm sm:text-base">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gold" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
