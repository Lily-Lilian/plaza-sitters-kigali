import { Button } from "@/components/ui/button";
import { MapPin, Heart, Users, Award } from "lucide-react";
import caregiverPortrait from "@/assets/caregiver-portrait.jpg";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-secondary font-medium">
              <MapPin className="w-5 h-5" />
              <span>Proudly Serving Kigali</span>
            </div>
            
            <h2 className="section-title">
              Your Trusted Childcare Partners in Rwanda's Heart
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in Kigali with a mission to provide families with peace of mind, 
              we understand the unique needs of modern Rwandan families. Our carefully 
              selected babysitters are not just caregivers – they're passionate individuals 
              who believe in nurturing children's growth and happiness.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Locally Rooted</h4>
                  <p className="text-muted-foreground">Our team understands Kigali's communities, culture, and family values.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/10 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Thoroughly Vetted</h4>
                  <p className="text-muted-foreground">Rigorous background checks, references, and training for every caregiver.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/30 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Continuous Excellence</h4>
                  <p className="text-muted-foreground">Ongoing training in child development, safety, and emergency response.</p>
                </div>
              </div>
            </div>
            
            <Button className="gradient-button">
              Meet Our Team
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl transform -rotate-6"></div>
            <img 
              src={caregiverPortrait} 
              alt="Professional babysitter from Kigali" 
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-2xl font-bold text-primary">3+ Years</div>
              <div className="text-sm text-muted-foreground">Average Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;