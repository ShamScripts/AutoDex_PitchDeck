import { motion } from "framer-motion";
import { Lock, Sparkles, Swords, Globe, Camera, Users, Dna, ShoppingCart } from "lucide-react";

const crazyFeatures = [
  { icon: Sparkles, title: "Car Evolution", desc: "holographic upgrades", locked: true },
  { icon: Swords, title: "Car Battles", desc: "speed, horsepower, style stats", locked: true },
  { icon: Globe, title: "Global CarDex", desc: "'First Finder' badges", locked: true },
  { icon: Camera, title: "AR Aura", desc: "rarity halos in camera view", locked: true },
  { icon: Users, title: "Car Clubs", desc: "squads & city rivalries", locked: true },
  { icon: Dna, title: "Car DNA", desc: "unique hashes for rare spots", locked: true },
  { icon: ShoppingCart, title: "Marketplace", desc: "trade with CarCoins", locked: true },
  { icon: Sparkles, title: "Streamer Mode", desc: "TikTok-ready highlights", locked: true },
];

export const CrazyMode = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Holographic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-display mb-4">
            <span className="neon-text-purple">Crazy Mode</span> 🚀
          </h2>
          <p className="text-xl text-muted-foreground">(Post-MVP Unlocks)</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {crazyFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
                  visible: { opacity: 1, scale: 1, rotateY: 0 },
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="relative group cursor-pointer perspective-1000"
              >
                {/* Holographic Card */}
                <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden">
                  {/* Holographic Shine Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, transparent 0%, rgba(33, 212, 253, 0.1) 25%, rgba(183, 33, 255, 0.1) 50%, rgba(43, 240, 160, 0.1) 75%, transparent 100%)",
                      backgroundSize: "200% 200%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Lock Badge */}
                  {feature.locked && (
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center z-10">
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-background" />
                    </div>
                    <h3 className="text-lg font-display text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Foil Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent animate-shimmer" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};