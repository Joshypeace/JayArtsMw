import { Card, CardContent } from "@/components/ui/card"
import { Camera, Video, Palette, Sparkles } from "lucide-react"
import { IntersectionObserver } from "@/components/intersection-observer"

export function ServicesHighlight() {
  const services = [
    {
      icon: Camera,
      title: "Photography",
      description:
        "Professional wedding, portrait, and product photography that captures every detail with artistic precision.",
      features: ["Wedding Photography", "Portrait Sessions", "Product Shoots", "Event Coverage"],
    },
    {
      icon: Video,
      title: "Videography",
      description: "Cinematic videography for weddings, corporate events, music videos, and documentaries.",
      features: ["Wedding Films", "Corporate Videos", "Music Videos", "Documentaries"],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative graphic design solutions for branding, marketing materials, and digital content.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Digital Graphics"],
    },
    {
      icon: Sparkles,
      title: "Branding",
      description: "Complete branding packages that establish your unique identity and market presence.",
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Marketing Collateral"],
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <IntersectionObserver className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance">
            <span className="text-gold">Premium</span> <span className="text-foreground">Creative</span>{" "}
            <span className="text-silver">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto text-pretty px-4 sm:px-0">
            We specialize in creating stunning visual content that tells your story and elevates your brand to new
            heights.
          </p>
        </IntersectionObserver>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <IntersectionObserver key={index}>
              <Card className="group hover:glow-gold transition-all duration-300 border-border/50 hover:border-gold/50 hover-lift h-full">
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gold/20 transition-colors animate-float">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 sm:mb-4 text-pretty flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-1">
                        <div className="w-1 h-1 bg-silver rounded-full animate-pulse flex-shrink-0" />
                        <span className="text-center">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </IntersectionObserver>
          ))}
        </div>
      </div>
    </section>
  )
}
