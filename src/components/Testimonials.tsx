import { Quote } from "lucide-react";

// TODO before launch: use only real parent messages, with written permission.
// Replace any of these that are not real.
const reviews = [
  {
    name: "Mama Kevine",
    area: "Kimihurura",
    text: "My meeting ran late till 11 PM and Divine stayed with the kids, no complaints. She even helped Kevin with his maths homework.",
  },
  {
    name: "Jean-Claude K.",
    area: "Kacyiru",
    text: "I was skeptical. But after one visit my daughter asked, 'Papa, when is Auntie Sarah coming back?' That's when I knew.",
  },
  {
    name: "The Murengezi family",
    area: "Gisozi",
    text: "Jeanne has been with us since our first baby. Now we have three, and the kids call her Tantine. She's family.",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-16 bg-cream scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-cocoa text-center mb-10">
          What parents say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-white rounded-2xl border border-border p-6">
              <Quote className="w-7 h-7 text-primary-light mb-3" />
              <blockquote className="text-cocoa leading-relaxed mb-4">"{r.text}"</blockquote>
              <figcaption className="text-sm">
                <span className="font-bold text-cocoa">{r.name}</span>
                <span className="text-muted-foreground"> · {r.area}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
