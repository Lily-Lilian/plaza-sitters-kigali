import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  ChevronDown,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Package as PackageIcon,
  Phone,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { useBooking } from "@/hooks/use-booking";
import { useToast } from "@/components/ui/use-toast";
import {
  ALL_PACKAGES,
  CHILDREN,
  PHONE,
  extraChildren,
  isEvent,
  priceFor,
  rwf,
  telLink,
  whatsappLink,
} from "@/lib/site";

const AREAS = [
  "Kimihurura", "Kacyiru", "Nyarutarama", "Gisozi", "Remera", "Kimisagara",
  "Kicukiro", "Kanombe", "Kibagabaga", "Gikondo",
];

const MAX_KIDS = 6; // the last option means "6 or more"

// Local date as YYYY-MM-DD (toISOString would give the UTC date).
const todayLocal = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

// Every control shares one height, border and left padding so the icons line up.
const controlClass =
  "h-12 w-full appearance-none rounded-xl border-2 border-border bg-white pl-11 pr-4 text-ink " +
  "placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none transition-colors";
const selectClass = `${controlClass} pr-10 cursor-pointer`;
// Date/time: hide the browser's own picker icon but keep the whole field clickable.
const pickerClass = `${controlClass} booking-picker cursor-pointer`;

type FieldProps = {
  id: string;
  label: string;
  icon?: LucideIcon;
  optional?: boolean;
  select?: boolean;
  hint?: ReactNode;
  className?: string;
  children: ReactNode;
};

const Field = ({ id, label, icon: Icon, optional, select, hint, className, children }: FieldProps) => (
  <div className={className}>
    <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
      {label}
      {optional ? <span className="font-normal text-muted-foreground"> (optional)</span> : " *"}
    </label>
    <div className="relative">
      {Icon && (
        <Icon
          className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-primary"
          aria-hidden
        />
      )}
      {children}
      {select && (
        <ChevronDown
          className="pointer-events-none absolute right-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
      )}
    </div>
    {hint && <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>}
  </div>
);

