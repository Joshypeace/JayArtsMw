import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { SiInstagram, SiFacebook, SiTiktok } from "react-icons/si"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-gold">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-silver mt-1" />
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-muted-foreground">+265 884 849 879</p>
                <p className="text-xs text-muted-foreground">Available 9 AM - 6 PM EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-silver mt-1" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-muted-foreground">joelchilapondwa@gmail.com</p>
                <p className="text-xs text-muted-foreground">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-silver mt-1" />
              <div>
                <p className="font-medium text-foreground">Studio Location</p>
                <p className="text-muted-foreground">Area 57</p>
                <p className="text-muted-foreground">Lilongwe, MW</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-silver mt-1" />
              <div>
                <p className="font-medium text-foreground">Business Hours</p>
                <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM</p>
                <p className="text-muted-foreground">Saturday: 10 AM - 4 PM</p>
                <p className="text-muted-foreground">Sunday: By appointment</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-silver">Follow Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 text-sm">Stay connected and see our latest work on social media.</p>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="border-gold hover:bg-gold hover:text-gold bg-transparent"
            >
              <SiInstagram className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-gold hover:bg-gold hover:text-gold bg-transparent"
            >
              <SiFacebook className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-gold hover:bg-gold hover:text-gold bg-transparent"
            >
              <SiTiktok className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-gold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button asChild className="w-full bg-gold text-deep-black hover:bg-gold/90">
            <a href="/booking">Book a Session</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full border-silver text-white hover:bg-silver hover:text-gold bg-transparent"
          >
            <a href="/portfolio">View Portfolio</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full border-border hover:border-gold hover:text-gold bg-transparent"
          >
            <a href="/services">Our Services</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
