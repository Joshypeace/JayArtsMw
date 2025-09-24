export function PortfolioHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground">Our</span> <span className="text-gold">Creative</span>{" "}
            <span className="text-silver">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            Explore our collection of stunning photography, cinematic videography, and creative design work. Each
            project represents our commitment to artistic excellence and client satisfaction.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-silver mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Happy Couples</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Corporate Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-silver mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Music Videos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
