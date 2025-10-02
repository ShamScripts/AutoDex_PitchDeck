import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Mesh Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--neon-blue)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--neon-purple)) 0%, transparent 50%), radial-gradient(circle at 40% 20%, hsl(var(--neon-green)) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, hsl(var(--neon-blue)) 0%, transparent 50%), radial-gradient(circle at 20% 80%, hsl(var(--neon-purple)) 0%, transparent 50%), radial-gradient(circle at 60% 60%, hsl(var(--neon-green)) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(var(--neon-blue)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--neon-purple)) 0%, transparent 50%), radial-gradient(circle at 40% 20%, hsl(var(--neon-green)) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Interactive Light */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--neon-blue)), transparent)",
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 neon-grid opacity-10" />

      {/* Floating Orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-xl"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            background: i % 3 === 0 
              ? "radial-gradient(circle, hsl(var(--neon-blue)) 0%, transparent 70%)"
              : i % 3 === 1
              ? "radial-gradient(circle, hsl(var(--neon-purple)) 0%, transparent 70%)"
              : "radial-gradient(circle, hsl(var(--neon-green)) 0%, transparent 70%)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Scanlines Effect */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--neon-blue)) 2px, hsl(var(--neon-blue)) 4px)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />
    </div>
  );
};