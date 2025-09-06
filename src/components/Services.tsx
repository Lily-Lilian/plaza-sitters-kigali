import { Clock, Users, Home, Gamepad2, BookOpen, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Day, evening, weekend, or emergency care. We adapt to your schedule.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Group Care", 
    description: "Multiple children? No problem. Our sitters are trained for families of all sizes.",
    color: "text-secondary"
  },
  {
    icon: Home,
    title: "In-Home Care",
    description: "Your children stay comfortable in their familiar environment.",
    color: "text-accent-foreground"
  },
  {
    icon: Gamepad2,
    title: "Fun Activities",
    description: "Educational games, crafts, and age-appropriate entertainment.",
    color: "text-primary"
  },
  {
    icon: BookOpen,
    title: "Homework Help",
    description: "Academic support and reading assistance for school-age children.",
    color: "text-secondary"
  },
  {
    icon: Utensils,
    title: "Meal Preparation",
    description: "Healthy snacks and meals prepared with love and care.",
    color: "text-accent-foreground"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Childcare Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive care tailored to your family's unique needs in Kigali
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="card-hover border-none bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent-light to-secondary-light flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary font-display">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;