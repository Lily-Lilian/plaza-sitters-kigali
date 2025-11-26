import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Coffee, Clock, AlertCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1.5 rounded-md mb-4">
            <Phone className="w-4 h-4 text-blue-700" />
            <span className="text-blue-800 text-sm font-medium">Ready when you are</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            3 ways to book (pick what's easiest)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            No apps to download. No complicated forms. Just tell us when you need help.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Option 1: WhatsApp */}
          <Card className="border-2 border-green-500 relative">
            <div className="absolute -top-3 left-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Fastest
            </div>
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. WhatsApp us
              </h3>
              <p className="text-gray-600 mb-4">
                Send: "Hi, need a sitter for [date] from [time] to [time] for [number] kids"
              </p>
              <div className="space-y-2 text-sm text-gray-700 mb-6">
                <p>✓ We reply in under 5 minutes</p>
                <p>✓ Send voice notes if easier</p>
                <p>✓ Share live location for sitter</p>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl">
                <MessageCircle className="mr-2 w-4 h-4" />
                +250 787507249
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3">
                Click to open WhatsApp
              </p>
            </CardContent>
          </Card>
          
          {/* Option 2: Call */}
          <Card className="border-2 border-orange-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Call Grace directly
              </h3>
              <p className="text-gray-600 mb-4">
                She knows every sitter personally and can match you perfectly.
              </p>
              <div className="space-y-2 text-sm text-gray-700 mb-6">
                <p>✓ Explain your needs</p>
                <p>✓ Get sitter recommendations</p>
                <p>✓ Book on the spot</p>
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl">
                <Phone className="mr-2 w-4 h-4" />
                +250 787507249
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3">
                Available 6 AM - 10 PM
              </p>
            </CardContent>
          </Card>
          
          {/* Option 3: Meet First */}
          <Card className="border-2 border-gray-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <Coffee className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. Meet first (nervous parents 👍)
              </h3>
              <p className="text-gray-600 mb-4">
                Coffee with your sitter before the first booking. No pressure.
              </p>
              <div className="space-y-2 text-sm text-gray-700 mb-6">
                <p>✓ 30-min meet at Java House</p>
                <p>✓ Bring your kids</p>
                <p>✓ Only 5,000 RWF</p>
              </div>
              <Button variant="outline" className="w-full border-2 border-purple-300 hover:bg-purple-50 font-semibold py-3 rounded-xl">
                <Coffee className="mr-2 w-4 h-4" />
                Schedule meet-up
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3">
                Most popular with first-timers
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Emergency notice */}
        <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Need someone RIGHT NOW?</h3>
              <p className="text-gray-700 mb-3">
                Call <span className="font-bold text-red-600">+250 787507249</span> and say "EMERGENCY". 
                We keep 2 sitters on standby daily for urgent situations.
              </p>
              <p className="text-sm text-gray-600">
                Last emergency response: 18 minutes (yesterday, Remera to Kimihurura)
              </p>
            </div>
          </div>
        </div>
        
        {/* FAQ section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Common questions:</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-800">"What if my kid doesn't like the sitter?"</p>
                <p className="text-sm text-gray-600">We'll send someone else, no charge. Happens rarely but we get it.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">"Can they cook?"</p>
                <p className="text-sm text-gray-600">Yes! Just tell us what your kids eat. Most sitters are moms themselves.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">"What about bedtime?"</p>
                <p className="text-sm text-gray-600">Share your routine. They'll follow it exactly (bath, story, lights out).</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Payment is simple:</h3>
            <div className="bg-gray-100 rounded-xl p-4">
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Pay the sitter directly when you return</li>
                <li>• Cash or MoMo (their preference)</li>
                <li>• Rates shared upfront (no surprises)</li>
                <li>• Tips appreciated but not required</li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                Agency fee: 2,000 RWF (paid once monthly if you use us)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;