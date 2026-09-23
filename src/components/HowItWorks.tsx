import { Camera, MessageCircle, UserCheck } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "WhatsApp us",
    text: "Tell us the date, the time, and how many children (and their ages). We reply with a sitter who fits.",
  },
  {
    icon: UserCheck,
    title: "Meet your sitter",
    text: "We send you your sitter's profile. Nervous about the first time? Book a 30-minute Meet & Greet at your home for 5,000 RWF.",
  },
  {
    icon: Camera,
    title: "Relax",
    text: "Your sitter sends a check-in selfie with the kids on arrival, plus updates during the sitting. Pay at the end by cash or MoMo.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-cocoa text-center mb-10">
          How it works
        </h2>
        <ol className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="bg-cream rounded-2xl p-6 text-center">
              <div className="relative w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gold text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-cocoa mb-2">{title}</h3>
              <p className="text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
