import { Button } from "@/components/ui/button";
import { MapPin, Coffee, Phone, MessageCircle } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-md">
              <MapPin className="w-4 h-4 text-green-700" />
              <span className="text-green-800 text-sm font-medium">Started in Kimisagara, now everywhere</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              We're just moms who get it.
            </h2>
            
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                It started when I couldn't find a sitter for my daughter's graduation at 
                UR. My neighbor said "call my niece Divine, she's great with kids."
              </p>
              <p className="font-semibold text-orange-600">
                Divine was amazing. Other moms started calling her too.
              </p>
              <p>
                Now we're 52 sitters strong — from university students needing school 
                fees to experienced mamas whose kids have grown. Each one personally 
                recommended by someone we trust.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 space-y-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">How we actually vet our sitters:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">We visit their home (yes, really)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">Local council letter + police clearance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">WhatsApp group with other parents who used them</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">They shadow an experienced sitter for 2 weeks</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold">
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp us
              </Button>
              <Button variant="outline" className="px-6 py-3 rounded-xl border-2 border-gray-300 hover:border-orange-300 font-semibold">
                <Coffee className="mr-2 w-4 h-4" />
                Let's talk
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Coverage map */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-600" />
                Where we've got sitters right now:
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-orange-50 px-3 py-2 rounded-lg">
                  <span className="font-semibold text-orange-700">Kimihurura</span>
                  <span className="text-gray-600 block">3 available</span>
                </div>
                <div className="bg-orange-50 px-3 py-2 rounded-lg">
                  <span className="font-semibold text-orange-700">Kacyiru</span>
                  <span className="text-gray-600 block">5 available</span>
                </div>
                <div className="bg-orange-50 px-3 py-2 rounded-lg">
                  <span className="font-semibold text-orange-700">Nyarutarama</span>
                  <span className="text-gray-600 block">4 available</span>
                </div>
                <div className="bg-orange-50 px-3 py-2 rounded-lg">
                  <span className="font-semibold text-orange-700">Gisozi</span>
                  <span className="text-gray-600 block">6 available</span>
                </div>
                <div className="bg-orange-50 px-3 py-2 rounded-lg">
                  <span className="font-semibold text-orange-700">Remera</span>
                  <span className="text-gray-600 block">3 available</span>
                </div>
                <div className="bg-orange-50 px-3 py-2 rounded-lg">
                  <span className="font-semibold text-orange-700">Kimisagara</span>
                  <span className="text-gray-600 block">2 available</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Don't see your area? Call us — we probably know someone!
              </p>
            </div>
            
            {/* Founder note */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <span className="text-3xl">👩</span>
                </div>
                <div>
                  <p className="text-gray-700 italic">
                    "I'm Grace, a mom of 3 in Kibagabaga. I started this because I 
                    know how hard it is to trust someone with your babies. Every 
                    sitter here? I'd leave my own kids with them."
                  </p>
                  <p className="text-sm text-orange-600 font-semibold mt-2">
                    — Grace, Founder
                  </p>
                </div>
              </div>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-orange-600">52</div>
                <div className="text-xs text-gray-600">Active sitters</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-orange-600">2019</div>
                <div className="text-xs text-gray-600">Started</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-xs text-gray-600">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;