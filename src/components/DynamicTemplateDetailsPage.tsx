import { useState } from "react";
import { motion } from "motion/react";
import {
  ChevronRight,
  Copy,
  Download,
  Share2,
  Printer,
  Check,
  Calendar,
  User,
  FolderOpen,
  Home,
  ArrowRight,
  Lightbulb,
  HelpCircle,
  ThumbsUp,
  ThumbsDown,
  BookOpen,
  Clock,
  FileText,
  Tag,
} from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
export interface TemplateDetailData {
  // Basic Info
  title: { en: string; hi: string };
  category: { en: string; hi: string };
  categorySlug: string;
  subcategory: { en: string; hi: string };
  subcategorySlug: string;

  // Meta Info
  updatedAt: string;
  readingTime: string;
  views: string;

  // Description
  description: { en: string; hi: string };

  // Main Template Content
  templateContent: { en: string; hi: string };

  // Writing Tips
  tips: Array<{ en: string; hi: string }>;

  // Related Templates
  relatedTemplates: Array<{
    title: { en: string; hi: string };
    category: { en: string; hi: string };
    url: string;
  }>;

  // Related Blog Articles
  relatedBlogs: Array<{
    title: { en: string; hi: string };
    excerpt: { en: string; hi: string };
    readTime: string;
    url: string;
  }>;

  // FAQs
  faqs: Array<{
    question: { en: string; hi: string };
    answer: { en: string; hi: string };
  }>;
}
interface DynamicTemplateDetailsPageProps {
  data: TemplateDetailData;
  language: "en" | "hi";
}

