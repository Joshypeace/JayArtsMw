import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingHero } from "@/components/booking-hero"
import { BookingForm } from "@/components/booking-form"
import { BookingInfo } from "@/components/booking-info"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <BookingHero />
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <BookingForm />
              </div>
              <div>
                <BookingInfo />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
