import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, MapPin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Workshops = () => {
  const upcomingWorkshops = [
    {
      title: "Introduction to AI & Machine Learning",
      description: "Get started with AI concepts and build your first ML model",
      date: "Feb 10, 2025",
      time: "10:00 AM - 4:00 PM",
      duration: "6 hours",
      seats: "30 seats available",
      location: "Tech Dhyan Campus",
      level: "Beginner",
      instructor: "Rajesh Kumar",
      price: "₹999"
    },
    {
      title: "Full Stack Web Development Bootcamp",
      description: "Build complete web applications from scratch using React and Node.js",
      date: "Feb 15, 2025",
      time: "9:00 AM - 5:00 PM",
      duration: "8 hours",
      seats: "25 seats available",
      location: "Online",
      level: "Intermediate",
      instructor: "Priya Sharma",
      price: "₹1499"
    },
    {
      title: "Data Analytics with Python & Power BI",
      description: "Master data analysis and visualization techniques",
      date: "Feb 20, 2025",
      time: "2:00 PM - 6:00 PM",
      duration: "4 hours",
      seats: "40 seats available",
      location: "Tech Dhyan Campus",
      level: "Beginner",
      instructor: "Amit Patel",
      price: "₹799"
    },
    {
      title: "Cloud Computing with AWS",
      description: "Deploy and manage applications on AWS cloud platform",
      date: "Feb 25, 2025",
      time: "10:00 AM - 3:00 PM",
      duration: "5 hours",
      seats: "20 seats available",
      location: "Online",
      level: "Intermediate",
      instructor: "Kavya Reddy",
      price: "₹1299"
    }
  ];

  const seminars = [
    {
      title: "Career Guidance in Tech Industry",
      speaker: "Industry Expert Panel",
      date: "Feb 12, 2025",
      time: "6:00 PM - 8:00 PM",
      type: "Free Seminar"
    },
    {
      title: "Latest Trends in Artificial Intelligence",
      speaker: "Dr. Vikram Singh",
      date: "Feb 18, 2025",
      time: "5:00 PM - 7:00 PM",
      type: "Free Seminar"
    }
  ];

  const benefits = [
    "Hands-on practical experience",
    "Industry expert instructors",
    "Certificate of completion",
    "Networking opportunities",
    "Course materials included",
    "Post-workshop support"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Workshops & Seminars
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interactive learning sessions and events designed to enhance your skills and knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Attend Our Workshops?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-lg text-muted-foreground">
              Register now for our hands-on technical workshops
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{workshop.title}</CardTitle>
                    <Badge variant="secondary">{workshop.level}</Badge>
                  </div>
                  <p className="text-muted-foreground">{workshop.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{workshop.seats}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{workshop.location}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Instructor</div>
                        <div className="font-medium">{workshop.instructor}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{workshop.price}</div>
                      </div>
                    </div>
                    <Button className="w-full bg-hero-gradient hover:opacity-90">
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seminars */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Free Seminars
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our expert-led seminars and stay updated with industry trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {seminars.map((seminar, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-gold text-navy">{seminar.type}</Badge>
                  <CardTitle className="text-xl">{seminar.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-medium">{seminar.speaker}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{seminar.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{seminar.time}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Register for Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to Host a Workshop at Your Organization?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We offer customized workshops and seminars for colleges and companies.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-hero-gradient hover:opacity-90">
              Contact Us for Custom Workshops
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshops;
