import { PAYMENT } from "@/lib/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What if my child doesn't get along with the sitter?",
    a: "Tell us. Your next booking will be with a different sitter at no extra cost. If you'd like to be sure beforehand, book a Meet & Greet first.",
  },
  {
    q: "What happens in an emergency?",
    a: "Before the first sitting we write down your emergency contacts, your child's allergies and any medicines. If something happens, the sitter calls you straight away, and emergency services if needed. We are on WhatsApp the whole time.",
  },
  {
    q: "Which areas do you cover?",
    a: "All of Kigali. Tell us your neighbourhood when you message and we'll send a sitter who lives nearby.",
  },
  {
    q: "How do I pay?",
    a: `Once we confirm your sitter, send half of the price by MoMo to ${PAYMENT.momoNumber}. Pay the rest at the end of the sitting, by cash or MoMo. School runs and Meet & Greet are paid in full when you book. Cancel 12 hours or more before and we send your deposit back.`,
  },
  {
    q: "Can I book for the same day?",
    a: "Often, yes. Message us as early as you can and we'll tell you straight away if a sitter is free.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-ink text-center mb-8">Questions parents ask</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-ink">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
