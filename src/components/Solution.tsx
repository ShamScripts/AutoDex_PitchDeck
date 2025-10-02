import { motion } from "framer-motion";
import { Camera, Cpu, Sparkles, Car, Trophy } from "lucide-react";

const steps = [
  { icon: Camera, label: "Snap", color: "text-primary" },
  { icon: Cpu, label: "AI Recognize", color: "text-secondary" },
  { icon: Sparkles, label: "Rarity Tier", color: "text-accent" },
  { icon: Car, label: "Garage", color: "text-primary" },
  { icon: Trophy, label: "Leaderboard", color: "text-accent" },
];

export const Solution = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display text-foreground mb-4">
            The Solution
          </h2>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left"
            style={{ transform: "translateY(-50%)" }}
          />

          {/* Steps */}
          <div className="relative flex justify-between items-center">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="flex flex-col items-center z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card border-2 border-primary flex items-center justify-center mb-3 glass-card ${
                      i === 2 ? "glow-green" : i === 4 ? "glow-blue" : "glow-purple"
                    }`}
                  >
                    <Icon className={`w-8 h-8 md:w-10 md:h-10 ${step.color}`} />
                  </motion.div>
                  <span className={`font-mono text-sm md:text-base font-bold ${step.color}`}>
                    {step.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* One-liner */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center text-2xl md:text-3xl font-display text-foreground mt-16"
        >
          Find it <span className="text-primary">IRL</span>, capture it, rank it,{" "}
          <span className="text-accent">flex it</span>.
        </motion.p>
      </div>
    </section>
  );
};