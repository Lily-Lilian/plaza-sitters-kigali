import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo-md.png";
import { BRAND, PHONE, RATES, telLink, whatsappLink } from "@/lib/site";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <img
              src={logo}
              alt={`${BRAND.name} logo`}
              className="w-40 h-40 mx-auto lg:hidden rounded-full shadow-lg"
            />

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] text-cocoa">
              Got a wedding?
              <span className="block text-primary mt-2">We'll watch the kids at home.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Caring, checked sitters come to your home anywhere in Kigali. They speak
              Kinyarwanda, English and French. Book on WhatsApp in a few minutes, with no app
              to download.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebe5a] text-white px-7 py-6 rounded-full text-base font-bold shadow-lg">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Book on WhatsApp
                </Button>
              </a>
              <a href={telLink}>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-7 py-6 rounded-full border-2 border-cocoa/20 text-base font-bold text-cocoa"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call {PHONE.display}
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              From <span className="font-bold text-cocoa">{RATES.day.price}</span> · Meet your
              sitter first for 5,000 RWF
            </p>
          </div>

          <div className="hidden lg:flex justify-center">
            <img
              src={logo}
              alt={`${BRAND.name} logo`}
              className="w-[420px] h-[420px] rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
