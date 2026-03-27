import { Code2, Lightbulb, Trophy, Wifi } from "lucide-react";

const stats = [
  { icon: Code2, value: "48h", label: "Of Hacking" },
  { icon: Trophy, value: "$50K+", label: "In Prizes" },
  { icon: Lightbulb, value: "30+", label: "Mentors" },
  { icon: Wifi, value: "100%", label: "Hybrid Event" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary font-mono text-sm mb-2">// ABOUT THE EVENT</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Build the <span className="text-gradient">Future</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          HackPlaza '26 is DevPlaza's flagship hackathon bringing together the brightest minds to solve real-world problems with cutting-edge tech.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="glass rounded-xl p-6 text-center group hover:border-primary/50 transition-colors">
            <Icon className="mx-auto mb-3 text-primary" size={28} />
            <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
