import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Settings, Save, User, Bell, Shield } from "lucide-react"

export function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application settings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-gold flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Profile Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="Jay Williams" className="border-border focus:border-gold" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                defaultValue="jay@jayarts.com"
                className="border-border focus:border-gold"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+1 (555) 123-4567" className="border-border focus:border-gold" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                defaultValue="Professional photographer and creative director with over 8 years of experience."
                className="border-border focus:border-gold"
                rows={3}
              />
            </div>
            <Button className="w-full bg-gold text-deep-black hover:bg-gold/90">
              <Save className="w-4 h-4 mr-2" />
              Save Profile
            </Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-silver flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">New Bookings</p>
                <p className="text-sm text-muted-foreground">Get notified when new booking requests are submitted</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive email updates for important events</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Portfolio Comments</p>
                <p className="text-sm text-muted-foreground">Get notified when someone comments on your work</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Marketing Updates</p>
                <p className="text-sm text-muted-foreground">Receive updates about new features and tips</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-gold flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" className="border-border focus:border-gold" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" className="border-border focus:border-gold" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" className="border-border focus:border-gold" />
            </div>
            <Button className="w-full bg-gold text-deep-black hover:bg-gold/90">Update Password</Button>
          </CardContent>
        </Card>

        {/* Business Settings */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-silver flex items-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Business Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="business-name">Business Name</Label>
              <Input id="business-name" defaultValue="JayArts Multimedia" className="border-border focus:border-gold" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business-address">Business Address</Label>
              <Textarea
                id="business-address"
                defaultValue="123 Creative Avenue, New York, NY 10001"
                className="border-border focus:border-gold"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business-hours">Business Hours</Label>
              <Textarea
                id="business-hours"
                defaultValue="Monday - Friday: 9 AM - 6 PM&#10;Saturday: 10 AM - 4 PM&#10;Sunday: By appointment"
                className="border-border focus:border-gold"
                rows={3}
              />
            </div>
            <Button className="w-full bg-silver text-deep-black hover:bg-silver/90">
              <Save className="w-4 h-4 mr-2" />
              Save Business Info
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
