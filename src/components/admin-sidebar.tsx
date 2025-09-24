"use client"

import { Button } from "@/components/ui/button"
import { Camera, LayoutDashboard, ImageIcon, Calendar, FileText, Settings, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

interface AdminSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const router = useRouter()

  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "portfolio", label: "Portfolio", icon: ImageIcon },
    { id: "bookings", label: "Bookings", icon: Calendar },
    { id: "blog", label: "Blog Posts", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin")
  }

  return (
    <div className="w-64 bg-card border-r border-border h-screen flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
            <Camera className="w-6 h-6 text-deep-black" />
          </div>
          <div>
            <div className="text-lg font-bold text-gold">JayArts</div>
            <div className="text-xs text-muted-foreground">Admin Panel</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"}
            className={`w-full justify-start ${
              activeTab === item.id ? "bg-gold text-deep-black hover:bg-gold/90" : "hover:bg-muted text-foreground"
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon className="w-4 h-4 mr-2" />
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="p-4 border-t border-border/50">
        <Button
          variant="outline"
          className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent transition-all duration-200"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  )
}
