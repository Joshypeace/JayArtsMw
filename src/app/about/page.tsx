import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Award, Users, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Camera,
      title: "Artistic Excellence",
      description:
        "We combine technical expertise with creative vision to deliver exceptional results that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Our love for storytelling through visual media drives us to capture the essence of every moment.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your vision is our priority. We work closely with clients to bring their unique stories to life.",
    },
    {
      icon: Award,
      title: "Professional Quality",
      description:
        "We maintain the highest standards in every project, ensuring professional results that stand the test of time.",
    },
  ]

  const team = [
    {
      name: "Jay Williams",
      role: "Founder & Lead Photographer",
      image: "/business-executive-portrait.png",
      description:
        "With over 8 years of experience, Jay brings artistic vision and technical expertise to every project.",
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "/creative-fashion-designer-portrait.jpg",
      description: "Sarah leads our creative team with her exceptional eye for design and storytelling.",
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Videographer",
      image: "/musician-artist-portrait.jpg",
      description:
        "Michael specializes in cinematic videography and brings stories to life through compelling visuals.",
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                <span className="text-foreground">About</span> <span className="text-gold">JayArts</span>{" "}
                <span className="text-silver">Multimedia</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                We are passionate storytellers who believe that every moment deserves to be captured with artistic
                excellence. Our mission is to create timeless visual content that preserves your most precious memories.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  <span className="text-foreground">Our</span> <span className="text-gold">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-pretty">
                {`    Founded in 2019, JayArts Multimedia began as a passion project to capture the beauty and emotion of
                    life's most important moments. What started as a small photography studio has grown into a
                    full-service creative agency specializing in photography, videography, and graphic design.`}
                  </p>
                  <p className="text-pretty">
                  {`  Our journey has been marked by countless weddings, corporate events, music videos, and branding
                    projects. Each project has taught us something new and reinforced our commitment to artistic
                    excellence and client satisfaction.`}
                  </p>
                  <p className="text-pretty">
                   {` Today, we're proud to be one of the leading creative agencies in the region, known for our
                    innovative approach, professional quality, and dedication to bringing our clients' visions to life.`}
                  </p>
                </div>
                <Button asChild className="mt-6 bg-gold text-deep-black hover:bg-gold/90 group">
                  <Link href="/portfolio" className="flex items-center space-x-2">
                    <span>View Our Work</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div>
                <Card className="overflow-hidden border-border/50 glow-silver">
                  <img src="/photography-studio.png" alt="JayArts Studio" className="w-full h-80 object-cover" />
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                <span className="text-foreground">Our</span> <span className="text-gold">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                These core values guide everything we do and shape the way we approach every project and client
                relationship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="group hover:glow-gold transition-all duration-300 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                      <value.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gold transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm text-pretty">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                <span className="text-foreground">Meet Our</span> <span className="text-gold">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our talented team of creatives brings diverse skills and perspectives to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="group hover:glow-silver transition-all duration-300 border-border/50">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-gold"
                    />
                    <h3 className="text-xl font-semibold mb-1 text-foreground group-hover:text-gold transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gold font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm text-pretty">{member.description}</p>
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
