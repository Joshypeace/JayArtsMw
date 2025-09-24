import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-background via-card/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            <span className="text-foreground">Ready to</span> <span className="text-gold">Create</span>{" "}
            <span className="text-silver">Something</span> <span className="text-foreground">Amazing?</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto text-pretty px-4 sm:px-0 leading-relaxed">
            Let's bring your vision to life. Whether it's capturing your special day, creating compelling content, or
            building your brand identity, we're here to make it extraordinary.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gold text-deep-black hover:bg-gold/90 glow-gold transition-all duration-300 group"
            >
              <Link href="/booking" className="flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-silver text-silver hover:bg-silver hover:text-deep-black transition-all duration-300 bg-transparent"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center px-4 sm:px-0">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-gold mb-2">Free Consultation</div>
              <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Discuss your project with our experts
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-silver mb-2">Custom Packages</div>
              <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Tailored solutions for your needs
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-gold mb-2">Quick Turnaround</div>
              <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Fast delivery without compromising quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
