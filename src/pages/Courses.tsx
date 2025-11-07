import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Brain,
  Code,
  Database,
  Cloud,
  LineChart,
  Globe,
  FileSpreadsheet,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Master artificial intelligence, deep learning, neural networks, and natural language processing with hands-on projects",
      duration: "12 Weeks",
      level: "Advanced",
      modules: ["Python for ML", "Neural Networks", "Deep Learning", "NLP", "Computer Vision"],
      color: "text-flame",
      borderColor: "border-flame",
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Transform raw data into actionable insights using Python, R, statistics, and advanced visualization techniques",
      duration: "10 Weeks",
      level: "Intermediate",
      modules: ["Python/R", "Statistics", "Data Cleaning", "ML Algorithms", "Data Visualization"],
      color: "text-primary",
      borderColor: "border-primary",
    },
    {
      icon: Code,
      title: "Programming Languages",
      description: "Comprehensive training in Python, C, C++, Java, JavaScript, HTML, CSS, and React for modern development",
      duration: "Variable",
      level: "Beginner to Advanced",
      modules: ["Python", "Java", "C/C++", "JavaScript", "React"],
      color: "text-gold",
      borderColor: "border-gold",
    },
    {
      icon: Cloud,
      title: "Cloud Computing - Azure",
      description: "Deploy and manage scalable applications on Microsoft Azure with hands-on labs and real-world scenarios",
      duration: "8 Weeks",
      level: "Intermediate",
      modules: ["Azure Fundamentals", "Virtual Machines", "Storage", "Networking", "DevOps"],
      color: "text-flame",
      borderColor: "border-flame",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build responsive, modern web applications using HTML, CSS, JavaScript, React, and backend technologies",
      duration: "14 Weeks",
      level: "Beginner to Advanced",
      modules: ["HTML/CSS", "JavaScript", "React", "Node.js", "Databases"],
      color: "text-primary",
      borderColor: "border-primary",
    },
    {
      icon: FileSpreadsheet,
      title: "Microsoft Tools",
      description: "Master essential Microsoft Office tools including Excel, PowerPoint, Outlook, and Word for professional efficiency",
      duration: "6 Weeks",
      level: "Beginner to Intermediate",
      modules: ["Excel Advanced", "PowerPoint", "Word", "Outlook", "Office 365"],
      color: "text-gold",
      borderColor: "border-gold",
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Create compelling visual stories with Power BI, Tableau, Excel, Looker Studio, and Qlik Sense",
      duration: "8 Weeks",
      level: "Intermediate",
      modules: ["Power BI", "Tableau", "Excel Charts", "Looker Studio", "Qlik Sense"],
      color: "text-flame",
      borderColor: "border-flame",
    },
    {
      icon: LineChart,
      title: "Business Analytics",
      description: "Learn to analyze business data, create reports, and make data-driven decisions for organizational success",
      duration: "10 Weeks",
      level: "Intermediate",
      modules: ["Business Intelligence", "SQL", "Data Modeling", "Reporting", "KPI Design"],
      color: "text-primary",
      borderColor: "border-primary",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold text-navy">Our Courses</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry-Oriented Training Programs
            </h1>
            <p className="text-xl text-gray-200">
              Master in-demand skills with hands-on projects and expert mentorship
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className={`border-2 ${course.borderColor} hover:shadow-xl transition-all duration-300 group`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-navy/5 rounded-lg group-hover:bg-navy/10 transition-colors">
                      <course.icon className={`h-12 w-12 ${course.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-navy">{course.title}</h3>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">{course.duration}</Badge>
                        <Badge variant="outline" className="text-xs">{course.level}</Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{course.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-3">Key Modules:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.modules.map((module, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {module}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild className="flex-1 bg-navy hover:bg-navy/90">
                      <Link to="/admissions">
                        Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer customized training programs tailored to your specific needs. Contact us to discuss your requirements.
          </p>
          <Button asChild size="lg" className="bg-navy hover:bg-navy/90">
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
