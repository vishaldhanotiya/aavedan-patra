'use client'
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Eye, Download, ArrowRight, X, Maximize2 } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface Template {
  id: string;
  title: { en: string; hi: string };
  category: { en: string; hi: string };
  preview: string;
  downloads: string;
}

const featuredTemplates: Template[] = [
  {
    id: "1",
    title: { en: "Professional Job Application", hi: "पेशेवर नौकरी आवेदन" },
    category: { en: "Applications", hi: "आवेदन पत्र" },
    preview: "📄",
    downloads: "12.5K"
  },
  {
    id: "2",
    title: { en: "Leave Request Letter", hi: "छुट्टी निवेदन पत्र" },
    category: { en: "Letters", hi: "पत्र" },
    preview: "📝",
    downloads: "8.3K"
  },
  {
    id: "3",
    title: { en: "Experience Certificate", hi: "अनुभव प्रमाण पत्र" },
    category: { en: "Certificates", hi: "प्रमाणपत्र" },
    preview: "🏆",
    downloads: "6.7K"
  },
];

export function InteractivePreview() {
  const { language } = useLanguage();
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const content = {
    en: {
      title: "See What You're Getting",
      subtitle: "Preview templates before downloading",
      preview: "Preview",
      download: "Download Now",
      close: "Close Preview",
      instantAccess: "Instant Access - No Login Required"
    },
    hi: {
      title: "देखें आपको क्या मिल रहा है",
      subtitle: "डाउनलोड करने से पहले टेम्पलेट देखें",
      preview: "पूर्वावलोकन",
      download: "अभी डाउनलोड करें",
      close: "पूर्वावलोकन बंद करें",
      instantAccess: "तत्काल पहुंच - लॉगिन की आवश्यकता नहीं"
    }
  };

  const t = content[language];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-white/70 mb-6">{t.subtitle}</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm text-emerald-700 dark:text-emerald-300">{t.instantAccess}</span>
          </div>
        </motion.div>

        {/* Interactive Template Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {featuredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(template.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group cursor-pointer"
              onClick={() => setSelectedTemplate(template)}
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-white/5 backdrop-blur-xl border-2 border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-lg group-hover:shadow-2xl group-hover:border-purple-300 dark:group-hover:border-purple-500 transition-all">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  {/* Template Preview */}
                  <motion.div
                    animate={hoveredId === template.id ? { scale: 1.1, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-8xl text-center mb-6"
                  >
                    {template.preview}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 text-center">
                    {template.title[language]}
                  </h3>

                  {/* Category */}
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-xs text-slate-600 dark:text-white/70">
                      {template.category[language]}
                    </span>
                  </div>

                  {/* Downloads */}
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-white/60 mb-6">
                    <Download className="w-4 h-4" />
                    <span>{template.downloads} downloads</span>
                  </div>

                  {/* Hover Action Buttons */}
                  <AnimatePresence>
                    {hoveredId === template.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-2"
                      >
                        <Button 
                          size="sm"
                          variant="outline"
                          className="flex-1 border-slate-300 dark:border-white/30 hover:bg-slate-100 dark:hover:bg-white/10"
                        >
                          <Eye className="mr-1 w-4 h-4" />
                          {t.preview}
                        </Button>
                        <Button 
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                        >
                          <Download className="mr-1 w-4 h-4" />
                          {t.download}
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Default CTA when not hovering */}
                  {hoveredId !== template.id && (
                    <div className="flex items-center justify-center text-sm text-purple-600 dark:text-purple-400">
                      <Maximize2 className="w-4 h-4 mr-1" />
                      Click to preview
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTemplate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-2xl w-full shadow-2xl border-2 border-slate-200 dark:border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTemplate(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-slate-700 dark:text-white" />
              </button>

              {/* Template Preview Content */}
              <div className="text-center">
                <div className="text-9xl mb-6">{selectedTemplate.preview}</div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {selectedTemplate.title[language]}
                </h3>
                <p className="text-slate-600 dark:text-white/70 mb-6">
                  {selectedTemplate.category[language]}
                </p>

                {/* Mock Preview */}
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 mb-6 text-left">
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/5" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => setSelectedTemplate(null)}
                    className="flex-1 border-2"
                  >
                    {t.close}
                  </Button>
                  <Button 
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-xl"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    {t.download}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
