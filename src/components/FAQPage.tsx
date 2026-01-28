/**
 * FAQ PAGE - Aavedan Patra
 * Comprehensive FAQ page with accordion, search, and schema markup
 */
"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  Search,
  HelpCircle,
  FileText,
  Mail,
  Award,
  Download,
  Sparkles,
  Home,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQPageProps {
  language?: "en" | "hi";
}

interface FAQItem {
  question: { en: string; hi: string };
  answer: { en: string; hi: string };
}

interface FAQCategory {
  title: { en: string; hi: string };
  icon: React.ElementType;
  faqs: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: { en: "Applications", hi: "आवेदन" },
    icon: FileText,
    faqs: [
      {
        question: {
          en: "How do I write a job application?",
          hi: "मैं नौकरी का आवेदन कैसे लिखूं?",
        },
        answer: {
          en: "Start with your address and date, followed by the employer's details. Include a subject line, formal salutation, body explaining your qualifications and interest, and close with a professional sign-off. Use our job application templates for proper formatting.",
          hi: "अपने पते और तारीख से शुरू करें, उसके बाद नियोक्ता का विवरण। एक विषय पंक्ति, औपचारिक अभिवादन, अपनी योग्यता और रुचि बताने वाला मुख्य भाग शामिल करें।",
        },
      },
      {
        question: {
          en: "Can I use these templates for official applications?",
          hi: "क्या मैं इन टेम्पलेट्स का उपयोग आधिकारिक आवेदनों के लिए कर सकता हूं?",
        },
        answer: {
          en: "Yes, all our application templates follow standard professional formats accepted by schools, colleges, companies, and government offices. Just customize them with your specific details.",
          hi: "हां, हमारे सभी आवेदन टेम्पलेट्स मानक पेशेवर प्रारूपों का पालन करते हैं जो स्कूलों, कॉलेजों, कंपनियों और सरकारी कार्यालयों द्वारा स्वीकार किए जाते हैं।",
        },
      },
      {
        question: {
          en: "What's the difference between a job application and resume?",
          hi: "नौकरी आवेदन और रिज्यूमे में क्या अंतर है?",
        },
        answer: {
          en: "A job application is a formal letter expressing your interest in a specific position, while a resume is a comprehensive document listing your qualifications, experience, and skills. You typically submit both together.",
          hi: "नौकरी आवेदन एक औपचारिक पत्र है जो एक विशिष्ट पद में आपकी रुचि व्यक्त करता है, जबकि रिज्यूमे एक व्यापक दस्तावेज़ है।",
        },
      },
      {
        question: {
          en: "How do I request a leave application?",
          hi: "मैं छुट्टी का आवेदन कैसे करूं?",
        },
        answer: {
          en: "Address it to your supervisor or HR, clearly state the leave dates and reason, mention any pending work arrangements, and submit it well in advance. Browse our leave application templates for various scenarios.",
          hi: "इसे अपने पर्यवेक्षक या एचआर को संबोधित करें, स्पष्ट रूप से छुट्टी की तारीखें और कारण बताएं, कोई भी लंबित कार्य व्यवस्था का उल्लेख करें।",
        },
      },
    ],
  },
  {
    title: { en: "Letters", hi: "पत्र" },
    icon: Mail,
    faqs: [
      {
        question: {
          en: "What's the format for a formal letter?",
          hi: "औपचारिक पत्र का प्रारूप क्या है?",
        },
        answer: {
          en: "A formal letter includes: sender's address, date, recipient's address, subject line, salutation (Dear Sir/Madam), body content, formal closing (Yours sincerely), and signature. Maintain a professional tone throughout.",
          hi: "एक औपचारिक पत्र में शामिल हैं: प्रेषक का पता, तारीख, प्राप्तकर्ता का पता, विषय पंक्ति, अभिवादन, मुख्य सामग्री, औपचारिक समापन, और हस्ताक्षर।",
        },
      },
      {
        question: {
          en: "How to write a complaint letter effectively?",
          hi: "शिकायत पत्र प्रभावी ढंग से कैसे लिखें?",
        },
        answer: {
          en: "Be clear and specific about the issue, include relevant details (dates, order numbers, receipts), state your desired resolution, maintain a polite but firm tone, and set a reasonable deadline for response. Attach supporting documents.",
          hi: "मुद्दे के बारे में स्पष्ट और विशिष्ट रहें, प्रासंगिक विवरण शामिल करें, अपना वांछित समाधान बताएं, विनम्र लेकिन दृढ़ लहजा बनाए रखें।",
        },
      },
      {
        question: {
          en: "Can I write informal letters for official purposes?",
          hi: "क्या मैं आधिकारिक उद्देश्यों के लिए अनौपचारिक पत्र लिख सकता हूं?",
        },
        answer: {
          en: "No, always use formal letter format for official, business, or professional communications. Informal letters are suitable for friends, family, or casual correspondence only.",
          hi: "नहीं, आधिकारिक, व्यावसायिक या पेशेवर संचार के लिए हमेशा औपचारिक पत्र प्रारूप का उपयोग करें।",
        },
      },
      {
        question: {
          en: "How to write a resignation letter?",
          hi: "त्यागपत्र पत्र कैसे लिखें?",
        },
        answer: {
          en: "State your intention to resign clearly, mention your last working day (as per notice period), express gratitude for the opportunity, offer to help with transition, and keep it professional and positive. Avoid negative comments.",
          hi: "अपने इस्तीफे के इरादे को स्पष्ट रूप से बताएं, अपने अंतिम कार्य दिवस का उल्लेख करें, अवसर के लिए आभार व्यक्त करें।",
        },
      },
    ],
  },
  {
    title: { en: "Certificates", hi: "प्रमाण पत्र" },
    icon: Award,
    faqs: [
      {
        question: {
          en: "What information should an experience certificate contain?",
          hi: "अनुभव प्रमाण पत्र में क्या जानकारी होनी चाहिए?",
        },
        answer: {
          en: "Include employee name, designation, employment period, key responsibilities, performance summary, and company details with authorized signatory. It should be on company letterhead with official seal.",
          hi: "कर्मचारी का नाम, पदनाम, रोजगार अवधि, मुख्य जिम्मेदारियां, प्रदर्शन सारांश, और अधिकृत हस्ताक्षरकर्ता के साथ कंपनी विवरण शामिल करें।",
        },
      },
      {
        question: {
          en: "How to request a bonafide certificate from school?",
          hi: "स्कूल से bonafide प्रमाण पत्र का अनुरोध कैसे करें?",
        },
        answer: {
          en: "Write a formal application to your school principal stating the purpose (bank loan, passport, etc.), include your class, roll number, and academic year. Submit it to the school office with required documents.",
          hi: "अपने स्कूल प्रिंसिपल को एक औपचारिक आवेदन लिखें जिसमें उद्देश्य बताया जाए, अपनी कक्षा, रोल नंबर और शैक्षणिक वर्ष शामिल करें।",
        },
      },
      {
        question: {
          en: "Are digital certificates acceptable?",
          hi: "क्या डिजिटल प्रमाण पत्र स्वीकार्य हैं?",
        },
        answer: {
          en: "Yes, many institutions now accept digital certificates with digital signatures. However, some places still require physical copies with original signatures and seals. Check specific requirements with the requesting authority.",
          hi: "हां, कई संस्थान अब डिजिटल हस्ताक्षर के साथ डिजिटल प्रमाण पत्र स्वीकार करते हैं। हालांकि, कुछ स्थानों पर अभी भी मूल हस्ताक्षर की आवश्यकता है।",
        },
      },
      {
        question: {
          en: "Can I create my own certificates?",
          hi: "क्या मैं अपने प्रमाण पत्र बना सकता हूं?",
        },
        answer: {
          en: "Our templates are for requesting certificates from authorized authorities (schools, employers, etc.). Creating fake certificates is illegal. Use our formats to formally request genuine certificates from proper authorities.",
          hi: "हमारे टेम्पलेट्स अधिकृत अधिकारियों से प्रमाण पत्र का अनुरोध करने के लिए हैं। नकली प्रमाण पत्र बनाना गैरकानूनी है।",
        },
      },
    ],
  },
  {
    title: { en: "Templates & Usage", hi: "टेम्पलेट्स और उपयोग" },
    icon: FileText,
    faqs: [
      {
        question: {
          en: "Are all templates completely free?",
          hi: "क्या सभी टेम्पलेट्स पूरी तरह से मुफ्त हैं?",
        },
        answer: {
          en: "Yes, all 250+ templates on Aavedan Patra are 100% free to use. No registration, no hidden costs, no subscriptions. Copy, download, and use them as many times as you need.",
          hi: "हां, Aavedan Patra पर सभी 250+ टेम्पलेट्स 100% मुफ्त हैं। कोई पंजीकरण नहीं, कोई छिपी हुई लागत नहीं, कोई सदस्यता नहीं।",
        },
      },
      {
        question: {
          en: "Can I modify the templates?",
          hi: "क्या मैं टेम्पलेट्स को संशोधित कर सकता हूं?",
        },
        answer: {
          en: "Absolutely! Our templates are meant to be customized. Replace placeholder text with your information, adjust formatting as needed, and adapt the content to your specific situation. That's exactly what they're designed for.",
          hi: "बिल्कुल! हमारे टेम्पलेट्स को अनुकूलित करने के लिए बनाए गए हैं। प्लेसहोल्डर टेक्स्ट को अपनी जानकारी से बदलें।",
        },
      },
      {
        question: {
          en: "Do I need to give credit when using templates?",
          hi: "क्या टेम्पलेट्स का उपयोग करते समय मुझे क्रेडिट देना होगा?",
        },
        answer: {
          en: "No credit required! Use our templates freely for any personal, educational, or professional purpose. You don't need to mention Aavedan Patra or provide attribution.",
          hi: "कोई क्रेडिट आवश्यक नहीं! हमारे टेम्पलेट्स का किसी भी व्यक्तिगत, शैक्षिक या पेशेवर उद्देश्य के लिए स्वतंत्र रूप से उपयोग करें।",
        },
      },
      {
        question: {
          en: "Can I use templates for commercial purposes?",
          hi: "क्या मैं वाणिज्यिक उद्देश्यों के लिए टेम्पलेट्स का उपयोग कर सकता हूं?",
        },
        answer: {
          en: "Yes, you can use our templates for business and commercial purposes. However, you cannot resell or redistribute the templates themselves. Use them for your business documents, client communications, etc.",
          hi: "हां, आप हमारे टेम्पलेट्स का व्यावसायिक उद्देश्यों के लिए उपयोग कर सकते हैं। हालांकि, आप टेम्पलेट्स को पुनर्विक्रय या पुनर्वितरित नहीं कर सकते।",
        },
      },
    ],
  },
  {
    title: { en: "Downloads & Technical", hi: "डाउनलोड और तकनीकी" },
    icon: Download,
    faqs: [
      {
        question: {
          en: "How do I download templates?",
          hi: "मैं टेम्पलेट्स कैसे डाउनलोड करूं?",
        },
        answer: {
          en: "Click the 'Download' button on any template page to save it as a text file (.txt). You can also use the 'Copy' button to copy the content directly to your clipboard and paste it into any document editor.",
          hi: "किसी भी टेम्पलेट पेज पर 'डाउनलोड' बटन पर क्लिक करें। आप सामग्री को सीधे अपने क्लिपबोर्ड पर कॉपी करने के लिए 'कॉपी' बटन का भी उपयोग कर सकते हैं।",
        },
      },
      {
        question: {
          en: "Can I download templates as PDF?",
          hi: "क्या मैं टेम्पलेट्स को PDF के रूप में डाउनलोड कर सकता हूं?",
        },
        answer: {
          en: "Currently, templates download as text files. To create a PDF, copy the content into Microsoft Word, Google Docs, or any word processor, format as needed, then save/export as PDF. We're working on direct PDF downloads.",
          hi: "वर्तमान में, टेम्पलेट्स टेक्स्ट फ़ाइलों के रूप में डाउनलोड होते हैं। PDF बनाने के लिए, सामग्री को Microsoft Word में कॉपी करें।",
        },
      },
      {
        question: {
          en: "Why aren't templates opening on my phone?",
          hi: "टेम्पलेट्स मेरे फोन पर क्यों नहीं खुल रहे हैं?",
        },
        answer: {
          en: "Our website is fully mobile-responsive. If you're having issues, try updating your browser, clearing cache, or using a different browser. For downloaded files, ensure you have a text editor or document viewer app installed.",
          hi: "हमारी वेबसाइट पूरी तरह से मोबाइल-रिस्पॉन्सिव है। यदि आपको समस्या हो रही है, तो अपना ब्राउज़र अपडेट करने का प्रयास करें।",
        },
      },
      {
        question: {
          en: "Do I need to create an account?",
          hi: "क्या मुझे खाता बनाने की आवश्यकता है?",
        },
        answer: {
          en: "No account needed! Access all templates instantly without registration. We believe in keeping things simple and respecting your privacy. Just browse, copy, and use.",
          hi: "कोई खाता आवश्यक नहीं! पंजीकरण के बिना तुरंत सभी टेम्पलेट्स तक पहुंचें। हम चीजों को सरल रखने में विश्वास करते हैं।",
        },
      },
      {
        question: {
          en: "Can I access templates offline?",
          hi: "क्या मैं ऑफ़लाइन टेम्पलेट्स एक्सेस कर सकता हूं?",
        },
        answer: {
          en: "Once you download or copy a template, you can use it offline. However, browsing our template library requires an internet connection. We recommend bookmarking frequently used templates for quick access.",
          hi: "एक बार जब आप टेम्पलेट डाउनलोड या कॉपी कर लेते हैं, तो आप इसे ऑफ़लाइन उपयोग कर सकते हैं। हमारी टेम्पलेट लाइब्रेरी ब्राउज़ करने के लिए इंटरनेट की आवश्यकता होती है।",
        },
      },
    ],
  },
];

