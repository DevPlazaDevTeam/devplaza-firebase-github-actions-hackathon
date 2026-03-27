import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Who can participate?", a: "Anyone! Whether you're a student, professional developer, designer, or just passionate about tech — all skill levels are welcome." },
  { q: "How much does it cost?", a: "HackPlaza '26 is completely free! We provide food, drinks, swag, and everything you need to hack for 48 hours." },
  { q: "Do I need a team?", a: "You can register solo or with a team of up to 4. We also have team formation activities on Day 1 to help you find teammates." },
  { q: "Can I participate virtually?", a: "Yes! HackPlaza '26 is a hybrid event. Virtual participants get access to all workshops, mentors, and can submit projects remotely." },
  { q: "What should I bring?", a: "Your laptop, charger, and a creative mindset. We handle the rest — food, WiFi, and plenty of caffeine." },
];

const FAQSection = () => (
  <section id="faq" className="py-24">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-16">
        <p className="text-primary font-mono text-sm mb-2">// FAQ</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Got <span className="text-gradient">Questions?</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map(({ q, a }, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="glass rounded-xl border-border/50 px-6">
            <AccordionTrigger className="text-foreground hover:no-underline font-medium">{q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
