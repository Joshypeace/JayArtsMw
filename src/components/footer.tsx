import Link from "next/link"
import { Camera, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gold rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-deep-black" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-gold">JayArts</div>
                <div className="text-xs sm:text-sm text-silver">Multimedia</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional photography, videography, and graphic design services for your most important moments.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/photography" className="text-muted-foreground hover:text-gold transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/services/videography" className="text-muted-foreground hover:text-gold transition-colors">
                  Videography
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="text-muted-foreground hover:text-gold transition-colors">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="text-muted-foreground hover:text-gold transition-colors">
                  Branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-silver flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-silver flex-shrink-0" />
                <span className="break-all">hello@jayarts.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-silver flex-shrink-0" />
                <span>New York, NY</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; 2025 JayArts Multimedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
