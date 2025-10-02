import { motion } from "framer-motion";
import { Smartphone, Server, Brain, MapPin, Zap, Palette } from "lucide-react";

const stackLayers = [
  { icon: Smartphone, label: "React Native (Expo)", category: "Frontend" },
  { icon: Server, label: "Supabase / PocketBase + Node", category: "Backend" },
  { icon: Brain, label: "YOLOv8 / Cloud Vision", category: "AI" },
  { icon: MapPin, label: "Mapbox / RN Maps", category: "Maps" },
  { icon: Zap, label: "Firebase Realtime", category: "Realtime" },
  { icon: Palette, label: "Pokémon-inspired Neon UI", category: "Design" },
];

export const TechStack = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10h20M30 10v20M30 30h20M50 30v20M50 50h20" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="10" cy="10" r="3" fill="currentColor" />
            <circle cx="30" cy="10" r="3" fill="currentColor" />
            <circle cx="50" cy="30" r="3" fill="currentColor" />
            <circle cx="70" cy="50" r="3" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-display text-foreground mb-4">
            Under the <span className="neon-text">Hood</span>
          </h2>
          <p className="text-xl text-muted-foreground">Tech Stack & Architecture</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-4 max-w-2xl mx-auto"
        >
          {stackLayers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, rotateX: -20 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  transition: { duration: 0.2 },
                }}
                className="glass-card rounded-2xl p-6 flex items-center gap-6 border-l-4 border-primary hover:border-accent transition-colors"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 glow-blue">
                  <Icon className="w-7 h-7 text-background" />
                </div>

                <div className="flex-1">
                  <p className="text-xs text-primary font-mono mb-1 uppercase tracking-wider">
                    {layer.category}
                  </p>
                  <h3 className="text-lg font-display text-foreground">
                    {layer.label}
                  </h3>
                </div>

                <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};