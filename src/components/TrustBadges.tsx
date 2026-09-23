import { FileCheck, HeartPulse, IdCard, PhoneCall } from "lucide-react";

// Only list checks every sitter has actually passed.
const badges = [
  { icon: FileCheck, title: "Criminal record certificate", detail: "Issued through Irembo" },
  { icon: IdCard, title: "National ID checked", detail: "Verified in person" },
  { icon: HeartPulse, title: "First aid trained", detail: "Including infant first aid" },
  { icon: PhoneCall, title: "References called", detail: "3 families, every sitter" },
];

const TrustBadges = () => {
  return (
    <section aria-label="How we check our sitters" className="py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map(({ icon: Icon, title, detail }) => (
            <div
              key={title}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 bg-white rounded-2xl border border-border p-4 text-center sm:text-left"
            >
              <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-cocoa leading-tight">{title}</p>
                <p className="text-sm text-muted-foreground">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
