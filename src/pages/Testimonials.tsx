import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsComponent from "@/components/Testimonials";

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <TestimonialsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
