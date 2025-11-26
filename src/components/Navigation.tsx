import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Parent Guide", href: "#parent-guide" },
    { label: "Safety", href: "#safety" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border/20 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <span className="text-xl font-bold text-primary font-display">KigaliCare</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              // Special handling for Parent Guide link
              if (item.label === "Parent Guide") {
                return (
                  <Link
                    key={item.label}
                    to="/first-time-guide"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                );
              }
              // Regular links for home page
              return isHomePage ? (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={`/${item.href}`}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/book-now">
              <Button className="gradient-button">
                Book Now
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20">
            <div className="space-y-4">
              {menuItems.map((item) => {
                // Special handling for Parent Guide link
                if (item.label === "Parent Guide") {
                  return (
                    <Link
                      key={item.label}
                      to="/first-time-guide"
                      className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }
                // Regular links
                return isHomePage ? (
                  <a 
                    key={item.label}
                    href={item.href} 
                    className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={`/${item.href}`}
                    className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link to="/book-now" onClick={() => setIsMenuOpen(false)}>
                <Button className="gradient-button w-full mt-4">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;