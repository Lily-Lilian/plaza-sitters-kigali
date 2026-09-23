import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { HOURS, PHONE, telLink, whatsappLink } from "@/lib/site";

const BookCTA = () => {
  return (
    <section id="book" className="py-16 bg-secondary scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cocoa mb-4">Ready to book?</h2>
        <p className="text-muted-foreground mb-2">Send us a message like:</p>
        <p className="bg-white rounded-2xl px-5 py-4 text-cocoa italic mb-8">
          "Hi, I need a sitter on Saturday from 6 PM to 11 PM for 2 kids, ages 3 and 6, in Kacyiru."
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebe5a] text-white px-7 py-6 rounded-full text-base font-bold">
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp {PHONE.display}
            </Button>
          </a>
          <a href={telLink}>
            <Button variant="outline" className="w-full sm:w-auto px-7 py-6 rounded-full border-2 border-cocoa/20 text-base font-bold text-cocoa bg-white">
              <Phone className="mr-2 w-5 h-5" />
              Call us
            </Button>
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          {HOURS}. Prefer a form?{" "}
          <Link to="/book-now" className="text-primary font-semibold underline underline-offset-2">
            Book online
          </Link>
        </p>
      </div>
    </section>
  );
};

export default BookCTA;
