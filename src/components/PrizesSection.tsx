import { Award } from "lucide-react";

const prizes = [
  { place: "1st Place", amount: "$20,000", extras: "Cloud Credits + Mentorship", highlight: true },
  { place: "2nd Place", amount: "$15,000", extras: "Cloud Credits + Swag Kit", highlight: false },
  { place: "3rd Place", amount: "$10,000", extras: "Cloud Credits", highlight: false },
  { place: "Best Solo", amount: "$5,000", extras: "Special Recognition", highlight: false },
];

const PrizesSection = () => (
  <section id="prizes" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-mono text-sm mb-2">// PRIZES</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Win <span className="text-gradient">Big</span>
        </h2>
        <p className="text-muted-foreground">Over $50,000 in prizes across all tracks.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {prizes.map(({ place, amount, extras, highlight }) => (
          <div
            key={place}
            className={`rounded-xl p-6 text-center transition-all ${
              highlight
                ? "bg-gradient-to-b from-primary/20 to-card border border-primary/50 glow-primary"
                : "glass hover:border-primary/30"
            }`}
          >
            <Award className={`mx-auto mb-3 ${highlight ? "text-primary" : "text-muted-foreground"}`} size={28} />
            <div className="text-sm text-muted-foreground mb-1 font-mono">{place}</div>
            <div className="text-3xl font-bold text-foreground mb-2">{amount}</div>
            <div className="text-xs text-muted-foreground">{extras}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PrizesSection;
