import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export function BlogList() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Wedding Photography Trends 2025",
      excerpt:
        "Discover the latest trends in wedding photography that couples are loving this year, from candid moments to creative compositions.",
      author: "Jay Williams",
      date: "January 15, 2024",
      category: "Wedding Tips",
      image: "/elegant-wedding-photography-central-park.jpg",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Prepare for Your Corporate Video Shoot",
      excerpt:
        "Essential tips for businesses planning their first corporate video production, including pre-production planning and day-of coordination.",
      author: "Sarah Chen",
      date: "January 10, 2024",
      category: "Corporate",
      image: "/professional-corporate-video-production.jpg",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "The Art of Product Photography",
      excerpt:
        "Behind the scenes look at creating stunning product images that sell, covering lighting techniques and composition strategies.",
      author: "Michael Rodriguez",
      date: "January 8, 2024",
      category: "Photography Tips",
      image: "/luxury-product-photography-jewelry.jpg",
      readTime: "6 min read",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden hover:glow-gold transition-all duration-300 border-border/50"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gold/90 text-deep-black">{post.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 text-pretty">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-2 text-gold hover:text-gold/80 transition-colors group/link"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
