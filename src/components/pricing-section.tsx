import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Gem } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const weddingPackages = [
    {
      name: "Bronze Package",
      price: "400,000",
      currency: "MWK",
      icon: Star,
      description: "Perfect for intimate ceremonies and smaller celebrations",
      features: [
        "1 video camera for ceremony coverage",
        "Full wedding video delivered on flash disk",
        "Edited video highlights reel",
        "1 professional photographer",
        "All photos delivered on flash disk",
        "Basic photo editing included",
        "Same-day preview shots",
      ],
      popular: false,
      color: "border-silver text-silver",
    },
    {
      name: "Silver Package",
      price: "650,000",
      currency: "MWK",
      icon: Crown,
      description: "Most popular choice for complete wedding coverage",
      features: [
        "2 video cameras for multi-angle coverage",
        "Full wedding video delivered on flash disk",
        "Professional video highlights reel",
        "1 professional photographer",
        "All photos delivered on flash disk",
        "1 A4 framed picture included",
        "100 premium hardcopy pictures",
        "Advanced photo editing",
        "Online gallery access",
      ],
      popular: true,
      color: "border-gold text-gold",
    },
    {
      name: "Gold Package",
      price: "900,000",
      currency: "MWK",
      icon: Gem,
      description: "Ultimate luxury experience with premium deliverables",
      features: [
        "3 video cameras for cinematic coverage",
        "Full wedding video delivered on flash disk",
        "Professional video highlights reel",
        "1 professional photographer",
        "All photos delivered on flash disk",
        "1 A3 framed picture included",
        "100 premium hardcopy pictures in photo album",
        "Premium photo editing & retouching",
        "Online gallery with download access",
        "Same-day social media previews",
        "Complimentary engagement session",
      ],
      popular: false,
      color: "border-gold text-gold",
    },
  ]

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            <span className="text-foreground">Wedding</span> <span className="text-gold">Photography</span>{" "}
            <span className="text-silver">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the perfect package for your special day. Each package is designed to capture every precious moment
            with professional quality and artistic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {weddingPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${pkg.color} ${pkg.popular ? "glow-gold scale-105" : "hover:glow-silver"} transition-all duration-300`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-deep-black">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-2xl flex items-center justify-center">
                  <pkg.icon className={`w-8 h-8 ${pkg.color.split(" ")[1]}`} />
                </div>
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <p className="text-sm text-muted-foreground text-pretty">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">
                    {pkg.price} <span className="text-lg font-normal text-muted-foreground">{pkg.currency}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Complete wedding package</div>
                </div>

                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${pkg.popular ? "bg-gold text-deep-black hover:bg-gold/90" : "bg-silver text-deep-black hover:bg-silver/90"} transition-all duration-300`}
                >
                  <Link href="/booking">Choose {pkg.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom package? We can create a tailored solution for your specific needs.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-deep-black bg-transparent"
          >
            <Link href="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
