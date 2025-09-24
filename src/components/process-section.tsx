import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Calendar, Camera, Clover as Delivery } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Initial Consultation",
      description: "We discuss your vision, requirements, and preferences to understand your unique needs.",
      step: "01",
    },
    {
      icon: Calendar,
      title: "Planning & Scheduling",
      description: "We create a detailed timeline and coordinate all aspects of your shoot or event coverage.",
      step: "02",
    },
    {
      icon: Camera,
      title: "Professional Execution",
      description: "Our experienced team captures every moment with artistic precision and technical excellence.",
      step: "03",
    },
    {
      icon: Delivery,
      title: "Delivery & Follow-up",
      description: "We deliver your beautifully edited content and provide ongoing support for your satisfaction.",
      step: "04",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            <span className="text-foreground">Our</span> <span className="text-gold">Creative</span>{" "}
            <span className="text-silver">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From initial concept to final delivery, we follow a proven process that ensures exceptional results and a
            seamless experience for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:glow-gold transition-all duration-300 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-deep-black font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-4 group-hover:bg-gold/20 transition-colors">
                  <step.icon className="w-8 h-8 text-gold" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gold transition-colors">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm text-pretty">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span>Ready to get started? Let's create something amazing together.</span>
            <div className="w-2 h-2 bg-silver rounded-full animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
