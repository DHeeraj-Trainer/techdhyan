import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Target, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";

const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold text-navy">Our Programs</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Specialized Training Programs
            </h1>
            <p className="text-xl text-gray-200">
              Tailored solutions for students, professionals, and organizations
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* CRT Programs */}
          <Card className="border-2 border-primary mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block p-4 bg-primary/10 rounded-lg mb-6">
                    <GraduationCap className="h-16 w-16 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                    Campus Recruitment Training (CRT)
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Comprehensive training program designed to prepare students for campus placements and recruitment drives with confidence and competence.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Aptitude & Reasoning</h4>
                        <p className="text-sm text-muted-foreground">Quantitative aptitude, logical reasoning, and verbal ability</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Technical Interview Preparation</h4>
                        <p className="text-sm text-muted-foreground">Core subjects, coding challenges, and problem-solving techniques</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">HR & Group Discussion</h4>
                        <p className="text-sm text-muted-foreground">Communication skills, personality development, and soft skills</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Mock Interviews & Tests</h4>
                        <p className="text-sm text-muted-foreground">Real-world simulation with expert feedback</p>
                      </div>
                    </div>
                  </div>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link to="/admissions">
                      Enroll in CRT Program <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-cream p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6 text-navy">Program Highlights</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                      <Badge className="bg-gold text-navy">Duration</Badge>
                      <span className="text-navy">8-12 Weeks</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                      <Badge className="bg-gold text-navy">Format</Badge>
                      <span className="text-navy">Hybrid (Online + Offline)</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                      <Badge className="bg-gold text-navy">Batch Size</Badge>
                      <span className="text-navy">30-40 Students</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                      <Badge className="bg-gold text-navy">Success Rate</Badge>
                      <span className="text-navy">80%+ Placements</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Corporate Training */}
          <Card className="border-2 border-flame mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 bg-cream p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6 text-navy">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-flame mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy mb-1">Custom Curriculum Design</h4>
                        <p className="text-sm text-muted-foreground">Tailored to your organization's specific needs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-flame mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy mb-1">Flexible Scheduling</h4>
                        <p className="text-sm text-muted-foreground">Weekend batches and customized timings</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-flame mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy mb-1">On-site Training Available</h4>
                        <p className="text-sm text-muted-foreground">We can conduct training at your location</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-flame mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy mb-1">Post-Training Support</h4>
                        <p className="text-sm text-muted-foreground">Continued support and consultation</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block p-4 bg-flame/10 rounded-lg mb-6">
                    <Users className="h-16 w-16 text-flame" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                    Corporate Training Programs
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Empower your workforce with cutting-edge technical skills through our customized corporate training solutions designed for organizations of all sizes.
                  </p>
                  <div className="mb-8">
                    <h4 className="font-semibold text-navy mb-3">Popular Corporate Programs:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Data Analytics</Badge>
                      <Badge variant="outline">Cloud Migration</Badge>
                      <Badge variant="outline">AI/ML Fundamentals</Badge>
                      <Badge variant="outline">Cybersecurity</Badge>
                      <Badge variant="outline">DevOps</Badge>
                      <Badge variant="outline">Agile Methodologies</Badge>
                    </div>
                  </div>
                  <Button asChild size="lg" className="bg-flame hover:bg-flame/90">
                    <Link to="/corporate">
                      Request a Proposal <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Assistance */}
          <Card className="border-2 border-gold mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block p-4 bg-gold/10 rounded-lg mb-6">
                    <Target className="h-16 w-16 text-gold" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                    Project Assistance Program
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Expert guidance and support for your college mini projects and major projects, ensuring industry-standard quality and timely completion.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Expert Mentorship</h4>
                        <p className="text-sm text-muted-foreground">One-on-one guidance from industry professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Industry-Standard Projects</h4>
                        <p className="text-sm text-muted-foreground">Real-world applications using latest technologies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Complete Documentation</h4>
                        <p className="text-sm text-muted-foreground">Reports, presentations, and technical documentation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Viva Preparation</h4>
                        <p className="text-sm text-muted-foreground">Mock vivas and presentation skills training</p>
                      </div>
                    </div>
                  </div>
                  <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90">
                    <Link to="/contact">
                      Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-cream p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6 text-navy">Project Domains</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-semibold text-navy mb-2">Web Development</h4>
                      <p className="text-xs text-muted-foreground">Full-stack applications</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-semibold text-navy mb-2">Mobile Apps</h4>
                      <p className="text-xs text-muted-foreground">Android & iOS</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-semibold text-navy mb-2">Machine Learning</h4>
                      <p className="text-xs text-muted-foreground">AI-powered solutions</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-semibold text-navy mb-2">Data Analytics</h4>
                      <p className="text-xs text-muted-foreground">Business intelligence</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-semibold text-navy mb-2">IoT Systems</h4>
                      <p className="text-xs text-muted-foreground">Smart solutions</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h4 className="font-semibold text-navy mb-2">Cloud Projects</h4>
                      <p className="text-xs text-muted-foreground">Scalable apps</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Internship Program */}
          <Card className="border-2 border-primary">
            <CardContent className="p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-block p-4 bg-primary/10 rounded-lg mb-6">
                  <Briefcase className="h-16 w-16 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                  Internship & Placement Program
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get hands-on industry experience through our internship program and benefit from dedicated placement assistance to kickstart your career.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-6 bg-cream rounded-lg">
                    <h4 className="font-bold text-navy mb-2">3-6 Months</h4>
                    <p className="text-sm text-muted-foreground">Internship Duration</p>
                  </div>
                  <div className="p-6 bg-cream rounded-lg">
                    <h4 className="font-bold text-navy mb-2">Live Projects</h4>
                    <p className="text-sm text-muted-foreground">Real Work Experience</p>
                  </div>
                  <div className="p-6 bg-cream rounded-lg">
                    <h4 className="font-bold text-navy mb-2">Certificate</h4>
                    <p className="text-sm text-muted-foreground">On Completion</p>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/admissions">
                    Apply for Internship <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
