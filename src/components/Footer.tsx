import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary-light text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Heart className="w-7 h-7 text-white fill-current" />
              </div>
              <span className="text-2xl font-bold font-display">KigaliCare</span>
            </div>
            
            <p className="text-white/80 leading-relaxed max-w-md">
              Kigali's most trusted babysitting service, providing safe, loving, and professional 
              childcare when you need it most. Peace of mind for modern families.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Our Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Safety & Trust", href: "#safety" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Book Now", href: "#contact" }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 font-display">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/60" />
                <span className="text-white/80">+250 788 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/60" />
                <span className="text-white/80">hello@kigalicare.rw</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/60 mt-0.5" />
                <span className="text-white/80">
                  Serving all districts<br />
                  of Kigali, Rwanda
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 KigaliCare. All rights reserved. Licensed childcare provider in Rwanda.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Safety Guidelines</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;