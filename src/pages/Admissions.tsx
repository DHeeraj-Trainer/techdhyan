import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, FileText, CreditCard, GraduationCap, ArrowRight } from "lucide-react";
import { z } from "zod";
import { useState } from "react";

const admissionSchema = z.object({
  firstName: z.string().trim().min(2, "First name must be at least 2 characters").max(50, "First name too long"),
  lastName: z.string().trim().min(2, "Last name must be at least 2 characters").max(50, "Last name too long"),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  course: z.string().min(1, "Please select a course"),
  qualification: z.string().trim().min(2, "Please enter your qualification").max(100),
  experience: z.string().max(100).optional(),
  message: z.string().trim().min(20, "Please provide more details (at least 20 characters)").max(1000)
});

const Admissions = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const rawData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      course: formData.get("course") as string,
      qualification: formData.get("qualification") as string,
      experience: formData.get("experience") as string,
      message: formData.get("message") as string,
    };

    // Validate input
    const validation = admissionSchema.safeParse(rawData);
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and contact you within 24 hours.",
    });
    e.currentTarget.reset();
    setIsSubmitting(false);
  };

  const steps = [
    {
      icon: FileText,
      title: "Fill Application",
      description: "Complete the online application form with your details",
    },
    {
      icon: CheckCircle2,
      title: "Document Verification",
      description: "Our team will verify your submitted documents",
    },
    {
      icon: CreditCard,
      title: "Fee Payment",
      description: "Complete the course fee payment to confirm enrollment",
    },
    {
      icon: GraduationCap,
      title: "Start Learning",
      description: "Begin your journey with orientation and course access",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold text-navy">Admissions Open</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Start Your Learning Journey Today
            </h1>
            <p className="text-xl text-gray-200">
              Join thousands of students who have transformed their careers
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
              Simple Admission Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in just 4 easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="border-2 border-gold relative">
                <CardContent className="pt-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-bold">
                    {index + 1}
                  </div>
                  <div className="inline-block p-4 bg-gold/10 rounded-lg mb-4">
                    <step.icon className="h-10 w-10 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-navy">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="pt-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-navy">
                  Enrollment Application
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91 1234567890" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Select Course *</Label>
                    <select
                      id="course"
                      name="course"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background"
                      required
                    >
                      <option value="">Choose a course...</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="data-science">Data Science & Analytics</option>
                      <option value="programming">Programming Languages</option>
                      <option value="cloud">Cloud Computing - Azure</option>
                      <option value="web-dev">Web Development</option>
                      <option value="microsoft">Microsoft Tools</option>
                      <option value="data-viz">Data Visualization</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="qualification">Highest Qualification *</Label>
                      <Input id="qualification" name="qualification" placeholder="e.g., B.Tech in CSE" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Work Experience</Label>
                      <Input id="experience" name="experience" placeholder="e.g., 2 years" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Why do you want to join this course? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your goals and expectations..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="bg-cream p-6 rounded-lg">
                    <h3 className="font-bold text-navy mb-4">Eligibility Criteria</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Basic computer knowledge required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Graduation/pursuing graduation (for most courses)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Passion to learn and grow in technology</span>
                      </li>
                    </ul>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-navy hover:bg-navy/90" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-navy">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-navy mb-2">What documents do I need for admission?</h3>
                  <p className="text-muted-foreground">
                    You'll need your educational certificates, ID proof, passport size photographs, and resume (if applicable).
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-navy mb-2">Are there any scholarships available?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer merit-based scholarships and financial aid for deserving students. Contact us for more details.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-navy mb-2">Can I switch courses after enrollment?</h3>
                  <p className="text-muted-foreground">
                    Course switching is possible within the first week of starting, subject to availability and approval.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
