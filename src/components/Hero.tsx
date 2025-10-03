import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroCarImage from "@/assets/hero-car.png";
import logoImage from "@/assets/carmon-logo.png";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export const Hero = () => {
  const headline = ["Spot.", "Collect.", "Trade.", "Dominate."];
  const colors = ["text-primary", "text-secondary", "text-accent", "text-primary"];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 neon-grid opacity-30" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <img src={logoImage} alt="CarMon Go Logo" className="w-32 h-32 animate-pulse-glow" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="block mb-2">CarMon Go —</span>
          <div className="flex flex-wrap justify-center gap-4">
            {headline.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={`${colors[i]} neon-text`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
        >
          We turned car-spotting into a game. Your city is the map. Your garage is the Pokédex.
        </motion.p>

        {/* Hero Car Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative mb-12 mx-auto max-w-4xl"
        >
          <div className="relative aura-ring">
            <img 
              src={heroCarImage} 
              alt="Neon Car Silhouette" 
              className="w-full h-auto animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay rounded-2xl" />
          </div>
        </motion.div>

        {/* CTA - Single Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center"
        >
          {/*<Button variant="neon" size="xl">
            <Download />
            Download Pitch PDF
          </Button>*/}
        </motion.div>
      </div>
    </section>
  );
};