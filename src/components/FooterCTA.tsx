import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";

const FooterCTA = () => (
  <footer className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-4">
        Ready to <span className="text-gradient">Hack?</span>
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto mb-8">
        Join 500+ developers and build something amazing in 48 hours. Spots are limited.
      </p>
      <Button variant="hero" size="lg" className="text-base px-10 py-6 mb-12">
        Register Now — It's Free
      </Button>

      <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-muted-foreground">
          {"<"}DevPlaza{" />"} © 2026
        </span>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={20} /></a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterCTA;
