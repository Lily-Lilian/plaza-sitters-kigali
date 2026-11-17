import { Check, Home, Moon, Sun, X } from "lucide-react";
import {
  DAY_SHIFT,
  EVENING_SHIFT,
  EXTRAS,
  FAMILY_PROVIDES,
  FLAT_RATES,
  MORE_SERVICES,
  PAYMENT,
  rwf,
} from "@/lib/site";

const willDo = [
  "Feeding meals or snacks provided by the family",
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

const serviceColours = ["text-primary", "text-coral", "text-leaf"];

const Pricing = () => {
  return (
    <section id="prices" className="py-16 bg-sky scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-ink text-center mb-3">Our packages</h2>
        <p className="text-center text-muted-foreground mb-10">
          One price per shift. Pay half by MoMo to confirm, the rest at the end. No hidden fees.
        </p>

        {/* Main packages */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border-2 border-sunshine bg-sunshine/20 p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-2xl font-bold text-ink">
              <Sun className="w-7 h-7 text-coral" aria-hidden />
              {DAY_SHIFT.name}
            </h3>
            <p className="mt-3 text-4xl font-bold text-coral">{rwf(DAY_SHIFT.price)}</p>
            <p className="mt-1 text-sm font-semibold text-ink">{DAY_SHIFT.when}</p>
            <p className="mt-1 text-ink/80">{DAY_SHIFT.tagline}</p>
            <ul className="mt-5 pt-5 border-t border-sunshine space-y-2">
              {DAY_SHIFT.includes.map((t) => (
                <li key={t} className="flex gap-2 text-ink">
                  <Check className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-primary p-6 sm:p-8 text-white">
            <h3 className="flex items-center gap-2 text-2xl font-bold">
              <Moon className="w-7 h-7 text-sunshine" aria-hidden />
              {EVENING_SHIFT.name}
            </h3>
            <p className="mt-3 text-4xl font-bold text-sunshine">{rwf(EVENING_SHIFT.price)}</p>
            <p className="mt-1 text-sm font-semibold">{EVENING_SHIFT.when}</p>
            <p className="mt-1 text-white/85">{EVENING_SHIFT.tagline}</p>
            <ul className="mt-5 pt-5 border-t border-white/25 space-y-2">
              {EVENING_SHIFT.includes.map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="w-5 h-5 text-sunshine mt-0.5 flex-shrink-0" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What the family provides */}
        <div className="mt-6 rounded-2xl bg-white border border-border p-5 flex flex-col sm:flex-row sm:items-center gap-3">
          <p className="flex items-center gap-2 font-bold text-ink whitespace-nowrap">
            <Home className="w-5 h-5 text-primary" aria-hidden />
            The family provides:
          </p>
          <ul className="flex flex-wrap gap-2">
            {FAMILY_PROVIDES.map((t) => (
              <li key={t} className="rounded-full bg-secondary px-3 py-1 text-sm text-ink">
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* More services */}
        <h3 className="text-2xl font-bold text-ink text-center mt-12 mb-6">More services</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {MORE_SERVICES.map((s, i) => (
            <div key={s.id} className="bg-white rounded-2xl border border-border p-5 text-center">
              <p className="font-bold text-ink">{s.name}</p>
              <p className={`mt-1 text-2xl font-bold ${serviceColours[i % serviceColours.length]}`}>
                {rwf(s.price)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.tagline}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.when}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded-2xl border border-border p-5">
            <h4 className="font-bold text-ink mb-3">School runs</h4>
            <ul className="space-y-2 text-sm">
              {FLAT_RATES.map((r) => (
                <li key={r.id} className="flex justify-between gap-4">
                  <span className="text-ink">
                    {r.name} <span className="text-muted-foreground">({r.when})</span>
                  </span>
                  <span className="font-bold text-ink whitespace-nowrap">{rwf(r.price)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-border p-5">
            <h4 className="font-bold text-ink mb-3">Good to know</h4>
            <ul className="space-y-2 text-sm">
              {EXTRAS.map((e) => (
                <li key={e.label} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">{e.label}</span>
                  <span className="font-semibold text-ink text-right">{e.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Every package adjusts to your child's age and routine. We confirm the price on WhatsApp
          before you book.
        </p>

        {/* What sitters do + policy */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="font-bold text-ink mb-3">Sitters will</h3>
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
            <h3 className="font-bold text-ink mb-3">Sitters won't</h3>
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
            <h3 className="font-bold text-ink mb-3">Paying & cancelling</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-semibold text-ink">Half to confirm:</span> once we confirm your
                sitter, send 50% by MoMo to{" "}
                <span className="font-semibold text-ink">{PAYMENT.momoNumber}</span>.
              </li>
              <li>
                <span className="font-semibold text-ink">The rest at the end,</span> by cash or MoMo.
              </li>
              <li>School runs and Meet & Greet are paid in full when you book.</li>
              <li>
                <span className="font-semibold text-ink">Free</span> to cancel 12 hours or more
                before: we send your deposit back.
              </li>
              <li>
                Cancel later and we keep up to{" "}
                <span className="font-semibold text-ink">5,000 RWF</span> of your deposit to cover
                the sitter's time, and send back the rest.
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
