import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Award, Users, BookOpen } from "lucide-react";

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Senior Full Stack Developer",
      image: "/placeholder.svg",
      experience: "8+ Years",
      expertise: ["React", "Node.js", "Python", "AWS"],
      bio: "Expert full-stack developer with extensive experience in building scalable web applications. Passionate about teaching modern development practices.",
      certifications: ["AWS Solutions Architect", "Google Cloud Professional"],
      studentsCount: "500+",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Data Science Lead",
      image: "/placeholder.svg",
      experience: "10+ Years",
      expertise: ["Machine Learning", "Python", "Data Analytics", "AI"],
      bio: "Data science expert with a PhD in Computer Science. Specializes in machine learning and artificial intelligence applications.",
      certifications: ["TensorFlow Certified", "Microsoft Azure AI"],
      studentsCount: "300+",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Amit Patel",
      title: "Digital Marketing Strategist",
      image: "/placeholder.svg",
      experience: "7+ Years",
      expertise: ["SEO", "Google Ads", "Social Media", "Analytics"],
      bio: "Digital marketing expert with proven track record of driving growth for Fortune 500 companies. Google Ads certified trainer.",
      certifications: ["Google Ads Certified", "HubSpot Certified"],
      studentsCount: "400+",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      title: "HR Management Consultant",
      image: "/placeholder.svg",
      experience: "12+ Years",
      expertise: ["HR Analytics", "Recruitment", "Leadership", "Training"],
      bio: "Senior HR professional with extensive experience in talent management and organizational development.",
      certifications: ["SHRM-CP", "PHR Certified"],
      studentsCount: "250+",
      linkedin: "#"
    },
    {
      id: 5,
      name: "Vikram Singh",
      title: "Project Management Expert",
      image: "/placeholder.svg",
      experience: "15+ Years",
      expertise: ["PMP", "Agile", "Scrum", "Leadership"],
      bio: "Certified PMP with experience leading large-scale projects across multiple industries. Expert in agile methodologies.",
      certifications: ["PMP Certified", "CSM", "SAFe Agilist"],
      studentsCount: "350+",
      linkedin: "#"
    },
    {
      id: 6,
      name: "Kavya Reddy",
      title: "Cloud Solutions Architect",
      image: "/placeholder.svg",
      experience: "9+ Years",
      expertise: ["AWS", "Azure", "DevOps", "Kubernetes"],
      bio: "Cloud expert specializing in designing and implementing scalable cloud solutions for enterprise clients.",
      certifications: ["AWS Solutions Architect", "Azure Expert"],
      studentsCount: "200+",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Expert Trainers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from industry professionals with years of real-world experience and a passion for teaching.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-muted-foreground">Expert Trainers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Industry Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <Card key={trainer.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="text-xl">{trainer.name}</CardTitle>
                  <p className="text-primary font-medium">{trainer.title}</p>
                  <Badge variant="secondary">{trainer.experience}</Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {trainer.bio}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Expertise:</div>
                    <div className="flex flex-wrap gap-1">
                      {trainer.expertise.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Certifications:</div>
                    <div className="space-y-1">
                      {trainer.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Award className="h-4 w-4 text-primary mr-2" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {trainer.studentsCount} Students
                    </div>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
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
            Want to Become a Trainer?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our team of expert trainers and help shape the next generation of professionals.
          </p>
          <Button size="lg" className="bg-hero-gradient hover:opacity-90">
            Apply to Teach
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trainers;