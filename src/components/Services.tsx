import { Clock, Car, Calendar, Moon, Sun, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Sun,
    title: "Morning rush? We're here by 6 AM",
    scenario: "Got that 7 AM flight to Nairobi?",
    details: "Sarah arrives at 6 AM, helps kids get dressed, makes breakfast, and drops them at Green Hills Academy by 8.",
    price: "15,000 RWF",
    popular: true
  },
  {
    icon: Calendar,
    title: "Saturday wedding at Intare Conference?",
    scenario: "12 PM - 10 PM coverage",
    details: "We'll handle lunch, nap time, dinner, and bedtime. You enjoy the ceremony worry-free. Kids won't even notice you're gone!",
    price: "35,000 RWF"
  },
  {
    icon: Moon,
    title: "Date night in Nyarutarama?",
    scenario: "6 PM - 11 PM sitting",
    details: "Dinner at Poivre Noir? We've got bedtime covered. Includes dinner prep, bath time, stories, and staying until you're home.",
    price: "20,000 RWF"
  },
  {
    icon: Clock,
    title: "Working from home but need help?",
    scenario: "Focus on your Zoom calls",
    details: "Our sitter keeps kids engaged downstairs while you work upstairs. No more 'Mommy!' during important meetings.",
    price: "10,000 RWF/half day"
  },
  {
    icon: Car,
    title: "School runs giving you stress?",
    scenario: "We do pick-ups & drop-offs",
    details: "From Kigali Parents School to swimming at Amahoro Stadium. We handle the traffic, you keep your sanity.",
    price: "8,000 RWF per trip"
  },
  {
    icon: Phone,
    title: "Last minute emergency?",
    scenario: "Call us, we'll be there in 30",
    details: "Sudden hospital visit? Work emergency? We keep 2 sitters on standby for urgent requests. Available 24/7.",
    price: "25,000 RWF + transport"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real situations. Real solutions. Real prices.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            No confusing packages or hidden fees. Here's exactly what we do and what it costs:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className={`border-2 ${service.popular ? 'border-orange-500 relative' : 'border-gray-200'} hover:shadow-xl transition-shadow duration-300`}>
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most requested
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${service.popular ? 'bg-orange-100' : 'bg-gray-100'} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${service.popular ? 'text-orange-600' : 'text-gray-700'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{service.title}</h3>
                      <p className="text-orange-600 font-semibold text-sm">{service.scenario}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.details}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    <button className="text-orange-600 hover:text-orange-700 font-semibold text-sm">
                      Book now →
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 bg-orange-50 border border-orange-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">First time? Try our Meet & Greet</h4>
              <p className="text-gray-700">
                Nervous about leaving your kids with someone new? Book a 30-minute coffee meeting with your 
                assigned sitter at Java House or Bourbon Coffee. Kids play, you chat, everyone gets comfortable. 
                <span className="font-semibold text-orange-600"> Only 5,000 RWF.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;