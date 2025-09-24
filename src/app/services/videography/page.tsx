import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, Heart, Building, Music, FileText } from "lucide-react"
import Link from "next/link"

export default function VideographyPage() {
  const videographyServices = [
    {
      icon: Heart,
      title: "Wedding Videography",
      description: "Cinematic wedding films that capture the emotion and beauty of your special day.",
      features: ["Ceremony filming", "Reception coverage", "Highlight reels", "Full-length films"],
      startingPrice: "From 600,000 UGX",
    },
    {
      icon: Building,
      title: "Corporate Videos",
      description: "Professional business videos for marketing, training, and corporate communications.",
      features: ["Promotional videos", "Training content", "Company profiles", "Event coverage"],
      startingPrice: "From 800,000 UGX",
    },
    {
      icon: Music,
      title: "Music Videos",
      description: "Creative music videos that bring your artistic vision to life with cinematic storytelling.",
      features: ["Concept development", "Multi-camera setup", "Creative editing", "Color grading"],
      startingPrice: "From 1,200,000 UGX",
    },
    {
      icon: FileText,
      title: "Documentary Films",
      description: "Compelling documentary content that tells important stories with depth and authenticity.",
      features: ["Interview filming", "B-roll footage", "Narrative structure", "Post-production"],
      startingPrice: "From 1,500,000 UGX",
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
              <div className="w-20 h-20 bg-silver/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Video className="w-10 h-10 text-silver" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                <span className="text-silver">Videography</span> <span className="text-foreground">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                Cinematic videography services that bring your stories to life through compelling visual narratives.
                From weddings to corporate content, we create films that captivate and inspire.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videographyServices.map((service, index) => (
                <Card key={index} className="group hover:glow-silver transition-all duration-300 border-border/50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-silver/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-silver/20 transition-colors">
                      <service.icon className="w-8 h-8 text-silver" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-silver transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-silver rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-silver">{service.startingPrice}</div>
                      <Button asChild className="bg-silver text-deep-black hover:bg-silver/90">
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
