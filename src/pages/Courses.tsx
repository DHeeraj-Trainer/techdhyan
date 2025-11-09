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
      title: "CRT (Campus Recruitment Training)",
      description: "Comprehensive placement preparation covering aptitude, reasoning, verbal ability, and interview skills for final year students",
      duration: "8 Weeks (80 hrs)",
      level: "All Final Year Students",
      modules: ["Aptitude", "Logical Reasoning", "Verbal Ability", "Interview Prep", "Group Discussions"],
      color: "text-flame",
      borderColor: "border-flame",
    },
    {
      icon: Code,
      title: "C Programming",
      description: "Master the fundamentals of programming with C language, covering syntax, logic building, and problem-solving skills",
      duration: "6 Weeks (60 hrs)",
      level: "Beginners",
      modules: ["Basics & Syntax", "Control Flow", "Functions", "Pointers", "File Handling"],
      color: "text-primary",
      borderColor: "border-primary",
    },
    {
      icon: Code,
      title: "C++",
      description: "Learn object-oriented programming concepts with C++, building on C fundamentals for advanced application development",
      duration: "6 Weeks (60 hrs)",
      level: "Intermediate",
      modules: ["OOP Concepts", "Classes & Objects", "Inheritance", "Polymorphism", "STL"],
      color: "text-gold",
      borderColor: "border-gold",
    },
    {
      icon: Code,
      title: "Core Java",
      description: "Master Java programming from basics to advanced concepts, essential for IT/CS students and enterprise development",
      duration: "8 Weeks (80 hrs)",
      level: "IT/CS Students",
      modules: ["Java Fundamentals", "OOP in Java", "Collections", "Exception Handling", "Multithreading"],
      color: "text-flame",
      borderColor: "border-flame",
    },
    {
      icon: Code,
      title: "Python",
      description: "Learn Python programming for data analytics, automation, and web development with hands-on projects",
      duration: "6 Weeks (60 hrs)",
      level: "Beginners",
      modules: ["Python Basics", "Data Structures", "Functions", "Libraries", "File Operations"],
      color: "text-primary",
      borderColor: "border-primary",
    },
    {
      icon: Globe,
      title: "Frontend Development",
      description: "Build beautiful, responsive user interfaces using HTML, CSS, JavaScript, and modern frameworks",
      duration: "8 Weeks (80 hrs)",
      level: "Web Design Aspirants",
      modules: ["HTML/CSS", "JavaScript", "React", "Responsive Design", "UI/UX Basics"],
      color: "text-gold",
      borderColor: "border-gold",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Master server-side programming, APIs, databases, and authentication for building scalable applications",
      duration: "8 Weeks (80 hrs)",
      level: "API/Server Development",
      modules: ["Node.js", "Express", "Databases", "REST APIs", "Authentication"],
      color: "text-flame",
      borderColor: "border-flame",
    },
    {
      icon: Globe,
      title: "Full Stack Development",
      description: "Complete web development training covering both frontend and backend for job-ready developers",
      duration: "12 Weeks (120 hrs)",
      level: "Job-Ready Developers",
      modules: ["Frontend Stack", "Backend Stack", "Database Design", "Deployment", "Full Projects"],
      color: "text-primary",
      borderColor: "border-primary",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Learn to analyze and visualize business data using Excel, SQL, and analytics tools for data-driven decisions",
      duration: "8 Weeks (80 hrs)",
      level: "Business Analysts",
      modules: ["Excel Advanced", "SQL", "Data Visualization", "Statistical Analysis", "Power BI"],
      color: "text-gold",
      borderColor: "border-gold",
    },
    {
      icon: Brain,
      title: "Data Science",
      description: "Master machine learning, AI algorithms, and data modeling for building intelligent systems",
      duration: "12 Weeks (120 hrs)",
      level: "ML/AI Aspirants",
      modules: ["Python for ML", "Statistics", "Machine Learning", "Deep Learning", "AI Projects"],
      color: "text-flame",
      borderColor: "border-flame",
    },
    {
      icon: Code,
      title: "Python Foundation",
      description: "Build strong programming fundamentals with Python from scratch, no prior coding experience needed",
      duration: "6 Weeks (60 hrs)",
      level: "No Prerequisites",
      modules: ["Programming Logic", "Python Syntax", "Data Types", "Control Flow", "Functions"],
      color: "text-primary",
      borderColor: "border-primary",
    },
    {
      icon: Code,
      title: "Java Foundation",
      description: "Comprehensive Java training from basics, covering core concepts and object-oriented programming principles",
      duration: "8 Weeks (80 hrs)",
      level: "No Prerequisites",
      modules: ["Java Basics", "OOP Fundamentals", "Core APIs", "Collections", "Exception Handling"],
      color: "text-gold",
      borderColor: "border-gold",
    },
    {
      icon: Code,
      title: "OOPs Mastery",
      description: "Deep dive into Object-Oriented Programming concepts with real-world design patterns and best practices",
      duration: "4 Weeks (40 hrs)",
      level: "Python/Java Basics Required",
      modules: ["OOP Principles", "Design Patterns", "SOLID Principles", "Code Design", "Best Practices"],
      color: "text-flame",
      borderColor: "border-flame",
    },
    {
      icon: Brain,
      title: "DSA (Data Structures & Algorithms)",
      description: "Master problem-solving with comprehensive coverage of data structures and algorithms for coding interviews",
      duration: "8 Weeks (80 hrs)",
      level: "Any Programming Language",
      modules: ["Arrays & Strings", "Linked Lists", "Trees & Graphs", "Sorting & Searching", "Dynamic Programming"],
      color: "text-primary",
      borderColor: "border-primary",
    },
    {
      icon: Brain,
      title: "ADSA (Advanced DSA)",
      description: "Advanced algorithms and competitive programming techniques for cracking top-tier tech interviews",
      duration: "8 Weeks (80 hrs)",
      level: "DSA Prerequisite",
      modules: ["Advanced Algorithms", "Graph Algorithms", "System Design", "Competitive Coding", "Interview Prep"],
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
      icon: FileSpreadsheet,
      title: "Microsoft Tools",
      description: "Master essential Microsoft Office tools including Excel, PowerPoint, Outlook, and Word for professional efficiency",
      duration: "6 Weeks",
      level: "Beginner to Intermediate",
      modules: ["Excel Advanced", "PowerPoint", "Word", "Outlook", "Office 365"],
      color: "text-primary",
      borderColor: "border-primary",
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Create compelling visual stories with Power BI, Tableau, Excel, Looker Studio, and Qlik Sense",
      duration: "8 Weeks",
      level: "Intermediate",
      modules: ["Power BI", "Tableau", "Excel Charts", "Looker Studio", "Qlik Sense"],
      color: "text-gold",
      borderColor: "border-gold",
    },
    {
      icon: LineChart,
      title: "Business Analytics",
      description: "Learn to analyze business data, create reports, and make data-driven decisions for organizational success",
      duration: "10 Weeks",
      level: "Intermediate",
      modules: ["Business Intelligence", "SQL", "Data Modeling", "Reporting", "KPI Design"],
      color: "text-flame",
      borderColor: "border-flame",
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
