"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, Send, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    location: "",
    guestCount: "",
    budget: "",
    package: "",
    additionalServices: [] as string[],
    message: "",
    hearAbout: "",
  })

  const serviceTypes = [
    { value: "photography", label: "Photography" },
    { value: "videography", label: "Videography" },
    { value: "both", label: "Photography & Videography" },
    { value: "design", label: "Graphic Design" },
    { value: "branding", label: "Branding Package" },
  ]

  const eventTypes = [
    { value: "wedding", label: "Wedding" },
    { value: "engagement", label: "Engagement Session" },
    { value: "portrait", label: "Portrait Session" },
    { value: "corporate", label: "Corporate Event" },
    { value: "product", label: "Product Shoot" },
    { value: "music-video", label: "Music Video" },
    { value: "other", label: "Other" },
  ]

  const weddingPackages = [
    { value: "bronze", label: "Bronze Package (400,000 UGX)" },
    { value: "silver", label: "Silver Package (650,000 UGX)" },
    { value: "gold", label: "Gold Package (900,000 UGX)" },
    { value: "custom", label: "Custom Package" },
  ]

  const additionalServiceOptions = [
    { id: "engagement", label: "Engagement Session" },
    { id: "album", label: "Premium Photo Album" },
    { id: "prints", label: "Additional Prints" },
    { id: "drone", label: "Drone Photography" },
    { id: "livestream", label: "Live Streaming" },
    { id: "editing", label: "Rush Editing (24hr)" },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAdditionalServiceChange = (serviceId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, serviceId]
        : prev.additionalServices.filter((id) => id !== serviceId),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Booking Request Submitted!",
      description: "We'll get back to you within 24 hours with a personalized quote.",
    })
  }

  if (isSubmitted) {
    return (
      <Card className="border-gold/50 glow-gold">
        <CardContent className="p-12 text-center">
          <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Thank You!</h2>
          <p className="text-muted-foreground mb-6 text-pretty">
         {`   Your booking request has been submitted successfully. We'll review your requirements and get back to you
            within 24 hours with a personalized quote and consultation details.`}
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                serviceType: "",
                eventType: "",
                eventDate: "",
                eventTime: "",
                location: "",
                guestCount: "",
                budget: "",
                package: "",
                additionalServices: [],
                message: "",
                hearAbout: "",
              })
            }}
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-deep-black"
          >
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl text-gold">Booking Request Form</CardTitle>
        <p className="text-muted-foreground">
          Please fill out all required fields so we can provide you with an accurate quote.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                  className="border-border focus:border-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                  className="border-border focus:border-gold"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="border-border focus:border-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="border-border focus:border-gold"
                />
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Service Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                  <SelectTrigger className="border-border focus:border-gold">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventType">Event Type *</Label>
                <Select value={formData.eventType} onValueChange={(value) => handleInputChange("eventType", value)}>
                  <SelectTrigger className="border-border focus:border-gold">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((event) => (
                      <SelectItem key={event.value} value={event.value}>
                        {event.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {formData.eventType === "wedding" && (
              <div className="space-y-2">
                <Label htmlFor="package">Wedding Package</Label>
                <Select value={formData.package} onValueChange={(value) => handleInputChange("package", value)}>
                  <SelectTrigger className="border-border focus:border-gold">
                    <SelectValue placeholder="Select wedding package" />
                  </SelectTrigger>
                  <SelectContent>
                    {weddingPackages.map((pkg) => (
                      <SelectItem key={pkg.value} value={pkg.value}>
                        {pkg.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {/* Event Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Event Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="eventDate">Event Date *</Label>
                <div className="relative">
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange("eventDate", e.target.value)}
                    required
                    className="border-border focus:border-gold"
                  />
                  <Calendar className="absolute right-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventTime">Event Time</Label>
                <div className="relative">
                  <Input
                    id="eventTime"
                    type="time"
                    value={formData.eventTime}
                    onChange={(e) => handleInputChange("eventTime", e.target.value)}
                    className="border-border focus:border-gold"
                  />
                  <Clock className="absolute right-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Event Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="Venue name and address"
                required
                className="border-border focus:border-gold"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="guestCount">Expected Guest Count</Label>
                <Input
                  id="guestCount"
                  type="number"
                  value={formData.guestCount}
                  onChange={(e) => handleInputChange("guestCount", e.target.value)}
                  placeholder="Approximate number"
                  className="border-border focus:border-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range (UGX)</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger className="border-border focus:border-gold">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="300-500k">300,000 - 500,000 UGX</SelectItem>
                    <SelectItem value="500-800k">500,000 - 800,000 UGX</SelectItem>
                    <SelectItem value="800k-1m">800,000 - 1,000,000 UGX</SelectItem>
                    <SelectItem value="1m+">1,000,000+ UGX</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalServiceOptions.map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={service.id}
                    checked={formData.additionalServices.includes(service.id)}
                    onCheckedChange={(checked) => handleAdditionalServiceChange(service.id, checked as boolean)}
                  />
                  <Label htmlFor={service.id} className="text-sm">
                    {service.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
            <div className="space-y-2">
              <Label htmlFor="message">Special Requests or Details</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell us about your vision, special requirements, or any questions you have..."
                rows={4}
                className="border-border focus:border-gold"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hearAbout">How did you hear about us?</Label>
              <Select value={formData.hearAbout} onValueChange={(value) => handleInputChange("hearAbout", value)}>
                <SelectTrigger className="border-border focus:border-gold">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">Google Search</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="referral">Friend/Family Referral</SelectItem>
                  <SelectItem value="vendor">Wedding Vendor</SelectItem>
                  <SelectItem value="website">Our Website</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold text-deep-black hover:bg-gold/90 glow-gold transition-all duration-300"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-deep-black border-t-transparent rounded-full animate-spin" />
                <span>Submitting...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Submit Booking Request</span>
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
