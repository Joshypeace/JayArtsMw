import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Video, Palette, Sparkles, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ServiceDetails() {
  const services = [
    {
      icon: Camera,
      title: "Photography Services",
      description: "Capture life's most precious moments with our professional photography services.",
      image: "/elegant-wedding-photography-central-park.jpg",
      features: [
        "Wedding Photography - Complete coverage from preparation to reception",
        "Portrait Sessions - Professional headshots and family portraits",
        "Product Photography - High-quality commercial and e-commerce shots",
        "Event Coverage - Corporate events, parties, and special occasions",
        "Engagement Sessions - Romantic couple photography",
        "Maternity & Newborn - Tender moments beautifully preserved",
      ],
      startingPrice: "From Mk90, 000",
    },
    {
      icon: Video,
      title: "Videography Services",
      description: "Tell your story through cinematic videography that captures emotion and movement.",
      image: "/professional-corporate-video-production.jpg",
      features: [
        "Wedding Videography - Cinematic wedding films and highlights",
        "Corporate Videos - Professional business and promotional content",
        "Music Videos - Creative storytelling for artists and musicians",
        "Documentary Films - Compelling narrative documentaries",
        "Event Videography - Live event coverage and streaming",
        "Commercial Ads - Marketing videos that drive results",
      ],
      startingPrice: "From MK120000",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative visual solutions that communicate your message with impact and style.",
      image: "/modern-brand-identity-design-logo.jpg",
      features: [
        "Logo Design - Memorable brand marks and identity systems",
        "Marketing Materials - Brochures, flyers, and promotional graphics",
        "Digital Graphics - Social media content and web graphics",
        "Print Design - Business cards, posters, and publications",
        "Packaging Design - Product packaging and label design",
        "Illustration - Custom artwork and digital illustrations",
      ],
      startingPrice: "From MK40000",
    },
    {
      icon: Sparkles,
      title: "Branding Solutions",
      description: "Complete brand identity packages that establish your unique market presence.",
      image: "/luxury-product-photography-jewelry.jpg",
      features: [
        "Brand Strategy - Market positioning and brand architecture",
        "Visual Identity - Logo, colors, typography, and style guides",
        "Brand Guidelines - Comprehensive usage and application rules",
        "Marketing Collateral - Consistent branded materials",
        "Website Design - Digital brand expression and user experience",
        "Brand Consultation - Strategic guidance and implementation",
      ],
      startingPrice: "From MK150,000",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                </div>

                <p className="text-lg text-muted-foreground mb-6 text-pretty">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gold">{service.startingPrice}</div>
                  <Button asChild className="bg-gold text-deep-black hover:bg-gold/90 group">
                    <Link href="/booking" className="flex items-center space-x-2">
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <Card className="overflow-hidden border-border/50 glow-silver">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
