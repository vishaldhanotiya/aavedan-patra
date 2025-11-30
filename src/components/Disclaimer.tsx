/**
 * DISCLAIMER -  Aavedan Patra
 * Legal disclaimer page for AdSense compliance
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  AlertTriangle,
  FileText,
  BookOpen,
  ExternalLink,
  ShieldAlert,
  Scale,
  Mail,
  Calendar,
  ChevronRight,
  Info,
  Home,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface DisclaimerProps {
  language?: "en" | "hi";
}

interface Section {
  id: string;
  title: { en: string; hi: string };
  icon: React.ElementType;
}

const sections: Section[] = [
  {
    id: "general",
    title: { en: "General Information", hi: "सामान्य जानकारी" },
    icon: Info,
  },
  {
    id: "educational",
    title: { en: "Educational Content", hi: "शैक्षिक सामग्री" },
    icon: BookOpen,
  },
  {
    id: "external-links",
    title: { en: "External Links", hi: "बाहरी लिंक" },
    icon: ExternalLink,
  },
  {
    id: "professional-advice",
    title: { en: "Professional Advice", hi: "पेशेवर सलाह" },
    icon: ShieldAlert,
  },
  {
    id: "liability",
    title: { en: "Liability Limitation", hi: "देयता सीमा" },
    icon: Scale,
  },
  {
    id: "contact",
    title: { en: "Contact Information", hi: "संपर्क जानकारी" },
    icon: Mail,
  },
];

export function Disclaimer({ language = "en" }: DisclaimerProps) {
  const [activeSection, setActiveSection] = useState<string>("general");

  const {lang}=useLanguage()
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
              <Link href={"/"}> {lang === "en" ? "Home" : "होम"}</Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-900 dark:text-white font-medium">
                  Disclaimer
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 dark:bg-amber-400/10 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-sm text-amber-700 dark:text-amber-300">
                {language === "en"
                  ? "Important Legal Information"
                  : "महत्वपूर्ण कानूनी जानकारी"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-amber-700 to-orange-700 dark:from-white dark:via-amber-200 dark:to-orange-200 bg-clip-text text-transparent">
              {language === "en" ? "Disclaimer" : "अस्वीकरण"}
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
                ? "Please read this disclaimer carefully before using Aavedan Patra. By using our website, you acknowledge and accept these terms."
                : "Aavedan Patra का उपयोग करने से पहले कृपया इस अस्वीकरण को ध्यान से पढ़ें। हमारी वेबसाइट का उपयोग करके, आप इन शर्तों को स्वीकार करते हैं।"}
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
                    <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    {language === "en" ? "Contents" : "विषय-सूची"}
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
                              ? "bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 dark:text-amber-300 border border-amber-200/50 dark:border-amber-500/30"
                              : "text-slate-600 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/5"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 flex-shrink-0 ${
                              isActive
                                ? "text-amber-600 dark:text-amber-400"
                                : ""
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

                  {/* Quick Note */}
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10">
                    <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-white/50">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                      <p>
                        {language === "en"
                          ? "This disclaimer is for informational purposes and does not constitute legal advice."
                          : "यह अस्वीकरण सूचनात्मक उद्देश्यों के लिए है और कानूनी सलाह का गठन नहीं करता है।"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl">
              <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 lg:p-12 shadow-lg">
                {/* General Information */}
                <section id="general" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl flex items-center justify-center">
                        <Info className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "1. General Information Disclaimer"
                          : "1. सामान्य जानकारी अस्वीकरण"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                        {language === "en"
                          ? 'The information provided by Aavedan Patra ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.'
                          : "Aavedan Patra द्वारा इस वेबसाइट पर प्रदान की गई जानकारी केवल सामान्य सूचना के उद्देश्यों के लिए है। साइट पर सभी जानकारी अच्छे विश्वास में प्रदान की जाती है।"}
                      </p>

                      <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/30 rounded-xl p-6 my-6">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                          {language === "en"
                            ? "Important Notice:"
                            : "महत्वपूर्ण सूचना:"}
                        </h3>
                        <p className="text-sm text-slate-700 dark:text-white/80">
                          {language === "en"
                            ? "Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk."
                            : "किसी भी परिस्थिति में साइट के उपयोग या साइट पर प्रदान की गई किसी भी जानकारी पर निर्भरता के परिणामस्वरूप हुए किसी भी प्रकार के नुकसान या क्षति के लिए हमारी कोई देयता नहीं होगी।"}
                        </p>
                      </div>

                      <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                        {language === "en"
                          ? "All templates, samples, and documents provided are generic examples and may not be suitable for your specific situation. It is your responsibility to review, customize, and ensure that any template meets your specific needs before use."
                          : "प्रदान किए गए सभी टेम्पलेट्स, नमूने और दस्तावेज़ सामान्य उदाहरण हैं और आपकी विशिष्ट स्थिति के लिए उपयुक्त नहीं हो सकते हैं।"}
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Educational Content */}
                <section id="educational" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500/10 to-violet-600/10 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "2. Educational Content Disclaimer"
                          : "2. शैक्षिक सामग्री अस्वीकरण"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                        {language === "en"
                          ? "Aavedan Patra provides templates, samples, and educational content for informational and educational purposes only. The content is designed to help users understand document formats and provide starting points for creating their own documents."
                          : "Aavedan Patra केवल ��ूचनात्मक और शैक्षिक उद्देश्यों के लिए टेम्पलेट्स, नमूने और शैक्षिक सामग्री प्रदान करता है।"}
                      </p>

                      <div className="space-y-4">
                        {[
                          {
                            title: {
                              en: "Templates Are Examples",
                              hi: "टेम्पलेट्स उदाहरण हैं",
                            },
                            desc: {
                              en: "All templates are generic examples and should be customized to fit your specific needs, circumstances, and applicable laws.",
                              hi: "सभी टेम्पलेट्स सामान्य उदाहरण हैं और आपकी विशिष्ट आवश्यकताओं के अनुसार अनुकूलित किए जाने चाहिए।",
                            },
                          },
                          {
                            title: {
                              en: "No Guarantee of Accuracy",
                              hi: "सटीकता की कोई गारंटी नहीं",
                            },
                            desc: {
                              en: "While we strive to provide accurate and up-to-date information, we make no guarantees about the completeness or accuracy of the content.",
                              hi: "जबकि हम सटीक और अद्यतन जानकारी प्रदान करने का प्रयास करते हैं, हम सामग्री की पूर्णता या सटीकता के बारे में कोई गारंटी नहीं देते हैं।",
                            },
                          },
                          {
                            title: {
                              en: "User Responsibility",
                              hi: "उपयोगकर्ता जिम्मेदारी",
                            },
                            desc: {
                              en: "Users are solely responsible for verifying the accuracy and appropriateness of any template or information before use.",
                              hi: "उपयोग से पहले किसी भी टेम्पलेट या जानकारी की सटीकता और उपयुक्तता को सत्यापित करने की जिम्मेदारी पूरी तरह से उपयोगकर्ताओं की है।",
                            },
                          },
                          {
                            title: {
                              en: "Consult Professionals",
                              hi: "पेशेवरों से परामर्श करें",
                            },
                            desc: {
                              en: "For legal, financial, or other professional matters, always consult with qualified professionals.",
                              hi: "कानूनी, वित्तीय या अन्य पेशेवर मामलों के लिए, हमेशा योग्य पेशेवरों से परामर्श करें।",
                            },
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-3 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200/50 dark:border-white/10"
                          >
                            <ChevronRight className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
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

                {/* External Links */}
                <section id="external-links" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-xl flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "3. External Links Disclaimer"
                          : "3. बाहरी लिंक अस्वीकरण"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                        {language === "en"
                          ? "Aavedan Patra may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites."
                          : "Aavedan Patra में बाहरी वेबसाइटों के लिंक हो सकते हैं जो हमारे द्वारा प्रदान या बनाए नहीं गए हैं।"}
                      </p>

                      <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-950/20 dark:to-cyan-950/20 border border-emerald-200 dark:border-emerald-500/30 rounded-xl p-6 my-6">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-4">
                          {language === "en"
                            ? "External Website Policy:"
                            : "बाहरी वेबसाइट नीति:"}
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-700 dark:text-white/80">
                          {[
                            {
                              en: "We have no control over the nature, content, and availability of external sites",
                              hi: "बाहरी साइटों की प्रकृति, सामग्री और उपलब्धता पर हमारा कोई नियंत्रण नहीं है",
                            },
                            {
                              en: "The inclusion of any links does not necessarily imply a recommendation or endorsement",
                              hi: "किसी भी लिंक को शामिल करना जरूरी नहीं कि सिफारिश या समर्थन का मतलब हो",
                            },
                            {
                              en: "We are not responsible for the content, privacy policies, or practices of external websites",
                              hi: "हम बाहरी वेबसाइटों की सामग्री, गोपनीयता नीतियों या प्रथाओं के लिए जिम्मेदार नहीं हैं",
                            },
                            {
                              en: "You access external links at your own risk",
                              hi: "आप अपने जोखिम पर बाहरी लिंक एक्सेस करते हैं",
                            },
                          ].map((item, index) => (
                            <li key={index} className="flex gap-2">
                              <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{item[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                        {language === "en"
                          ? "We strongly advise you to read the terms and conditions and privacy policies of any external websites you visit through links on our site."
                          : "हम दृढ़ता से सलाह देते हैं कि आप हमारी साइट पर लिंक के माध्यम से आने वाली किसी भी बाहरी वेबसाइट की शर्तें और गोपनीयता नीतियां पढ़ें।"}
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Professional Advice */}
                <section
                  id="professional-advice"
                  className="mb-16 scroll-mt-24"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-xl flex items-center justify-center">
                        <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "4. Professional Advice Disclaimer"
                          : "4. पेशेवर सलाह अस्वीकरण"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                        {language === "en"
                          ? "The content on Aavedan Patra does not constitute professional advice. Specifically:"
                          : "Aavedan Patra पर सामग्री पेशेवर सलाह का गठन नहीं करती है। विशेष रूप से:"}
                      </p>

                      <div className="grid gap-4">
                        {[
                          {
                            title: {
                              en: "Not Legal Advice",
                              hi: "कानूनी सलाह नहीं",
                            },
                            desc: {
                              en: "Nothing on this website constitutes legal advice. For legal matters, always consult with a qualified attorney licensed in your jurisdiction.",
                              hi: "इस वेबसाइट पर कुछ भी कानूनी सलाह का गठन नहीं करता है। कानूनी मामलों के लिए, हमेशा एक योग्य वकील से परामर्श करें।",
                            },
                            icon: Scale,
                          },
                          {
                            title: {
                              en: "Not Financial Advice",
                              hi: "वित्तीय सलाह नहीं",
                            },
                            desc: {
                              en: "The information provided does not constitute financial advice. Consult with certified financial advisors for financial decisions.",
                              hi: "प्रदान की गई जानकारी वित्तीय सलाह का गठन नहीं करती है। वित्तीय निर्णयों के लिए प्रमाणित वित्तीय सलाहकारों से परामर्श करें।",
                            },
                            icon: FileText,
                          },
                          {
                            title: {
                              en: "Not Medical Advice",
                              hi: "चिकित्सा सलाह नहीं",
                            },
                            desc: {
                              en: "Any health-related templates or information are not medical advice. Always consult healthcare professionals for medical matters.",
                              hi: "कोई भी स्वास्थ्य संबंधी टेम्पलेट्स या जानकारी चिकित्सा सलाह नहीं है। चिकित्सा मामलों के लिए हमेशा स्वास्थ्य पेशेवरों से परामर्श करें।",
                            },
                            icon: ShieldAlert,
                          },
                          {
                            title: {
                              en: "Not Professional Consultation",
                              hi: "पेशेवर परामर्श नहीं",
                            },
                            desc: {
                              en: "Templates and information are general in nature and do not replace professional consultation for your specific situation.",
                              hi: "टेम्पलेट्स और जानकारी सामान्य प्रकृति की हैं और आपकी विशिष्ट स्थिति के लिए पेशेवर परामर्श का स्थान नहीं लेती हैं।",
                            },
                            icon: Info,
                          },
                        ].map((item, index) => {
                          const ItemIcon = item.icon;
                          return (
                            <div
                              key={index}
                              className="bg-slate-50 dark:bg-white/5 p-5 rounded-xl border border-slate-200/50 dark:border-white/10"
                            >
                              <div className="flex items-start gap-3 mb-2">
                                <ItemIcon className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                                <h3 className="font-medium text-slate-900 dark:text-white">
                                  {item.title[language]}
                                </h3>
                              </div>
                              <p className="text-sm text-slate-600 dark:text-white/70 ml-8">
                                {item.desc[language]}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-500/30 rounded-xl p-6 my-6">
                        <h3 className="font-medium text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5" />
                          {language === "en"
                            ? "Critical Reminder:"
                            : "महत्वपूर्ण अनुस्मारक:"}
                        </h3>
                        <p className="text-sm text-red-800 dark:text-red-300">
                          {language === "en"
                            ? "Always seek advice from qualified professionals before making decisions that could have legal, financial, medical, or other significant consequences. Our templates are starting points, not substitutes for professional guidance."
                            : "कानूनी, वित्तीय, चिकित्सा या अन्य महत्वपूर्ण परिणाम हो सकते हैं ऐसे निर्णय ल��ने से पहले हमेशा योग्य पेशेवरों से सलाह लें।"}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Liability Limitation */}
                <section id="liability" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl flex items-center justify-center">
                        <Scale className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </div>
                      <h2 className="text-3xl text-slate-900 dark:text-white">
                        {language === "en"
                          ? "5. Liability Limitation"
                          : "5. देयता सीमा"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-4">
                        {language === "en"
                          ? "To the fullest extent permitted by applicable law, Aavedan Patra shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:"
                          : "लागू कानून द्वारा अनुमत पूर्ण सीमा तक, Aavedan Patra किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी या दंडात्मक नुकसान के लिए उत्तरदायी नहीं होगा:"}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {[
                          {
                            en: "Your use or inability to use our templates or website",
                            hi: "हमारे टेम्पलेट्स या वेबसाइट का आपका उपयोग या उपयोग करने में असमर्थता",
                          },
                          {
                            en: "Any errors, inaccuracies, or omissions in the content provided",
                            hi: "प्रदान की गई सामग्री में कोई त्रुटि, अशुद्धियां या चूक",
                          },
                          {
                            en: "Any reliance placed on the templates or information provided",
                            hi: "प्रदान किए गए टेम्पलेट्स या जानकारी पर रखा गया कोई भरोसा",
                          },
                          {
                            en: "Any legal consequences arising from use of our templates",
                            hi: "हमारे टेम्पलेट्स के उपयोग से उत्पन्न कोई कानूनी परिणाम",
                          },
                          {
                            en: "Any unauthorized access to or use of our servers",
                            hi: "हमारे सर्वर तक अनधिकृत पहुंच या उपयोग",
                          },
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex gap-3 text-slate-600 dark:text-white/70"
                          >
                            <ChevronRight className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                            <span>{item[language]}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl p-6">
                        <h3 className="font-medium text-slate-900 dark:text-white mb-3">
                          {language === "en"
                            ? "Your Responsibilities:"
                            : "आपकी जिम्मेदारियां:"}
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-700 dark:text-white/80">
                          {[
                            {
                              en: "Verify all information before use",
                              hi: "उपयोग से पहले सभी जानकारी सत्यापित करें",
                            },
                            {
                              en: "Customize templates to meet your specific needs",
                              hi: "अपनी विशिष्ट आवश्यकताओं को पूरा करने के लिए टेम्पलेट्स को अनुकूलित करें",
                            },
                            {
                              en: "Ensure compliance with applicable laws and regulations",
                              hi: "लागू कानूनों और विनियमों का अनुपालन सुनिश्चित करें",
                            },
                            {
                              en: "Consult professionals when needed",
                              hi: "जरूरत पड़ने पर पेशेवरों से परामर्श करें",
                            },
                            {
                              en: "Accept full responsibility for how you use our templates",
                              hi: "हमारे टेम्पलेट्स का उपयोग कैसे करते हैं इसकी पूरी जिम्मेदारी स्वीकार करें",
                            },
                          ].map((item, index) => (
                            <li key={index} className="flex gap-2">
                              <ChevronRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span>{item[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
                        {language === "en"
                          ? "6. Contact Information"
                          : "6. संपर्क जानकारी"}
                      </h2>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                        {language === "en"
                          ? "If you have any questions or concerns about this disclaimer, please contact us:"
                          : "यदि आपके पास इस अस्वीकरण के बारे में कोई प्रश्न या चिंता है, तो कृपया हमसे संपर्क करें:"}
                      </p>

                      <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
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

                        <div className="mt-6 pt-6 border-t border-white/20">
                          <p className="text-sm opacity-90">
                            {language === "en"
                              ? "By using Aavedan Patra, you acknowledge that you have read, understood, and agree to be bound by this disclaimer."
                              : "Aavedan Patra का उपयोग करके, आप स्वीकार करते हैं कि आपने इस अस्वीकरण को पढ़ा, समझा और सहमत हैं।"}
                          </p>
                        </div>
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
