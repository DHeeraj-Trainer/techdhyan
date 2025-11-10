import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import { coursesData } from "@/data/coursesData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Courses = () => {
  const [durationFilter, setDurationFilter] = useState<string>("all");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filteredCourses = coursesData.filter((course) => {
    const matchesDuration = durationFilter === "all" || course.duration.includes(durationFilter);
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    return matchesDuration && matchesLevel && matchesCategory;
  });

  const durations = ["all", "4 Weeks", "6 Weeks", "8 Weeks", "10 Weeks", "12 Weeks"];
  const levels = ["all", "Beginners", "Intermediate", "No Prerequisites", "IT/CS Students", "All Final Year Students", "Python/Java Basics Required", "Any Programming Language", "DSA Prerequisite", "Web Design Aspirants", "API/Server Development", "Job-Ready Developers", "Business Analysts", "ML/AI Aspirants", "Beginner to Intermediate"];
  const categories = ["all", "Programming", "Web Development", "Data", "Career Prep", "Cloud & Tools"];

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

      {/* Filters Section */}
      <section className="py-8 bg-cream border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-navy" />
              <span className="font-semibold text-navy">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-4 flex-1">
              <Select value={durationFilter} onValueChange={setDurationFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  {durations.map((duration) => (
                    <SelectItem key={duration} value={duration}>
                      {duration === "all" ? "All Durations" : duration}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level === "all" ? "All Levels" : level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Badge variant="secondary" className="text-sm">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'}
            </Badge>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No courses found matching your filters.</p>
              <Button
                onClick={() => {
                  setDurationFilter("all");
                  setLevelFilter("all");
                  setCategoryFilter("all");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredCourses.map((course) => (
                <Card key={course.id} className={`border-2 ${course.borderColor} hover:shadow-xl transition-all duration-300 group`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-4 bg-navy/5 rounded-lg group-hover:bg-navy/10 transition-colors">
                        <course.icon className={`h-12 w-12 ${course.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-navy">{course.title}</h3>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="secondary" className="text-xs">{course.duration} ({course.totalHours})</Badge>
                          <Badge variant="outline" className="text-xs">{course.level}</Badge>
                          <Badge className="text-xs bg-gold/10 text-navy border-gold">{course.category}</Badge>
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
                        <Link to={`/courses/${course.id}`}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link to="/admissions">Enroll Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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
