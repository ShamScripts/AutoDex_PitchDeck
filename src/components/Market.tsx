import { motion } from "framer-motion";
import { Users, Gamepad2, Flag, Building2 } from "lucide-react";

const expansionChips = [
  { icon: Flag, label: "Car Shows", color: "primary" },
  { icon: Building2, label: "Dealerships", color: "secondary" },
  { icon: Users, label: "F1 Weekends", color: "accent" },
  { icon: Gamepad2, label: "Sponsored Hunts", color: "primary" },
];

export const Market = () => {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-display text-foreground mb-6">
            Market <span className="neon-text-purple">Potential</span>
          </h2>
        </motion.div>

        {/* Venn Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto mb-20 h-80 flex items-center justify-center"
        >
          {/* Left Circle */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute left-1/4 w-64 h-64 rounded-full border-4 border-primary bg-primary/10 flex items-center justify-center backdrop-blur-sm"
            style={{ transform: "translateX(-50%)" }}
          >
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="font-display text-xl text-primary">Car Enthusiasts</p>
            </div>
          </motion.div>

          {/* Right Circle */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute right-1/4 w-64 h-64 rounded-full border-4 border-secondary bg-secondary/10 flex items-center justify-center backdrop-blur-sm"
            style={{ transform: "translateX(50%)" }}
          >
            <div className="text-center">
              <Gamepad2 className="w-12 h-12 text-secondary mx-auto mb-2" />
              <p className="font-display text-xl text-secondary">Gamers</p>
            </div>
          </motion.div>

          {/* Intersection */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute z-10 glass-card rounded-3xl p-8 border-2 border-accent glow-green"
          >
            <p className="font-display text-2xl text-accent text-center font-bold">
              AutoDex
              <br />
              Core
            </p>
          </motion.div>
        </motion.div>

        {/* Expansion Opportunities */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xl text-muted-foreground mb-8 font-semibold"
          >
            Expansion Opportunities
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="flex flex-wrap justify-center gap-4"
          >
            {expansionChips.map((chip, i) => {
              const Icon = chip.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className={`glass-card rounded-full px-6 py-3 flex items-center gap-3 border-2 border-${chip.color} cursor-pointer`}
                >
                  <Icon className={`w-5 h-5 text-${chip.color}`} />
                  <span className={`font-mono font-bold text-${chip.color}`}>
                    {chip.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};