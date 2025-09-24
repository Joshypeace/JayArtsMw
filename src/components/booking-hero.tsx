export function BookingHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-gold">Book</span> <span className="text-foreground">Your</span>{" "}
            <span className="text-silver">Session</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
          {`  Ready to capture your special moments? Fill out our booking form and we'll get back to you within 24 hours
            with a personalized quote and consultation.`}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">Free</div>
              <div className="text-sm text-muted-foreground">Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-silver mb-1">24hr</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">Custom</div>
              <div className="text-sm text-muted-foreground">Packages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
