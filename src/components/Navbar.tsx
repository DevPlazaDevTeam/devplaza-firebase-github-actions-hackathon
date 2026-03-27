import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["About", "Tracks", "Prizes", "Schedule", "FAQ"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-mono font-bold text-xl text-primary">
          {"<"}DevPlaza{" />"}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
          <Button variant="hero" size="sm">Register Now</Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-border/50 px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground py-2" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <Button variant="hero" size="sm">Register Now</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
