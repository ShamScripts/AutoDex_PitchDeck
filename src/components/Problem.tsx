import { motion } from "framer-motion";
import { X, Frown, Slash } from "lucide-react";

const problems = [
  { text: "Car-spotting is random and lonely", icon: Frown },
  { text: "No game layer or recognition", icon: Slash },
  { text: "Nothing to collect, trade, or flex", icon: X },
];

export const Problem = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display text-foreground mb-6">
            The Problem
          </h2>
        </motion.div>

        {/* Problem Chips */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                className="glass-card rounded-xl p-6 flex items-center gap-4 hover:border-destructive/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-foreground font-medium">{problem.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Meme Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto glass-card rounded-2xl p-8 text-center hover:scale-[1.02] transition-transform"
        >
          <p className="text-lg text-muted-foreground italic mb-2">
            "me: <span className="text-primary">*snaps a supercar*</span>"
          </p>
          <p className="text-lg text-muted-foreground italic">
            "my camera roll: <span className="text-destructive">*black hole of chaos*</span>"
          </p>
          <div className="mt-4 text-4xl">📸🤷‍♂️</div>
        </motion.div>
      </div>
    </section>
  );
};