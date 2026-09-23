// Single source of truth for brand, contact details, prices and sitters.
// Change a value here and it updates everywhere on the site.

export const BRAND = {
  name: "Kigali Little Angels",
  tagline: "Trusted care, brighter tomorrows",
  founder: "Grace",
};

export const PHONE = {
  display: "0787 507 249",
  international: "+250787507249",
  whatsapp: "250787507249",
};

// Hours are stated once, here. Evening sittings may run past these hours;
// this is when we answer messages and take bookings.
export const HOURS = "Every day, 6 AM – 10 PM";

export const whatsappLink = (message = "Hi! I'd like to book a sitter.") =>
  `https://wa.me/${PHONE.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${PHONE.international}`;

export const RATES = {
  day: { label: "Daytime", hours: "6 AM – 6 PM", price: "3,000 RWF / hour", perHour: 3000 },
  evening: { label: "Evening", hours: "6 PM – midnight", price: "4,000 RWF / hour", perHour: 4000 },
  minimumHours: 3,
  extraChildPerHour: 2000,
  afterMidnight: 5000,
};

// Estimate used by the online booking form. Matches the published price table.
export const estimatePrice = (startTime: string, hours: number, kids: number) => {
  if (!startTime || !hours || !kids) return 0;
  const startHour = parseInt(startTime.split(":")[0]);
  let total = 0;
  let crossesMidnight = false;
  for (let i = 0; i < hours; i++) {
    const h = (startHour + i) % 24;
    const isDay = h >= 6 && h < 18;
    if (h < 6) crossesMidnight = true;
    total += (isDay ? RATES.day.perHour : RATES.evening.perHour) + (kids - 1) * RATES.extraChildPerHour;
  }
  return total + (crossesMidnight ? RATES.afterMidnight : 0);
};

export const EXTRAS = [
  { label: "Each extra child", price: "+2,000 RWF / hour" },
  { label: "After midnight", price: "+5,000 RWF flat" },
  { label: "Transport home after 10 PM", price: "You cover a safe ride (moto or taxi)" },
  { label: "Meet & Greet before your first booking", price: "5,000 RWF" },
];

// Flat-rate services that don't follow the 3-hour minimum.
export const FLAT_RATES = [
  { label: "Morning routine + school drop-off (6 – 8 AM)", price: "15,000 RWF" },
  { label: "School pick-up or drop-off", price: "8,000 RWF per trip" },
];

export const EXAMPLES = [
  { situation: "Wedding, 12 PM – 10 PM", detail: "Lunch, nap, dinner and bedtime", price: "34,000 RWF" },
  { situation: "Dinner out, 6 PM – 11 PM", detail: "Dinner, bath, stories, bed", price: "20,000 RWF" },
  { situation: "Working from home, 4 hours", detail: "Kids busy while you take calls", price: "12,000 RWF" },
];

export type Sitter = {
  name: string;
  photo?: string; // put real photos in /public/sitters/ and set e.g. "/sitters/divine.jpg"
  ageRange: string;
  languages: string[];
  experience: string;
  babies: boolean;
  note: string;
};

// TODO before launch: replace every field below with each sitter's real details
// and a real photo, with their permission.
export const SITTERS: Sitter[] = [
  {
    name: "Divine",
    ageRange: "20s",
    languages: ["Kinyarwanda", "English", "French"],
    experience: "4 years",
    babies: true,
    note: "Great with homework help and bedtime routines.",
  },
  {
    name: "Esperance",
    ageRange: "40s",
    languages: ["Kinyarwanda", "English"],
    experience: "Mother of 4, 10+ years",
    babies: true,
    note: "Calm and patient with newborns and toddlers.",
  },
  {
    name: "Sarah",
    ageRange: "20s",
    languages: ["Kinyarwanda", "English"],
    experience: "3 years",
    babies: false,
    note: "Loves arts, crafts and outdoor play with ages 3–10.",
  },
  {
    name: "Jeanne",
    ageRange: "30s",
    languages: ["Kinyarwanda", "French"],
    experience: "6 years",
    babies: true,
    note: "Long-term sitter for several Kigali families.",
  },
];
