"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Search, Filter, Eye, Check, X } from "lucide-react"

export function AdminBookings() {
  const [bookings] = useState([
    {
      id: 1,
      client: "Sarah & Michael Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      service: "Wedding Photography",
      package: "Gold Package",
      date: "2024-02-15",
      status: "confirmed",
      amount: "900,000 MWK",
      submittedAt: "2024-01-15",
    },
    {
      id: 2,
      client: "TechStart Inc.",
      email: "contact@techstart.com",
      phone: "+1 (555) 987-6543",
      service: "Corporate Video",
      package: "Custom Package",
      date: "2024-02-20",
      status: "pending",
      amount: "1,200,000 MWK",
      submittedAt: "2024-01-18",
    },
    {
      id: 3,
      client: "Maria Rodriguez",
      email: "maria.r@email.com",
      phone: "+1 (555) 456-7890",
      service: "Brand Identity",
      package: "Branding Package",
      date: "2024-02-25",
      status: "confirmed",
      amount: "800,000 MWK",
      submittedAt: "2024-01-20",
    },
    {
      id: 4,
      client: "James Wilson",
      email: "james.wilson@email.com",
      phone: "+1 (555) 321-0987",
      service: "Music Video",
      package: "Custom Package",
      date: "2024-03-01",
      status: "pending",
      amount: "1,500,000 MWK",
      submittedAt: "2024-01-22",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-gold/20 text-gold"
      case "pending":
        return "bg-silver/20 text-silver"
      case "cancelled":
        return "bg-destructive/20 text-destructive"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Booking Management</h1>
        <p className="text-muted-foreground">Manage client bookings and inquiries.</p>
      </div>

      {/* Filters */}
      <Card className="border-border/50">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search bookings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-border focus:border-gold"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48 border-border focus:border-gold">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <Card key={booking.id} className="border-border/50 hover:glow-gold transition-all duration-300">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Client Info */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{booking.client}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{booking.email}</p>
                    <p>{booking.phone}</p>
                    <p className="text-xs">Submitted: {booking.submittedAt}</p>
                  </div>
                </div>

                {/* Service Details */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Service Details</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-foreground">{booking.service}</p>
                    <p className="text-muted-foreground">{booking.package}</p>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{booking.date}</span>
                    </div>
                  </div>
                </div>

                {/* Status & Amount */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Status & Amount</h4>
                  <div className="space-y-2">
                    <Badge className={getStatusColor(booking.status)}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </Badge>
                    <p className="text-lg font-semibold text-gold">{booking.amount}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-2">
                  <Button size="sm" variant="outline" className="w-full bg-transparent hover:text-gold">
                    <Eye className="w-3 h-3 mr-2" />
                    View Details
                  </Button>
                  {booking.status === "pending" && (
                    <>
                      <Button size="sm" className="w-full bg-gold text-deep-black hover:bg-gold/90">
                        <Check className="w-3 h-3 mr-2" />
                        Confirm
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                      >
                        <X className="w-3 h-3 mr-2" />
                        Decline
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBookings.length === 0 && (
        <Card className="border-border/50">
          <CardContent className="p-12 text-center">
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No bookings found</h3>
            <p className="text-muted-foreground">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filter criteria."
                : "No booking requests have been submitted yet."}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
