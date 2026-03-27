import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const TARGET_DATE = new Date("2026-05-15T09:00:00");

const useCountdown = (target: Date) => {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const HeroSection = () => {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Registration Open
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
          <span className="text-gradient">DevPlaza</span>
          <span className="text-foreground"> Student Hackathon</span>
          <span className="text-gradient"> '26</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          48 hours of building, breaking, and innovating. Join 500+ developers, designers & creators at the biggest hackathon by DevPlaza.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-12">
          <span className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> May 15–17, 2026</span>
          <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> San Francisco, CA + Virtual</span>
          <span className="flex items-center gap-2"><Users size={16} className="text-primary" /> 500+ Hackers</span>
        </div>

        {/* Countdown */}
        <div className="flex justify-center gap-4 md:gap-6 mb-12">
          {[
            { v: days, l: "Days" },
            { v: hours, l: "Hours" },
            { v: minutes, l: "Mins" },
            { v: seconds, l: "Secs" },
          ].map(({ v, l }) => (
            <div key={l} className="glass rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px]">
              <div className="text-2xl md:text-4xl font-mono font-bold text-foreground">{String(v).padStart(2, "0")}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{l}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Register Now — It's Free
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
            View Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
