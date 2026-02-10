"use client";

import { motion } from "motion/react";
import { FileText, Award, Mail, Sparkles } from "lucide-react";
import { heroString } from "@/data/hero";
import { useLanguage } from "@/contexts/LanguageContext";

export function FloatingCard() {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/20 rounded-[30px] p-8 shadow-2xl"
      >
        <div className="space-y-6">
          {/* Icons grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: FileText,
                label: heroString.applications,
                color: "from-sky-400 to-cyan-400",
              },
              {
                icon: Mail,
                label: heroString.letters,
                color: "from-violet-400 to-purple-400",
              },
              {
                icon: Award,
                label: heroString.certificates,
                color: "from-pink-400 to-rose-400",
              },
              {
                icon: Sparkles,
                label: heroString.templates,
                color: "from-amber-400 to-orange-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 rounded-2xl p-6 text-center"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-700 dark:text-white/90">
                  {item.label[language]}
                </p>
              </div>
            ))}
          </div>

          {/* Status box */}
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-slate-600 dark:text-white/70">
                {heroString.liveUpdate[language]}
              </span>
            </div>
            <p className="text-slate-700 dark:text-white/90">
              {heroString.weeklyUpdate[language]}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
