"use client"
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { 
  Search, 
  TrendingUp, 
  Download, 
  Users, 
  Sparkles,
  ArrowRight,
  FileText,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  Building2,
  Scale,
  Clock,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface QuickNeed {
  icon: any;
  label: { en: string; hi: string };
  subtext: { en: string; hi: string };
  color: string;
  gradient: string;
  category: string;
}

const quickNeeds: QuickNeed[] = [
  {
    icon: Briefcase,
    label: { en: "Job Applications", hi: "नौकरी आवेदन" },
    subtext: { en: "50+ templates", hi: "50+ टेम्पलेट" },
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/20 to-cyan-500/20",
    category: "applications"
  },
  {
    icon: GraduationCap,
    label: { en: "School/College", hi: "स्कूल/कॉलेज" },
    subtext: { en: "100+ templates", hi: "100+ टेम्पलेट" },
    color: "from-violet-500 to-purple-500",
    gradient: "from-violet-500/20 to-purple-500/20",
    category: "letters"
  },
  {
    icon: Building2,
    label: { en: "Business Docs", hi: "व्यवसाय डॉक्स" },
    subtext: { en: "80+ templates", hi: "80+ टेम्पलेट" },
    color: "from-emerald-500 to-teal-500",
    gradient: "from-emerald-500/20 to-teal-500/20",
    category: "agreements"
  },
  {
    icon: Scale,
    label: { en: "Legal/Formal", hi: "कानूनी/औपचारिक" },
    subtext: { en: "60+ templates", hi: "60+ टेम्पलेट" },
    color: "from-amber-500 to-orange-500",
    gradient: "from-amber-500/20 to-orange-500/20",
    category: "certificates"
  },
];

const liveStats = {
  en: {
    templates: "1,200+",
    downloads: "50K+",
    users: "10K+",
    templatesLabel: "Free Templates",
    downloadsLabel: "Downloads This Month",
    usersLabel: "Happy Users"
  },
  hi: {
    templates: "1,200+",
    downloads: "50K+",
    users: "10K+",
    templatesLabel: "मुफ्त टेम्पलेट",
    downloadsLabel: "इस महीने डाउनलोड",
    usersLabel: "खुश उपयोगकर्ता"
  }
};

export function HeroOptimized() {
  const { language } = useLanguage();
  const [selectedNeed, setSelectedNeed] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const content = {
    en: {
      badge: "🎉 1000+ Templates Added",
      headline: "Get Professional Templates",
      subheadline: "in 10 Seconds",
      description: "Free, ready-to-use templates for job applications, letters, certificates, and more. No signup required.",
      searchPlaceholder: "Search for 'job application', 'leave letter'...",
      cta1: "Browse All Templates",
      cta2: "See Popular",
      quickStart: "What do you need today?",
      trending: "🔥 Trending Now",
      features: [
        "Instant download",
        "No signup needed",
        "100% Free forever"
      ]
    },
    hi: {
      badge: "🎉 1000+ टेम्पलेट जोड़े गए",
      headline: "पेशेवर टेम्पलेट प्राप्त करें",
      subheadline: "10 सेकंड में",
      description: "नौकरी आवेदन, पत्र, प्रमाणपत्र और अधिक के लिए मुफ्त, उपयोग के लिए तैयार टेम्पलेट। साइनअप की आवश्यकता नहीं।",
      searchPlaceholder: "'नौकरी आवेदन', 'छुट्टी पत्र' खोजें...",
      cta1: "सभी टेम्पलेट देखें",
      cta2: "लोकप्रिय देखें",
      quickStart: "आज आपको क्या चाहिए?",
      trending: "🔥 ट्रेंडिंग अभी",
      features: [
        "तत्काल डाउनलोड",
        "साइनअप की आवश्यकता नहीं",
        "100% हमेशा मुफ्त"
      ]
    }
  };

  const t = content[language];
  const stats = liveStats[language];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-violet-500/10 to-cyan-500/10 dark:from-sky-500/10 dark:via-violet-500/10 dark:to-cyan-500/10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 shadow-lg">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm text-slate-700 dark:text-white/90">{t.badge}</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-2">
              <span className="bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
                {t.headline}
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-600 to-violet-600 dark:from-cyan-400 dark:to-violet-400 bg-clip-text text-transparent">
              {t.subheadline}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-white/70 text-center mb-8 max-w-3xl mx-auto"
          >
            {t.description}
          </motion.p>

          {/* Live Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{stats.templates}</div>
                <div className="text-xs text-slate-600 dark:text-white/60">{stats.templatesLabel}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{stats.downloads}</div>
                <div className="text-xs text-slate-600 dark:text-white/60">{stats.downloadsLabel}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{stats.users}</div>
                <div className="text-xs text-slate-600 dark:text-white/60">{stats.usersLabel}</div>
              </div>
            </div>
          </motion.div>

          {/* Search Bar - PROMINENT */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-10"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white dark:bg-white/10 border-2 border-slate-200 dark:border-white/20 focus:border-cyan-500 dark:focus:border-cyan-400 outline-none text-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 backdrop-blur-xl shadow-xl transition-all"
              />
              <Button 
                size="lg"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div> */}

          {/* Quick Need Selector - INTERACTIVE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-10"
          >
            <h3 className="text-center text-lg text-slate-600 dark:text-white/70 mb-4">{t.quickStart}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {quickNeeds.map((need, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedNeed(need.category)}
                  className={`relative group p-6 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-xl border-2 transition-all ${
                    selectedNeed === need.category
                      ? "border-cyan-500 dark:border-cyan-400 shadow-xl shadow-cyan-500/20"
                      : "border-slate-200 dark:border-white/20 hover:border-cyan-300 dark:hover:border-cyan-500"
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${need.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${need.color} flex items-center justify-center shadow-lg`}>
                      <need.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{need.label[language]}</h4>
                    <p className="text-xs text-slate-600 dark:text-white/60">{need.subtext[language]}</p>
                  </div>
                  {selectedNeed === need.category && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all px-8 py-6 text-lg"
            >
              {t.cta1}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 backdrop-blur-md px-8 py-6 text-lg"
            >
              <TrendingUp className="mr-2 w-5 h-5" />
              {t.cta2}
            </Button>
          </motion.div>

          {/* Trust Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-white/60"
          >
            {t.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
