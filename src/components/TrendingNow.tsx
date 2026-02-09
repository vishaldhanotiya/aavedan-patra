'use client'
import { motion } from "motion/react";
import { TrendingUp, Download, Eye, Clock, ArrowRight, Flame } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface TrendingTemplate {
  id: string;
  title: { en: string; hi: string };
  category: { en: string; hi: string };
  downloads: string;
  views: string;
  trending: number;
  image: string;
}

const trendingTemplates: TrendingTemplate[] = [
  {
    id: "1",
    title: { en: "Job Application for Teacher", hi: "शिक्षक के लिए नौकरी आवेदन" },
    category: { en: "Applications", hi: "आवेदन पत्र" },
    downloads: "12.5K",
    views: "45.2K",
    trending: 1,
    image: "📄"
  },
  {
    id: "2",
    title: { en: "Leave Application for School", hi: "स्कूल के लिए छुट्टी आवेदन" },
    category: { en: "Applications", hi: "आवेदन पत्र" },
    downloads: "8.3K",
    views: "32.1K",
    trending: 2,
    image: "📝"
  },
  {
    id: "3",
    title: { en: "Experience Certificate", hi: "अनुभव प्रमाण पत्र" },
    category: { en: "Certificates", hi: "प्रमाणपत्र" },
    downloads: "6.7K",
    views: "28.4K",
    trending: 3,
    image: "🏆"
  },
  {
    id: "4",
    title: { en: "Resignation Letter", hi: "इस्तीफा पत्र" },
    category: { en: "Letters", hi: "पत्र" },
    downloads: "5.9K",
    views: "24.8K",
    trending: 4,
    image: "✉️"
  },
];

export function TrendingNow() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Trending Now",
      subtitle: "What people are downloading right now",
      viewTemplate: "View Template",
      download: "Download",
      views: "views",
      liveActivity: "Live Activity",
      someoneDownloaded: "just downloaded this",
      seeAll: "See All Trending Templates"
    },
    hi: {
      title: "अभी ट्रेंडिंग",
      subtitle: "लोग अभी क्या डाउनलोड कर रहे हैं",
      viewTemplate: "टेम्पलेट देखें",
      download: "डाउनलोड",
      views: "व्यूज",
      liveActivity: "लाइव एक्टिविटी",
      someoneDownloaded: "ने अभी डाउनलोड किया",
      seeAll: "सभी ट्रेंडिंग टेम्पलेट देखें"
    }
  };

  const t = content[language];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-500/5 dark:from-orange-500/10 dark:via-red-500/10 dark:to-pink-500/10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 dark:from-orange-500/20 dark:to-red-500/20 backdrop-blur-md border border-orange-200 dark:border-orange-500/30 mb-4">
            <Flame className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-sm text-orange-700 dark:text-orange-300">{t.liveActivity}</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-orange-400 dark:via-red-400 dark:to-pink-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/70">{t.subtitle}</p>
        </motion.div>

        {/* Trending Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {trendingTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Trending Badge */}
              <div className="absolute -top-3 -left-3 z-20 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50">
                <span className="text-white font-bold">#{template.trending}</span>
              </div>

              {/* Card */}
              <div className="relative bg-white/80 dark:bg-white/10 backdrop-blur-xl border-2 border-slate-200 dark:border-white/20 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl group-hover:border-orange-300 dark:group-hover:border-orange-500 transition-all">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  {/* Template Preview Icon */}
                  <div className="text-6xl mb-4 text-center">{template.image}</div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">
                    {template.title[language]}
                  </h3>

                  {/* Category */}
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-xs text-slate-600 dark:text-white/70 mb-4">
                    {template.category[language]}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-white/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      <span>{template.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{template.views}</span>
                    </div>
                  </div>

                  {/* Live Activity Indicator */}
                  <div className="flex items-center gap-2 mb-4 text-xs text-emerald-600 dark:text-emerald-400">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span>{t.someoneDownloaded}</span>
                  </div>

                  {/* CTA */}
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg group-hover:shadow-xl transition-all"
                  >
                    {t.viewTemplate}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-orange-300 dark:border-orange-500/30 text-orange-700 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-500/10 backdrop-blur-md px-8"
          >
            <TrendingUp className="mr-2 w-5 h-5" />
            {t.seeAll}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
