export function ServicesHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-gold">Premium</span> <span className="text-foreground">Creative</span>{" "}
            <span className="text-silver">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            From intimate portraits to grand celebrations, we offer comprehensive creative services that capture your
            most precious moments with artistic excellence and professional precision.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">Photography</div>
              <div className="text-sm text-muted-foreground">Professional Shoots</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-silver mb-1">Videography</div>
              <div className="text-sm text-muted-foreground">Cinematic Films</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">Design</div>
              <div className="text-sm text-muted-foreground">Creative Graphics</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-silver mb-1">Branding</div>
              <div className="text-sm text-muted-foreground">Identity Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
