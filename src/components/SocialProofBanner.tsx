'use client'
import { motion } from "motion/react";
import { Star, Download, Users, TrendingUp, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function SocialProofBanner() {
  const { language } = useLanguage();

  const content = {
    en: {
      rating: "4.9/5",
      ratingText: "Based on 2,500+ reviews",
      downloads: "50K+",
      downloadsText: "Downloads this month",
      users: "10K+",
      usersText: "Active users",
      satisfaction: "98%",
      satisfactionText: "User satisfaction",
      testimonial: "\"This saved me hours! Found exactly what I needed in seconds.\"",
      author: "Rahul S., Software Engineer"
    },
    hi: {
      rating: "4.9/5",
      ratingText: "2,500+ समीक्षाओं के आधार पर",
      downloads: "50K+",
      downloadsText: "इस महीने डाउनलोड",
      users: "10K+",
      usersText: "सक्रिय उपयोगकर्ता",
      satisfaction: "98%",
      satisfactionText: "उपयोगकर्ता संतुष्टि",
      testimonial: "\"इसने मेरे घंटों बचाए! सेकंड में वही मिला जो मुझे चाहिए था।\"",
      author: "राहुल एस., सॉफ्टवेयर इंजीनियर"
    }
  };

  const t = content[language];

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 dark:from-emerald-500/20 dark:via-cyan-500/20 dark:to-violet-500/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/20 rounded-3xl p-8 shadow-2xl"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Rating */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {t.rating}
              </div>
              <p className="text-xs text-slate-600 dark:text-white/60">{t.ratingText}</p>
            </div>

            {/* Downloads */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {t.downloads}
              </div>
              <p className="text-xs text-slate-600 dark:text-white/60">{t.downloadsText}</p>
            </div>

            {/* Users */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {t.users}
              </div>
              <p className="text-xs text-slate-600 dark:text-white/60">{t.usersText}</p>
            </div>

            {/* Satisfaction */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {t.satisfaction}
              </div>
              <p className="text-xs text-slate-600 dark:text-white/60">{t.satisfactionText}</p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="border-t border-slate-200 dark:border-white/10 pt-6">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg italic text-slate-700 dark:text-white/80 mb-3">
                {t.testimonial}
              </p>
              <p className="text-sm text-slate-600 dark:text-white/60">
                — {t.author}
              </p>
            </div>
          </div>

          {/* Live Activity Ticker */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <TrendingUp className="w-4 h-4" />
            <span>Live: Someone just downloaded a template</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
