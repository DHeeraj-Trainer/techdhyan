import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Brain,
  Code,
  Database,
  Cloud,
  LineChart,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const featuredCourses = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Master artificial intelligence and machine learning concepts with hands-on projects",
      duration: "12 Weeks",
      level: "Advanced",
      color: "text-flame",
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Transform data into insights with Python, statistics, and visualization tools",
      duration: "10 Weeks",
      level: "Intermediate",
      color: "text-primary",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Build modern web applications with React, Node.js, and database technologies",
      duration: "14 Weeks",
      level: "Beginner to Advanced",
      color: "text-gold",
    },
    {
      icon: Cloud,
      title: "Cloud Computing - Azure",
      description: "Deploy and manage scalable applications on Microsoft Azure cloud platform",
      duration: "8 Weeks",
      level: "Intermediate",
      color: "text-flame",
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Industry-Oriented Curriculum",
      description: "Real-world projects aligned with current industry demands",
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Learn from professionals with years of industry experience",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Recognized certificates to boost your career prospects",
    },
    {
      icon: TrendingUp,
      title: "Placement Assistance",
      description: "Dedicated support to help you land your dream job",
    },
  ];

  const stats = [
    { number: "1000+", label: "Students Trained" },
    { number: "50+", label: "Expert Trainers" },
    { number: "20+", label: "Courses Offered" },
    { number: "80%", label: "Placement Rate" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-primary text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.2),transparent_50%)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold text-navy hover:bg-gold/90 animate-fade-in">
              Established 2025 | Empowering Future Tech Leaders
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Bridge the Gap Between <span className="text-gold">Tech</span> & <span className="text-gold">Students</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Master in-demand skills through industry-oriented, hands-on training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90 text-lg px-8 hover-scale">
                <Link to="/admissions">
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 hover-scale">
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gold/10 text-gold border-gold">Why Tech Dhyan</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy">
              Why Choose Tech Dhyan Learnings?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine academic excellence with practical industry experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-gold transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-gold/10 rounded-lg w-fit">
                    <feature.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-navy">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-flame/10 text-flame border-flame">Our Courses</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy">
              Featured Training Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive courses designed for the modern tech landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="border-2 hover:border-flame transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-navy/5 rounded-lg group-hover:bg-navy/10 transition-colors">
                      <course.icon className={`h-10 w-10 ${course.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-navy">{course.title}</h3>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">{course.duration}</Badge>
                        <Badge variant="outline" className="text-xs">{course.level}</Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-navy group-hover:text-white transition-colors">
                    <Link to="/courses">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-navy hover:bg-navy/90">
              <Link to="/courses">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary">Special Programs</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy">
              Tailored Programs for Every Need
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-navy">CRT Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Campus Recruitment Training to prepare students for placement success
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Aptitude & Reasoning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Technical Interview Prep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Mock Interviews</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-flame mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-navy">Corporate Training</h3>
                <p className="text-muted-foreground mb-4">
                  Customized training modules for organizations and enterprises
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom Curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Flexible Schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">On-site Training Available</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/corporate">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-navy">Project Assistance</h3>
                <p className="text-muted-foreground mb-4">
                  Guidance and support for college mini and major projects
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Expert Mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Industry-Standard Projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Documentation Support</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Zap className="h-16 w-16 mx-auto mb-6 text-gold" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join thousands of students who have successfully bridged the gap between learning and industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90 text-lg px-8">
              <Link to="/admissions">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
