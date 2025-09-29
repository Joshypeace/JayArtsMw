"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera, Lock, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    console.log("[v0] Login attempt with:", { username: credentials.username, password: credentials.password })

    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const validUsername = credentials.username.toLowerCase().trim() === "admin"
    const validPassword = credentials.password === "jayarts2024"

    console.log("[v0] Validation results:", { validUsername, validPassword })

    if (validUsername && validPassword) {
      console.log("[v0] Authentication successful, setting localStorage")
      localStorage.setItem("adminAuth", "true")
      localStorage.setItem("adminUser", "admin")
      localStorage.setItem("adminLoginTime", new Date().toISOString())

      console.log("[v0] Redirecting to dashboard")
      router.push("/admin/dashboard")
    } else {
      console.log("[v0] Authentication failed")
      setError("Invalid credentials. Use 'admin' and 'jayarts2024'")
    }

    setIsLoading(false)
  }

  const fillDemoCredentials = () => {
    setCredentials({ username: "admin", password: "jayarts2024" })
    setError("")
  }

  return (
    <Card className="w-full max-w-md border-gold/50 glow-gold">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Camera className="w-8 h-8 text-gold" />
        </div>
        <CardTitle className="text-2xl text-gold">JayArts Admin</CardTitle>
        <p className="text-muted-foreground">Sign in to access the dashboard</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={credentials.username}
              onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
              className="border-border focus:border-gold"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
              className="border-border focus:border-gold"
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-red-500 text-sm bg-red-50 dark:bg-red-950/20 p-3 rounded-md">
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-slate-900 text-white hover:bg-slate-800 font-medium"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Signing in...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4" />
                <span>Sign In</span>
              </div>
            )}
          </Button>
        </form>

        <div className="mt-4 space-y-2">
          <div className="text-center text-xs text-muted-foreground">
            Demo credentials: <strong>admin</strong> / <strong>jayarts2024</strong>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={fillDemoCredentials}
            className="w-full text-xs border-gold/30 text-gold hover:bg-gold/10 bg-transparent"
          >
            Use Demo Credentials
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
