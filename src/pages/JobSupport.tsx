import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, User, FileText, MessageSquare, Briefcase, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const JobSupport = () => {
  const services = [
    {
      icon: User,
      title: "One-on-One Career Mentorship",
      description: "Personalized guidance from industry experts to help you navigate your career path.",
      features: ["Career roadmap planning", "Skill gap analysis", "Industry insights", "Goal setting"]
    },
    {
      icon: FileText,
      title: "Resume Building & Optimization",
      description: "Professional resume crafting that highlights your strengths and attracts recruiters.",
      features: ["ATS-friendly formatting", "Industry-specific keywords", "Achievement highlighting", "Multiple format options"]
    },
    {
      icon: MessageSquare,
      title: "Mock Interviews",
      description: "Practice with real interview scenarios and receive detailed feedback.",
      features: ["Technical interviews", "HR round preparation", "Group discussions", "Video interview practice"]
    },
    {
      icon: Briefcase,
      title: "Real-Time Project Assistance",
      description: "Support with live projects and assignments during your job search.",
      features: ["Project guidance", "Code reviews", "Portfolio development", "GitHub optimization"]
    }
  ];

  const companies = [
    "TCS", "Wipro", "Infosys", "Amazon", "Microsoft", "Google", 
    "Accenture", "IBM", "Cognizant", "HCL", "Tech Mahindra", "Capgemini"
  ];

  const successStories = [
    {
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      company: "Amazon",
      salary: "₹15 LPA",
      course: "Full Stack Development",
      testimonial: "The job support team helped me land my dream job at Amazon. The mock interviews were incredibly helpful!"
    },
    {
      name: "Priyanka Patel",
      role: "Data Scientist",
      company: "Microsoft",
      salary: "₹18 LPA",
      course: "Data Science & AI",
      testimonial: "From resume building to interview preparation, the support was comprehensive and effective."
    },
    {
      name: "Amit Kumar",
      role: "Project Manager",
      company: "TCS",
      salary: "₹12 LPA",
      course: "Project Management",
      testimonial: "The career mentorship helped me transition from a technical role to management successfully."
    }
  ];

  const stats = [
    { icon: Users, value: "92%", label: "Placement Success Rate" },
    { icon: TrendingUp, value: "₹8.5L", label: "Average Package" },
    { icon: Briefcase, value: "500+", label: "Job Placements" },
    { icon: Award, value: "50+", label: "Partner Companies" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Job Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We don't just train, we place. Get end-to-end career support from training to landing your dream job.
            </p>
            <Button size="lg" className="bg-hero-gradient hover:opacity-90">
              Get Job Support
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Job Support Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive career assistance designed to maximize your job prospects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300">
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

      {/* Company Partners */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Hiring Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              We have partnerships with leading companies for direct placements.
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="text-center p-4">
                <div className="text-sm font-medium text-muted-foreground">{company}</div>
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real students, real placements, real success stories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <div className="space-y-1">
                    <p className="text-primary font-medium">{story.role}</p>
                    <p className="text-sm text-muted-foreground">{story.company}</p>
                    <Badge variant="secondary">{story.salary}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">"{story.testimonial}"</p>
                  <Badge variant="outline">{story.course}</Badge>
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
            Ready to Launch Your Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of successful professionals who started their journey with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-hero-gradient hover:opacity-90">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobSupport;