// Single source of truth for brand, contact details, prices and sitters.
// Change a value here and it updates everywhere on the site.

export const BRAND = {
  name: "Kigali Little Angels",
  legalName: "Kigali Little Angels Ltd",
  tagline: "Trusted care, brighter tomorrows",
  founder: "Grace",
};

// Phone calls
export const PHONE = {
  display: "0796 854 668",
  international: "+250796854668",
};

// WhatsApp (a different number from the phone line)
export const WHATSAPP = {
  display: "0739 907 957",
  international: "+250739907957",
  waNumber: "250739907957",
};

// Hours are stated once, here. Evening sittings may run past these hours;
// this is when we answer messages and take bookings.
export const HOURS = "Every day, 6 AM – 10 PM";

export const whatsappLink = (message = "Hi! I'd like to book a sitter.") =>
  `https://wa.me/${WHATSAPP.waNumber}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${PHONE.international}`;

// Payment: half by MoMo to confirm, the rest at the end.
// MoMo goes to the same number as phone calls.
export const PAYMENT = {
  momoNumber: PHONE.display,
  depositPercent: 50,
};

export const depositFor = (total: number) => Math.round((total * PAYMENT.depositPercent) / 100);

export type Package = {
  id: string;
  name: string;
  price: number;
  when: string;
  tagline: string;
  // Used only to fill the booking record's duration (hours) field.
  nominalHours: number;
};

export const rwf = (n: number) => `${n.toLocaleString("en-US")} RWF`;

// The two main packages, with what the sitter does in each.
export const DAY_SHIFT: Package & { includes: string[] } = {
  id: "day",
  name: "Day Shift",
  price: 20000,
  when: "Any time during the day, until 5 PM",
  tagline: "A full day of care, learning & fun",
  nominalHours: 9,
  includes: [
    "Morning routine: washing & dressing",
    "Feeding meals or snacks provided by the family",
    "Reading, puzzles & learning games",
    "Arts, crafts & colouring",
    "Safe outdoor play",
    "Nap time supervision",
    "Homework help",
    "Hygiene & diaper changes",
    "Updates for parents during the day",
  ],
};

export const EVENING_SHIFT: Package & { includes: string[] } = {
  id: "evening",
  name: "Evening Shift",
  price: 20000,
  when: "5 PM – 10 PM",
  tagline: "A calm, cozy evening ready for bed",
  nominalHours: 5,
  includes: [
    "Feeding meals or snacks provided by the family",
    "Relaxed play",
    "Homework & revision",
    "Bath time & pyjamas",
    "Brushing teeth & hygiene",
    "Storytime & calm games",
    "Following your bedtime routine",
    "Settled to sleep & checked on",
    "Tidy space before you return",
  ],
};

export const MORE_SERVICES: Package[] = [
  {
    id: "overnight",
    name: "Overnight",
    price: 25000,
    when: "From the evening until the next morning",
    tagline: "Bedtime, night care & morning wake-up",
    nominalHours: 14,
  },
  {
    id: "events",
    name: "Special Events",
    price: 50000,
    when: "For the length of your event",
    tagline: "Weddings, parties & gatherings",
    nominalHours: 10,
  },
  {
    id: "travel",
    name: "Travel & Tour",
    price: 50000,
    when: "We agree the trip details with you",
    tagline: "A babysitter who travels with you",
    nominalHours: 10,
  },
];

export const ALL_PACKAGES: Package[] = [DAY_SHIFT, EVENING_SHIFT, ...MORE_SERVICES];

// What the family has ready at home for the sitter to use.
export const FAMILY_PROVIDES = [
  "Food, snacks & milk",
  "Diapers & wipes",
  "Any medicine, with written instructions",
];

export const EXTRAS = [
  { label: "Transport home after 10 PM", price: "You cover a safe ride (moto or any other means)" },
  { label: "Meet & Greet before your first booking", price: "Sitter's transport only (about 5,000 RWF)" },
];

export type Sitter = {
  name: string;
  photo?: string; // put real photos in /public/sitters/ and set e.g. "/sitters/liliane.jpg"
  ageRange: string;
  languages: string[];
  experience: string;
  goodWith?: string;
  // Short description for parents. Keep it to real facts about the sitter.
  about: string;
};

// Real team members (first names only). Four are shown; the rest of the team
// is mentioned as "more sitters" under the cards.
export const SITTERS: Sitter[] = [
  {
    name: "Liliane",
    ageRange: "30s",
    languages: ["Kinyarwanda", "English"],
    experience: "Former nanny",
    about:
      "A former nanny who keeps children busy with play and keeps them safe. She communicates clearly in English and Kinyarwanda, so you always know how your child's day went.",
  },
  {
    name: "Odette",
    ageRange: "30s",
    languages: ["Kinyarwanda", "English"],
    experience: "Mother of 2",
    about:
      "A mother of two who knows family life from the inside, from mealtimes to nap time. Kind and respectful, she follows your routine and your house rules.",
  },
  {
    name: "Honoré",
    ageRange: "20s",
    languages: ["Kinyarwanda", "English", "French"],
    experience: "Childcare at a church and the British Council",
    goodWith: "Best with older children",
    about:
      "Has looked after children at church and at the British Council. Great with school-age kids for homework, games and evening care, and explains things clearly to children and parents.",
  },
  {
    name: "Ritha",
    ageRange: "20s",
    languages: ["Kinyarwanda", "English", "Swahili"],
    experience: "Has cared for children in her family",
    about:
      "Has cared for the children in her own family. Patient and safety-minded, and speaks Kinyarwanda, English and Swahili with the kids.",
  },
];
