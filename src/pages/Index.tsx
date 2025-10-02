import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Team } from "@/components/Team";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { CrazyMode } from "@/components/CrazyMode";
import { DemoFlow } from "@/components/DemoFlow";
import { WhyNow } from "@/components/WhyNow";
import { Market } from "@/components/Market";
import { TechStack } from "@/components/TechStack";
import { Roadmap } from "@/components/Roadmap";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Team />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <CrazyMode />
      <DemoFlow />
      <WhyNow />
      <Market />
      <TechStack />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;