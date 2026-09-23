import { MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-sm.png";
import { BRAND, HOURS, PHONE, telLink, whatsappLink } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="bg-cocoa text-white pb-20 md:pb-0">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="w-14 h-14 rounded-full" />
            <div>
              <p className="text-xl font-display font-semibold">{BRAND.name}</p>
              <p className="text-white/70 text-sm">{BRAND.tagline}</p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/90 hover:text-white">
              <MessageCircle className="w-4 h-4" /> WhatsApp {PHONE.display}
            </a>
            <a href={telLink} className="flex items-center gap-2 text-white/90 hover:text-white">
              <Phone className="w-4 h-4" /> Call {PHONE.display}
            </a>
            <p className="text-white/70">{HOURS}</p>
          </div>

          <div className="space-y-2 text-sm">
            <Link to="/first-time-guide" className="block text-white/90 hover:text-white">
              First time leaving your baby?
            </Link>
            <Link to="/book-now" className="block text-white/90 hover:text-white">
              Book online
            </Link>
          </div>
        </div>

        <p className="border-t border-white/15 mt-8 pt-6 text-white/60 text-sm">
          © {new Date().getFullYear()} {BRAND.name}. Babysitting and childcare in Kigali.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
