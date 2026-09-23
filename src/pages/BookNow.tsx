import Navigation from "@/components/Navigation";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { whatsappLink } from "@/lib/site";

const BookNow = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-cocoa text-center mb-2">Book a sitter</h1>
          <p className="text-center text-muted-foreground mb-8">
            Takes 2 minutes. Prefer to chat?{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline underline-offset-2">
              Message us on WhatsApp
            </a>
          </p>
          <Booking />
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

export default BookNow;
