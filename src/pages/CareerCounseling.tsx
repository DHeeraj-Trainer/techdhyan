import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, User, Target, TrendingUp, Briefcase, Award, Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const CareerCounseling = () => {
  const counselingServices = [
    {
      icon: Target,
      title: "Career Path Assessment",
      description: "Discover the right career path based on your skills, interests, and market trends",
      features: ["Skill assessment tests", "Interest mapping", "Industry analysis", "Career roadmap creation"]
    },
    {
      icon: User,
      title: "One-on-One Mentorship",
      description: "Personal guidance from industry experts with years of experience",
      features: ["30-60 min sessions", "Expert career advisors", "Personalized action plans", "Follow-up support"]
    },
    {
      icon: Briefcase,
      title: "Job Market Insights",
      description: "Stay informed about industry trends and in-demand skills",
      features: ["Salary benchmarks", "Hiring trends", "Skill gap analysis", "Company insights"]
    },
    {
      icon: TrendingUp,
      title: "Career Transition Support",
      description: "Guidance for switching careers or advancing to the next level",
      features: ["Transition planning", "Skill bridging", "Industry networking", "Resume rebranding"]
    }
  ];

  const counselors = [
    {
      name: "Rajesh Kumar",
      role: "Senior Career Counselor",
      specialization: "Tech Careers & Development",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      role: "Career Transition Expert",
      specialization: "Data Science & Analytics",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amit Patel",
      role: "HR & Placement Specialist",
      specialization: "Interview & Resume",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const packages = [
    {
      name: "Basic Counseling",
      price: "₹999",
      duration: "1 Session",
      features: [
        "30-minute one-on-one session",
        "Career assessment",
        "Basic roadmap",
        "Email follow-up"
      ],
      popular: false
    },
    {
      name: "Professional Package",
      price: "₹2,999",
      duration: "3 Sessions",
      features: [
        "Three 60-minute sessions",
        "Comprehensive assessment",
        "Detailed career roadmap",
        "Resume review",
        "Interview preparation",
        "3-month email support"
      ],
      popular: true
    },
    {
      name: "Premium Package",
      price: "₹5,999",
      duration: "6 Months",
      features: [
        "Unlimited sessions",
        "Full career transformation",
        "Resume & LinkedIn optimization",
        "Mock interviews",
        "Job search strategy",
        "Placement assistance",
        "6-month dedicated support"
      ],
      popular: false
    }
  ];

  const successStories = [
    {
      name: "Rahul Verma",
      transition: "Mechanical Engineer → Data Analyst",
      package: "TCS",
      testimonial: "The career counseling helped me successfully transition to data analytics within 6 months."
    },
    {
      name: "Ananya Singh",
      transition: "Fresher → Full Stack Developer",
      package: "Wipro",
      testimonial: "With proper guidance, I landed my first job at Wipro right after completing my training."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Career Counseling
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get expert guidance to navigate your career journey and achieve your professional goals.
            </p>
            <Button size="lg" className="bg-hero-gradient hover:opacity-90">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Counseling Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive career guidance tailored to your unique needs and aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {counselingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-3" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Counselors Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Career Counselors
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals dedicated to your career success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {counselors.map((counselor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <img 
                    src={counselor.image}
                    alt={counselor.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <CardTitle className="text-xl">{counselor.name}</CardTitle>
                  <p className="text-primary font-medium">{counselor.role}</p>
                  <Badge variant="secondary">{counselor.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Specialization: {counselor.specialization}
                  </p>
                  <Button variant="outline" className="w-full">
                    Book Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Package
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible counseling packages to match your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-primary border-2' : ''} hover:shadow-lg transition-all duration-300`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.duration}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-hero-gradient hover:opacity-90' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real career transformations with our guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <TrendingUp className="h-4 w-4" />
                    <span>{story.transition}</span>
                  </div>
                  <Badge variant="secondary">{story.package}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{story.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation with our career experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-hero-gradient hover:opacity-90">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat with Counselor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerCounseling;
