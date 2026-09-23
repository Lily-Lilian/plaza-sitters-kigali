import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-sm.png";
import { BRAND, whatsappLink } from "@/lib/site";

const menuItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Prices", href: "#prices" },
  { label: "Sitters", href: "#sitters" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const renderLink = (item: (typeof menuItems)[number], className: string) =>
    isHomePage ? (
      <a key={item.label} href={item.href} className={className} onClick={() => setIsMenuOpen(false)}>
        {item.label}
      </a>
    ) : (
      <Link key={item.label} to={`/${item.href}`} className={className} onClick={() => setIsMenuOpen(false)}>
        {item.label}
      </Link>
    );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" className="w-11 h-11 rounded-full" />
            <span className="text-lg font-display font-semibold text-cocoa leading-tight">
              {BRAND.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-7">
            {menuItems.map((item) =>
              renderLink(item, "text-foreground hover:text-primary transition-colors font-semibold")
            )}
          </div>

          <div className="hidden md:block">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold rounded-full px-5">
                <MessageCircle className="mr-2 w-4 h-4" />
                Book on WhatsApp
              </Button>
            </a>
          </div>

          <button
            className="md:hidden p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-1">
              {menuItems.map((item) =>
                renderLink(item, "block text-foreground hover:text-primary transition-colors font-semibold py-2")
              )}
              <Link
                to="/first-time-guide"
                className="block text-foreground hover:text-primary transition-colors font-semibold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                First time leaving your baby?
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
