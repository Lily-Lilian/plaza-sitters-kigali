import { Shield, CheckCircle, Phone, UserCheck, FileText, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trustFeatures = [
  {
    icon: UserCheck,
    title: "Verified Identity",
    description: "Government ID verification and professional references for every caregiver."
  },
  {
    icon: Shield,
    title: "Background Checks",
    description: "Comprehensive criminal background screening and child protection clearance."
  },
  {
    icon: FileText,
    title: "Certified Training",
    description: "First aid, CPR certification, and child development training required."
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock helpline for parents and emergency response protocols."
  },
  {
    icon: CheckCircle,
    title: "Insurance Coverage",
    description: "Full liability and bonding insurance for added peace of mind."
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Regular check-ins and photo updates during babysitting sessions."
  }
];

const TrustSafety = () => {
  return (
    <section id="safety" className="py-20 bg-gradient-to-b from-accent-light/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="section-title">Trust & Safety First</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your child's safety is our top priority. We maintain the highest standards 
            in caregiver selection, training, and ongoing supervision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-none bg-white/90 backdrop-blur-sm card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary font-display">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">
            Safety Standards You Can Trust
          </h3>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Every caregiver undergoes a minimum 40-hour training program and quarterly safety updates.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="opacity-90">Background Checked</div>
            </div>
            <div>
              <div className="text-3xl font-bold">40+</div>
              <div className="opacity-90">Hours Training</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;