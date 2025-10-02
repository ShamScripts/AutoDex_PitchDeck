import { motion } from "framer-motion";
import { Camera, Sparkles, FolderOpen, ArrowLeftRight, Map, Trophy } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Car Recognition",
    description: "make/model/year in a snap",
    color: "from-primary to-primary/50",
  },
  {
    icon: Sparkles,
    title: "Rarity System",
    description: "Common → Legendary",
    color: "from-accent to-accent/50",
  },
  {
    icon: FolderOpen,
    title: "Garage (CarDex)",
    description: "your collection, beautifully sorted",
    color: "from-secondary to-secondary/50",
  },
  {
    icon: ArrowLeftRight,
    title: "Trading",
    description: "fair swaps with rarity balance",
    color: "from-primary to-secondary",
  },
  {
    icon: Map,
    title: "Map & Quests",
    description: "hotspots & daily missions",
    color: "from-accent to-primary",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    description: "global & city ranks",
    color: "from-secondary to-accent",
  },
];

export const Features = () => {
  return (
    <section className="relative py-20 px-6 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display text-foreground mb-4">
            What's In the MVP
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="glass-card aura-ring rounded-2xl p-8 cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};