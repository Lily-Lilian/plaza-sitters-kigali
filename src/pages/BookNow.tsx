import Navigation from "@/components/Navigation";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BookNow = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Back to home link */}
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Button>
          </Link>
        </div>
        
        {/* Hero section for booking page */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-12">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's find you a great sitter
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out this quick form and we'll match you with available sitters in your area. 
              Takes just 2 minutes!
            </p>
          </div>
        </section>
        
        {/* Booking component */}
        <Booking />
        
        {/* Quick contact alternative */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prefer to talk to someone?
              </h3>
              <p className="text-gray-600 mb-6">
                No problem! Grace is available to help you find the perfect sitter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/250788123456" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp: 0788 123 456
                  </Button>
                </a>
                <a href="tel:+250788123456">
                  <Button variant="outline" className="px-8 py-3">
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 0788 123 456
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookNow;