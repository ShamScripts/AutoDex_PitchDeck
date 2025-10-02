import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Camera, Sparkles, FolderOpen, ArrowLeftRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import appDemoScreens from "@/assets/app-demo-screens.png";

const demoSteps = [
  {
    icon: Camera,
    title: "Snap Ferrari",
    description: "Point camera at supercar",
    badge: null,
  },
  {
    icon: Sparkles,
    title: "AI Detects",
    description: "Ferrari 488 GTB recognized",
    badge: "Scanning...",
  },
  {
    icon: CheckCircle,
    title: "Legendary Tier",
    description: "Ultra rare find!",
    badge: "⭐ LEGENDARY",
  },
  {
    icon: FolderOpen,
    title: "Add to Garage",
    description: "+1 to your collection",
    badge: "+100 XP",
  },
  {
    icon: ArrowLeftRight,
    title: "Trade Ready",
    description: "1 Ferrari ↔ 3 BMWs",
    badge: "Fair Trade",
  },
];

export const DemoFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-display text-foreground mb-4">
            How It <span className="neon-text">Plays</span>
          </h2>
          <p className="text-xl text-muted-foreground">Interactive Demo Flow</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Screen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 glow-blue">
              <img 
                src={appDemoScreens} 
                alt="App Demo Screens" 
                className="w-full h-auto rounded-xl"
              />
              
              {/* XP Notification */}
              <AnimatePresence>
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="bg-accent/90 backdrop-blur-md rounded-2xl px-6 py-3 border-2 border-accent">
                      <p className="font-mono text-2xl font-bold text-background">+100 XP</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-4">
            {demoSteps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === currentStep;
              const isCompleted = i < currentStep;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setCurrentStep(i)}
                  className={`glass-card rounded-2xl p-6 cursor-pointer transition-all ${
                    isActive ? "border-primary glow-blue scale-105" : ""
                  } ${isCompleted ? "border-accent" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                      isActive 
                        ? "bg-gradient-to-br from-primary to-secondary glow-blue" 
                        : isCompleted
                        ? "bg-accent"
                        : "bg-muted"
                    }`}>
                      <Icon className="w-7 h-7 text-background" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-display text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    {step.badge && isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`px-3 py-1 rounded-full font-mono text-xs font-bold ${
                          i === 2 
                            ? "bg-[hsl(var(--legendary-gold))]/20 text-[hsl(var(--legendary-gold))] border border-[hsl(var(--legendary-gold))]"
                            : "bg-primary/20 text-primary border border-primary"
                        }`}
                      >
                        {step.badge}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 max-w-xl mx-auto">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-2 font-mono">
            Step {currentStep + 1} of {demoSteps.length}
          </p>
        </div>
      </div>
    </section>
  );
};