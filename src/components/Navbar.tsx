import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const courses = [
    { name: "AI & Machine Learning", path: "/courses/data-science" },
    { name: "Programming", path: "/courses" },
    { name: "Cloud Computing", path: "/courses/cloud-azure" },
    { name: "Web Development", path: "/courses"},
    { name: "Microsoft Tools", path: "/courses/microsoft-tools" },
    { name: "Data Visualization", path: "/courses/data-visualization" },
    { name: "Full Stack Development", path: "/courses/" },
    { name: "Data Analytics", path: "/courses/data-analytics" },
    { name: "CRT Training ", path: "/courses/crt" },


  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img src={logo} alt="Tech Dhyan Learnings" className="h-14 w-14" />
            <div className="hidden md:block">
              <div className="text-xl font-bold text-navy">Tech Dhyan</div>
              <div className="text-sm font-medium text-gold">Learnings</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {courses.map((course) => (
                        <li key={course.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={course.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{course.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/programs" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Programs
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/admissions" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Admissions
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/corporate" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Corporate
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/admissions">Enroll Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md">
                Home
              </Link>
              <Link to="/about" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md">
                About Us
              </Link>
              <div className="px-4 py-2">
                <div className="text-sm font-medium mb-2">Courses</div>
                <div className="pl-4 space-y-2">
                  {courses.map((course) => (
                    <Link
                      key={course.path}
                      to={course.path}
                      className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/programs" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md">
                Programs
              </Link>
              <Link to="/admissions" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md">
                Admissions
              </Link>
              <Link to="/corporate" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md">
                Corporate Training
              </Link>
              <Link to="/contact" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md">
                Contact
              </Link>
              <div className="px-4 pt-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/admissions">Enroll Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
