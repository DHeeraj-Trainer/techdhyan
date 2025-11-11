import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { coursesData } from "@/data/coursesData";
import { ArrowLeft, Clock, Users, Award, BookOpen, Target, Lightbulb, CheckCircle2 } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = coursesData.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-navy mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/courses">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const CourseIcon = course.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="text-white mb-6 hover:bg-white/10">
            <Link to="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
            </Link>
          </Button>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="p-6 bg-white/10 rounded-2xl">
              <CourseIcon className="h-20 w-20 text-gold" />
            </div>
            
            <div className="flex-1">
              <Badge className="mb-4 bg-gold text-navy">{course.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-200 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                {course.onlineDuration && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>Online: {course.onlineDuration}</span>
                  </div>
                )}
                {course.offlineDuration && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>Offline: {course.offlineDuration}</span>
                  </div>
                )}
                {!course.onlineDuration && !course.offlineDuration && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{course.duration} ({course.totalHours})</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span>Certificate Included</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-navy">
                  <Link to="/admissions">Enroll Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="syllabus" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="syllabus">
                <BookOpen className="mr-2 h-4 w-4" />
                Syllabus
              </TabsTrigger>
              <TabsTrigger value="outcomes">
                <Target className="mr-2 h-4 w-4" />
                Outcomes
              </TabsTrigger>
              <TabsTrigger value="projects">
                <Lightbulb className="mr-2 h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="certification">
                <Award className="mr-2 h-4 w-4" />
                Certification
              </TabsTrigger>
            </TabsList>

            <TabsContent value="syllabus" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-navy mb-6">Course Syllabus</h2>
                  
                  {course.detailedModules.length > 0 ? (
                    <div className="space-y-6">
                      {course.detailedModules.map((module, idx) => (
                        <div key={idx} className="border-l-4 border-primary pl-6 py-4 bg-cream/30 rounded-r-lg">
                          <div className="mb-4">
                            <Badge variant="outline" className="mb-2">Module {idx + 1}</Badge>
                            <h3 className="text-xl font-bold text-navy mb-3">{module.module}</h3>
                          </div>
                          <ul className="space-y-2">
                            {module.topics.map((topic, topicIdx) => (
                              <li key={topicIdx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="mt-6 p-4 bg-cream rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          This is a comprehensive course syllabus. Detailed session-wise breakdown and additional materials will be provided upon enrollment.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-muted-foreground mb-4">
                        This course covers comprehensive topics across multiple modules:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.modules.map((module, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-4 border rounded-lg">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-navy">{module}</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                In-depth coverage with hands-on practice
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-cream rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          Detailed session-wise syllabus will be provided upon enrollment.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="outcomes" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-navy mb-6">Learning Outcomes</h2>
                  <p className="text-muted-foreground mb-6">
                    By the end of this course, you will be able to:
                  </p>
                  <div className="space-y-4">
                    {course.learningOutcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-lg">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-navy mb-6">Hands-On Projects</h2>
                  <p className="text-muted-foreground mb-6">
                    Gain practical experience through real-world projects:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.projects.map((project, idx) => (
                      <Card key={idx} className="border-2 border-primary/20">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded">
                              <Lightbulb className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-navy mb-1">Project {idx + 1}</h3>
                              <p className="text-sm text-muted-foreground">{project}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certification" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-navy mb-6">Certification Details</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gold/10 rounded-lg">
                        <Award className="h-8 w-8 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-navy mb-2">{course.certification}</h3>
                        <p className="text-muted-foreground mb-4">
                          Upon successful completion of this course, you will receive an industry-recognized certificate.
                        </p>
                      </div>
                    </div>

                    <div className="bg-cream p-6 rounded-lg space-y-4">
                      <h4 className="font-semibold text-navy">Certificate Includes:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Official certificate from TechDhyan </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Detailed performance report</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Project completion credentials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>LinkedIn shareable certificate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Lifetime validity and verification</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <Button asChild size="lg" className="w-full md:w-auto bg-navy hover:bg-navy/90">
                        <Link to="/admissions">Start Your Journey Today</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
