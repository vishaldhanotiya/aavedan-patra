/**
 * TERMS OF SERVICE - Aavedan Patra
 * Legal-compliant terms with sticky navigation
 */
"use client"
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Shield,
  FileText,
  Scale,
  Users,
  Lock,
  AlertCircle,
  XCircle,
  Calendar,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  Copyright,
  Home,
} from "lucide-react";
import Link from "next/link";

interface TermsOfServiceProps {
  language?: "en" | "hi";
}

interface Section {
  id: string;
  title: { en: string; hi: string };
  icon: React.ElementType;
}

const sections: Section[] = [
  {
    id: "agreement",
    title: { en: "Agreement Overview", hi: "समझौता अवलोकन" },
    icon: FileText,
  },
  {
    id: "usage",
    title: { en: "Website Usage", hi: "वेबसाइट उपयोग" },
    icon: Users,
  },
  {
    id: "content",
    title: { en: "Content Ownership", hi: "सामग्री स्वामित्व" },
    icon: Copyright,
  },
  {
    id: "restrictions",
    title: { en: "Restrictions", hi: "प्रतिबंध" },
    icon: AlertCircle,
  },
  {
    id: "disclaimer",
    title: { en: "Disclaimer", hi: "अस्वीकरण" },
    icon: Shield,
  },
  {
    id: "termination",
    title: { en: "Termination", hi: "समाप्ति" },
    icon: XCircle,
  },
  {
    id: "governing-law",
    title: { en: "Governing Law", hi: "शासी कानून" },
    icon: Scale,
  },
];

export function TermsOfService({ language = "en" }: TermsOfServiceProps) {
  const [activeSection, setActiveSection] = useState<string>("agreement");

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

  const lastUpdated = "November 21, 2024";

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
                  Terms of Service
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
              <Scale className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm text-cyan-700 dark:text-cyan-300">
                {language === "en" ? "Legal Agreement" : "कानूनी समझौता"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
              {language === "en" ? "Terms of Service" : "सेवा की शर्तें"}
            </h1>

            <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-white/70 mb-4">
              <Calendar className="w-5 h-5" />
              <p className="text-lg">
                {language === "en" ? "Last Updated:" : "अंतिम अपडेट:"}{" "}
                <strong>{lastUpdated}</strong>
              </p>
            </div>

            <p className="text-lg text-slate-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              {language === "en"
                ? "Please read these terms carefully before using Aavedan Patra. By accessing our website, you agree to be bound by these terms."
                : "कृपया Aavedan Patra का उपयोग करने से पहले इन शर्तों को ध्यान से पढ़ें। हमारी वेबसाइट तक पहुंचकर, आप इन शर्तों से बाध्य होने के लिए सहमत हैं।"}
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
                    <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
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

                  {/* Important Notice */}
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10">
                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/30 rounded-xl p-4">
                      <p className="text-xs text-amber-800 dark:text-amber-200 font-medium mb-1">
                        {language === "en" ? "Important" : "महत्वपूर्ण"}
                      </p>
                      <p className="text-xs text-amber-700 dark:text-amber-300">
                        {language === "en"
                          ? "Using our service means you accept these terms"
                          : "हमारी सेवा का उपयोग करने का मतलब ���ै कि आप इन शर्तों को स्वीकार करते हैं"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl">
              <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 lg:p-12 shadow-lg">
                {/* Agreement Overview */}
                <section id="agreement" className="mb-16 scroll-mt-24">
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
                        {language === "en"
                          ? "1. Agreement Overview"
                          : "1. समझौता अवलोकन"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                        {language === "en"
                          ? 'These Terms of Service ("Terms") govern your access to and use of Aavedan Patra website and services. By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy.'
                          : 'ये सेवा की शर्तें ("शर्तें") Aavedan Patra वेबसाइट और सेवाओं तक आपकी पहुंच और उपयोग को नियंत्रित करती हैं। हमारी वेबसाइट तक पहुंचकर या उपयोग करके, आप इन शर्तों और हमारी गोपनीयता नीति से बाध्य होने के लिए सहमत हैं।'}
                      </p>

                      <div className="bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-500/30 rounded-xl p-6 my-6">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                          {language === "en"
                            ? "By using our service, you agree to:"
                            : "हमारी सेवा का उपयोग करके, आप सहमत हैं:"}
                        </h3>
                        <ul className="space-y-2 text-sm">
                          {[
                            {
                              en: "Comply with all applicable laws and regulations",
                              hi: "सभी लागू कानूनों और नियमों का पालन करें",
                            },
                            {
                              en: "Use our templates for lawful purposes only",
                              hi: "केवल वैध उद्देश्यों के लिए हमारे टेम्पलेट्स का उपयोग करें",
                            },
                            {
                              en: "Respect intellectual property rights",
                              hi: "बौद्धिक संपदा अधिकारों का सम्मान करें",
                            },
                            {
                              en: "Not misuse or abuse our services",
                              hi: "हमारी सेवाओं का दुरुपयोग या दुर्व्यवहार न करें",
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
                          ? "If you do not agree to these Terms, you must not access or use our website. We reserve the right to modify these Terms at any time, and your continued use constitutes acceptance of any changes."
                          : "यदि आप इन शर्तों से सहमत नहीं हैं, तो आपको हमारी वेबसाइट तक पहुंच या उपयोग नहीं करना चाहिए। हम किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं।"}
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Website Usage */}
                <section id="usage" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500/10 to-violet-600/10 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "2. Website Usage Rules"
                          : "2. वेबसाइट उपयोग नियम"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <h3 className="text-xl text-slate-900 dark:text-white mb-4">
                        {language === "en" ? "Permitted Uses" : "अनुमत उपयोग"}
                      </h3>
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                        {language === "en"
                          ? "You may use Aavedan Patra for the following purposes:"
                          : "आप निम्नलिखित उद्देश्यों के लिए Aavedan Patra का उपयोग कर सकते हैं:"}
                      </p>

                      <div className="space-y-3 mb-6">
                        {[
                          {
                            title: {
                              en: "Personal Use",
                              hi: "व्यक्तिगत उपयोग",
                            },
                            desc: {
                              en: "Access and download templates for personal, non-commercial purposes",
                              hi: "व्यक्तिगत, गैर-व्यावसायिक उद्देश्यों के लिए टेम्पलेट्स तक पहुंच और डाउनलोड करें",
                            },
                          },
                          {
                            title: {
                              en: "Educational Use",
                              hi: "शैक्षिक उपयोग",
                            },
                            desc: {
                              en: "Use templates for educational, academic, or learning purposes",
                              hi: "शैक्षिक, अकादमिक या सीखने के उद्देश्यों के लिए टेम्पलेट्स का उपयोग करें",
                            },
                          },
                          {
                            title: {
                              en: "Professional Use",
                              hi: "पेशेवर उपयोग",
                            },
                            desc: {
                              en: "Utilize templates for business communications and professional documents",
                              hi: "व्यावसायिक संचार और पेशेवर दस्तावेजों के लिए टेम्पलेट्स का उपयोग करें",
                            },
                          },
                          {
                            title: { en: "Customization", hi: "अनुकूलन" },
                            desc: {
                              en: "Modify and adapt templates to suit your specific needs",
                              hi: "अपनी विशिष्ट आवश्यकताओं के अनुरूप टेम्पलेट्स को संशोधित और अनुकूलित करें",
                            },
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-3 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200/50 dark:border-white/10"
                          >
                            <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                                {item.title[language]}
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-white/70">
                                {item.desc[language]}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <h3 className="text-xl text-slate-900 dark:text-white mb-4 mt-8">
                        {language === "en"
                          ? "Account Requirements"
                          : "खाता आवश्यकताएं"}
                      </h3>
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                        {language === "en"
                          ? "Aavedan Patra does not require account creation. All templates are freely accessible without registration. However, you must be at least 13 years old to use our services."
                          : "Aavedan Patra को खाता निर्माण की आवश्यकता नहीं है। सभी टेम्पलेट्स पंजीकरण के बिना स्वतंत्र रूप से सुलभ हैं। हालांकि, हमारी सेवाओं का उपयोग करने के लिए आपकी आयु कम से कम 13 वर्ष होनी चाहिए।"}
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Content Ownership */}
                <section id="content" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-xl flex items-center justify-center">
                        <Copyright className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "3. Content Ownership & License"
                          : "3. सामग्री स्वामित्व और लाइसेंस"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <h3 className="text-xl text-slate-900 dark:text-white mb-4">
                        {language === "en" ? "Our Content" : "हमारी सामग्री"}
                      </h3>
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                        {language === "en"
                          ? "All templates, text, graphics, designs, and other materials on Aavedan Patra are owned by us or our licensors and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to:"
                          : "Aavedan Patra पर सभी टेम्पलेट्स, टेक्स्ट, ग्राफिक्स, डिज़ाइन और अन्य सामग्री हमारे या हमारे लाइसेंसदाताओं के स्वामित्व में हैं और बौद्धिक संपदा कानूनों द्वारा संरक्षित हैं।"}
                      </p>

                      <div className="grid gap-4 mb-6">
                        {[
                          {
                            icon: CheckCircle2,
                            title: {
                              en: "Download Templates",
                              hi: "टेम्पलेट्स डाउनलोड करें",
                            },
                            desc: {
                              en: "Save templates for personal or professional use",
                              hi: "व्यक्तिगत या पेशेवर उपयोग के लिए टेम्पलेट्स सहेजें",
                            },
                            allowed: true,
                          },
                          {
                            icon: CheckCircle2,
                            title: {
                              en: "Modify Content",
                              hi: "सामग्री संशोधित करें",
                            },
                            desc: {
                              en: "Customize templates with your own information",
                              hi: "अपनी जानकारी के साथ टेम्पलेट्स को अनुकूलित करें",
                            },
                            allowed: true,
                          },
                          {
                            icon: XCircle,
                            title: {
                              en: "Resell Templates",
                              hi: "टेम्पलेट्स पुनर्विक्रय",
                            },
                            desc: {
                              en: "You may NOT resell or redistribute our templates",
                              hi: "आप हमारे टेम्पलेट्स को पुनर्विक्रय या पुनर्वितरित नहीं कर सकते",
                            },
                            allowed: false,
                          },
                          {
                            icon: XCircle,
                            title: {
                              en: "Claim Ownership",
                              hi: "स्वामित्व का दावा",
                            },
                            desc: {
                              en: "You may NOT claim authorship of our content",
                              hi: "आप हमारी सामग्री के लेखकत्व का दावा नहीं कर सकते",
                            },
                            allowed: false,
                          },
                        ].map((item, index) => {
                          const Icon = item.icon;
                          const colorClass = item.allowed ? "emerald" : "red";
                          return (
                            <div
                              key={index}
                              className={`flex gap-3 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border ${
                                item.allowed
                                  ? "border-emerald-200/50 dark:border-emerald-500/30"
                                  : "border-red-200/50 dark:border-red-500/30"
                              }`}
                            >
                              <Icon
                                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                  item.allowed
                                    ? "text-emerald-600 dark:text-emerald-400"
                                    : "text-red-600 dark:text-red-400"
                                }`}
                              />
                              <div>
                                <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                                  {item.title[language]}
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-white/70">
                                  {item.desc[language]}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <h3 className="text-xl text-slate-900 dark:text-white mb-4 mt-8">
                        {language === "en"
                          ? "User-Generated Content"
                          : "उपयोगकर्ता-उत्पन्न सामग्री"}
                      </h3>
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                        {language === "en"
                          ? "If you submit feedback, suggestions, or other content to us, you grant us a worldwide, perpetual, royalty-free license to use that content for any purpose."
                          : "यदि आप हमें फीडबैक, सुझाव, या अन्य सामग्री प्रस्तुत करते हैं, तो आप हमें किसी भी उद्देश्य के लिए उस सामग्री का उपयोग करने के लिए एक विश्वव्यापी, स्थायी, रॉयल्टी-मुक्त लाइसेंस प्रदान करते हैं।"}
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Restrictions */}
                <section id="restrictions" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl flex items-center justify-center">
                        <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "4. Prohibited Activities"
                          : "4. निषिद्ध गतिविधियां"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                        {language === "en"
                          ? "You agree NOT to engage in any of the following prohibited activities:"
                          : "आप निम्नलिखित निषिद्ध गतिविधियों में से किसी में भी शामिल नहीं होने के लिए सहमत हैं:"}
                      </p>

                      <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-500/30 rounded-xl p-6">
                        <ul className="space-y-3">
                          {[
                            {
                              en: "Copying, modifying, or distributing our website content without permission",
                              hi: "बिना अनुमति के हमारी वेबसाइट सामग्री को कॉपी, संशोधित या वितरित करना",
                            },
                            {
                              en: "Using templates to create illegal, fraudulent, or misleading documents",
                              hi: "अवैध, धोखाधड़ी या भ्रामक दस्तावेज़ बनाने के लिए टेम्पलेट्स का उपयोग करना",
                            },
                            {
                              en: "Reselling, sublicensing, or redistributing our templates",
                              hi: "हमारे टेम्पलेट्स को पुनर्विक्रय, उप-लाइसेंसिंग या पुनर्वितरण करना",
                            },
                            {
                              en: "Attempting to reverse engineer or decompile our website",
                              hi: "हमारी वेबसाइट को रिवर्स इंजीनियर या डीकंपाइल करने का प्रयास करना",
                            },
                            {
                              en: "Using automated systems (bots, scrapers) without authorization",
                              hi: "बिना प्राधिकरण के स्वचालित सिस्टम (बॉट, स्क्रैपर्स) का उपयोग करना",
                            },
                            {
                              en: "Engaging in any activity that could harm or disable our services",
                              hi: "किसी भी ऐसी गतिविधि में शामिल होना जो हमारी सेवाओं को नुकसान या अक्षम कर सकती है",
                            },
                            {
                              en: "Impersonating others or providing false information",
                              hi: "दूसरों का रूप धारण करना या गलत जानकारी प्रदान करना",
                            },
                            {
                              en: "Violating any applicable laws or regulations",
                              hi: "किसी भी लागू कानून या विनियम का उल्लंघन करना",
                            },
                          ].map((item, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-sm text-red-800 dark:text-red-200"
                            >
                              <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                              <span>{item[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mt-6">
                        {language === "en"
                          ? "Violation of these restrictions may result in immediate termination of your access to our services and potential legal action."
                          : "इन प्रतिबंधों का उल्लंघन करने पर हमारी सेवाओं तक आपकी पहुंच तुरंत समाप्त हो सकती है और संभावित कानूनी कार्रवाई हो सकती है।"}
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Disclaimer */}
                <section id="disclaimer" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "5. Disclaimer of Warranties"
                          : "5. वारंटी अस्वीकरण"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-500/50 rounded-xl p-6 mb-6">
                        <p className="text-amber-900 dark:text-amber-100 font-medium mb-3">
                          {language === "en"
                            ? "⚠️ IMPORTANT LEGAL NOTICE"
                            : "⚠️ महत्वपूर्ण कानूनी सूचना"}
                        </p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                          {language === "en"
                            ? 'Our services and templates are provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, either express or implied. We do not guarantee that our templates will meet your specific requirements or achieve any particular results.'
                            : 'हमारी सेवाएं और टेम्पलेट्स "जैसे हैं" और "जैसे उपलब्ध हैं" किसी भी प्रकार की वारंटी के बिना प्रदान किए जाते हैं। हम गारंटी नहीं देते कि हमारे टेम्पलेट्स आपकी विशिष्ट आवश्यकताओं को पूरा करेंगे।'}
                        </p>
                      </div>

                      <h3 className="text-xl text-slate-900 dark:text-white mb-4">
                        {language === "en"
                          ? "Limitation of Liability"
                          : "देयता की सीमा"}
                      </h3>
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                        {language === "en"
                          ? "To the maximum extent permitted by law, Aavedan Patra shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:"
                          : "कानून द्वारा अनुमत अधिकतम सीमा तक, Aavedan Patra निम्नलिखित से उत्पन्न होने वाली किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी या दंडात्मक क्षतियों के लिए उत्तरदायी नहीं होगा:"}
                      </p>

                      <ul className="space-y-2">
                        {[
                          {
                            en: "Your use or inability to use our services",
                            hi: "हमारी सेवाओं का आपका उपयोग या उपयोग करने में असमर्थता",
                          },
                          {
                            en: "Errors, mistakes, or inaccuracies in our templates",
                            hi: "हमारे टेम्पलेट्स में त्रुटियां, गलतियां या अशुद्धियां",
                          },
                          {
                            en: "Loss of data or information",
                            hi: "डेटा या जानकारी की हानि",
                          },
                          {
                            en: "Unauthorized access to your information",
                            hi: "आपकी जानकारी तक अनधिकृत पहुंच",
                          },
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex gap-2 text-slate-600 dark:text-white/70"
                          >
                            <ChevronRight className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{item[language]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </section>

                {/* Termination */}
                <section id="termination" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500/10 to-violet-600/10 rounded-xl flex items-center justify-center">
                        <XCircle className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en" ? "6. Termination" : "6. समाप्ति"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                        {language === "en"
                          ? "We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including:"
                          : "हम किसी भी कारण से, बिना पूर्व सूचना या दायित्व के, हमारी सेवाओं तक आपकी पहुंच को तुरंत समाप्त या निलंबित करने का अधिकार सुरक्षित रखते हैं:"}
                      </p>

                      <div className="grid gap-3 mb-6">
                        {[
                          {
                            en: "Breach of these Terms of Service",
                            hi: "इन सेवा की शर्तों का उल्लंघन",
                          },
                          {
                            en: "Fraudulent, abusive, or illegal activity",
                            hi: "धोखाधड़ी, अपमानजनक या अवैध गतिविधि",
                          },
                          {
                            en: "Violation of intellectual property rights",
                            hi: "बौद्धिक संपदा अधिकारों का उल्लंघन",
                          },
                          {
                            en: "At our sole discretion for any reason",
                            hi: "किसी भी कारण से हमारे विवेक पर",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-3 bg-slate-50 dark:bg-white/5 p-3 rounded-lg border border-slate-200/50 dark:border-white/10"
                          >
                            <AlertCircle className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 dark:text-white/80">
                              {item[language]}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                        {language === "en"
                          ? "Upon termination, your right to use our services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability."
                          : "समाप्ति पर, हमारी सेवाओं का उपयोग करने का आपका अधिकार तुरंत समाप्त हो जाएगा। इन शर्तों के सभी प्रावधान जो उनकी प्रकृति से समाप्ति के बाद जीवित रहना चाहिए, जीवित रहेंगे।"}
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Governing Law */}
                <section id="governing-law" className="scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl flex items-center justify-center">
                        <Scale className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "7. Governing Law & Jurisdiction"
                          : "7. शासी कानून और क्षेत्राधिकार"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                        {language === "en"
                          ? "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in New Delhi, India."
                          : "ये शर्तें भारत के कानूनों के अनुसार शासित और निर्मित होंगी। इन शर्तों या हमारी सेवाओं के आपके उपयोग से उत्पन्न होने वाले किसी भी विवाद नई दिल्ली, भारत की अदालतों के विशेष अधिकार क्षेत्र के अधीन होंगे।"}
                      </p>

                      <div className="bg-gradient-to-br from-cyan-500 to-violet-600 rounded-2xl p-8 text-white">
                        <h3 className="text-xl font-medium mb-4">
                          {language === "en"
                            ? "Contact Information"
                            : "संपर्क जानकारी"}
                        </h3>
                        <p className="opacity-90 mb-6">
                          {language === "en"
                            ? "For questions about these Terms of Service, please contact us:"
                            : "इन सेवा की शर्तों के बारे में प्रश्नों के लिए, कृपया हमसे संपर्क करें:"}
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 opacity-90" />
                            <span>aavedan.hub@gmail.com</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Lock className="w-5 h-5 opacity-90" />
                            <span>
                              {language === "en"
                                ? "Aavedan Patra Headquarters, New Delhi, India"
                                : "Aavedan Patra मुख्यालय, नई दिल्ली, भारत"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 p-6 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                        <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                          {language === "en"
                            ? "By continuing to use Aavedan Patra, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please discontinue use of our services immediately."
                            : "Aavedan Patra का उपयोग जारी रखकर, आप स्वीकार करते हैं कि आपने इन सेवा की शर्तों को पढ़ा, समझा और इनसे बाध्य होने के लिए सहमत हैं।"}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>
              </div>

              {/* Last Updated */}
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-500 dark:text-white/50">
                  {language === "en" ? "Last updated:" : "अंतिम अपडेट:"}{" "}
                  {lastUpdated}
                </p>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
