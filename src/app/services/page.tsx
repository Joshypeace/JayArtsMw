import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServiceDetails } from "@/components/service-details"
import { PricingSection } from "@/components/pricing-section"
import { ProcessSection } from "@/components/process-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ServicesHero />
        <ServiceDetails />
        <PricingSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  )
}
