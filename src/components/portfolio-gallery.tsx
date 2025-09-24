"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Play, ExternalLink, X } from "lucide-react"
import Image from "next/image"

type PortfolioItem = {
  id: number
  title: string
  category: string
  type: "image" | "video"
  thumbnail: string
  fullImage?: string
  videoUrl?: string
  description: string
  client: string
  year: string
  tags: string[]
}

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const categories = [
    { id: "all", label: "All Work" },
    { id: "wedding", label: "Weddings" },
    { id: "portrait", label: "Portraits" },
    { id: "corporate", label: "Corporate" },
    { id: "product", label: "Product" },
    { id: "music", label: "Music Videos" },
    { id: "design", label: "Design" },
  ]

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Elegant Central Park Wedding",
      category: "wedding",
      type: "image",
      thumbnail: "/elegant-wedding-photography-central-park.jpg",
      fullImage: "/elegant-wedding-photography-central-park.jpg",
      description:
        "A romantic wedding celebration captured with artistic precision and emotional depth in the heart of Central Park.",
      client: "Sarah & Michael Johnson",
      year: "2024",
      tags: ["Wedding", "Outdoor", "Romance", "Central Park"],
    },
    {
      id: 2,
      title: "Corporate Innovation Video",
      category: "corporate",
      type: "video",
      thumbnail: "/professional-corporate-video-production.jpg",
      videoUrl: "https://example.com/video1",
      description:
        "Dynamic corporate video showcasing innovation and professional excellence for a leading tech company.",
      client: "TechStart Inc.",
      year: "2024",
      tags: ["Corporate", "Technology", "Innovation", "Professional"],
    },
    {
      id: 3,
      title: "Luxury Jewelry Collection",
      category: "product",
      type: "image",
      thumbnail: "/luxury-product-photography-jewelry.jpg",
      fullImage: "/luxury-product-photography-jewelry.jpg",
      description: "High-end product photography highlighting the craftsmanship and elegance of luxury jewelry pieces.",
      client: "Elegant Jewelers",
      year: "2024",
      tags: ["Product", "Luxury", "Jewelry", "Commercial"],
    },
    {
      id: 4,
      title: "Cinematic Music Video",
      category: "music",
      type: "video",
      thumbnail: "/cinematic-music-video-production.jpg",
      videoUrl: "https://example.com/video2",
      description:
        "Creative music video with cinematic storytelling and stunning visual effects for an emerging artist.",
      client: "James Wilson",
      year: "2024",
      tags: ["Music Video", "Cinematic", "Creative", "Storytelling"],
    },
    {
      id: 5,
      title: "Modern Brand Identity",
      category: "design",
      type: "image",
      thumbnail: "/modern-brand-identity-design-logo.jpg",
      fullImage: "/modern-brand-identity-design-logo.jpg",
      description: "Complete brand identity package with modern design aesthetics and comprehensive visual guidelines.",
      client: "Creative Studio Co.",
      year: "2024",
      tags: ["Branding", "Logo Design", "Identity", "Modern"],
    },
    {
      id: 6,
      title: "Executive Portrait Session",
      category: "portrait",
      type: "image",
      thumbnail: "/business-executive-portrait.png",
      fullImage: "/business-executive-portrait.png",
      description: "Professional executive portraits that capture leadership qualities and corporate professionalism.",
      client: "David Chen",
      year: "2024",
      tags: ["Portrait", "Executive", "Professional", "Corporate"],
    },
    {
      id: 7,
      title: "Fashion Designer Portrait",
      category: "portrait",
      type: "image",
      thumbnail: "/creative-fashion-designer-portrait.jpg",
      fullImage: "/creative-fashion-designer-portrait.jpg",
      description: "Creative portrait session showcasing the artistic personality and vision of a fashion designer.",
      client: "Maria Rodriguez",
      year: "2024",
      tags: ["Portrait", "Fashion", "Creative", "Artistic"],
    },
    {
      id: 8,
      title: "Musician Artist Portrait",
      category: "portrait",
      type: "image",
      thumbnail: "/musician-artist-portrait.jpg",
      fullImage: "/musician-artist-portrait.jpg",
      description: "Dynamic portrait session capturing the energy and passion of a talented musician.",
      client: "Alex Thompson",
      year: "2024",
      tags: ["Portrait", "Musician", "Artist", "Creative"],
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-gold text-deep-black hover:bg-gold/90"
                  : "border-border hover:border-gold hover:text-gold"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:glow-gold transition-all duration-300 border-border/50 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Type Indicator */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gold/90 text-deep-black">
                    {item.type === "video" ? <Play className="w-3 h-3 mr-1" /> : <Eye className="w-3 h-3 mr-1" />}
                    {item.type === "video" ? "Video" : "Photo"}
                  </Badge>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.client} • {item.year}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md">
            <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-foreground hover:text-gold z-10"
                onClick={() => setSelectedItem(null)}
              >
                <X className="w-6 h-6" />
              </Button>

              <Card className="overflow-hidden border-gold/50 glow-gold">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Media */}
                  <div className="relative">
                    {selectedItem.type === "image" ? (
                      <Image
                        src={selectedItem.fullImage || selectedItem.thumbnail}
                        alt={selectedItem.title}
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                    ) : (
                      <div className="w-full h-80 lg:h-96 bg-muted flex items-center justify-center">
                        <div className="text-center">
                          <Play className="w-16 h-16 text-gold mx-auto mb-4" />
                          <p className="text-muted-foreground">Video Preview</p>
                          <Button asChild className="mt-4 bg-gold text-deep-black hover:bg-gold/90">
                            <a href={selectedItem.videoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Watch Video
                            </a>
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{selectedItem.title}</h2>
                    <p className="text-gold font-medium mb-4">
                      {selectedItem.client} • {selectedItem.year}
                    </p>
                    <p className="text-muted-foreground mb-6 text-pretty">{selectedItem.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Category</h4>
                        <Badge className="bg-gold/10 text-gold border-gold/20">
                          {categories.find((cat) => cat.id === selectedItem.category)?.label}
                        </Badge>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.tags.map((tag, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <Button asChild className="w-full bg-gold text-deep-black hover:bg-gold/90">
                        <a href="/booking">Start Your Project</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
