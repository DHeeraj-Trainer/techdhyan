import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Tech Dhyan Learnings" className="h-12 w-12" />
              <div>
                <div className="font-bold text-lg">Tech Dhyan</div>
                <div className="text-gold text-sm">Learnings</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Bridging the gap between technology and students through industry-oriented, hands-on training programs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-gold transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-gold transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-gold transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-gold transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-gold transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-sm text-gray-300 hover:text-gold transition-colors">Courses</Link></li>
              <li><Link to="/programs" className="text-sm text-gray-300 hover:text-gold transition-colors">Programs</Link></li>
              <li><Link to="/admissions" className="text-sm text-gray-300 hover:text-gold transition-colors">Admissions</Link></li>
              <li><Link to="/corporate" className="text-sm text-gray-300 hover:text-gold transition-colors">Corporate Training</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Popular Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses/ai-ml" className="text-sm text-gray-300 hover:text-gold transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/courses/data-science" className="text-sm text-gray-300 hover:text-gold transition-colors">Data Science</Link></li>
              <li><Link to="/courses/programming" className="text-sm text-gray-300 hover:text-gold transition-colors">Programming</Link></li>
              <li><Link to="/courses/cloud" className="text-sm text-gray-300 hover:text-gold transition-colors">Cloud Computing</Link></li>
              <li><Link to="/courses/web-dev" className="text-sm text-gray-300 hover:text-gold transition-colors">Web Development</Link></li>
              <li><Link to="/courses/data-viz" className="text-sm text-gray-300 hover:text-gold transition-colors">Data Visualization</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-1 text-gold flex-shrink-0" />
                <span>Tech Dhyan Learnings, Innovation Hub, Tech City</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span>+91 8919244700</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span>info@techdhyan.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold text-sm mb-2">Business Hours</h4>
              <p className="text-sm text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM</p>
              <p className="text-sm text-gray-300">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © 2025 Tech Dhyan Learnings. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-gray-300 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-300 hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/refund" className="text-sm text-gray-300 hover:text-gold transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;