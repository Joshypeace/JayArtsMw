export function ContactHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground">Get In</span> <span className="text-gold">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
          {`  Have a question about our services? Want to discuss a custom project? We'd love to hear from you and help
            bring your creative vision to life.`}
          </p>
        </div>
      </div>
    </section>
  )
}
