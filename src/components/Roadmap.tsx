import { motion } from "framer-motion";
import { CheckCircle, Circle, Clock } from "lucide-react";

const milestones = [
  {
    phase: "Now (Hackathon)",
    items: ["AI Recognition", "Garage System", "Map View", "Trading", "Leaderboards"],
    status: "active",
    icon: CheckCircle,
  },
  {
    phase: "+1 Month",
    items: ["AR Aura", "Car Clubs", "Better Quests", "Daily Missions"],
    status: "upcoming",
    icon: Clock,
  },
  {
    phase: "+3 Months",
    items: ["Marketplace", "Tournaments", "Streamer Mode", "Car Battles"],
    status: "future",
    icon: Circle,
  },
  {
    phase: "Beta Launch",
    items: ["City Rollout", "Brand Collabs", "Sponsorships", "Global Release"],
    status: "future",
    icon: Circle,
  },
];

export const Roadmap = () => {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-display text-foreground mb-4">
            <span className="neon-text-green">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground">From hackathon to global launch</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent origin-top"
          />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, i) => {
              const Icon = milestone.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} text-center mb-4 md:mb-0`}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="glass-card aura-ring rounded-2xl p-8 inline-block"
                    >
                      <h3 className={`text-2xl font-display mb-4 ${
                        milestone.status === "active" ? "text-accent" : "text-foreground"
                      }`}>
                        {milestone.phase}
                      </h3>
                      <ul className="space-y-2">
                        {milestone.items.map((item, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 + j * 0.1 }}
                            className="text-muted-foreground"
                          >
                            • {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Checkpoint */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                      milestone.status === "active"
                        ? "bg-accent glow-green border-4 border-accent/50"
                        : "bg-card border-4 border-primary/30"
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${
                      milestone.status === "active" ? "text-background" : "text-primary"
                    }`} />
                  </motion.div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};