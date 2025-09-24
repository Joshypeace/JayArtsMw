export function BlogHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground">Our</span> <span className="text-gold">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            Insights, tips, and behind-the-scenes stories from the world of professional photography, videography, and
            creative design.
          </p>
        </div>
      </div>
    </section>
  )
}
