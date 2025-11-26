import Navigation from "@/components/Navigation";
import ParentGuide from "@/components/ParentGuide";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FirstTimeGuide = () => {
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
        
        {/* Hero section for guide page */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-12">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <Heart className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-medium">We've all been there</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              First time leaving your baby?
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Deep breath. We've helped 500+ first-time parents through this. 
              Here's everything you need to know.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>Average first-time parent rating: 4.8/5</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-green-500">✓</span>
                <span>Most kids stop crying within 10 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-orange-500">♥</span>
                <span>98% book again within a month</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Parent Guide component */}
        <ParentGuide />
        
        {/* CTA section */}
        <section className="py-12 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to take that first step?
              </h3>
              <p className="text-gray-600 mb-6">
                Remember: Every parent was nervous the first time. You've got this, 
                and we've got you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-now">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                    Book your first sitter
                  </Button>
                </Link>
                <a href="https://wa.me/250788123456?text=Hi,%20I'm%20a%20first-time%20parent%20and%20have%20some%20questions" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="px-8 py-3">
                    Chat with Grace first
                  </Button>
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Pro tip: Book for just 3 hours your first time
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FirstTimeGuide;