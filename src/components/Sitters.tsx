import { Baby, Clock, Languages } from "lucide-react";
import { BRAND, SITTERS } from "@/lib/site";

const Sitters = () => {
  return (
    <section id="sitters" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-cocoa text-center mb-3">
          Meet some of our sitters
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          {BRAND.founder}, our founder and a mother of three, interviews every sitter in person.
          We remove any sitter who doesn't meet our standards.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITTERS.map((s) => (
            <article key={s.name} className="bg-cream rounded-2xl overflow-hidden border border-border">
              {s.photo ? (
                <img src={s.photo} alt={s.name} className="w-full aspect-square object-cover" />
              ) : (
                <div className="w-full aspect-square bg-secondary flex items-center justify-center">
                  <span className="text-6xl font-display font-bold text-primary">{s.name[0]}</span>
                </div>
              )}
              <div className="p-5">
                <h3 className="text-xl font-bold text-cocoa">
                  {s.name} <span className="text-base font-normal text-muted-foreground">· {s.ageRange}</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">{s.note}</p>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex gap-2">
                    <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {s.experience}
                  </li>
                  <li className="flex gap-2">
                    <Languages className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {s.languages.join(", ")}
                  </li>
                  <li className="flex gap-2">
                    <Baby className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {s.babies ? "Cares for babies under 1" : "Ages 3 and up"}
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sitters;
