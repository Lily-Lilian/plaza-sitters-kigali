import { Phone, MessageCircle, MapPin, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Plaza Sitters Kigali</h3>
              <p className="text-gray-400 text-sm">Started by moms, for moms.</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-4 max-w-sm">
              <p className="text-gray-300 text-sm leading-relaxed">
                "My sister needed a sitter. I knew someone. Word spread. 
                Now we're here. Still just neighbors helping neighbors."
              </p>
              <p className="text-orange-400 text-sm mt-2 font-semibold">- Grace, Founder</p>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>2 sitters available right now</span>
            </div>
          </div>
          
          {/* Quick Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Good to know:</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">•</span>
                <span>Minimum 3 hours booking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">•</span>
                <span>Extra kid? +2,000 RWF/hour</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">•</span>
                <span>After midnight? +5,000 RWF</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">•</span>
                <span>Cancel anytime (just tell us)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">•</span>
                <span>Transport: Sitter pays their way</span>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Need a sitter?</h4>
            <div className="space-y-3">
              <a href="https://wa.me/250788123456" className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors group">
                <MessageCircle className="w-5 h-5 text-gray-500 group-hover:text-green-400" />
                <span className="text-sm">WhatsApp: 0788 123 456</span>
              </a>
              <a href="tel:+250788123456" className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors group">
                <Phone className="w-5 h-5 text-gray-500 group-hover:text-orange-400" />
                <span className="text-sm">Call: 0788 123 456</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <Coffee className="w-5 h-5 text-gray-500 mt-0.5" />
                <div className="text-sm">
                  <p>Meet us at Java House</p>
                  <p className="text-gray-500">KCT, any Tuesday 2-4 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                <div className="text-sm">
                  <p>We come to you!</p>
                  <p className="text-gray-500">All Kigali neighborhoods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© 2024 Plaza Sitters Kigali</p>
              <p className="text-gray-600 text-xs mt-1">
                Not a registered company. Just moms with a WhatsApp group 😄
              </p>
            </div>
            <div className="text-sm text-gray-500">
              <p>Problems? WhatsApp Grace directly: <span className="text-orange-400">0788 123 456</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;