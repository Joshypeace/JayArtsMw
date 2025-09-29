"use client"

import { useState, useEffect } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminOverview } from "@/components/admin-overview"
import { AdminPortfolio } from "@/components/admin-portfolio"
import { AdminBookings } from "@/components/admin-bookings"
import { AdminBlog } from "@/components/admin-blog"
import { AdminSettings } from "@/components/admin-settings"
import { LoadingAnimation } from "@/components/loading-animation"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    console.log("[v0] Checking authentication in dashboard")

    const checkAuth = () => {
      const auth = localStorage.getItem("adminAuth")
      const user = localStorage.getItem("adminUser")

      console.log("[v0] Auth check results:", { auth, user })

      if (auth === "true" && user === "admin") {
        console.log("[v0] User is authenticated")
        setIsAuthenticated(true)
      } else {
        console.log("[v0] User not authenticated, redirecting to login")
        router.push("/admin")
      }
      setIsLoading(false)
    }

    // Small delay to ensure localStorage is available
    setTimeout(checkAuth, 100)
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <LoadingAnimation />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Redirecting to login...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {activeTab === "overview" && <AdminOverview />}
            {activeTab === "portfolio" && <AdminPortfolio />}
            {activeTab === "bookings" && <AdminBookings />}
            {activeTab === "blog" && <AdminBlog />}
            {activeTab === "settings" && <AdminSettings />}
          </div>
        </main>
      </div>
    </div>
  )
}
