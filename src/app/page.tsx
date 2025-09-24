import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesHighlight } from "@/components/services-highlight"
import { FeaturedPortfolio } from "@/components/featured-portfolio"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ScrollReveal direction="fade">
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <ServicesHighlight />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <FeaturedPortfolio />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <CTASection />
        </ScrollReveal>
      </main>
      <ScrollReveal direction="fade" delay={100}>
        <Footer />
      </ScrollReveal>
    </div>
  )
}
