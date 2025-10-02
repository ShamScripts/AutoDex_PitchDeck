import logoImage from "@/assets/carmon-logo.png";
import { Github, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4">
            <img src={logoImage} alt="CarMon Go" className="w-12 h-12" />
            <div>
              <p className="font-display text-lg">CarMon Go</p>
              <p className="text-sm text-muted-foreground">Pokémon Go, but for cars</p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/50 font-mono">
            ↑↑↓↓←→←→BA → unlock Legendary Mode
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2025 AutoDex. Built with 🔥 in 36 hours.
          </p>
        </div>
      </div>
    </footer>
  );
};