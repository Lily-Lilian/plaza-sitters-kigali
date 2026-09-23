import { Check, X } from "lucide-react";
import { EXAMPLES, EXTRAS, FLAT_RATES, RATES } from "@/lib/site";

const willDo = [
  "Feed the kids and cook simple meals for them",
  "Bath time, stories and bedtime, following your routine",
  "Play, homework help and screen time you approve",
  "Tidy up after the kids (toys, their dishes)",
];

const wontDo = [
  "House cleaning or laundry for the whole family",
  "Invite visitors or leave the house without asking you",
  "Post photos of your children or your home anywhere",
  "Give medicine unless you ask in writing",
];

const Pricing = () => {
  return (
    <section id="prices" className="py-16 bg-cream scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-cocoa text-center mb-3">Prices</h2>
        <p className="text-center text-muted-foreground mb-10">
          Minimum {RATES.minimumHours} hours. Pay the sitter at the end, by cash or MoMo. No
          hidden fees.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Hourly rates + extras */}
          <div className="bg-white rounded-2xl border border-border p-6">
            <table className="w-full text-left">
              <tbody className="divide-y divide-border">
                {[RATES.day, RATES.evening].map((r) => (
                  <tr key={r.label}>
                    <th scope="row" className="py-3 pr-4 font-normal">
                      <span className="block font-bold text-cocoa">{r.label}</span>
                      <span className="text-sm text-muted-foreground">{r.hours}</span>
                    </th>
                    <td className="py-3 text-right text-lg font-bold text-primary whitespace-nowrap">
                      {r.price}
                    </td>
                  </tr>
                ))}
                {FLAT_RATES.map((r) => (
                  <tr key={r.label}>
                    <th scope="row" className="py-3 pr-4 font-normal text-cocoa">{r.label}</th>
                    <td className="py-3 text-right font-bold text-cocoa whitespace-nowrap">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="font-bold text-cocoa mt-6 mb-2">Extras</h3>
            <ul className="space-y-2 text-sm">
              {EXTRAS.map((e) => (
                <li key={e.label} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">{e.label}</span>
                  <span className="font-semibold text-cocoa text-right">{e.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Worked examples */}
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="font-bold text-cocoa mb-4">What that looks like</h3>
            <ul className="space-y-4">
              {EXAMPLES.map((ex) => (
                <li key={ex.situation} className="flex justify-between gap-4 items-start">
                  <div>
                    <p className="font-semibold text-cocoa">{ex.situation}</p>
                    <p className="text-sm text-muted-foreground">{ex.detail}</p>
                  </div>
                  <span className="font-bold text-primary whitespace-nowrap">{ex.price}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-6">
              Examples are for one child. We confirm the exact price on WhatsApp before you book.
            </p>
          </div>
        </div>

        {/* What sitters do + policy */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="font-bold text-cocoa mb-3">Sitters will</h3>
            <ul className="space-y-2 text-sm">
              {willDo.map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="font-bold text-cocoa mb-3">Sitters won't</h3>
            <ul className="space-y-2 text-sm">
              {wontDo.map((t) => (
                <li key={t} className="flex gap-2">
                  <X className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="font-bold text-cocoa mb-3">Cancelling & replacements</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-semibold text-cocoa">Free</span> if you cancel 12 hours or
                more before.
              </li>
              <li>
                <span className="font-semibold text-cocoa">5,000 RWF</span> if you cancel later, to
                cover the sitter's time.
              </li>
              <li>
                If your sitter can't make it, we send a replacement who has passed the same checks,
                and tell you before she arrives.
              </li>
              <li>Not the right fit? Your next booking is with a different sitter, no extra cost.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
