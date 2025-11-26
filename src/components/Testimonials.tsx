import { Star, MessageCircle, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const realMessages = [
  {
    name: "Mama Kevine",
    location: "WhatsApp message",
    date: "Last week",
    text: "Grace!! My meeting ran late till 11PM and Divine stayed with the kids no complaints. Even helped Kevin with his math homework 🙏 How do I tip her?",
    sitter: "Divine",
    highlight: "Stayed late + homework help"
  },
  {
    name: "Jean-Claude K.",
    location: "Kacyiru", 
    date: "2 days ago",
    text: "Listen, I was skeptical. But when my daughter said 'Papa, when is Auntie Sarah coming back?' after just ONE visit... that's when I knew. She brought playdough!",
    sitter: "Sarah",
    highlight: "Kids actually asking for her"
  },
  {
    name: "Anita from Kimihurura",
    location: "Parent WhatsApp group",
    date: "Yesterday",
    text: "EMERGENCY at 7am - flight to Nairobi moved up. Called Grace, she sent Claudine in 20 MINUTES! Kids didn't even cry when I left 😭❤️",
    sitter: "Claudine",
    highlight: "20-minute emergency response"
  },
  {
    name: "Papa Dennis",
    location: "Nyarutarama",
    date: "Last month",
    text: "Our sitter noticed my son's breathing was off (I hadn't noticed). Turns out he needed his inhaler changed. That attention to detail? Priceless.",
    sitter: "Mama Claude",
    highlight: "Caught health issue I missed"
  },
  {
    name: "Sandrine U.",
    location: "Voice note transcript",
    date: "3 weeks ago",
    text: "[laughing] So my baby threw up on Esperance TWICE and she just laughed and said 'it's okay mama, I raised 4 kids'. Still came back next week!",
    sitter: "Esperance",
    highlight: "Handled messy situation perfectly"
  },
  {
    name: "The Murengezi family",
    location: "Gisozi", 
    date: "Ongoing - 2 years",
    text: "Jeanne has been with us since baby #1. Now with baby #3, we can't imagine life without her. She's family. Kids call her Tantine.",
    sitter: "Jeanne",
    highlight: "2 years & counting"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-md mb-4">
            <MessageCircle className="w-4 h-4 text-green-700" />
            <span className="text-green-800 text-sm font-medium">From our WhatsApp & reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real messages from real parents
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            These are actual messages (used with permission). No edits. No filters. Just parents being honest:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realMessages.map((message, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-green-300 transition-colors bg-white">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {message.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {message.location} • {message.date}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-green-50 text-green-800 text-xs font-medium px-2 py-1 rounded-full inline-flex items-center gap-1 mb-3">
                    <ThumbsUp className="w-3 h-3" />
                    {message.highlight}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{message.text}"
                </p>
                
                <div className="text-sm text-orange-600 font-semibold">
                  Sitter: {message.sitter}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-2xl p-8 border-2 border-orange-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why parents keep coming back:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="font-semibold text-gray-800">👶 They remember names</div>
                <p className="text-sm text-gray-600">"My son has autism. Sarah learned all his comfort items by day 2."</p>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-gray-800">📱 Real-time updates</div>
                <p className="text-sm text-gray-600">"Photos of kids playing while I'm at dinner = relaxed mama!"</p>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-gray-800">🏠 They respect your home</div>
                <p className="text-sm text-gray-600">"Kitchen cleaner than when I left. Kids fed, bathed, and in bed."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;