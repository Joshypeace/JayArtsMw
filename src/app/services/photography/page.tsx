import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Heart, Users, Package, Calendar, Star } from "lucide-react"
import Link from "next/link"

export default function PhotographyPage() {
  const photographyServices = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Capture your special day with romantic, timeless imagery that tells your love story.",
      features: ["Engagement sessions", "Ceremony coverage", "Reception photography", "Bridal portraits"],
      startingPrice: "From 400,000 UGX",
    },
    {
      icon: Users,
      title: "Portrait Photography",
      description: "Professional headshots and family portraits that showcase personality and connection.",
      features: ["Individual portraits", "Family sessions", "Corporate headshots", "Maternity photos"],
      startingPrice: "From 150,000 UGX",
    },
    {
      icon: Package,
      title: "Product Photography",
      description: "High-quality commercial photography that showcases your products in the best light.",
      features: ["E-commerce photos", "Lifestyle shots", "Detail photography", "Brand imagery"],
      startingPrice: "From 200,000 UGX",
    },
    {
      icon: Calendar,
      title: "Event Photography",
      description: "Document your corporate events, parties, and special occasions with professional coverage.",
      features: ["Corporate events", "Birthday parties", "Graduations", "Anniversary celebrations"],
      startingPrice: "From 300,000 UGX",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-background via-card/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-gold" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                <span className="text-gold">Photography</span> <span className="text-foreground">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
               {` Professional photography services that capture life's most precious moments with artistic excellence.
                From intimate portraits to grand celebrations, we create images that tell your story.`}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {photographyServices.map((service, index) => (
                <Card key={index} className="group hover:glow-gold transition-all duration-300 border-border/50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                      <service.icon className="w-8 h-8 text-gold" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <Star className="w-4 h-4 text-gold" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-gold">{service.startingPrice}</div>
                      <Button asChild className="bg-gold text-deep-black hover:bg-gold/90">
                        <Link href="/booking">Book Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
