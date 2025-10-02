import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Mail } from "lucide-react";
import legendaryCar from "@/assets/legendary-car.png";

export const CTA = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={legendaryCar} 
          alt="Legendary Car" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Legendary Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[hsl(var(--legendary-gold))]"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
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

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-display neon-text-legendary mb-8">
            "Catch them all…
            <br />
            but make it cars."
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="legendary" size="xl" className="group">
                <Rocket className="group-hover:translate-y-[-4px] transition-transform" />
                Try the Live Demo
              </Button>
            </motion.div>

            <Button variant="neon" size="xl">
              <Mail />
              Talk to the Team
            </Button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm text-muted-foreground italic"
          >
            PS: Judges, we queued a <span className="text-[hsl(var(--legendary-gold))]">Legendary</span> near the venue. 🏆
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};