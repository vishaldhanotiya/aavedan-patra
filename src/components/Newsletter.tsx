"use client";
import { motion } from "motion/react";
import { Mail, Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-violet-100 via-pink-50 to-cyan-100 dark:from-violet-600/20 dark:via-pink-600/20 dark:to-cyan-600/20 backdrop-blur-xl border border-slate-200 dark:border-white/20 rounded-[30px] p-12 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-pink-500/10 to-cyan-500/10 dark:from-violet-500/10 dark:via-pink-500/10 dark:to-cyan-500/10 animate-gradient" />
            
            {/* Floating particles */}
            <div className="absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ 
                    x: Math.random() * 100 + '%',
                    y: Math.random() * 100 + '%'
                  }}
                  animate={{ 
                    y: [null, (Math.random() - 0.5) * 100 + '%'],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ 
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-4 h-4 text-cyan-400/30" />
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block mb-6"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/50">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
                Join 10,000+ creators using Aavedan Patra
              </h2>
              
              <p className="text-slate-600 dark:text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Get weekly updates on new templates and writing guides delivered straight to your inbox
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/50 focus:border-cyan-500 backdrop-blur-md h-12"
                />
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/60 transition-all duration-300"
                >
                  Subscribe
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <p className="text-slate-500 dark:text-white/50 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}