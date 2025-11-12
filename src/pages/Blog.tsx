import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "Top 10 Programming Languages to Learn in 2025",
      excerpt: "Discover which programming languages are dominating the industry and why you should learn them for career growth.",
      author: "Rajesh Kumar",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "Programming",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop"
    },
    {
      title: "AI and Machine Learning: Career Opportunities in 2025",
      excerpt: "Explore the explosive growth in AI careers and what skills you need to break into this exciting field.",
      author: "Priya Sharma",
      date: "Jan 12, 2025",
      readTime: "7 min read",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },
    {
      title: "How to Ace Your Technical Interview",
      excerpt: "Expert tips and strategies to prepare for technical interviews at top tech companies.",
      author: "Amit Patel",
      date: "Jan 10, 2025",
      readTime: "6 min read",
      category: "Career",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop"
    },
    {
      title: "Full Stack Development: The Complete Roadmap",
      excerpt: "A comprehensive guide to becoming a full stack developer, from basics to advanced concepts.",
      author: "Sneha Gupta",
      date: "Jan 8, 2025",
      readTime: "10 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop"
    },
    {
      title: "Data Science Projects That Get You Hired",
      excerpt: "Build these real-world projects to stand out in your data science job applications.",
      author: "Vikram Singh",
      date: "Jan 5, 2025",
      readTime: "8 min read",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Cloud Computing: AWS vs Azure vs Google Cloud",
      excerpt: "Compare the three major cloud platforms and learn which one is best for your career path.",
      author: "Kavya Reddy",
      date: "Jan 3, 2025",
      readTime: "9 min read",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    }
  ];

  const categories = ["All", "Programming", "AI & ML", "Career", "Web Development", "Data Science", "Cloud"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tech Dhyan Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest insights, industry trends, and career advice from technology experts.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest articles and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-hero-gradient hover:opacity-90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
