"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowDown, Sparkles, FileText, Award, Mail } from "lucide-react";

export function Hero() {

   const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-violet-500/20 to-cyan-500/20 dark:from-sky-500/20 dark:via-violet-500/20 dark:to-cyan-500/20 animate-gradient" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
   {/* Animated particles */}
{windowSize && (
  <div className="absolute inset-0">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        initial={{
          x: Math.random() * windowSize.width,
          y: Math.random() * windowSize.height,
          opacity: 0,
        }}
        animate={{
          y: [null, Math.random() * windowSize.height],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <FileText className="w-4 h-4 text-cyan-400/30 dark:text-cyan-400/30" />
      </motion.div>
    ))}
  </div>
)}

      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-slate-700 dark:text-white/90">1000+ Professional Templates</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
              Welcome to Aavedan Patra
            </h1>

            <p className="text-xl text-slate-600 dark:text-white/80 mb-8 max-w-xl">
              Explore 1000+ free professional templates — crafted for your job, study, and business needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/60 transition-all duration-300"
              >
                Explore Templates
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 backdrop-blur-md"
              >
                View Categories
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Floating Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateY: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/20 rounded-[30px] p-8 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 dark:from-cyan-500/20 dark:to-violet-500/20 rounded-[30px]" />
              
              <div className="relative space-y-6">
                {/* Document Icons */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: FileText, label: "Applications", color: "from-sky-400 to-cyan-400" },
                    { icon: Mail, label: "Letters", color: "from-violet-400 to-purple-400" },
                    { icon: Award, label: "Certificates", color: "from-pink-400 to-rose-400" },
                    { icon: Sparkles, label: "Templates", color: "from-amber-400 to-orange-400" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 rounded-2xl p-6 text-center"
                    >
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-slate-700 dark:text-white/90">{item.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
                    <span className="text-slate-600 dark:text-white/70">Live Updates</span>
                  </div>
                  <p className="text-slate-700 dark:text-white/90">New templates added weekly</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-slate-400 dark:text-white/50" />
      </motion.div>
    </section>
  );
}