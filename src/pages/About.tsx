import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, Users, TrendingUp, BookOpen } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to delivering the highest quality education and training",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with students, industry, and academia",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and teaching methodologies",
    },
    {
      icon: BookOpen,
      title: "Integrity",
      description: "Maintaining transparency and ethical standards in all our endeavors",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold text-navy">About Us</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering the Next Generation of Tech Leaders
            </h1>
            <p className="text-xl text-gray-200">
              Bridging knowledge and innovation since 2025
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="border-2 border-primary">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower learners through industry-oriented, hands-on training programs that connect academic knowledge with real-world applications — bridging the gap between technology and students.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gold">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gold/10 rounded-lg">
                    <Eye className="h-10 w-10 text-gold" />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become a leading hub for technical education and emerging technologies, enabling students and professionals to master in-demand skills and thrive in the digital era.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-navy">Our Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                Founded in 2025, Tech Dhyan Learnings emerged from a vision to transform technical education in India. We recognized a critical gap between traditional academic learning and the rapidly evolving demands of the technology industry.
              </p>
              <p className="text-muted-foreground mb-4">
                Our founders, experienced technology professionals and educators, came together with a shared mission: to create a learning environment where students don't just study theory but gain practical, industry-ready skills that employers value.
              </p>
              <p className="text-muted-foreground">
                Today, Tech Dhyan Learnings stands as a testament to that vision, having trained over 1000+ students and partnered with numerous colleges and corporations to deliver exceptional technical education.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-2 hover:border-flame transition-all duration-300">
                  <CardContent className="pt-6 text-center">
                    <div className="inline-block p-4 bg-flame/10 rounded-lg mb-4">
                      <value.icon className="h-10 w-10 text-flame" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-navy">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-navy mb-2">1000+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-navy mb-2">50+</div>
              <div className="text-muted-foreground">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-navy mb-2">20+</div>
              <div className="text-muted-foreground">Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-navy mb-2">80%</div>
              <div className="text-muted-foreground">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
