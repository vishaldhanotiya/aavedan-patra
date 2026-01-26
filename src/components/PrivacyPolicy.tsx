/**
 * PRIVACY POLICY - Aavedan Patra
 * Legal-compliant privacy policy with sticky navigation
 */
"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Shield,
  FileText,
  Lock,
  Eye,
  Cookie,
  UserCheck,
  Mail,
  Calendar,
  ChevronRight,
  CheckCircle2,
  Home,
} from "lucide-react";
import Link from "next/link";

interface PrivacyPolicyProps {
  language?: "en" | "hi";
}

interface Section {
  id: string;
  title: { en: string; hi: string };
  icon: React.ElementType;
}

const sections: Section[] = [
  {
    id: "introduction",
    title: { en: "Introduction", hi: "परिचय" },
    icon: FileText,
  },
  {
    id: "data-collection",
    title: { en: "Data We Collect", hi: "हम जो डेटा एकत्र करते हैं" },
    icon: Eye,
  },
  {
    id: "data-usage",
    title: { en: "How We Use Data", hi: "हम डेटा का उपयोग कैसे करते हैं" },
    icon: Lock,
  },
  {
    id: "cookies",
    title: { en: "Cookies & Tracking", hi: "कुकीज़ और ट्रैकिंग" },
    icon: Cookie,
  },
  {
    id: "user-rights",
    title: { en: "Your Rights", hi: "आपके अधिकार" },
    icon: UserCheck,
  },
  {
    id: "data-protection",
    title: { en: "Data Protection", hi: "डेटा सुरक्षा" },
    icon: Shield,
  },
  { id: "contact", title: { en: "Contact Us", hi: "संपर्क करें" }, icon: Mail },
];

