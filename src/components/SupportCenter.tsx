/**
 * SUPPORT CENTER - Sample Files
 * Comprehensive help and support hub
 */
"use client"
import { useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  FileText,
  Edit3,
  Download,
  Sparkles,
  ArrowRight,
  HelpCircle,
  MessageCircle,
  BookOpen,
  Zap,
  AlertCircle,
  Info,
  Settings,
  Mail,
  Home,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface HelpTopic {
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  icon: React.ElementType;
}

interface HelpCategory {
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  icon: React.ElementType;
  color: string;
  topics: HelpTopic[];
}

const helpCategories: HelpCategory[] = [
  {
    title: { en: "Templates", hi: "टेम्पलेट्स" },
    description: {
      en: "Finding and using the right templates",
      hi: "सही टेम्पलेट्स खोजना और उपयोग करना",
    },
    icon: FileText,
    color: "cyan",
    topics: [
      {
        title: { en: "How to find templates", hi: "टेम्पलेट कैसे खोजें" },
        description: {
          en: "Browse categories or use search to find specific templates",
          hi: "विशिष्ट टेम्पलेट्स खोजने के लिए श्रेणियां ब्राउज़ करें या खोज का उपयोग करें",
        },
        icon: Search,
      },
      {
        title: { en: "Template formats", hi: "टेम्पलेट प्रारूप" },
        description: {
          en: "All templates are in text format, easily customizable",
          hi: "सभी टेम्पलेट्स टेक्स्ट फॉर्मेट में हैं, आसानी से अनुकूलन योग्य",
        },
        icon: FileText,
      },
      {
        title: {
          en: "Customizing templates",
          hi: "टेम्पलेट्स को अनुकूलित करना",
        },
        description: {
          en: "Replace placeholder text with your information",
          hi: "प्लेसहोल्डर टेक्स्ट को अपनी जानकारी से बदलें",
        },
        icon: Edit3,
      },
      {
        title: { en: "Template categories", hi: "टेम्पलेट श्रेणियां" },
        description: {
          en: "Applications, Letters, Certificates, Resumes, and more",
          hi: "आवेदन, पत्र, प्रमाण पत्र, रिज्यूमे, और अधिक",
        },
        icon: BookOpen,
      },
    ],
  },
  {
    title: { en: "Editing Issues", hi: "संपादन समस्याएं" },
    description: {
      en: "Troubleshooting editing and formatting",
      hi: "संपादन और स्वरूपण समस्या निवारण",
    },
    icon: Edit3,
    color: "violet",
    topics: [
      {
        title: { en: "Copy not working", hi: "कॉपी काम नहीं कर रहा" },
        description: {
          en: "Try using Ctrl+C or right-click to copy text",
          hi: "टेक्स्ट कॉपी करने के लिए Ctrl+C या राइट-क्लिक का उपयोग करें",
        },
        icon: AlertCircle,
      },
      {
        title: { en: "Format preservation", hi: "प्रारूप संरक्षण" },
        description: {
          en: "Paste into Word/Docs and reformat as needed",
          hi: "Word/Docs में पेस्ट करें और आवश्यकतानुसार पुन: स्वरूपित करें",
        },
        icon: Settings,
      },
      {
        title: {
          en: "Text not displaying",
          hi: "टेक्स्ट प्रदर्शित नहीं हो रहा",
        },
        description: {
          en: "Refresh page or try a different browser",
          hi: "पेज रीफ्रेश करें या एक अलग ब्राउज़र आज़माएं",
        },
        icon: Info,
      },
      {
        title: { en: "Mobile editing", hi: "मोबाइल संपादन" },
        description: {
          en: "Use mobile apps like Google Docs for better editing",
          hi: "बेहतर संपादन के लिए Google Docs जैसे मोबाइल ऐप्स का उपयोग करें",
        },
        icon: Zap,
      },
    ],
  },
  {
    title: { en: "PDF Download Issues", hi: "PDF डाउनलोड समस्याएं" },
    description: {
      en: "Converting and downloading as PDF",
      hi: "PDF के रूप में परिवर्तित और डाउनलोड करना",
    },
    icon: Download,
    color: "emerald",
    topics: [
      {
        title: { en: "Creating PDF files", hi: "PDF फाइलें बनाना" },
        description: {
          en: "Copy to Word/Docs, then export as PDF",
          hi: "Word/Docs में कॉपी करें, फिर PDF के रूप में निर्यात करें",
        },
        icon: Download,
      },
      {
        title: { en: "Download not starting", hi: "डाउनलोड शुरू नहीं हो रहा" },
        description: {
          en: "Check browser settings and popup blockers",
          hi: "ब्राउज़र सेटिंग्स और पॉपअप ब्लॉकर्स जांचें",
        },
        icon: AlertCircle,
      },
      {
        title: { en: "File format options", hi: "फ़ाइल प्रारूप विकल्प" },
        description: {
          en: "Download as .txt, then convert using any word processor",
          hi: ".txt के रूप में डाउनलोड करें, फिर किसी भी वर्ड प्रोसेसर का उपयोग करके कन्वर्ट करें",
        },
        icon: FileText,
      },
      {
        title: {
          en: "Opening downloaded files",
          hi: "डाउनलोड की गई फाइलें खोलना",
        },
        description: {
          en: "Use Notepad, Word, or any text editor",
          hi: "Notepad, Word, या कोई भी टेक्स्ट एडिटर उपयोग करें",
        },
        icon: BookOpen,
      },
    ],
  },
  {
    title: { en: "AI Writing Help", hi: "AI लेखन सहायता" },
    description: {
      en: "Getting assistance with content",
      hi: "सामग्री के साथ सहायता प्राप्त करना",
    },
    icon: Sparkles,
    color: "amber",
    topics: [
      {
        title: { en: "Template suggestions", hi: "टेम्पलेट सुझाव" },
        description: {
          en: "Use our templates as a starting point for your content",
          hi: "अपनी सामग्री के लिए प्रारंभिक बिंदु के रूप में हमारे टेम्पलेट्स का उपयोग करें",
        },
        icon: Sparkles,
      },
      {
        title: { en: "Improving your writing", hi: "अपने लेखन में सुधार" },
        description: {
          en: "Study our templates to learn professional formats",
          hi: "पेशेवर प्रारूप सीखने के लिए हमारे टेम्पलेट्स का अध्ययन करें",
        },
        icon: BookOpen,
      },
      {
        title: { en: "Tone and style", hi: "टोन और शैली" },
        description: {
          en: "Match the formality level of our templates",
          hi: "हमारे टेम्पलेट्स के औपचारिकता स्तर से मेल खाएं",
        },
        icon: Edit3,
      },
      {
        title: { en: "Language options", hi: "भाषा विकल्प" },
        description: {
          en: "Available in English and Hindi",
          hi: "अंग्रेजी और हिंदी में उपलब्ध",
        },
        icon: Zap,
      },
    ],
  },
];

const quickLinks = [
  {
    title: { en: "Getting Started", hi: "शुरुआत करना" },
    description: {
      en: "New to Sample Files? Start here",
      hi: "Sample Files में नए हैं? यहाँ से शुरू करें",
    },
    icon: Zap,
    link: "/about",
  },
  {
    title: { en: "Browse Templates", hi: "टेम्पलेट्स ब्राउज़ करें" },
    description: {
      en: "View all available templates",
      hi: "सभी उपलब्ध टेम्पलेट्स देखें",
    },
    icon: FileText,
    link: "/category/applications",
  },
  {
    title: { en: "FAQs", hi: "सामान्य प्रश्न" },
    description: {
      en: "Frequently asked questions",
      hi: "अक्सर पूछे जाने वाले प्रश्न",
    },
    icon: HelpCircle,
    link: "/faq",
  },
  {
    title: { en: "Contact Us", hi: "संपर्क करें" },
    description: {
      en: "Get personalized support",
      hi: "व्यक्तिगत सहायता प्राप्त करें",
    },
    icon: MessageCircle,
    link: "/contact",
  },
];

export function SupportCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const {language}=useLanguage();

  // Filter topics based on search
  const filteredCategories = helpCategories
    .map((category) => ({
      ...category,
      topics: category.topics.filter((topic) => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
          topic.title[language].toLowerCase().includes(query) ||
          topic.description[language].toLowerCase().includes(query) ||
          category.title[language].toLowerCase().includes(query)
        );
      }),
    }))
    .filter((category) => category.topics.length > 0);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-blue-950 dark:to-violet-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-20">
        <div className=" mx-auto max-w-6xl">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
              <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <Home className="w-4 h-4" />
              <Link href={"/"}> {language === "en" ? "Home" : "होम"}</Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-900 dark:text-white font-medium">
                  Support Center
                </span>
              </li>
            </ol>
          </motion.nav>
        </div>

        <div className="container mx-auto px-4 max-w-6xl lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm text-cyan-700 dark:text-cyan-300">
                {language === "en"
                  ? "We're Here to Help"
                  : "हम मदद के लिए यहां हैं"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
              {language === "en" ? "Support Center" : "सहायता केंद्र"}
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 dark:text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              {language === "en"
                ? "Find answers, explore resources, and get the help you need."
                : "उत्तर खोजें, संसाधनों का अन्वेषण करें, और आवश्यक सहायता प्राप्त करें।"}
            </p>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 dark:text-white/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    language === "en"
                      ? "How can we help you today?"
                      : "आज हम आपकी कैसे मदद कर सकते हैं?"
                  }
                  className="w-full pl-16 pr-6 py-5 text-lg bg-white dark:bg-white/5 border-2 border-slate-300 dark:border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 transition-all shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900 dark:text-white">
              {language === "en" ? "Help Categories" : "सहायता श्रेणियां"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/70 max-w-2xl mx-auto">
              {language === "en"
                ? "Browse by topic to find solutions quickly"
                : "त्वरित समाधान खोजने के लिए विषय के अनुसार ब्राउज़ करें"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              const colorClasses = {
                cyan: "from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500",
                violet:
                  "from-violet-500 to-violet-600 dark:from-violet-400 dark:to-violet-500",
                emerald:
                  "from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500",
                amber:
                  "from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500",
              }[category.color];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Category Header */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${colorClasses} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl mb-2 text-slate-900 dark:text-white">
                          {category.title[language]}
                        </h3>
                        <p className="text-slate-600 dark:text-white/70">
                          {category.description[language]}
                        </p>
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="space-y-3">
                      {category.topics.map((topic, topicIndex) => {
                        const TopicIcon = topic.icon;
                        return (
                          <motion.div
                            key={topicIndex}
                            whileHover={{ x: 4 }}
                            className="bg-slate-50 dark:bg-white/5 rounded-xl p-4 border border-slate-200/50 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all cursor-pointer group"
                          >
                            <div className="flex items-start gap-3">
                              <TopicIcon className="w-5 h-5 text-slate-400 dark:text-white/40 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <h4 className="font-medium text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                  {topic.title[language]}
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                                  {topic.description[language]}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-slate-300 dark:text-white/20 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all opacity-0 group-hover:opacity-100 flex-shrink-0 mt-1" />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {searchQuery && filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-slate-300 dark:text-white/20 mx-auto mb-4" />
              <h3 className="text-xl text-slate-900 dark:text-white mb-2">
                {language === "en"
                  ? "No results found"
                  : "कोई परिणाम नहीं मिला"}
              </h3>
              <p className="text-slate-600 dark:text-white/70 mb-6">
                {language === "en"
                  ? "Try different keywords or contact our support team"
                  : "विभिन्न कीवर्ड आज़माएं या हमारी सहायता टीम से संपर्क करें"}
              </p>
              <Button
                onClick={() => setSearchQuery("")}
                variant="outline"
                className="border-slate-300 dark:border-white/30"
              >
                {language === "en" ? "Clear Search" : "खोज साफ़ करें"}
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 lg:py-20 bg-white/50 dark:bg-white/5 backdrop-blur-xl border-y border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900 dark:text-white">
              {language === "en" ? "Quick Links" : "त्वरित लिंक"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/70 max-w-2xl mx-auto">
              {language === "en"
                ? "Jump to popular sections and resources"
                : "लोकप्रिय अनुभागों और संसाधनों पर जाएं"}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-cyan-500/20 group-hover:to-violet-500/20 transition-all">
                    <Icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="font-medium text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {link.title[language]}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                    {link.description[language]}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500 to-violet-600 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl sm:text-4xl mb-4">
              {language === "en" ? "Need More Help?" : "अधिक सहायता चाहिए?"}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "Our support team is ready to assist you with any questions or issues."
                : "हमारी सहायता टीम किसी भी प्रश्न या समस्या में आपकी सहायता के लिए तैयार है।"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-cyan-600 hover:bg-slate-100 shadow-lg px-8 py-6 text-lg"
              >
                <a href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  {language === "en"
                    ? "Contact Support"
                    : "सहायता से संपर्क करें"}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <a href="/faq">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  {language === "en" ? "View FAQs" : "FAQs देखें"}
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>aavedan.hub@gmail.com</span>
                </div>
                {/* <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 (800) 123-4567</span>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
