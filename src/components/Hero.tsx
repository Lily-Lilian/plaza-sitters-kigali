import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Star } from "lucide-react";
import heroImage from "@/assets/hero-babysitting.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-accent-light via-background to-secondary-light">
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-secondary font-medium">
              <Star className="w-5 h-5 fill-current" />
              <span>Kigali's Most Trusted Babysitting Service</span>
            </div>
            
            <h1 className="hero-text">
              Safe & Loving Care for Your Little Ones
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Professional, vetted babysitters in Kigali who treat your children like their own. 
              Peace of mind when you need it most.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Background Checked</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-secondary" />
                <span>Trained Caregivers</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button className="gradient-button group">
                Book Your Babysitter
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="px-8 py-4 rounded-2xl border-primary/20 hover:bg-accent-light">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Trusted Sitters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl transform rotate-6"></div>
            <img 
              src={heroImage} 
              alt="Professional babysitter playing with children in Kigali" 
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;