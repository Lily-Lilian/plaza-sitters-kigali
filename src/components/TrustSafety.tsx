import { Lock, Phone, MessageCircle, AlertCircle, Users, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const safetyStories = [
  {
    icon: Lock,
    title: "Your home stays private",
    story: "Remember that Airbnb scandal? Never here. Our sitters sign contracts. No guests, no photos of your house on social media, no borrowing your Netflix.",
    fact: "Contract includes 500,000 RWF penalty"
  },
  {
    icon: Phone,
    title: "When Aisha's son had an asthma attack...",
    story: "Our sitter Claudine knew exactly what to do. Called mom, used the inhaler, stayed calm. That's why we train for YOUR child's specific needs.",
    fact: "Every sitter has your emergency protocol"
  },
  {
    icon: MessageCircle,
    title: "That time at 10 PM when...",
    story: "Baby wouldn't stop crying. Parent panicking at the wedding. We did a video call, figured out it was just the new teeth. Crisis averted, dancing resumed.",
    fact: "Grace personally answers after-hours calls"
  },
  {
    icon: AlertCircle,
    title: "The Kimihurura power cut incident",
    story: "No electricity, kids scared. Our sitter had flashlights in her bag, made it a camping adventure with stories. Now it's standard kit for all sitters.",
    fact: "Emergency kit: flashlight, first aid, snacks"
  },
  {
    icon: Users,
    title: "Why Mama Claude won't sit for certain families",
    story: "If a parent is rude to our sitters or doesn't pay on time, we blacklist. Respect goes both ways. Happy sitters = better care for your kids.",
    fact: "12 families blacklisted since 2019"
  },
  {
    icon: MapPin,
    title: "The Nyamirambo mix-up",
    story: "Two families, same street name, different sectors. Sitter went to wrong house. Now we use what3words location pins. Never happened again.",
    fact: "Exact location confirmed before every booking"
  }
];

const TrustSafety = () => {
  return (
    <section id="safety" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 px-3 py-1.5 rounded-md mb-4">
            <AlertCircle className="w-4 h-4 text-red-700" />
            <span className="text-red-800 text-sm font-medium">Real talk about safety</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's address the elephant in the room
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            You're trusting a stranger with your most precious humans. We get it. 
            Here's what actually happens (and what we learned the hard way):
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {safetyStories.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="border-2 border-gray-200 hover:border-orange-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {item.story}
                  </p>
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-sm font-semibold text-gray-700">
                      ✓ {item.fact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* The actual safety protocol */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Our actual safety checklist (not the fancy version):</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Before they start:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Local council letter (we call the office to verify)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Police clearance (yes, the real one from Remera)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>References from 3 families (we WhatsApp them all)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Health insurance card (they need to be covered too)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">During sitting:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Check-in text when they arrive (with selfie)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>No visitors rule (seriously, we've fired people for this)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Emergency contacts on speed dial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Grace available on WhatsApp for any issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Trust numbers */}
        <div className="bg-orange-100 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">The numbers that matter:</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-xl p-4">
              <div className="text-3xl font-bold text-orange-600">0</div>
              <div className="text-sm text-gray-600">Major incidents</div>
              <div className="text-xs text-gray-500 mt-1">Since 2019</div>
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="text-3xl font-bold text-orange-600">12</div>
              <div className="text-sm text-gray-600">Sitters let go</div>
              <div className="text-xs text-gray-500 mt-1">For not meeting standards</div>
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="text-3xl font-bold text-orange-600">3min</div>
              <div className="text-sm text-gray-600">Response time</div>
              <div className="text-xs text-gray-500 mt-1">To parent messages</div>
            </div>
            <div className="bg-white rounded-xl p-4">
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Would hire again</div>
              <div className="text-xs text-gray-500 mt-1">Parent feedback</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;