import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Baby, Coffee } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 py-12 lg:py-0">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-3 py-1.5 rounded-md">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span className="text-orange-800 text-sm font-medium">Serving all Kigali neighborhoods</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-gray-900">
              Got a wedding at Serena?
              <span className="block text-orange-600 mt-2">
                We'll watch the kids at home.
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Whether it's a conference at the Convention Center, dinner in Kimihurura, 
              or that wedding you can't miss, our trusted nannies come to YOUR home. 
              No drop-offs. No pickups. Just peace of mind.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                </div>
                <p className="text-gray-700">From Nyamirambo to Nyarutarama — we cover all areas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                </div>
                <p className="text-gray-700">Last-minute bookings? We've got you (even on weekends!)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                </div>
                <p className="text-gray-700">All sitters speak Kinyarwanda, English & French</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-5 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Phone className="mr-2 w-4 h-4" />
                Call us: 0787507249
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="px-6 py-5 rounded-xl border-2 border-gray-300 hover:border-orange-300 hover:bg-orange-50 text-base font-semibold">
                <Coffee className="mr-2 w-4 h-4" />
                Meet a sitter first
              </Button>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-6">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-orange-700">Tonight's availability:</span> 3 sitters ready in Kimihurura, 
                2 in Kacyiru, 4 in Gisozi. Book now!
              </p>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Simple, clean illustration */}
              <div className="relative w-full max-w-lg">
                {/* Main scene container */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>
                  
                  {/* Scene content */}
                  <div className="relative z-10">
                    {/* Parent leaving */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-2xl">👋</span>
                        <span className="text-gray-700 font-medium">"See you tonight!"</span>
                      </div>
                    </div>
                    
                    {/* Babysitter and kids */}
                    <div className="flex justify-center items-end gap-8 mb-8">
                      {/* Babysitter */}
                      <div className="text-center">
                        <div className="w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center mb-2">
                          <span className="text-4xl">👩</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">Sarah</p>
                        <p className="text-xs text-gray-500">Your sitter</p>
                      </div>
                      
                      {/* Kids */}
                      <div className="flex gap-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                            <span className="text-2xl">👧</span>
                          </div>
                          <p className="text-xs text-gray-500">Happy</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mb-2">
                            <span className="text-2xl">👦</span>
                          </div>
                          <p className="text-xs text-gray-500">Safe</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Activities */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-purple-100 rounded-lg flex items-center justify-center mb-1">
                          <span className="text-xl">🎨</span>
                        </div>
                        <p className="text-xs text-gray-600">Arts</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-green-100 rounded-lg flex items-center justify-center mb-1">
                          <span className="text-xl">📚</span>
                        </div>
                        <p className="text-xs text-gray-600">Stories</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto bg-yellow-100 rounded-lg flex items-center justify-center mb-1">
                          <span className="text-xl">🎮</span>
                        </div>
                        <p className="text-xs text-gray-600">Games</p>
                      </div>
                    </div>
                    
                    {/* Trust badges */}
                    <div className="flex justify-center gap-4">
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <span className="text-green-500">✓</span>
                        <span>Background checked</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <span className="text-green-500">✓</span>
                        <span>First aid trained</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating location pins */}
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span className="text-sm text-gray-700">Kimihurura</span>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
                  <Baby className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Age 0-12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;