export function FAQPage() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
const {language}=useLanguage()
  // Filter FAQs based on search query
  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter((faq) => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
          faq.question[language].toLowerCase().includes(query) ||
          faq.answer[language].toLowerCase().includes(query)
        );
      }),
    }))
    .filter((category) => category.faqs.length > 0);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setExpandedFAQ(expandedFAQ === key ? null : key);
  };

  // Generate FAQ Schema for SEO
  const generateFAQSchema = () => {
    const faqItems = faqCategories.flatMap((category) =>
      category.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question.en,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer.en,
        },
      }))
    );

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems,
    };
  };

  return (
    <>
      {/* FAQ Schema - Hidden for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />

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
                    FAQ
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
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm text-cyan-700 dark:text-cyan-300">
                  {language === "en" ? "Help Center" : "सहायता केंद्र"}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
                {language === "en"
                  ? "Frequently Asked Questions"
                  : "अक्सर पूछे जाने वाले प्रश्न"}
              </h1>

              <p className="text-xl sm:text-2xl text-slate-600 dark:text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                {language === "en"
                  ? "Find quick answers to common questions about templates, formats, and usage."
                  : "टेम्पलेट्स, प्रारूपों और उपयोग के बारे में सामान्य प्रश्नों के त्वरित उत्तर खोजें।"}
              </p>

              {/* Search Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mx-auto mb-12"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-white/40" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      language === "en"
                        ? "Search for answers..."
                        : "उत्तर खोजें..."
                    }
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 transition-all"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6">
              {filteredCategories.map((category, categoryIndex) => {
                const Icon = category.icon;
                const isExpanded = expandedCategory === categoryIndex;

                return (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.1 }}
                    className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg"
                  >
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(categoryIndex)}
                      className="w-full px-6 sm:px-8 py-6 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <h2 className="flex-1 text-left text-xl sm:text-2xl text-slate-900 dark:text-white">
                        {category.title[language]}
                      </h2>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500 dark:text-white/50">
                          {category.faqs.length}{" "}
                          {language === "en" ? "questions" : "प्रश्न"}
                        </span>
                        <ChevronRight
                          className={`w-5 h-5 text-slate-400 dark:text-white/40 transition-transform ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* FAQ Items */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-slate-200 dark:border-white/10"
                        >
                          <div className="p-4 sm:p-6 space-y-3">
                            {category.faqs.map((faq, faqIndex) => {
                              const faqKey = `${categoryIndex}-${faqIndex}`;
                              const isFAQExpanded = expandedFAQ === faqKey;

                              return (
                                <div
                                  key={faqIndex}
                                  className="bg-slate-50 dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/10"
                                >
                                  <button
                                    onClick={() =>
                                      toggleFAQ(categoryIndex, faqIndex)
                                    }
                                    className="w-full px-5 py-4 flex items-start gap-3 text-left hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                                  >
                                    <HelpCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span className="flex-1 font-medium text-slate-900 dark:text-white">
                                      {faq.question[language]}
                                    </span>
                                    <ChevronRight
                                      className={`w-5 h-5 text-slate-400 dark:text-white/40 transition-transform flex-shrink-0 ${
                                        isFAQExpanded ? "rotate-90" : ""
                                      }`}
                                    />
                                  </button>

                                  <AnimatePresence>
                                    {isFAQExpanded && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="border-t border-slate-200/50 dark:border-white/10"
                                      >
                                        <div className="px-5 py-4 pl-12 text-slate-600 dark:text-white/70 leading-relaxed">
                                          {faq.answer[language]}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* No Results Message */}
            {searchQuery && filteredCategories.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <HelpCircle className="w-16 h-16 text-slate-300 dark:text-white/20 mx-auto mb-4" />
                <h3 className="text-xl text-slate-900 dark:text-white mb-2">
                  {language === "en"
                    ? "No results found"
                    : "कोई परिणाम नहीं मिला"}
                </h3>
                <p className="text-slate-600 dark:text-white/70 mb-6">
                  {language === "en"
                    ? "Try different keywords or browse all categories"
                    : "विभिन्न कीवर्ड आज़माएं या सभी श्रेणियां ब्राउज़ करें"}
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

        {/* Contact Support CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-cyan-500/10 dark:from-cyan-400/10 dark:via-violet-400/10 dark:to-cyan-400/10 rounded-3xl p-12 text-center border border-cyan-200/50 dark:border-cyan-500/30"
            >
              <MessageCircle className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900 dark:text-white">
                {language === "en"
                  ? "Still Have Questions?"
                  : "अभी भी प्रश्न हैं?"}
              </h2>
              <p className="text-lg text-slate-600 dark:text-white/70 mb-8 max-w-2xl mx-auto">
                {language === "en"
                  ? "Can't find what you're looking for? Our support team is here to help you with any questions."
                  : "आप जो खोज रहे हैं वह नहीं मिल रहा है? हमारी सहायता टीम किसी भी प्रश्न में आपकी सहायता के लिए यहां है।"}
              </p>

              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white shadow-lg shadow-violet-500/30 px-8 py-6 text-lg"
              >
                <a href="/contact-us">
                  {language === "en"
                    ? "Contact Support"
                    : "सहायता से संपर्क करें"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
