import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your trusted babysitter today or get in touch with any questions. 
            We're here to help Kigali families thrive.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary font-display">
                Book Your Babysitter
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Parent Name *
                    </label>
                    <Input 
                      placeholder="Your full name" 
                      className="rounded-xl border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Phone Number *
                    </label>
                    <Input 
                      placeholder="+250 xxx xxx xxx" 
                      className="rounded-xl border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="rounded-xl border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Number of Children
                    </label>
                    <Input 
                      placeholder="e.g., 2" 
                      className="rounded-xl border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Children's Ages
                    </label>
                    <Input 
                      placeholder="e.g., 3, 7" 
                      className="rounded-xl border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Preferred Date
                    </label>
                    <Input 
                      type="date" 
                      className="rounded-xl border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Duration
                    </label>
                    <Input 
                      placeholder="e.g., 4 hours" 
                      className="rounded-xl border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">
                    Special Requirements or Notes
                  </label>
                  <Textarea 
                    placeholder="Any special needs, activities, or instructions for the babysitter..."
                    className="rounded-xl border-border/50 focus:border-primary min-h-[100px]"
                  />
                </div>
                
                <Button className="gradient-button w-full group">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Request Babysitter
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary font-display">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Have questions? Need immediate assistance? Our friendly team is ready 
                to help you find the perfect childcare solution.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+250 788 123 456</p>
                  <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@kigalicare.rw</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Service Area</h4>
                  <p className="text-muted-foreground">All districts of Kigali</p>
                  <p className="text-sm text-muted-foreground">Gasabo, Kicukiro, Nyarugenge</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Response Time</h4>
                  <p className="text-muted-foreground">Same-day bookings available</p>
                  <p className="text-sm text-muted-foreground">Emergency care within 2 hours</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent-light to-secondary-light rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-2">Quick Response Guarantee</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We understand childcare needs can be urgent. All booking requests 
                    receive a response within 30 minutes during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;