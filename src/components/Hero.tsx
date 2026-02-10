import { ArrowDown } from "lucide-react";
import { HeroText } from "../components/HeroText";
import { FloatingCard } from "../components/FloatingCard";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-violet-500/20 to-cyan-500/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Client text section */}
          <HeroText />

          {/* Floating card animation */}
          <FloatingCard />
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400 dark:text-white/50" />
      </div>
    </section>
  );
}
