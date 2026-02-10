/**
 * PILLAR TEMPLATE DETAILS PAGE - Sample Files
 * SEO-optimized multi-variation template page for pillar content
 */
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  Copy,
  Download,
  FileText,
  Share2,
  Printer,
  Check,
  ThumbsUp,
  ThumbsDown,
  Calendar,
  Tag,
  Layers,
  BookOpen,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Home,
  Edit,
} from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { TemplateEditorModal } from "./TemplateEditorModal";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { iconMap } from "./icon";
interface TemplateVariation {
  id: string;
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  content: { en: string; hi: string };
  bestFor: { en: string; hi: string };
  length: { en: string; hi: string };
  difficulty: { en: string; hi: string };
}

interface HowToTip {
  text: { en: string; hi: string };
}

interface RelatedTemplate {
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  icon: string;
  link: string;
}

interface BlogArticle {
  title: { en: string; hi: string };
  excerpt: { en: string; hi: string };
  readTime: { en: string; hi: string };
  link: string;
}

interface FAQ {
  question: { en: string; hi: string };
  answer: { en: string; hi: string };
}

interface PillarTemplateData {
  breadcrumb: {
    category: { en: string; hi: string; slug?: string };
    subcategory: { en: string; hi: string; slug?: string };
    template: { en: string; hi: string; slug?: string };
  };
  title: { en: string; hi: string };
  subtitle: { en: string; hi: string };
  category: { en: string; hi: string };
  updatedDate: string;
  variations: TemplateVariation[];
  editorVariations?: any[]; // Optional editor variations
  howToWrite: {
    title: { en: string; hi: string };
    tips: HowToTip[];
  };
  relatedTemplates: RelatedTemplate[];
  blogArticles: BlogArticle[];
  faqs: FAQ[];
}

interface PillarTemplateDetailsPageProps {
  data: PillarTemplateData;
  language?: "en" | "hi";
  singleTemplate?: boolean;
}

