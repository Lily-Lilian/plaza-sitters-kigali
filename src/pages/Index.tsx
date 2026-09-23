import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Sitters from "@/components/Sitters";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookCTA from "@/components/BookCTA";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TrustBadges />
        <HowItWorks />
        <Pricing />
        <Sitters />
        <Testimonials />
        <FAQ />
        <BookCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

export default Index;
