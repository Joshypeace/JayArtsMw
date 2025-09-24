"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye } from "lucide-react"

export function AdminBlog() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Top 5 Wedding Photography Trends 2025",
      excerpt: "Discover the latest trends in wedding photography that couples are loving this year.",
      author: "Jay Williams",
      date: "2024-01-15",
      status: "published",
      category: "Wedding Tips",
    },
    {
      id: 2,
      title: "How to Prepare for Your Corporate Video Shoot",
      excerpt: "Essential tips for businesses planning their first corporate video production.",
      author: "Sarah Chen",
      date: "2024-01-10",
      status: "published",
      category: "Corporate",
    },
    {
      id: 3,
      title: "The Art of Product Photography",
      excerpt: "Behind the scenes look at creating stunning product images that sell.",
      author: "Michael Rodriguez",
      date: "2024-01-08",
      status: "draft",
      category: "Photography Tips",
    },
  ])

  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "Jay Williams",
  })

  const handleAddPost = () => {
    const post = {
      id: blogPosts.length + 1,
      ...newPost,
      date: new Date().toISOString().split("T")[0],
      status: "published",
    }
    setBlogPosts([...blogPosts, post])
    setNewPost({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      author: "Jay Williams",
    })
    setShowAddForm(false)
  }

  const handleDeletePost = (id: number) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Blog Management</h1>
          <p className="text-muted-foreground">Create and manage blog posts to engage with your audience.</p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)} className="bg-gold text-deep-black hover:bg-gold/90">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {/* Add New Post Form */}
      {showAddForm && (
        <Card className="border-gold/50">
          <CardHeader>
            <CardTitle className="text-xl text-gold">Create New Blog Post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="border-border focus:border-gold"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={newPost.category}
                  onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                  placeholder="e.g., Wedding Tips, Photography"
                  className="border-border focus:border-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={newPost.author}
                  onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                  className="border-border focus:border-gold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={newPost.excerpt}
                onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                placeholder="Brief description of the post..."
                className="border-border focus:border-gold"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                placeholder="Write your blog post content here..."
                className="border-border focus:border-gold"
                rows={8}
              />
            </div>

            <div className="flex space-x-4">
              <Button onClick={handleAddPost} className="bg-gold text-deep-black hover:bg-gold/90">
                Publish Post
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Blog Posts List */}
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <Card key={post.id} className="border-border/50 hover:glow-silver transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
                    <Badge
                      className={post.status === "published" ? "bg-gold/20 text-gold" : "bg-silver/20 text-silver"}
                    >
                      {post.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-3 text-pretty">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="text-gold">{post.category}</span>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Button size="sm" variant="outline">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
