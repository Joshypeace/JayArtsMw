import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function FeaturedPortfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Elegant Wedding at Central Park",
      category: "Wedding Photography",
      image: "/elegant-wedding-photography-central-park.jpg",
      description: "A romantic wedding celebration captured with artistic precision and emotional depth.",
    },
    {
      id: 2,
      title: "Corporate Brand Video",
      category: "Videography",
      image: "/professional-corporate-video-production.jpg",
      description: "Dynamic corporate video showcasing innovation and professional excellence.",
    },
    {
      id: 3,
      title: "Luxury Product Showcase",
      category: "Product Photography",
      image: "/luxury-product-photography-jewelry.jpg",
      description: "High-end product photography highlighting craftsmanship and elegance.",
    },
    {
      id: 4,
      title: "Music Video Production",
      category: "Music Video",
      image: "/cinematic-music-video-production.jpg",
      description: "Cinematic music video with creative storytelling and visual effects.",
    },
    {
      id: 5,
      title: "Brand Identity Design",
      category: "Graphic Design",
      image: "/modern-brand-identity-design-logo.jpg",
      description: "Complete brand identity package with modern design aesthetics.",
    },
    {
      id: 6,
      title: "Portrait Session",
      category: "Portrait Photography",
      image: "/photography-studio.png",
      description: "Professional portrait session capturing personality and character.",
    },
  ]

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance">
            <span className="text-foreground">Featured</span> <span className="text-gold">Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto text-pretty px-4 sm:px-0">
            Explore our latest work and see how we bring creative visions to life through exceptional photography,
            videography, and design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:glow-silver transition-all duration-300 border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="w-full text-xs sm:text-sm">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-gold font-medium mb-2">{item.category}</div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground text-pretty leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-deep-black group bg-transparent w-full sm:w-auto"
          >
            <Link href="/portfolio" className="flex items-center justify-center space-x-2">
              <span>View Full Portfolio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