export function PrivacyPolicy({ language = "en" }: PrivacyPolicyProps) {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const effectiveDate = "November 21, 2024";

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
                  Privacy Policy
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
              <Shield className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm text-cyan-700 dark:text-cyan-300">
                {language === "en"
                  ? "Your Privacy Matters"
                  : "आपकी गोपनीयता मायने रखती है"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
              {language === "en" ? "Privacy Policy" : "गोपनीयता नीति"}
            </h1>

            <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-white/70 mb-4">
              <Calendar className="w-5 h-5" />
              <p className="text-lg">
                {language === "en" ? "Effective Date:" : "प्रभावी तिथि:"}{" "}
                <strong>{effectiveDate}</strong>
              </p>
            </div>

            <p className="text-lg text-slate-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              {language === "en"
                ? "This Privacy Policy explains how Aavedan Patra collects, uses, and protects your personal information."
                : "यह गोपनीयता नीति बताती है कि Aavedan Patra आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और सुरक्षित करता है।"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sticky Sidebar - Table of Contents */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-lg">
                  <h2 className="text-lg font-medium text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    {language === "en" ? "Table of Contents" : "विषय सूची"}
                  </h2>

                  <nav className="space-y-1">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      const isActive = activeSection === section.id;

                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                            isActive
                              ? "bg-gradient-to-r from-cyan-500/10 to-violet-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-200/50 dark:border-cyan-500/30"
                              : "text-slate-600 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/5"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 flex-shrink-0 ${
                              isActive ? "text-cyan-600 dark:text-cyan-400" : ""
                            }`}
                          />
                          <span className="text-sm flex-1">
                            {section.title[language]}
                          </span>
                          {isActive && (
                            <ChevronRight className="w-4 h-4 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </nav>

                  {/* Quick Contact */}
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10">
                    <p className="text-xs text-slate-500 dark:text-white/50 mb-3">
                      {language === "en" ? "Have questions?" : "प्रश्न हैं?"}
                    </p>
                    <a
                      href="/contact"
                      className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <Mail className="w-4 h-4" />
                      {language === "en" ? "Contact Us" : "संपर्क करें"}
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl">
              <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 lg:p-12 shadow-lg">
                {/* Introduction */}
                <section id="introduction" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en" ? "1. Introduction" : "1. परिचय"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                        {language === "en"
                          ? "Welcome to Aavedan Patra. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights."
                          : "Aavedan Patra में आपका स्वागत है। हम आपकी गोपनीयता का सम्मान करते हैं और आपके व्यक्तिगत डेटा की सुरक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति आपको बताएगी कि जब आप हमारी वेबसाइट पर आते हैं तो हम आपके व्यक्तिगत डेटा की देखभाल कैसे करते हैं।"}
                      </p>
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                        {language === "en"
                          ? "Aavedan Patra is a free template resource website. We do not collect sensitive personal information, and we do not sell your data to third parties."
                          : "Aavedan Patra एक मुफ्त टेम्पलेट संसाधन वेबसाइट है। हम संवेदनशील व्यक्तिगत जानकारी एकत्र नहीं करते हैं, और हम आपके डेटा को तीसरे पक्ष को नहीं बेचते हैं।"}
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Data We Collect */}
                <section id="data-collection" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500/10 to-violet-600/10 rounded-xl flex items-center justify-center">
                        <Eye className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "2. Data We Collect"
                          : "2. हम जो डेटा एकत्र करते हैं"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                        {language === "en"
                          ? "We may collect, use, store and transfer different kinds of data about you:"
                          : "हम आपके बारे में विभिन्न प्रकार के डेटा एकत्र, उपयोग, संग्रहीत और स्थानांतरित कर सकते हैं:"}
                      </p>

                      <div className="space-y-4">
                        {[
                          {
                            title: { en: "Usage Data", hi: "उपयोग डेटा" },
                            desc: {
                              en: "Information about how you use our website, products and services (pages visited, time spent, clicks, etc.)",
                              hi: "हमारी वेबसाइट, उत्पादों और सेवाओं का उपयोग कैसे करते हैं इसके बारे में जानकारी",
                            },
                          },
                          {
                            title: { en: "Technical Data", hi: "तकनीकी डेटा" },
                            desc: {
                              en: "IP address, browser type, device information, operating system, and other technical details",
                              hi: "आईपी पता, ब्राउज़र प्रकार, डिवाइस जानकारी, ऑपरेटिंग सिस्टम और अन्य तकनीकी विवरण",
                            },
                          },
                          {
                            title: {
                              en: "Analytics Data",
                              hi: "विश्लेषण डेटा",
                            },
                            desc: {
                              en: "Data collected through cookies and analytics tools to improve our services",
                              hi: "हमारी सेवाओं को बेहतर बनाने के लिए कुकीज़ और विश्लेषण उपकरणों के माध्यम से एकत्र किया गया डेटा",
                            },
                          },
                          {
                            title: { en: "Contact Data", hi: "संपर्क डेटा" },
                            desc: {
                              en: "Email address and message content if you contact us through our contact form",
                              hi: "ईमेल पता और संदेश सामग्री यदि आप हमारे संपर्क फॉर्म के माध्यम से हमसे संपर्क करते हैं",
                            },
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-3 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200/50 dark:border-white/10"
                          >
                            <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                                {item.title[language]}
                              </h3>
                              <p className="text-sm text-slate-600 dark:text-white/70">
                                {item.desc[language]}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* How We Use Data */}
                <section id="data-usage" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-xl flex items-center justify-center">
                        <Lock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "3. How We Use Your Data"
                          : "3. हम आपके डेटा का उपयोग कैसे करते हैं"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                        {language === "en"
                          ? "We use your data for the following purposes:"
                          : "हम आपके डेटा का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:"}
                      </p>

                      <ul className="space-y-3">
                        {[
                          {
                            en: "To provide and maintain our service",
                            hi: "हमारी सेवा प्रदान करने और बनाए रखने के लिए",
                          },
                          {
                            en: "To improve user experience and website functionality",
                            hi: "उपयोगकर्ता अनुभव और वेबसाइट कार्यक्षमता में सुधार करने के लिए",
                          },
                          {
                            en: "To analyze website usage and trends",
                            hi: "वेबसाइट उपयोग और रुझानों का विश्लेषण करने के लिए",
                          },
                          {
                            en: "To respond to your inquiries and support requests",
                            hi: "आपकी पूछताछ और सहायता अनुरोधों का जवाब देने के लिए",
                          },
                          {
                            en: "To detect and prevent technical issues",
                            hi: "तकनीकी समस्याओं का पता लगाने और रोकने के लिए",
                          },
                          {
                            en: "To comply with legal obligations",
                            hi: "कानूनी दायित्वों का पालन करने के लिए",
                          },
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex gap-3 text-slate-600 dark:text-white/70"
                          >
                            <ChevronRight className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{item[language]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </section>

                {/* Cookies */}
                <section id="cookies" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-xl flex items-center justify-center">
                        <Cookie className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "4. Cookies & Tracking"
                          : "4. कुकीज़ और ट्रैकिंग"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                        {language === "en"
                          ? "We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier."
                          : "हम हमारी वेबसाइट पर गतिविधि को ट्रैक करने और कुछ जानकारी संग्रहीत करने के लिए कुकीज़ और समान ट्रैकिंग तकनीकों का उपयोग करते हैं।"}
                      </p>

                      <div className="bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-500/30 rounded-xl p-6 my-6">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-3">
                          {language === "en"
                            ? "Types of Cookies We Use:"
                            : "हम जिन कुकीज़ का उपयोग करते हैं:"}
                        </h3>
                        <ul className="space-y-2 text-sm">
                          {[
                            {
                              en: "Essential Cookies: Necessary for website functionality",
                              hi: "आवश्यक कुकीज़: वेबसाइट कार्यक्षमता के लिए आवश्यक",
                            },
                            {
                              en: "Analytics Cookies: Help us understand website usage",
                              hi: "विश्लेषण कुकीज़: हमें वेबसाइट उपयोग को समझने में मदद करती हैं",
                            },
                            {
                              en: "Preference Cookies: Remember your settings (e.g., dark mode)",
                              hi: "वरीयता कुकीज़: आपकी सेटिंग्स को याद रखती हैं",
                            },
                          ].map((item, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-slate-700 dark:text-white/80"
                            >
                              <ChevronRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span>{item[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                        {language === "en"
                          ? "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of our website may not function properly without cookies."
                          : "आप अपने ब्राउज़र को सभी कुकीज़ को अस्वीकार करने या जब कोई कुकी भेजी जा रही है तो संकेत देने के लिए निर्देश दे सकते हैं।"}
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* User Rights */}
                <section id="user-rights" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500/10 to-violet-600/10 rounded-xl flex items-center justify-center">
                        <UserCheck className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "5. Your Rights"
                          : "5. आपके अधिकार"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                        {language === "en"
                          ? "You have the following rights regarding your personal data:"
                          : "आपके पास अपने व्यक्तिगत डेटा के संबंध में निम्नलिखित अधिकार हैं:"}
                      </p>

                      <div className="grid gap-4">
                        {[
                          {
                            title: {
                              en: "Right to Access",
                              hi: "पहुंच का अधिकार",
                            },
                            desc: {
                              en: "Request copies of your personal data",
                              hi: "अपने व्यक्तिगत डेटा की प्रतियां अनुरोध करें",
                            },
                          },
                          {
                            title: {
                              en: "Right to Rectification",
                              hi: "सुधार का अधिकार",
                            },
                            desc: {
                              en: "Request correction of inaccurate data",
                              hi: "गलत डेटा के सुधार का अनुरोध करें",
                            },
                          },
                          {
                            title: {
                              en: "Right to Erasure",
                              hi: "मिटाने का अधिकार",
                            },
                            desc: {
                              en: "Request deletion of your personal data",
                              hi: "अपने व्यक्तिगत डेटा को हटाने का अनुरोध करें",
                            },
                          },
                          {
                            title: {
                              en: "Right to Object",
                              hi: "आपत्ति का अधिकार",
                            },
                            desc: {
                              en: "Object to processing of your data",
                              hi: "अपने डेटा की प्रोसेसिंग पर आपत्ति करें",
                            },
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-slate-50 dark:bg-white/5 p-5 rounded-xl border border-slate-200/50 dark:border-white/10"
                          >
                            <h3 className="font-medium text-slate-900 dark:text-white mb-2">
                              {item.title[language]}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-white/70">
                              {item.desc[language]}
                            </p>
                          </div>
                        ))}
                      </div>

                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mt-6">
                        {language === "en"
                          ? "To exercise any of these rights, please contact us using the information provided in the Contact Us section."
                          : "इन अधिकारों में से किसी का प्रयोग करने के लिए, कृपया संपर्क करें अनुभाग में दी गई जानकारी का उपयोग करके हमसे संपर्क करें।"}
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Data Protection */}
                <section id="data-protection" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "6. Data Protection"
                          : "6. डेटा सुरक्षा"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                        {language === "en"
                          ? "The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage."
                          : "आपके डेटा की सुरक्षा हमारे लिए महत्वपूर्ण है। हम अनधिकृत या गैरकानूनी प्रोसेसिंग, आकस्मिक नुकसान, विनाश या क्षति के खिलाफ आपकी व्यक्तिगत जानकारी की रक्षा के लिए उपयुक्त तकनीकी और संगठनात्मक उपाय लागू करते हैं।"}
                      </p>

                      <div className="bg-gradient-to-br from-cyan-50 to-violet-50 dark:from-cyan-950/20 dark:to-violet-950/20 border border-cyan-200 dark:border-cyan-500/30 rounded-xl p-6 my-6">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                          {language === "en"
                            ? "Security Measures:"
                            : "सुरक्षा उपाय:"}
                        </h3>
                        <ul className="space-y-2 text-sm">
                          {[
                            {
                              en: "Secure HTTPS encryption for all data transmission",
                              hi: "सभी डेटा ट्रांसमिशन के लिए सुरक्षित HTTPS एन्क्रिप्शन",
                            },
                            {
                              en: "Regular security audits and updates",
                              hi: "नियमित सुरक्षा ऑडिट और अपडेट",
                            },
                            {
                              en: "Limited access to personal data",
                              hi: "व्यक्तिगत डेटा तक सीमित पहुंच",
                            },
                            {
                              en: "No storage of sensitive payment information",
                              hi: "संवेदनशील भुगतान जानकारी का कोई संग्रहण नहीं",
                            },
                          ].map((item, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-slate-700 dark:text-white/80"
                            >
                              <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span>{item[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                        {language === "en"
                          ? "However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security."
                          : "हालांकि, इंटरनेट पर ट्रांसमिशन या इलेक्ट्रॉनिक स्टोरेज की कोई भी विधि 100% सुरक्षित नहीं है।"}
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Contact */}
                <section id="contact" className="scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en" ? "7. Contact Us" : "7. संपर्क करें"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                        {language === "en"
                          ? "If you have any questions about this Privacy Policy or our data practices, please contact us:"
                          : "यदि आपके पास इस गोपनीयता नीति या हमारे डेटा प्रथाओं के बारे में कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:"}
                      </p>

                      <div className="bg-gradient-to-br from-cyan-500 to-violet-600 rounded-2xl p-8 text-white">
                        <h3 className="text-xl font-medium mb-6">
                          Aavedan Patra
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-90" />
                            <div>
                              <p className="font-medium mb-1">
                                {language === "en" ? "Email" : "ईमेल"}
                              </p>
                              <a
                                href="mailto:aavedan.hub@gmail.com"
                                className="opacity-90 hover:opacity-100 underline"
                              >
                                aavedan.hub@gmail.com
                              </a>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <FileText className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-90" />
                            <div>
                              <p className="font-medium mb-1">
                                {language === "en" ? "Address" : "पता"}
                              </p>
                              <p className="opacity-90">
                                {language === "en"
                                  ? "Aavedan Patra Headquarters, New Delhi, India"
                                  : "Aavedan Patra मुख्यालय, नई दिल्ली, भारत"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-slate-500 dark:text-white/50 mt-8">
                        {language === "en"
                          ? "We will respond to your inquiry within 30 days of receipt."
                          : "हम प्राप्ति के 30 दिनों के भीतर आपकी पूछताछ का जवाब देंगे।"}
                      </p>
                    </div>
                  </motion.div>
                </section>
              </div>

              {/* Last Updated */}
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-500 dark:text-white/50">
                  {language === "en" ? "Last updated:" : "अंतिम अपडेट:"}{" "}
                  {effectiveDate}
                </p>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
