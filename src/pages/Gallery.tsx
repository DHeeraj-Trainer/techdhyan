import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const categories = ["All", "Classroom", "Events", "Workshops", "Facilities"];
  
  const images = [
    {
      title: "Modern Classroom",
      category: "Classroom",
      description: "State-of-the-art training facilities",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&h=300&fit=crop"
    },
    {
      title: "Tech Workshop",
      category: "Workshops",
      description: "Hands-on learning sessions",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
    },
    {
      title: "Student Collaboration",
      category: "Classroom",
      description: "Team projects and discussions",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop"
    },
    {
      title: "Industry Seminar",
      category: "Events",
      description: "Expert talks and networking",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop"
    },
    {
      title: "Computer Lab",
      category: "Facilities",
      description: "High-spec systems for all students",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop"
    },
    {
      title: "Graduation Ceremony",
      category: "Events",
      description: "Celebrating success stories",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop"
    },
    {
      title: "Coding Bootcamp",
      category: "Workshops",
      description: "Intensive skill development",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop"
    },
    {
      title: "Student Lounge",
      category: "Facilities",
      description: "Relaxation and study area",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop"
    },
    {
      title: "Project Presentation",
      category: "Events",
      description: "Students showcasing their work",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a look at our state-of-the-art facilities, events, and vibrant learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
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

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