const Step = ({ n, title, children }: { n: number; title: string; children: ReactNode }) => (
  <fieldset className="space-y-4">
    <legend className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-ink">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
        {n}
      </span>
      {title}
    </legend>
    {children}
  </fieldset>
);

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [packageId, setPackageId] = useState("");
  const [numKids, setNumKids] = useState("");
  const [location, setLocation] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentEmail, setParentEmail] = useState("");

  const { createBooking, isLoading } = useBooking();
  const { toast } = useToast();

  const isToday = selectedDate === todayLocal();
  const chosen = ALL_PACKAGES.find((p) => p.id === packageId);
  const kids = parseInt(numKids) || 0;
  const extras = chosen ? extraChildren(chosen, kids) : 0;
  const price = chosen ? priceFor(chosen, kids || 1) : 0;
  const needsSecondSitter = !!chosen && isEvent(chosen) && kids > CHILDREN.perSitterAtEvents;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!parentName || !parentPhone || !selectedDate || !selectedTime || !chosen || !numKids || !location) {
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
      duration: chosen.nominalHours,
      num_kids: kids,
      location,
      special_notes: [
        `Package: ${chosen.name}`,
        kids >= MAX_KIDS ? `Children: ${MAX_KIDS} or more` : "",
        specialNotes,
      ]
        .filter(Boolean)
        .join("\n"),
      urgency: isToday ? "emergency" : "normal",
      total_price: price,
    });

    if (result.success) {
      setParentName("");
      setParentPhone("");
      setParentEmail("");
      setSelectedDate("");
      setSelectedTime("");
      setPackageId("");
      setNumKids("");
      setLocation("");
      setSpecialNotes("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl border border-border bg-white p-6 sm:p-8">
      <Step n={1} title="What and when">
        <Field id="package" label="Package" icon={PackageIcon} select hint={chosen?.when}>
          <select id="package" value={packageId} onChange={(e) => setPackageId(e.target.value)} className={selectClass}>
            <option value="">Choose a package</option>
            {ALL_PACKAGES.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} · {rwf(p.price)}
              </option>
            ))}
          </select>
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="date" label="Day" icon={CalendarDays}>
            <input id="date" type="date" value={selectedDate} min={todayLocal()}
              onChange={(e) => setSelectedDate(e.target.value)} className={pickerClass} />
          </Field>
          <Field id="time" label="Start time" icon={Clock}>
            <input id="time" type="time" value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)} className={pickerClass} />
          </Field>
        </div>

        {isToday && (
          <p className="rounded-xl bg-secondary px-4 py-3 text-sm text-ink">
            Booking for today? For the fastest reply,{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-bold underline">WhatsApp</a>{" "}
            or <a href={telLink} className="font-bold underline">call {PHONE.display}</a>.
          </p>
        )}
      </Step>

      <Step n={2} title="Your family">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="kids" label="Children" icon={Users} select
            hint={`Packages include up to ${CHILDREN.included} children`}>
            <select id="kids" value={numKids} onChange={(e) => setNumKids(e.target.value)} className={selectClass}>
              <option value="">How many?</option>
              {Array.from({ length: MAX_KIDS }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n === MAX_KIDS ? `${n}+ children` : `${n} ${n === 1 ? "child" : "children"}`}
                </option>
              ))}
            </select>
          </Field>
          <Field id="area" label="Neighbourhood" icon={MapPin} select>
            <select id="area" value={location} onChange={(e) => setLocation(e.target.value)} className={selectClass}>
              <option value="">Select your area</option>
              {AREAS.map((a) => (
                <option key={a} value={a.toLowerCase()}>{a}</option>
              ))}
              <option value="other">Other (we'll ask)</option>
            </select>
          </Field>
        </div>

        <div>
          <label htmlFor="notes" className="mb-1.5 block text-sm font-semibold text-ink">
            Ages of the children, allergies, anything else
            <span className="font-normal text-muted-foreground"> (optional)</span>
          </label>
          <textarea id="notes" value={specialNotes} onChange={(e) => setSpecialNotes(e.target.value)} rows={3}
            placeholder="e.g. 2 and 5 years old, no allergies, bedtime at 8 PM"
            className="w-full resize-none rounded-xl border-2 border-border bg-white px-4 py-3 text-ink placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none" />
        </div>
      </Step>

      <Step n={3} title="Your details">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="name" label="Your name" icon={User}>
            <input id="name" type="text" value={parentName} onChange={(e) => setParentName(e.target.value)}
              autoComplete="name" className={controlClass} required />
          </Field>
          <Field id="phone" label="WhatsApp number" icon={Phone}>
            <input id="phone" type="tel" value={parentPhone} onChange={(e) => setParentPhone(e.target.value)}
              placeholder="078X XXX XXX" autoComplete="tel" className={controlClass} required />
          </Field>
        </div>
        <Field id="email" label="Email" icon={Mail} optional>
          <input id="email" type="email" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)}
            autoComplete="email" placeholder="For a copy of the confirmation" className={controlClass} />
        </Field>
      </Step>

      {/* Price summary */}
      <div className="rounded-xl bg-sky p-5">
        {chosen ? (
          <dl className="space-y-1.5 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">{chosen.name}</dt>
              <dd className="font-semibold text-ink">{rwf(chosen.price)}</dd>
            </div>
            {extras > 0 && (
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">
                  {extras} extra {extras === 1 ? "child" : "children"} × {rwf(CHILDREN.extraChildFee)}
                </dt>
                <dd className="font-semibold text-ink">{rwf(extras * CHILDREN.extraChildFee)}</dd>
              </div>
            )}
            <div className="flex items-baseline justify-between gap-4 border-t border-border pt-2">
              <dt className="font-semibold text-ink">Price</dt>
              <dd className="text-2xl font-bold text-primary">{rwf(price)}</dd>
            </div>
          </dl>
        ) : (
          <p className="text-sm text-muted-foreground">Choose a package to see the price.</p>
        )}
        {needsSecondSitter && (
          <p className="mt-2 text-sm text-ink">
            More than {CHILDREN.perSitterAtEvents} children: we'll add a second sitter and confirm the price with you.
          </p>
        )}
        {chosen && !isEvent(chosen) && kids >= MAX_KIDS && (
          <p className="mt-2 text-sm text-ink">For {MAX_KIDS} or more children we confirm the final price with you.</p>
        )}
      </div>

      <div className="space-y-3">
        <Button type="submit" disabled={isLoading}
          className="h-14 w-full rounded-full text-lg font-bold disabled:opacity-50">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send booking request"
          )}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          This is a request, not a payment. We'll check which sitter is free and reply on WhatsApp.
        </p>
      </div>
    </form>
  );
};

export default Booking;
