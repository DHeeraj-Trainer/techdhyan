import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold text-navy">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200">
              We're here to help you start your learning journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <Card className="border-2 border-primary">
              <CardContent className="pt-6 text-center">
                <div className="inline-block p-4 bg-primary/10 rounded-lg mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-navy">Visit Us</h3>
                <p className="text-muted-foreground">
                  Tech Dhyan Learnings<br />
                  Innovation Hub, Tech City<br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gold">
              <CardContent className="pt-6 text-center">
                <div className="inline-block p-4 bg-gold/10 rounded-lg mb-4">
                  <Phone className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-navy">Call Us</h3>
                <p className="text-muted-foreground">
                  +91 1234567890<br />
                  +91 0987654321<br />
                  Mon - Sat: 9 AM - 7 PM
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-flame">
              <CardContent className="pt-6 text-center">
                <div className="inline-block p-4 bg-flame/10 rounded-lg mb-4">
                  <Mail className="h-8 w-8 text-flame" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-navy">Email Us</h3>
                <p className="text-muted-foreground">
                  info@techdhyan.com<br />
                  admissions@techdhyan.com<br />
                  support@techdhyan.com
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-navy">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 1234567890" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course">Interested Course</Label>
                      <Input id="course" placeholder="e.g., Data Science" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-navy hover:bg-navy/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-2 border-gold">
            <CardContent className="pt-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Clock className="h-10 w-10 text-gold" />
                <h2 className="text-2xl font-bold text-navy">Business Hours</h2>
              </div>
              <div className="space-y-3 text-center">
                <div className="flex justify-between max-w-sm mx-auto">
                  <span className="font-medium">Monday - Friday:</span>
                  <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between max-w-sm mx-auto">
                  <span className="font-medium">Saturday:</span>
                  <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between max-w-sm mx-auto">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
