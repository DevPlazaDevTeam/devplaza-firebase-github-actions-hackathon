import { Brain, HeartPulse, Leaf, Shield } from "lucide-react";

const tracks = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Build intelligent systems that learn, adapt, and transform industries.", color: "text-primary" },
  { icon: HeartPulse, title: "HealthTech", desc: "Innovate solutions for healthcare accessibility and patient outcomes.", color: "text-accent" },
  { icon: Shield, title: "Cybersecurity", desc: "Create tools that protect data, privacy, and digital infrastructure.", color: "text-purple" },
  { icon: Leaf, title: "Sustainability", desc: "Develop tech-driven solutions for climate and environmental challenges.", color: "text-accent" },
];

const TracksSection = () => (
  <section id="tracks" className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-mono text-sm mb-2">// TRACKS</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Your <span className="text-gradient">Track</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Pick a track that excites you and build something extraordinary.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {tracks.map(({ icon: Icon, title, desc, color }) => (
          <div key={title} className="glass rounded-xl p-8 hover:border-primary/50 transition-all group cursor-pointer">
            <Icon className={`${color} mb-4`} size={32} />
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TracksSection;
