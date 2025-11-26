import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Baby, MapPin, Phone, AlertCircle, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { useBooking } from "@/hooks/use-booking";
import { useToast } from "@/components/ui/use-toast";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState("");
  const [numKids, setNumKids] = useState("");
  const [location, setLocation] = useState("");
  const [urgency, setUrgency] = useState<"normal" | "emergency">("normal");
  const [specialNotes, setSpecialNotes] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  
  const { createBooking, isLoading } = useBooking();
  const { toast } = useToast();

  const calculatePrice = () => {
    if (!duration || !numKids) return 0;
    
    const baseRate = 10000; // Base rate per hour
    const hours = parseInt(duration) || 0;
    const kids = parseInt(numKids) || 0;
    const extraKidRate = kids > 1 ? (kids - 1) * 2000 : 0;
    
    let total = (baseRate + extraKidRate) * hours;
    
    // Evening/night surcharge
    if (selectedTime && (parseInt(selectedTime.split(":")[0]) >= 20 || parseInt(selectedTime.split(":")[0]) < 6)) {
      total += 5000;
    }
    
    // Emergency surcharge
    if (urgency === "emergency") {
      total += 10000;
    }
    
    return total;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!parentName || !parentPhone || !selectedDate || !selectedTime || !duration || !numKids || !location) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Format phone number
    const formattedPhone = parentPhone.startsWith('+') ? parentPhone : `+250${parentPhone.replace(/^0/, '')}`;
    
    // Create booking
    const result = await createBooking({
      parent_name: parentName,
      parent_phone: formattedPhone,
      parent_email: parentEmail || undefined,
      date: selectedDate,
      time: selectedTime,
      duration: parseInt(duration),
      num_kids: parseInt(numKids),
      location,
      special_notes: specialNotes || undefined,
      urgency,
      total_price: calculatePrice()
    });
    
    if (result.success) {
      // Reset form
      setParentName("");
      setParentPhone("");
      setParentEmail("");
      setSelectedDate("");
      setSelectedTime("");
      setDuration("");
      setNumKids("");
      setLocation("");
      setSpecialNotes("");
      setUrgency("normal");
    }
  };

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1.5 rounded-md mb-4">
            <Calendar className="w-4 h-4 text-blue-700" />
            <span className="text-blue-800 text-sm font-medium">Quick booking</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book a sitter in 2 minutes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Fill this out, and we'll WhatsApp you within 10 minutes with available sitters.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Urgency Selection */}
                <div>
                  <label className="font-semibold text-gray-900 mb-3 block">How urgent is this?</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setUrgency("normal")}
                      className={`p-4 rounded-xl border-2 transition-colors ${
                        urgency === "normal" 
                          ? "border-green-500 bg-green-50" 
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-semibold text-gray-900">Normal booking</div>
                      <div className="text-sm text-gray-600">For tomorrow or later</div>
                    </button>
                    <button
                      onClick={() => setUrgency("emergency")}
                      className={`p-4 rounded-xl border-2 transition-colors ${
                        urgency === "emergency" 
                          ? "border-red-500 bg-red-50" 
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-semibold text-gray-900">EMERGENCY</div>
                      <div className="text-sm text-gray-600">Need someone NOW</div>
                    </button>
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-gray-900 mb-2 block">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      What day?
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-gray-900 mb-2 block">
                      <Clock className="w-4 h-4 inline mr-1" />
                      What time?
                    </label>
                    <input
                      type="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Duration and Kids */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-gray-900 mb-2 block">
                      How many hours?
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                    >
                      <option value="">Select duration</option>
                      <option value="3">3 hours (minimum)</option>
                      <option value="4">4 hours</option>
                      <option value="5">5 hours</option>
                      <option value="6">6 hours</option>
                      <option value="8">8 hours</option>
                      <option value="10">10 hours</option>
                      <option value="12">12 hours (full day)</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-900 mb-2 block">
                      <Baby className="w-4 h-4 inline mr-1" />
                      How many kids?
                    </label>
                    <select
                      value={numKids}
                      onChange={(e) => setNumKids(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                    >
                      <option value="">Select number</option>
                      <option value="1">1 child</option>
                      <option value="2">2 children</option>
                      <option value="3">3 children</option>
                      <option value="4">4 children</option>
                      <option value="5">5+ children</option>
                    </select>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="font-semibold text-gray-900 mb-2 block">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Your neighborhood?
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">Select your area</option>
                    <option value="kimihurura">Kimihurura</option>
                    <option value="kacyiru">Kacyiru</option>
                    <option value="nyarutarama">Nyarutarama</option>
                    <option value="gisozi">Gisozi</option>
                    <option value="remera">Remera</option>
                    <option value="kimisagara">Kimisagara</option>
                    <option value="kicukiro">Kicukiro</option>
                    <option value="kanombe">Kanombe</option>
                    <option value="kibagabaga">Kibagabaga</option>
                    <option value="gikondo">Gikondo</option>
                    <option value="other">Other (we'll ask)</option>
                  </select>
                </div>

                {/* Special needs */}
                <div>
                  <label className="font-semibold text-gray-900 mb-2 block">
                    Anything special we should know?
                  </label>
                  <textarea
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder="Allergies, bedtime routine, favorite toys, etc..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none resize-none"
                    rows={3}
                  />
                </div>
                
                {/* Parent Info */}
                <div className="space-y-4">
                  <div>
                    <label className="font-semibold text-gray-900 mb-2 block">
                      Your name *
                    </label>
                    <input
                      type="text"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="font-semibold text-gray-900 mb-2 block">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Your WhatsApp number *
                    </label>
                    <input
                      type="tel"
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      placeholder="0788 XXX XXX"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="font-semibold text-gray-900 mb-2 block">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      value={parentEmail}
                      onChange={(e) => setParentEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending request...
                    </>
                  ) : (
                    "Send Booking Request"
                  )}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  We'll WhatsApp you in <span className="font-semibold">10 minutes</span> with available sitters
                </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Price Calculator Sidebar */}
          <div className="space-y-6">
            {/* Price Display */}
            <Card className="border-2 border-orange-500 bg-orange-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Estimated cost:</h3>
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {calculatePrice().toLocaleString()} RWF
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  {duration && numKids && (
                    <>
                      <p>• {duration} hours × 10,000 RWF base rate</p>
                      {parseInt(numKids) > 1 && (
                        <p>• +{((parseInt(numKids) - 1) * 2000).toLocaleString()} RWF for extra kids</p>
                      )}
                      {selectedTime && (parseInt(selectedTime.split(":")[0]) >= 20 || parseInt(selectedTime.split(":")[0]) < 6) && (
                        <p>• +5,000 RWF night surcharge</p>
                      )}
                      {urgency === "emergency" && (
                        <p className="text-red-600">• +10,000 RWF emergency fee</p>
                      )}
                    </>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  *Final price confirmed after matching with sitter
                </p>
              </CardContent>
            </Card>

            {/* What happens next */}
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">1. We check availability</p>
                      <p className="text-sm text-gray-600">Finding sitters near {location || "your area"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">2. WhatsApp confirmation</p>
                      <p className="text-sm text-gray-600">Sitter name, photo, and exact price</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">3. Sitter arrives on time</p>
                      <p className="text-sm text-gray-600">With their emergency kit ready</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency note */}
            {urgency === "emergency" && (
              <Card className="border-2 border-red-500 bg-red-50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-800">Emergency booking</p>
                      <p className="text-sm text-red-700">
                        Call <span className="font-bold">0788 123 456</span> now for faster response
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;