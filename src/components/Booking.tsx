import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useBooking } from "@/hooks/use-booking";
import { useToast } from "@/components/ui/use-toast";
import { PHONE, RATES, estimatePrice, telLink, whatsappLink } from "@/lib/site";

const AREAS = [
  "Kimihurura", "Kacyiru", "Nyarutarama", "Gisozi", "Remera", "Kimisagara",
  "Kicukiro", "Kanombe", "Kibagabaga", "Gikondo",
];

// Local date as YYYY-MM-DD (toISOString would give the UTC date).
const todayLocal = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border-2 border-border bg-white focus:border-primary focus:outline-none";
const labelClass = "font-semibold text-cocoa mb-1.5 block";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState("");
  const [numKids, setNumKids] = useState("");
  const [location, setLocation] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentEmail, setParentEmail] = useState("");

  const { createBooking, isLoading } = useBooking();
  const { toast } = useToast();

  const isToday = selectedDate === todayLocal();
  const price = estimatePrice(selectedTime, parseInt(duration) || 0, parseInt(numKids) || 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!parentName || !parentPhone || !selectedDate || !selectedTime || !duration || !numKids || !location) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const formattedPhone = parentPhone.startsWith("+") ? parentPhone : `+250${parentPhone.replace(/^0/, "")}`;

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
      urgency: isToday ? "emergency" : "normal",
      total_price: price,
    });

    if (result.success) {
      setParentName("");
      setParentPhone("");
      setParentEmail("");
      setSelectedDate("");
      setSelectedTime("");
      setDuration("");
      setNumKids("");
      setLocation("");
      setSpecialNotes("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-6 space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className={labelClass}>Day *</label>
          <input id="date" type="date" value={selectedDate} min={todayLocal()}
            onChange={(e) => setSelectedDate(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="time" className={labelClass}>Start time *</label>
          <input id="time" type="time" value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="hours" className={labelClass}>Hours *</label>
          <select id="hours" value={duration} onChange={(e) => setDuration(e.target.value)} className={inputClass}>
            <option value="">Select</option>
            {[3, 4, 5, 6, 8, 10, 12].map((h) => (
              <option key={h} value={h}>{h} hours{h === RATES.minimumHours ? " (minimum)" : ""}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="kids" className={labelClass}>Children *</label>
          <select id="kids" value={numKids} onChange={(e) => setNumKids(e.target.value)} className={inputClass}>
            <option value="">Select</option>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n === 5 ? "5+" : n}</option>
            ))}
          </select>
        </div>
      </div>

      {isToday && (
        <p className="text-sm bg-secondary rounded-xl px-4 py-3 text-cocoa">
          Booking for today? For the fastest reply,{" "}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-bold underline">WhatsApp</a>{" "}
          or <a href={telLink} className="font-bold underline">call {PHONE.display}</a>.
        </p>
      )}

      <div>
        <label htmlFor="area" className={labelClass}>Neighbourhood *</label>
        <select id="area" value={location} onChange={(e) => setLocation(e.target.value)} className={inputClass}>
          <option value="">Select your area</option>
          {AREAS.map((a) => (
            <option key={a} value={a.toLowerCase()}>{a}</option>
          ))}
          <option value="other">Other (we'll ask)</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Your name *</label>
          <input id="name" type="text" value={parentName} onChange={(e) => setParentName(e.target.value)}
            className={inputClass} required />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>WhatsApp number *</label>
          <input id="phone" type="tel" value={parentPhone} onChange={(e) => setParentPhone(e.target.value)}
            placeholder="078X XXX XXX" className={inputClass} required />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className={labelClass}>
          Ages of the children, allergies, anything else <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea id="notes" value={specialNotes} onChange={(e) => setSpecialNotes(e.target.value)}
          rows={2} className={`${inputClass} resize-none`} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email for a confirmation <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input id="email" type="email" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)}
          className={inputClass} />
      </div>

      <div className="flex items-baseline justify-between border-t border-border pt-4">
        <span className="text-muted-foreground">Estimated price</span>
        <span className="text-2xl font-bold text-primary">{price ? `${price.toLocaleString()} RWF` : "–"}</span>
      </div>

      <Button type="submit" disabled={isLoading}
        className="w-full py-6 rounded-full text-lg font-bold disabled:opacity-50">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send booking request"
        )}
      </Button>
      <p className="text-sm text-muted-foreground text-center">
        We'll reply on WhatsApp with your sitter's profile and the final price.
      </p>
    </form>
  );
};

export default Booking;
