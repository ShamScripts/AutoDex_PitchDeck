import { motion } from "framer-motion";
import { Trophy, Cpu, Palette } from "lucide-react";

const teamMembers = [
  {
    name: "Shambhavi Jha",
    role: "Pitch/Demo Presenter",
    tagline: "Legendary Storyteller – turns slides into showtime",
    badge: "🏆 Legendary Pitcher",
    fact: "Can sell a Ferrari with one slide",
    icon: Trophy,
  },
  {
    name: "Alex Mehta",
    role: "AI/Backend Dev",
    tagline: "Makes neural nets purr like supercars",
    badge: "🤖 Model Whisperer",
    fact: "Has trained more models than cars spotted",
    icon: Cpu,
  },
  {
    name: "Riya Kapoor",
    role: "Frontend/UX Designer",
    tagline: "Pixels, neon, and dopamine engineering",
    badge: "🎨 Neon Architect",
    fact: "Sketches cars before driving them",
    icon: Palette,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as any,
    },
  },
};

export const Team = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 neon-grid opacity-20" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Team Name with Neon Sign Effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-7xl md:text-8xl font-display neon-text animate-flicker mb-4">
            AutoDex
          </h2>
          <p className="text-muted-foreground text-lg">The squad behind CarMon Go 🚗✨</p>
        </motion.div>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-foreground/80 max-w-3xl mx-auto mb-16 text-lg"
        >
          We're <span className="text-primary font-bold">AutoDex</span> — hackers, dreamers, and car hunters. 
          Built <span className="text-secondary font-bold">CarMon Go</span> in 36 hours to turn car-spotting into the world's next game.
        </motion.p>

        {/* Team Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                variants={cardVariants}
                className="group relative"
              >
                <div className="glass-card aura-ring rounded-2xl p-8 h-full flex flex-col items-center text-center space-y-4 cursor-pointer">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-blue">
                    <Icon className="w-10 h-10 text-background" />
                  </div>

                  {/* Front Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-display text-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-mono text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.tagline}</p>
                  </div>

                  {/* Badge - Shows on Hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="inline-block px-4 py-2 rounded-full bg-accent/20 border border-accent text-accent font-mono text-xs">
                      {member.badge}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 italic">&ldquo;{member.fact}&rdquo;</p>
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