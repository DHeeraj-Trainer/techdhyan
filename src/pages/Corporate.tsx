import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Building2, Users, TrendingUp, Award, CheckCircle2, ArrowRight } from "lucide-react";

const Corporate = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Our team will contact you within 24 hours to discuss your requirements.",
    });
  };

  const benefits = [
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Upskill your team with latest technologies and best practices",
    },
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      description: "Enhanced efficiency through modern tools and methodologies",
    },
    {
      icon: Award,
      title: "Certified Training",
      description: "Industry-recognized certifications for your employees",
    },
    {
      icon: Building2,
      title: "Custom Solutions",
      description: "Training programs tailored to your organization's needs",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold text-navy">Corporate Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empower Your Workforce with Technical Excellence
            </h1>
            <p className="text-xl text-gray-200">
              Customized corporate training programs for organizations of all sizes
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
              Why Partner with Tech Dhyan?
            </h2>
            <p className="text-lg text-muted-foreground">
              Transform your team's capabilities with our comprehensive training solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-gold transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="inline-block p-4 bg-gold/10 rounded-lg mb-4">
                    <benefit.icon className="h-10 w-10 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-navy">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
              Popular Corporate Training Programs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-navy">Data Analytics</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Python for Data Analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Power BI & Tableau</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">SQL & Database Management</span>
                  </li>
                </ul>
                <Badge>4-6 Weeks</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-flame">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-navy">Cloud Migration</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Azure Cloud Services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Cloud Security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">DevOps Practices</span>
                  </li>
                </ul>
                <Badge>6-8 Weeks</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-gold">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-navy">AI/ML Fundamentals</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Machine Learning Basics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">AI Implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Business Use Cases</span>
                  </li>
                </ul>
                <Badge>8-10 Weeks</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-navy">Cybersecurity</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Security Fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Threat Detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Best Practices</span>
                  </li>
                </ul>
                <Badge>6 Weeks</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-flame">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-navy">Full Stack Development</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Modern Web Technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Backend Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">API Integration</span>
                  </li>
                </ul>
                <Badge>10-12 Weeks</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-gold">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-navy">Agile Methodologies</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Scrum Framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Agile Best Practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Team Collaboration</span>
                  </li>
                </ul>
                <Badge>4 Weeks</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="pt-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-navy">
                  Request a Custom Proposal
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input id="companyName" placeholder="Tech Corp Ltd." required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Input id="industry" placeholder="e.g., IT Services" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Person *</Label>
                      <Input id="contactName" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation *</Label>
                      <Input id="designation" placeholder="HR Manager" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 1234567890" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="employees">Number of Employees to Train *</Label>
                      <Input id="employees" type="number" placeholder="50" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="program">Training Program Interest</Label>
                      <Input id="program" placeholder="e.g., Data Analytics" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Training Requirements *</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Describe your training needs, goals, and any specific requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-navy hover:bg-navy/90">
                    Submit Request <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
