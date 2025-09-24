"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Camera, Home, User, Briefcase, ImageIcon, BookOpen, Mail } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/portfolio", label: "Portfolio", icon: ImageIcon },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
]

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-card/95 backdrop-blur-md border-l border-border shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
              <Camera className="w-5 h-5 text-deep-black" />
            </div>
            <div>
              <span className="text-lg font-bold text-gold">JayArts</span>
              <span className="text-sm text-silver ml-1">Multimedia</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gold hover:bg-gold/10">
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-6 py-8">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-foreground hover:text-gold hover:bg-gold/10 transition-all duration-300 group"
                  onClick={onClose}
                >
                  <Icon className="w-5 h-5 group-hover:text-gold transition-colors" />
                  <span className="text-lg font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 space-y-3">
            <Button
              asChild
              variant="outline"
              className="w-full border-silver text-silver hover:bg-silver hover:text-deep-black bg-transparent"
            >
              <Link href="/contact" onClick={onClose}>
                Get In Touch
              </Link>
            </Button>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">© 2024 JayArts Multimedia</p>
        </div>
      </div>
    </>
  )
}
