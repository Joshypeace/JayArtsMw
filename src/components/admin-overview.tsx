import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, ImageIcon, DollarSign, TrendingUp } from "lucide-react"
import { FileText } from "lucide-react" // Declare FileText variable

export function AdminOverview() {
  const stats = [
    {
      title: "Total Bookings",
      value: "47",
      change: "+12%",
      icon: Calendar,
      color: "text-gold",
    },
    {
      title: "Portfolio Items",
      value: "156",
      change: "+8%",
      icon: ImageIcon, // Update Image to ImageIcon
      color: "text-silver",
    },
    {
      title: "Revenue (This Month)",
      value: "15.2M UGX",
      change: "+23%",
      icon: DollarSign,
      color: "text-gold",
    },
    {
      title: "Active Clients",
      value: "89",
      change: "+5%",
      icon: Users,
      color: "text-silver",
    },
  ]

  const recentBookings = [
    {
      id: 1,
      client: "Sarah & Michael Johnson",
      service: "Wedding Photography",
      date: "2024-02-15",
      status: "confirmed",
      amount: "900,000 UGX",
    },
    {
      id: 2,
      client: "TechStart Inc.",
      service: "Corporate Video",
      date: "2024-02-20",
      status: "pending",
      amount: "1,200,000 UGX",
    },
    {
      id: 3,
      client: "Maria Rodriguez",
      service: "Brand Identity",
      date: "2024-02-25",
      status: "confirmed",
      amount: "800,000 UGX",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">{`Welcome back! Here's what's happening with your business.`}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-border/50 hover:glow-gold transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className={`text-sm ${stat.color} flex items-center mt-1`}>
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-gold flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Recent Bookings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{booking.client}</p>
                    <p className="text-sm text-muted-foreground">{booking.service}</p>
                    <p className="text-xs text-muted-foreground">{booking.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{booking.amount}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        booking.status === "confirmed" ? "bg-gold/20 text-gold" : "bg-silver/20 text-silver"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-silver">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gold/10 rounded-lg text-center hover:bg-gold/20 transition-colors cursor-pointer">
                <ImageIcon className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm font-medium">Add Portfolio</p>
              </div>
              <div className="p-4 bg-silver/10 rounded-lg text-center hover:bg-silver/20 transition-colors cursor-pointer">
                <Calendar className="w-8 h-8 text-silver mx-auto mb-2" />
                <p className="text-sm font-medium">New Booking</p>
              </div>
              <div className="p-4 bg-gold/10 rounded-lg text-center hover:bg-gold/20 transition-colors cursor-pointer">
                <FileText className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm font-medium">Write Blog</p>
              </div>
              <div className="p-4 bg-silver/10 rounded-lg text-center hover:bg-silver/20 transition-colors cursor-pointer">
                <Users className="w-8 h-8 text-silver mx-auto mb-2" />
                <p className="text-sm font-medium">View Clients</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