export function PillarTemplateDetailsPage({
  data,
  singleTemplate = false,
}: PillarTemplateDetailsPageProps) {
  const [activeVariation, setActiveVariation] = useState<string>(
    data.variations[0]?.id || "",
  );
  const [copiedVariation, setCopiedVariation] = useState<string | null>(null);
  const [expandedVariations, setExpandedVariations] = useState<Set<string>>(
    new Set([data.variations[0]?.id]),
  );
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(
    null,
  );
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorContent, setEditorContent] = useState("");
  const { language } = useLanguage();

  useEffect(() => {
    // Reset active variation when data changes
    if (data.variations.length > 0) {
      setActiveVariation(data.variations[0].id);
      setExpandedVariations(new Set([data.variations[0].id]));
    }
  }, [data]);

  const handleCopy = (variationId: string) => {
    const variation = data.variations.find((v) => v.id === variationId);
    if (variation) {
      navigator.clipboard.writeText(variation.content[language]);
      setCopiedVariation(variationId);
      toast.success(
        language === "en" ? "Template copied!" : "टेम्पलेट कॉपी हो गया!",
      );
      setTimeout(() => setCopiedVariation(null), 2000);
    }
  };

  const handleDownload = (
    variationId: string,
    format: "txt" | "pdf" | "doc",
  ) => {
    const variation = data.variations.find((v) => v.id === variationId);
    if (variation) {
      const blob = new Blob([variation.content[language]], {
        type: "text/plain",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${variation.title.en.replace(/\s+/g, "-").toLowerCase()}.${format}`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success(
        language === "en"
          ? "Downloaded successfully!"
          : "सफलतापूर्वक डाउनलोड हो गया!",
      );
    }
  };

  const handlePrint = (variationId: string) => {
    const variation = data.variations.find((v) => v.id === variationId);
    if (variation) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${variation.title[language]}</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
                pre { white-space: pre-wrap; word-wrap: break-word; }
              </style>
            </head>
            <body>
              <h1>${variation.title[language]}</h1>
              <pre>${variation.content[language]}</pre>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const handleShare = (variationId: string) => {
    if (navigator.share) {
      navigator
        .share({
          title: data.title[language],
          text: `Check out this template: ${data.title[language]}`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success(language === "en" ? "Link copied!" : "लिंक कॉपी हो गया!");
    }
  };

  const toggleVariation = (variationId: string) => {
    const newExpanded = new Set(expandedVariations);
    if (newExpanded.has(variationId)) {
      newExpanded.delete(variationId);
    } else {
      newExpanded.add(variationId);
    }
    setExpandedVariations(newExpanded);
    setActiveVariation(variationId);
  };

  const scrollToVariation = (variationId: string) => {
    const element = document.getElementById(`variation-${variationId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveVariation(variationId);
      setExpandedVariations(new Set([...expandedVariations, variationId]));
    }
  };

  const handleFeedback = (type: "positive" | "negative") => {
    setFeedback(type);
    toast.success(
      language === "en"
        ? "Thank you for your feedback!"
        : "आपकी प्रतिक्रिया के लिए धन्यवाद!",
    );
  };

  // Generate FAQ Schema
  const generateFAQSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question.en,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer.en,
        },
      })),
    };
  };

  // Generate Article Schema
  const generateArticleSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.title.en,
      description: data.subtitle.en,
      dateModified: data.updatedDate,
      author: {
        "@type": "Organization",
        name: "Sample Files",
      },
    };
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema()),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-blue-950 dark:to-violet-950">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
              <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/70 flex-wrap">
                <Link
                  href="/"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <Home className="w-4 h-4" />
                  {language === "en" ? "Home" : "होम"}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link
                  href={`${data.breadcrumb.category.slug}`}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {data.breadcrumb.category[language]}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link
                  href={`${data.breadcrumb.subcategory.slug}`}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {data.breadcrumb.subcategory[language]}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-900 dark:text-white font-medium">
                  {data.breadcrumb.template[language]}
                </span>
              </nav>
            </ol>
          </motion.nav>

          {/* <section className="bg-white dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
          <div className="container mx-auto px-4 max-w-7xl py-4">
            <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/70 flex-wrap">
              <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                {language === "en" ? "Home" : "होम"}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/applications" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {data.breadcrumb.category[language]}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/applications/job" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {data.breadcrumb.subcategory[language]}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 dark:text-white font-medium">
                {data.breadcrumb.template[language]}
              </span>
            </nav>
          </div>
        </section> */}

          {/* Title & Meta Section */}
          <section className="py-12 lg:py-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center mb-12"
              >
                <h1 className="text-4xl p-2 sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
                  {data.title[language]}
                </h1>

                <p className="text-xl text-slate-600 dark:text-white/70 mb-8 leading-relaxed">
                  {data.subtitle[language]}
                </p>

                {/* Meta Info Row */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-white/70">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>{data.category[language]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                    <span>
                      {language === "en" ? "Updated:" : "अपडेट:"}{" "}
                      {data.updatedDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>
                      {language === "en" ? "Variations:" : "विविधताएं:"}{" "}
                      {data.variations.length}+
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Variation Navigation */}

              {!singleTemplate && (
                <div className="max-w-4xl mx-auto mb-12">
                  <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-4 lg:p-6 shadow-lg">
                    <h2 className="text-lg font-medium text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      {language === "en"
                        ? "Available Formats"
                        : "उपलब्ध प्रारूप"}
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {data.variations.map((variation, index) => (
                        <button
                          key={variation.id}
                          onClick={() => scrollToVariation(variation.id)}
                          className={`px-4 py-3 rounded-xl text-left transition-all ${
                            activeVariation === variation.id
                              ? "bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border-2 border-cyan-500 dark:border-cyan-400"
                              : "bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-300 dark:hover:border-cyan-500/50"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                activeVariation === variation.id
                                  ? "bg-cyan-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-white/70"
                              }`}
                            >
                              {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p
                                className={`font-medium mb-1 truncate ${
                                  activeVariation === variation.id
                                    ? "text-cyan-700 dark:text-cyan-300"
                                    : "text-slate-900 dark:text-white"
                                }`}
                              >
                                {variation.title[language]}
                              </p>
                              <p className="text-xs text-slate-500 dark:text-white/50 truncate">
                                {variation.bestFor[language]}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* Template Variations */}
              <div className="max-w-6xl mx-auto space-y-12">
                {data.variations.map((variation, index) => {
                  const isExpanded = expandedVariations.has(variation.id);
                  const isCopied = copiedVariation === variation.id;

                  return (
                    <div
                      key={variation.id}
                      id={`variation-${variation.id}`}
                      className="scroll-mt-24"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg"
                      >
                        {/* Variation Header */}
                        <div className="p-6 lg:p-8 border-b border-slate-200 dark:border-white/10">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-medium">
                                  {index + 1}
                                </div>
                                <h2 className="text-2xl sm:text-3xl text-slate-900 dark:text-white">
                                  {variation.title[language]}
                                </h2>
                              </div>
                              <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                                {variation.description[language]}
                              </p>
                            </div>

                            <button
                              onClick={() => toggleVariation(variation.id)}
                              className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                            >
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5 text-slate-600 dark:text-white/70" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-slate-600 dark:text-white/70" />
                              )}
                            </button>
                          </div>

                          {/* Quick Actions */}
                          <div className="flex flex-wrap gap-2">
                            <Button
                              size="sm"
                              onClick={() => handleCopy(variation.id)}
                              className="bg-cyan-500 hover:bg-cyan-600 text-white"
                            >
                              {isCopied ? (
                                <Check className="w-4 h-4 mr-2" />
                              ) : (
                                <Copy className="w-4 h-4 mr-2" />
                              )}
                              {isCopied
                                ? language === "en"
                                  ? "Copied!"
                                  : "कॉपी हो गया!"
                                : language === "en"
                                  ? "Copy"
                                  : "कॉपी करें"}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                handleDownload(variation.id, "txt")
                              }
                            >
                              <Download className="w-4 h-4 mr-2" />
                              {language === "en" ? "Download" : "डाउनलोड"}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handlePrint(variation.id)}
                            >
                              <Printer className="w-4 h-4 mr-2" />
                              {language === "en" ? "Print" : "प्रिंट"}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleShare(variation.id)}
                            >
                              <Share2 className="w-4 h-4 mr-2" />
                              {language === "en" ? "Share" : "शेयर"}
                            </Button>
                            {/* {data.editorVariations && data.editorVariations.length > 0 && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setActiveVariation(variation.id);
                                setIsEditorOpen(true);
                              }}
                            >
                              <Edit className="w-4 h-4 mr-2" />
                              {language === "en" ? "Edit" : "संपादन"}
                            </Button>
                          )} */}
                          </div>
                        </div>

                        {/* Template Content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="p-6 lg:p-8">
                                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 lg:p-8 border border-slate-200 dark:border-white/10">
                                  <pre className="whitespace-pre-wrap font-mono text-sm text-slate-800 dark:text-white/90 leading-relaxed">
                                    {variation.content[language]}
                                  </pre>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Variation Comparison Table */}
              {!singleTemplate && (
                <div className="max-w-6xl mx-auto mt-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-lg"
                  >
                    <h2 className="text-3xl text-slate-900 dark:text-white mb-6">
                      {language === "en"
                        ? "Comparison of Formats"
                        : "प्रारूपों की तुलना"}
                    </h2>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-slate-200 dark:border-white/20">
                            <th className="text-left py-3 px-4 text-slate-900 dark:text-white font-medium">
                              {language === "en" ? "Variation" : "विविधता"}
                            </th>
                            <th className="text-left py-3 px-4 text-slate-900 dark:text-white font-medium">
                              {language === "en"
                                ? "Best For"
                                : "के लिए सर्वश्रेष्ठ"}
                            </th>
                            <th className="text-left py-3 px-4 text-slate-900 dark:text-white font-medium">
                              {language === "en" ? "Length" : "लंबाई"}
                            </th>
                            <th className="text-left py-3 px-4 text-slate-900 dark:text-white font-medium">
                              {language === "en" ? "Difficulty" : "कठिनाई"}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.variations.map((variation, index) => (
                            <tr
                              key={variation.id}
                              className="border-b border-slate-100 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                            >
                              <td className="py-4 px-4">
                                <button
                                  onClick={() =>
                                    scrollToVariation(variation.id)
                                  }
                                  className="text-cyan-600 dark:text-cyan-400 hover:underline text-left"
                                >
                                  {variation.title[language]}
                                </button>
                              </td>
                              <td className="py-4 px-4 text-slate-600 dark:text-white/70">
                                {variation.bestFor[language]}
                              </td>
                              <td className="py-4 px-4 text-slate-600 dark:text-white/70">
                                {variation.length[language]}
                              </td>
                              <td className="py-4 px-4">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    variation.difficulty.en === "Easy"
                                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                                      : variation.difficulty.en === "Moderate"
                                        ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300"
                                        : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                                  }`}
                                >
                                  {variation.difficulty[language]}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* How to Write Section */}
              <div className="max-w-4xl mx-auto mt-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-cyan-50 to-violet-50 dark:from-cyan-950/20 dark:to-violet-950/20 border border-cyan-200 dark:border-cyan-500/30 rounded-3xl p-8 lg:p-12"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                    <h2 className="text-3xl text-slate-900 dark:text-white">
                      {data.howToWrite.title[language]}
                    </h2>
                  </div>

                  <ul className="space-y-4">
                    {data.howToWrite.tips.map((tip, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-slate-700 dark:text-white/80 leading-relaxed"
                      >
                        <ChevronRight className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{tip.text[language]}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Related Templates */}
              <div className="max-w-6xl mx-auto mt-16">
                <h2 className="text-3xl text-slate-900 dark:text-white mb-8 text-center">
                  {language === "en"
                    ? "Related Templates"
                    : "संबंधित टेम्पलेट्स"}
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.relatedTemplates.map((template, index) => {
                    const Icons =
                      iconMap[template.icon as keyof typeof iconMap];
                    return (
                      <motion.a
                        key={index}
                        href={template.link}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-cyan-500/20 group-hover:to-violet-500/20 transition-all">
                          <Icons className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <h3 className="font-medium text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {template.title[language]}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                          {template.description[language]}
                        </p>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Related Blog Articles */}
              {/* <div className="max-w-6xl mx-auto mt-16">
              <h2 className="text-3xl text-slate-900 dark:text-white mb-8 text-center">
                {language === "en" ? "Related Articles" : "संबंधित लेख"}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {data.blogArticles.map((article, index) => (
                  <motion.a
                    key={index}
                    href={article.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-lg hover:border-violet-300 dark:hover:border-violet-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400 mb-3">
                      <BookOpen className="w-4 h-4" />
                      <span>{article.readTime[language]}</span>
                    </div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {article.title[language]}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed mb-3">
                      {article.excerpt[language]}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400 group-hover:gap-3 transition-all">
                      <span>{language === "en" ? "Read more" : "और पढ़ें"}</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div> */}

              {/* FAQ Section */}
              <div className="max-w-4xl mx-auto mt-16">
                <h2 className="text-3xl text-slate-900 dark:text-white mb-8 text-center">
                  {language === "en"
                    ? "Frequently Asked Questions"
                    : "अक्सर पूछे जाने वाले प्रश्न"}
                </h2>

                <div className="space-y-4">
                  {data.faqs.map((faq, index) => {
                    const [isOpen, setIsOpen] = useState(false);

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden"
                      >
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="w-full px-6 py-4 flex items-start gap-3 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                        >
                          <span className="text-slate-900 dark:text-white font-medium flex-1">
                            {faq.question[language]}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-slate-400 dark:text-white/40 flex-shrink-0 mt-0.5" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400 dark:text-white/40 flex-shrink-0 mt-0.5" />
                          )}
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="border-t border-slate-200 dark:border-white/10"
                            >
                              <div className="px-6 py-4 text-slate-600 dark:text-white/70 leading-relaxed">
                                {faq.answer[language]}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Feedback Section */}
              <div className="max-w-2xl mx-auto mt-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-8 text-center"
                >
                  <h3 className="text-xl text-slate-900 dark:text-white mb-6">
                    {language === "en"
                      ? "Was this page helpful?"
                      : "क्या यह पृष्ठ सहायक था?"}
                  </h3>

                  <div className="flex justify-center gap-4">
                    <Button
                      size="lg"
                      onClick={() => handleFeedback("positive")}
                      className={`${
                        feedback === "positive"
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                      } text-slate-900 dark:text-white`}
                    >
                      <ThumbsUp className="w-5 h-5 mr-2" />
                      {language === "en" ? "Yes" : "हां"}
                    </Button>
                    <Button
                      size="lg"
                      onClick={() => handleFeedback("negative")}
                      className={`${
                        feedback === "negative"
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                      } text-slate-900 dark:text-white`}
                    >
                      <ThumbsDown className="w-5 h-5 mr-2" />
                      {language === "en" ? "No" : "नहीं"}
                    </Button>
                  </div>

                  {feedback && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-sm text-slate-600 dark:text-white/70"
                    >
                      {language === "en"
                        ? "Thank you for your feedback! It helps us improve."
                        : "आपकी प्रतिक्रिया के लिए धन्यवाद! यह हमें बेहतर बनाने में मदद करती है।"}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              {/* Back to Category */}
              <div className="max-w-4xl mx-auto mt-16 text-center">
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${data.breadcrumb.category.en.toLowerCase()}`}>
                    <ChevronRight className="w-5 h-5 mr-2 rotate-180" />
                    {language === "en" ? "Back to" : "वापस जाएं"}{" "}
                    {data.breadcrumb.category[language]}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Template Editor Modal */}
      {data.editorVariations && data.editorVariations.length > 0 && (
        <TemplateEditorModal
          isOpen={isEditorOpen}
          onClose={() => setIsEditorOpen(false)}
          variations={data.editorVariations}
          defaultVariationId={activeVariation}
          language={language}
          templateTitle={data.title}
        />
      )}
    </>
  );
}
