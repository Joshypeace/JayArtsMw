import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogList } from "@/components/blog-list"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <BlogHero />
        <BlogList />
      </main>
      <Footer />
    </div>
  )
}
