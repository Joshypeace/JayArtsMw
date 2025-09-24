import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio-hero"
import { PortfolioGallery } from "@/components/portfolio-gallery"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PortfolioHero />
        <PortfolioGallery />
      </main>
      <Footer />
    </div>
  )
}
