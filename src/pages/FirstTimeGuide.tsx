import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle2, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND, PHONE, telLink, whatsappLink } from "@/lib/site";

const beforeList = [
  "Write down your number, a backup contact and your child's doctor",
  "Note any allergies and medicines",
  "Prepare a snack or dinner and show where things are",
  "Set out pyjamas and bedtime favourites",
  "Share the WiFi password and your screen-time rules",
];

const arrivalSteps = [
  "Show the sitter around: bathroom, kids' room, the way out",
  "Go through your info sheet together",
  "Introduce them to your child by name",
  "Say a short, happy goodbye. Long goodbyes make it harder.",
];

const normal = [
  "Crying when you leave. It usually passes quickly.",
  "The sitter asking lots of questions",
  "A slightly different bedtime approach from yours",
];

const callUs = [
  "The sitter arrives with someone else",
  "They ask for money upfront",
  "They take the kids out without asking you",
];

const infoSheet = `INFO FOR YOUR SITTER
--------------------
Parent names:
Phone 1:
Phone 2:

Doctor and phone:
Nearest hospital:
Trusted neighbour:

Allergies:
Medicines:
Bedtime:
Comfort items:

WiFi:
Gate / security:

Anything else:
`;

const downloadInfoSheet = () => {
  const url = URL.createObjectURL(new Blob([infoSheet], { type: "text/plain" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "sitter-info-sheet.txt";
  a.click();
  URL.revokeObjectURL(url);
};

const FirstTimeGuide = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-cocoa text-center mb-2">
            First time leaving your baby?
          </h1>
          <p className="text-center text-muted-foreground mb-10">
            Every parent feels nervous the first time. These three steps make it easier.
          </p>

          <section className="bg-white rounded-2xl border border-border p-6 mb-6">
            <h2 className="text-xl font-bold text-cocoa mb-4">1. Before the sitter arrives</h2>
            <ul className="space-y-2 mb-5">
              {beforeList.map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" onClick={downloadInfoSheet} className="rounded-full border-2">
              <FileText className="mr-2 w-4 h-4" />
              Download an info sheet to fill in
            </Button>
          </section>

          <section className="bg-white rounded-2xl border border-border p-6 mb-6">
            <h2 className="text-xl font-bold text-cocoa mb-4">2. When the sitter arrives</h2>
            <ol className="space-y-2">
              {arrivalSteps.map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="font-bold text-primary">{i + 1}.</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="bg-white rounded-2xl border border-border p-6 mb-10">
            <h2 className="text-xl font-bold text-cocoa mb-4">3. While you're out</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-cocoa mb-2">Normal, don't worry</p>
                <ul className="space-y-2 text-muted-foreground">
                  {normal.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-cocoa mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-primary" />
                  Call us straight away if
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {callUs.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <a href={telLink} className="inline-block mt-3 font-bold text-primary">{PHONE.display}</a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              For a medical emergency, call emergency services first, then us.
            </p>
          </section>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Tip: for the first time, book just 3 hours, or meet your sitter first for 5,000 RWF.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/book-now">
                <Button className="w-full sm:w-auto px-7 py-6 rounded-full text-base font-bold">
                  Book your first sitter
                </Button>
              </Link>
              <a href={whatsappLink("Hi, I'm a first-time parent and have some questions")} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto px-7 py-6 rounded-full border-2 text-base font-bold bg-white">
                  Chat with {BRAND.founder} first
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

export default FirstTimeGuide;
