import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Mukamana",
    location: "Kimihurura",
    rating: 5,
    text: "KigaliCare found us the perfect babysitter for our twins. Grace is not just professional but genuinely cares about our children's wellbeing. We couldn't be happier!",
    children: "Twins, Age 4"
  },
  {
    name: "James Nshuti",
    location: "Nyarutarama", 
    rating: 5,
    text: "As a single father working long hours, having reliable childcare was essential. The peace of mind KigaliCare provides is priceless. Highly recommended!",
    children: "Son, Age 7"
  },
  {
    name: "Marie Uwimana",
    location: "Kacyiru",
    rating: 5,
    text: "The emergency babysitting service saved us during a family crisis. Professional, caring, and available when we needed them most. Thank you, KigaliCare!",
    children: "Daughter, Age 5 & Son, Age 9"
  },
  {
    name: "David Habimana",
    location: "Remera",
    rating: 5,
    text: "Our babysitter helps with homework and prepares healthy meals. She's become part of our family. The booking process was so easy too!",
    children: "Two daughters, Ages 6 & 8"
  },
  {
    name: "Alice Ingabire",
    location: "Gasabo",
    rating: 5,
    text: "I was nervous about leaving my baby with someone new, but KigaliCare's thorough vetting process gave me confidence. Best decision we made!",
    children: "Baby, 18 months"
  },
  {
    name: "Patrick Rugema",
    location: "Kigali Heights", 
    rating: 5,
    text: "Date nights are possible again! Our regular babysitter is wonderful with our children and they actually look forward to her visits.",
    children: "Three children, Ages 3, 6 & 10"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-accent-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">What Kigali Families Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real families who trust KigaliCare with their most precious treasures
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none bg-white/90 backdrop-blur-sm card-hover">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-secondary/50 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border/20 pt-4">
                  <div className="font-semibold text-primary font-display">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location} • {testimonial.children}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold text-primary">4.9/5 Average Rating</span>
            <span className="text-muted-foreground">• 500+ Happy Families</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;