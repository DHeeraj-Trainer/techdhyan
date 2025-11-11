import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, FileText, MessageCircle, Briefcase, Target, TrendingUp } from "lucide-react";
import jobSupportImage from "@/assets/job-support.jpg";

const JobSupport = () => {
  const services = [
    {
      icon: User,
      title: "One-on-One Career Mentorship",
      description: "Personal guidance from industry experts to plan your career path"
    },
    {
      icon: FileText,
      title: "Resume Building",
      description: "Professional resume crafting that highlights your skills effectively"
    },
    {
      icon: MessageCircle,
      title: "Mock Interviews",
      description: "Practice sessions with real interview scenarios and feedback"
    },
    {
      icon: Briefcase,
      title: "Real-Time Project Assistance",
      description: "Support with live projects to build your portfolio"
    },
    {
      icon: Target,
      title: "Company-Specific Prep",
      description: "Targeted preparation for top companies like TCS, Wipro, Amazon"
    },
    {
      icon: TrendingUp,
      title: "Career Growth Planning",
      description: "Strategic roadmap for long-term career advancement"
    }
  ];

  const companies = [
    "TCS", "Wipro", "Infosys", "Amazon", "Microsoft", "Google", "Accenture", "IBM"
  ];

  return (
    <section id="job-support" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Don't Just Train, We Place
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive job support program ensures you're not just ready for the job market, 
            but positioned to excel in your chosen career path.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={jobSupportImage}
              alt="Career mentorship session"
              className="w-full h-auto rounded-2xl shadow-large"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-large">
              <div className="text-2xl font-bold">92%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Comprehensive Career Support
              </h3>
              <div className="grid gap-6">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <a href="/get-started">
              <Button size="lg" className="bg-hero-gradient hover:opacity-90">
                Get Career Support
              </Button>
            </a>
          </div>
        </div>

        {/* Companies Section */}
        <Card className="p-8 bg-gradient-light">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Students Work At
            </h3>
            <p className="text-muted-foreground">
              We prepare you for opportunities at leading companies
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {companies.map((company) => (
              <Badge 
                key={company} 
                variant="secondary" 
                className="text-sm py-2 px-4 bg-background hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {company}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default JobSupport;