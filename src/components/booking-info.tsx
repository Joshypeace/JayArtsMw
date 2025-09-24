import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export function BookingInfo() {
  const processSteps = [
    {
      step: 1,
      title: "Submit Request",
      description: "Fill out our detailed booking form with your event information.",
    },
    {
      step: 2,
      title: "Consultation",
      description: "We'll schedule a free consultation to discuss your vision and requirements.",
    },
    {
      step: 3,
      title: "Custom Quote",
      description: "Receive a personalized quote tailored to your specific needs and budget.",
    },
    {
      step: 4,
      title: "Book & Plan",
      description: "Secure your date with a deposit and begin planning your perfect shoot.",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Process Steps */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-gold flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>Booking Process</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {processSteps.map((step) => (
            <div key={step.step} className="flex space-x-3">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-deep-black font-bold text-sm flex-shrink-0">
                {step.step}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* What's Included */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-silver flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>What's Included</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-gold" />
              <span>Free initial consultation</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-gold" />
              <span>Personalized service package</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-gold" />
              <span>Professional equipment & team</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-gold" />
              <span>High-resolution digital delivery</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-gold" />
              <span>Professional editing & retouching</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-gold" />
              <span>Online gallery access</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-xl text-gold">Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Have questions about our services or need assistance with your booking? We're here to help!
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="w-4 h-4 text-silver" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="w-4 h-4 text-silver" />
              <span>hello@jayarts.com</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <MapPin className="w-4 h-4 text-silver" />
              <span>New York, NY</span>
            </div>
          </div>
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Response time: We typically respond to all booking requests within 24 hours during business days.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
