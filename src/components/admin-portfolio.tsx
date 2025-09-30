"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye } from "lucide-react"

export function AdminPortfolio() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: "Elegant Central Park Wedding",
      category: "wedding",
      type: "image",
      client: "Sarah & Michael Johnson",
      year: "2024",
      status: "published",
    },
    {
      id: 2,
      title: "Corporate Innovation Video",
      category: "corporate",
      type: "video",
      client: "TechStart Inc.",
      year: "2024",
      status: "published",
    },
    {
      id: 3,
      title: "Luxury Jewelry Collection",
      category: "product",
      type: "image",
      client: "Elegant Jewelers",
      year: "2024",
      status: "draft",
    },
  ])

  const [newItem, setNewItem] = useState({
    title: "",
    category: "",
    type: "",
    client: "",
    year: "2024",
    description: "",
    tags: "",
  })

  const handleAddItem = () => {
    const item = {
      id: portfolioItems.length + 1,
      ...newItem,
      status: "published",
    }
    setPortfolioItems([...portfolioItems, item])
    setNewItem({
      title: "",
      category: "",
      type: "",
      client: "",
      year: "2024",
      description: "",
      tags: "",
    })
    setShowAddForm(false)
  }

  const handleDeleteItem = (id: number) => {
    setPortfolioItems(portfolioItems.filter((item) => item.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio Management</h1>
          <p className="text-muted-foreground">Manage your portfolio items and showcase your best work.</p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)} className="bg-gold text-deep-black hover:bg-gold/90">
          <Plus className="w-4 h-4 mr-2" />
          Add New Item
        </Button>
      </div>

      {/* Add New Item Form */}
      {showAddForm && (
        <Card className="border-gold/50">
          <CardHeader>
            <CardTitle className="text-xl text-gold">Add New Portfolio Item</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newItem.title}
                  onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  className="border-border focus:border-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client">Client</Label>
                <Input
                  id="client"
                  value={newItem.client}
                  onChange={(e) => setNewItem({ ...newItem, client: e.target.value })}
                  className="border-border focus:border-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={newItem.category} onValueChange={(value) => setNewItem({ ...newItem, category: value })}>
                  <SelectTrigger className="border-border focus:border-gold">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="portrait">Portrait</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                    <SelectItem value="music">Music Video</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select value={newItem.type} onValueChange={(value) => setNewItem({ ...newItem, type: value })}>
                  <SelectTrigger className="border-border focus:border-gold">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="image">Image</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  value={newItem.year}
                  onChange={(e) => setNewItem({ ...newItem, year: e.target.value })}
                  className="border-border focus:border-gold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                className="border-border focus:border-gold"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                value={newItem.tags}
                onChange={(e) => setNewItem({ ...newItem, tags: e.target.value })}
                placeholder="wedding, outdoor, romance"
                className="border-border focus:border-gold"
              />
            </div>

            <div className="flex space-x-4">
              <Button onClick={handleAddItem} className="bg-gold text-deep-black hover:bg-gold/90">
                Add Item
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Portfolio Items List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="border-border/50 hover:glow-silver transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.client}</p>
                </div>
                <Badge className={item.status === "published" ? "bg-gold/20 text-gold" : "bg-silver/20 text-silver"}>
                  {item.status}
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="text-foreground capitalize">{item.category}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="text-foreground capitalize">{item.type}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Year:</span>
                  <span className="text-foreground">{item.year}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent hover:text-gold">
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent hover:text-gold">
                  <Edit className="w-3 h-3 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