export function DynamicTemplateDetailsPage({
  data,
  language,
}: DynamicTemplateDetailsPageProps) {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.templateContent[language]);
      setCopied(true);
      toast.success(
        language === "en" ? "Template copied!" : "टेम्पलेट कॉपी हो गया!"
      );
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error(language === "en" ? "Failed to copy" : "कॉपी करने में विफल");
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([data.templateContent[language]], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${data.title[language]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success(
      language === "en" ? "Download started!" : "डाउनलोड शुरू हो गया!"
    );
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: data.title[language],
          text: data.description[language],
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.success(language === "en" ? "Link copied!" : "लिंक कॉपी हो गया!");
    }
  };

  const handlePrint = () => {
    window.print();
    toast.success(
      language === "en"
        ? "Opening print dialog..."
        : "प्रिंट डायलॉग खोल रहे हैं..."
    );
  };

  const handleFeedback = (type: "up" | "down") => {
    setFeedback(type);
    toast.success(
      language === "en"
        ? "Thank you for your feedback!"
        : "आपकी प्रतिक्रिया के लिए धन्यवाद!"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-blue-950 dark:to-violet-950 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <ol className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60 flex-wrap">
            <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
              <Home className="w-4 h-4" />
              <a href="/">{language === "en" ? "Home" : "होम"}</a>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <a
                href={`/${data.categorySlug}`}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {data.category[language]}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <a
                href={`/${data.categorySlug}/${data.subcategorySlug}`}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {data.subcategory[language]}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 dark:text-white font-medium">
                {data.title[language]}
              </span>
            </li>
          </ol>
        </motion.nav>

        {/* Title & Meta Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
            {data.title[language]}
          </h1>
          <p className="text-lg text-slate-600 dark:text-white/70 mb-6 leading-relaxed">
            {data.description[language]}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-white/60">
            <div className="flex items-center gap-2">
              <FolderOpen className="w-4 h-4" />
              <span>{data.category[language]}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-400 dark:bg-white/40" />
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {language === "en" ? "Updated" : "अपडेट"}: {data.updatedAt}
              </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-400 dark:bg-white/40" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{data.readingTime}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-400 dark:bg-white/40" />
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>
                {data.views} {language === "en" ? "views" : "व्यू"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleCopy}
              className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white shadow-lg shadow-violet-500/30"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  {language === "en" ? "Copied!" : "कॉपी हो गया!"}
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  {language === "en" ? "Copy Text" : "टेक्स्ट कॉपी करें"}
                </>
              )}
            </Button>

            <Button
              onClick={handleDownload}
              variant="outline"
              className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <Download className="w-4 h-4 mr-2" />
              {language === "en" ? "Download" : "डाउनलोड"}
            </Button>

            <Button
              onClick={handleShare}
              variant="outline"
              className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <Share2 className="w-4 h-4 mr-2" />
              {language === "en" ? "Share" : "शेयर"}
            </Button>

            <Button
              onClick={handlePrint}
              variant="outline"
              className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <Printer className="w-4 h-4 mr-2" />
              {language === "en" ? "Print" : "प्रिंट"}
            </Button>
          </div>
        </motion.div>

        {/* Template Preview Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] shadow-2xl mb-8 overflow-hidden print:shadow-none print:border-slate-300"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-cyan-500/10 dark:from-cyan-400/10 dark:via-violet-400/10 dark:to-cyan-400/10 px-6 py-4 border-b border-slate-200/50 dark:border-white/10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5" />
              {language === "en" ? "Template Format" : "टेम्पलेट प्रारूप"}
            </h2>
          </div>

          <div className="p-8 lg:p-12">
            <div className="template-content space-y-4 text-slate-900 dark:text-white/90">
              <pre className="whitespace-pre-wrap font-sans leading-relaxed text-base text-slate-700 dark:text-white/80">
                {data.templateContent[language]}
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 sm:p-8 mb-8"
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-500" />
            {language === "en"
              ? `Tips to Write a ${data.subcategory[language]}`
              : `${data.subcategory[language]} लिखने के सुझाव`}
          </h3>

          <ul className="space-y-3">
            {data.tips.map((tip, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 text-slate-600 dark:text-white/70"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    {index + 1}
                  </span>
                </div>
                <span className="leading-relaxed">{tip[language]}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Related Templates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Tag className="w-6 h-6 text-violet-500" />
            {language === "en"
              ? `Similar ${data.subcategory[language]} Samples`
              : `समान ${data.subcategory[language]} नमूने`}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.relatedTemplates.map((template, index) => (
              <motion.a
                key={index}
                href={template.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[16px] p-5 hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {template.title[language]}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-white/60">
                      {template.category[language]}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 dark:text-white/40 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Related Blog Articles */}
        {data.relatedBlogs && data.relatedBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-500" />
              {language === "en"
                ? "Helpful Writing Guides"
                : "उपयोगी लेखन गाइड"}
            </h3>

            <div className="grid lg:grid-cols-2 gap-6">
              {data.relatedBlogs.map((blog, index) => (
                <motion.a
                  key={index}
                  href={blog.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10 transition-all"
                >
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {blog.title[language]}
                  </h4>
                  <p className="text-slate-600 dark:text-white/70 mb-3 leading-relaxed line-clamp-2">
                    {blog.excerpt[language]}
                  </p>
                  <span className="text-sm text-slate-500 dark:text-white/50 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blog.readTime}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* FAQ Section */}
        {data.faqs && data.faqs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 sm:p-8 mb-8"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-violet-500" />
              {language === "en"
                ? "Frequently Asked Questions"
                : "अक्सर पूछे जाने वाले प्रश्न"}
            </h3>

            <div className="space-y-4">
              {data.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="border border-slate-200/50 dark:border-white/10 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium text-slate-900 dark:text-white">
                      {faq.question[language]}
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 text-slate-400 dark:text-white/40 transition-transform flex-shrink-0 ${
                        expandedFaq === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 py-4 bg-slate-50 dark:bg-white/5 border-t border-slate-200/50 dark:border-white/10"
                    >
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                        {faq.answer[language]}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Feedback Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-cyan-50 via-violet-50 to-cyan-50 dark:from-cyan-950/20 dark:via-violet-950/20 dark:to-cyan-950/20 border border-cyan-200 dark:border-cyan-500/30 rounded-[20px] p-8 mb-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            {language === "en"
              ? "Was this template helpful?"
              : "क्या यह टेम्पलेट उपयोगी था?"}
          </h3>
          <p className="text-slate-600 dark:text-white/70 mb-6">
            {language === "en"
              ? "Your feedback helps us improve our templates"
              : "आपकी प्रतिक्रिया हमें अपने टेम्पलेट को बेहतर बनाने में मदद करती है"}
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={() => handleFeedback("up")}
              variant="outline"
              className={`transition-all ${
                feedback === "up"
                  ? "bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600"
                  : "border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              <ThumbsUp className="w-4 h-4 mr-2" />
              {language === "en" ? "Helpful" : "उपयोगी"}
            </Button>

            <Button
              onClick={() => handleFeedback("down")}
              variant="outline"
              className={`transition-all ${
                feedback === "down"
                  ? "bg-rose-500 text-white border-rose-500 hover:bg-rose-600"
                  : "border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              <ThumbsDown className="w-4 h-4 mr-2" />
              {language === "en" ? "Not Helpful" : "उपयोगी नहीं"}
            </Button>
          </div>
        </motion.div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-center"
        >
          <a
            href={`/${data.categorySlug}`}
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors font-medium"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            {language === "en"
              ? `← Back to ${data.category[language]}`
              : `${data.category[language]} पर वापस जाएं ←`}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
