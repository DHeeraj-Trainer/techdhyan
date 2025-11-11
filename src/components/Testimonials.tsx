import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Venkata Lakshmi",
      role: "Full Stack Developer at TCS",
      content: "Tech Dhyan transformed my career completely. The practical training and job support helped me land my dream job at TCS. The mentors are incredibly supportive!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Srinivas Rao",
      role: "Data Scientist at Wipro",
      content: "The hands-on approach and real-time project assistance gave me the confidence to excel in interviews. I'm now working as a Data Scientist at Wipro!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mahalakshmi Reddy",
      role: "Digital Marketing Manager at Amazon",
      content: "The digital marketing course was comprehensive and current. The job support team helped me prepare specifically for Amazon's interview process. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rajesh Naidu",
      role: "Project Manager at Infosys",
      content: "Switching from technical to management was challenging, but Tech Dhyan's management course and mentorship made the transition smooth. Now I'm a PM at Infosys!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Anusha Chowdary",
      role: "Software Engineer at Microsoft",
      content: "The mock interviews and resume building sessions were game-changers. The personalized feedback helped me crack Microsoft's interview on my first attempt!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ramesh Babu",
      role: "Cloud Architect at Accenture",
      content: "The cloud computing course was exactly what I needed to advance my career. The practical labs and certification guidance were excellent. Thank you Tech Dhyan!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Divya Prasanna",
      role: "UI/UX Designer at Cognizant",
      content: "The design course helped me transition from development to design seamlessly. The portfolio guidance and industry insights were invaluable for my career growth!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Krishna Mohan",
      role: "DevOps Engineer at Tech Mahindra",
      content: "The DevOps training with real-world scenarios prepared me perfectly for industry challenges. Now I'm confidently managing CI/CD pipelines at Tech Mahindra!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories That Inspire
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our graduates who have transformed their careers and are now working 
            at leading companies worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0 space-y-4">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>

                {/* Profile */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-hero-gradient p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of successful graduates who transformed their careers with Tech Dhyan Learnings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your Journey
                </button>
              </a>
              <a href="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                  Talk to a Mentor
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;