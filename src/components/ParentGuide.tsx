import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, FileText, CheckCircle2, Phone, Home, Baby, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ParentGuide = () => {
  const downloadTemplate = () => {
    const template = `EMERGENCY INFO FOR BABYSITTER
------------------------
Parent Names: _______________
Phone 1: _______________
Phone 2: _______________

EMERGENCY CONTACTS:
Doctor: Dr. _________ - Phone: _______________
Nearest Hospital: _______________
Trusted Neighbor: _______________

CHILD INFO:
Allergies: _______________
Medications: _______________
Bedtime: _______________
Comfort items: _______________

HOUSE INFO:
WiFi: _______________
Gate code: _______________
Security: _______________

SPECIAL INSTRUCTIONS:
_______________________
_______________________`;

    const blob = new Blob([template], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'babysitter-info-template.txt';
    a.click();
  };

  return (
    <section id="parent-guide" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-3 py-1.5 rounded-md mb-4">
            <FileText className="w-4 h-4 text-purple-700" />
            <span className="text-purple-800 text-sm font-medium">First time? We got you</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            First Time Parent Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Leaving your baby with someone new is scary. Here's exactly what to do to make it smooth 
            (learned from 500+ first-time bookings).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Before Sitter Arrives */}
          <Card className="border-2 border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Before sitter arrives</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">30 minutes before:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Write down WiFi password (they might need YouTube for kids)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Prepare snacks/dinner (show them where everything is)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Charge the iPad/tablets if kids use them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Set out pajamas and any bedtime items</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">When they arrive:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mr-1">1.</span>
                      <span>Quick house tour (bathroom, kids' room, emergency exits)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mr-1">2.</span>
                      <span>Show them the emergency info sheet (download below)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mr-1">3.</span>
                      <span>Introduce to kids: "This is Auntie Sarah, she'll play with you"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mr-1">4.</span>
                      <span>Leave quickly! Long goodbyes make it harder</span>
                    </li>
                  </ul>
                </div>

                <Button onClick={downloadTemplate} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <FileText className="mr-2 w-4 h-4" />
                  Download Emergency Info Template
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Red Flags */}
          <Card className="border-2 border-red-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Red flags - Call us immediately</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="font-semibold text-red-800 mb-2">If the sitter:</p>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• Arrives with someone else (huge NO)</li>
                    <li>• Smells like alcohol or acts strange</li>
                    <li>• Asks for money upfront</li>
                    <li>• Wants to take kids outside without asking</li>
                    <li>• Is on phone constantly ignoring kids</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <p className="font-semibold text-yellow-800 mb-2">Normal things (don't panic):</p>
                  <ul className="space-y-2 text-sm text-yellow-700">
                    <li>✓ Kids crying when you leave (stops in 5 min)</li>
                    <li>✓ Sitter asking lots of questions</li>
                    <li>✓ Sitter speaking Kinyarwanda to kids</li>
                    <li>✓ Different bedtime technique than yours</li>
                    <li>✓ Letting kids watch a bit more TV</li>
                  </ul>
                </div>

                <div className="bg-red-100 rounded-xl p-4 text-center">
                  <p className="font-bold text-red-800 text-lg mb-1">Emergency hotline</p>
                  <p className="text-2xl font-bold text-red-600">0788 123 456</p>
                  <p className="text-sm text-red-700">Grace answers 24/7</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Checklist */}
        <Card className="border-2 border-green-500 mb-12">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Your checklist (screenshot this!)</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Home className="w-5 h-5 text-gray-600" />
                  House stuff
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Gate/door keys explained</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>WiFi password written</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>TV/tablet instructions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Kitchen tour done</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Bathroom location shown</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Baby className="w-5 h-5 text-gray-600" />
                  Kids stuff
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Bedtime routine explained</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Favorite toys/books shown</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Snacks/meals prepared</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Any medications noted</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Screen time rules shared</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-600" />
                  Emergency stuff
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Your phone number</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Backup contact number</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Doctor's number</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Nearest hospital noted</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Any allergies written</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pro tips */}
        <div className="bg-purple-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Pro tips from experienced parents
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">"Leave 10 minutes early"</p>
                <p className="text-sm text-gray-600">
                  Give yourself time to explain things without rushing. Sitters appreciate this!
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">"First hour is hardest"</p>
                <p className="text-sm text-gray-600">
                  Don't panic if they WhatsApp that baby is crying. Usually settles after you're gone 30 min.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">"Prep a 'sitter drawer'"</p>
                <p className="text-sm text-gray-600">
                  Keep snacks, activities, and emergency info in one place. Makes it easier every time.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">"Video call halfway"</p>
                <p className="text-sm text-gray-600">
                  Quick WhatsApp video to see kids happy and playing. Helps you enjoy your evening!
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">"Pay cash + MoMo backup"</p>
                <p className="text-sm text-gray-600">
                  Have exact cash ready, but keep MoMo as backup. Some sitters prefer mobile money.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">"Book same sitter"</p>
                <p className="text-sm text-gray-600">
                  Kids get comfortable, sitter knows routine. Ask for their number for next time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentGuide;