import { motion } from "framer-motion";
import { TrendingUp, Smartphone, Sparkles } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "$6B+",
    label: "Pokémon Go Lifetime Revenue",
    subtext: "Location-based games print money",
    color: "from-primary to-primary/50",
  },
  {
    icon: Sparkles,
    value: "500M+",
    label: "#carspotting on TikTok & IG",
    subtext: "Car culture is exploding online",
    color: "from-secondary to-secondary/50",
  },
  {
    icon: Smartphone,
    value: "100%",
    label: "On-device AI Recognition",
    subtext: "Production-ready technology",
    color: "from-accent to-accent/50",
  },
];

export const WhyNow = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated rays */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-full origin-top"
            style={{
              background: "linear-gradient(to bottom, hsl(var(--primary)), transparent)",
              transform: `rotate(${i * 30}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-display text-foreground mb-6">
            Why <span className="neon-text-green">Now</span>?
          </h2>
          <p className="text-xl text-muted-foreground">Perfect timing meets perfect tech</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card aura-ring rounded-3xl p-8 text-center"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-10 h-10 text-background" />
                </div>

                <motion.h3
                  className="text-5xl font-display font-bold mb-3 font-mono neon-text"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3 }}
                >
                  {stat.value}
                </motion.h3>

                <p className="text-xl text-foreground font-semibold mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};