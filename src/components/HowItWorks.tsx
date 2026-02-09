'use client'
import { motion } from "motion/react";
import { Search, MousePointerClick, Download, Edit3, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Step {
  icon: any;
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  time: { en: string; hi: string };
  color: string;
}

const steps: Step[] = [
  {
    icon: Search,
    title: { en: "Browse", hi: "ब्राउज़ करें" },
    description: { en: "Find the perfect template from 1000+ options", hi: "1000+ विकल्पों में से सही टेम्पलेट खोजें" },
    time: { en: "10 seconds", hi: "10 सेकंड" },
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MousePointerClick,
    title: { en: "Preview & Select", hi: "पूर्वावलोकन और चयन" },
    description: { en: "See what you're getting before downloading", hi: "डाउनलोड करने से पहले देखें" },
    time: { en: "5 seconds", hi: "5 सेकंड" },
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Download,
    title: { en: "Download Instantly", hi: "तुरंत डाउनलोड करें" },
    description: { en: "No signup, no payment, 100% free", hi: "कोई साइनअप नहीं, कोई भुगतान नहीं, 100% मुफ्त" },
    time: { en: "1 second", hi: "1 सेकंड" },
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Edit3,
    title: { en: "Customize & Use", hi: "अनुकूलित करें और उपयोग करें" },
    description: { en: "Edit and make it yours in any word processor", hi: "किसी भी वर्ड प्रोसेसर में संपादित करें" },
    time: { en: "2 minutes", hi: "2 मिनट" },
    color: "from-orange-500 to-amber-500"
  }
];

export function HowItWorks() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "Simple & Fast",
      title: "Get Your Template in 4 Easy Steps",
      subtitle: "From search to download in less than 20 seconds",
      totalTime: "Total time:",
      totalDuration: "Under 20 seconds",
      ready: "You're ready to go!"
    },
    hi: {
      badge: "सरल और तेज़",
      title: "4 आसान चरणों में अपना टेम्पलेट प्राप्त करें",
      subtitle: "20 सेकंड से कम में खोज से डाउनलोड तक",
      totalTime: "कुल समय:",
      totalDuration: "20 सेकंड से कम",
      ready: "आप तैयार हैं!"
    }
  };

  const t = content[language];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0  from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 dark:from-emerald-500/20 dark:to-cyan-500/20 backdrop-blur-md border border-emerald-200 dark:border-emerald-500/30 mb-4">
            <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm text-emerald-700 dark:text-emerald-300">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-emerald-700 to-cyan-700 dark:from-white dark:via-emerald-200 dark:to-cyan-200 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/70">{t.subtitle}</p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent dark:from-white/10 dark:to-transparent -z-10" />
                )}

                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 text-white flex items-center justify-center font-bold text-sm shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="relative bg-white dark:bg-white/5 backdrop-blur-xl border-2 border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-slate-300 dark:hover:border-white/20 transition-all">
                  {/* Icon */}
                  <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {step.title[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-white/60 mb-4">
                    {step.description[language]}
                  </p>

                  {/* Time Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/10">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-slate-700 dark:text-white/80">
                      {step.time[language]}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Time Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-600 dark:to-cyan-600 rounded-2xl p-8 text-center text-white shadow-2xl"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Zap className="w-6 h-6" />
              <span className="text-lg font-medium">{t.totalTime}</span>
            </div>
            <div className="text-5xl font-bold mb-2">{t.totalDuration}</div>
            <p className="text-emerald-100 text-lg">✨ {t.ready}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
