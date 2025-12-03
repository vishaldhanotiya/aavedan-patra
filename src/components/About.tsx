/**
 * ABOUT US PAGE - Aavedan Patra
 * Clean, professional, SEO-optimized, AdSense-safe
 */
"use client";

import { motion } from "motion/react";
import {
  FileText,
  Users,
  Target,
  Eye,
  GraduationCap,
  Briefcase,
  School,
  Building2,
  CheckCircle2,
  Download,
  Search,
  BookOpen,
  Globe,
  Shield,
  TrendingUp,
  Award,
  Clock,
  ArrowRight,
  Home,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
interface AboutProps {
  language?: "en" | "hi";
}

const stats = [
  { value: "50,000+", label: { en: "Monthly Users", hi: "मासिक उपयोगकर्ता" } },
  { value: "250+", label: { en: "Template Formats", hi: "टेम्पलेट प्रारूप" } },
  { value: "42", label: { en: "Categories", hi: "श्रेणियाँ" } },
  { value: "100%", label: { en: "Free Access", hi: "मुफ्त पहुंच" } },
];

const whoWeServe = [
  {
    icon: GraduationCap,
    title: { en: "Students", hi: "विद्यार्थी" },
    description: {
      en: "From school assignments to college applications, we provide templates that help students excel in their academic journey.",
      hi: "स्कूल असाइनमेंट से लेकर कॉलेज आवेदन तक, हम ऐसे टेम्पलेट प्रदान करते हैं जो छात्रों को उनकी शैक्षणिक यात्रा में उत्कृष्टता प्राप्त करने में मदद करते हैं।",
    },
  },
  {
    icon: Briefcase,
    title: { en: "Professionals", hi: "पेशेवर" },
    description: {
      en: "Career-ready templates for job applications, resumes, resignation letters, and professional correspondence.",
      hi: "नौकरी आवेदन, रिज्यूमे, इस्तीफा पत्र और पेशेवर पत्राचार के लिए करियर-रेडी टेम्पलेट्स।",
    },
  },
  {
    icon: School,
    title: { en: "Teachers & Educators", hi: "शिक्षक और शिक्षाविद" },
    description: {
      en: "Educational templates including certificates, notices, lesson plans, and communication templates for schools.",
      hi: "प्रमाण पत्र, नोटिस, पाठ योजना और स्कूलों के लिए संचार टेम्पलेट्स सहित शैक्षिक टेम्पलेट्स।",
    },
  },
  {
    icon: Building2,
    title: { en: "Businesses & HR", hi: "व्यवसाय और एचआर" },
    description: {
      en: "Professional documents for hiring, employee management, agreements, contracts, and official communications.",
      hi: "भर्ती, कर्मचारी प्रबंधन, समझौते, अनुबंध और आधिकारिक संचार के लिए पेशेवर दस्तावेज़।",
    },
  },
];

const whyChooseUs = [
  {
    icon: CheckCircle2,
    title: { en: "100% Free Templates", hi: "100% मुफ्त टेम्पलेट्स" },
    description: {
      en: "Access all templates without any cost or hidden fees",
      hi: "बिना किसी लागत या छिपी हुई फीस के सभी टेम्पलेट्स तक पहुंचें",
    },
  },
  {
    icon: Download,
    title: { en: "Easy Download & Copy", hi: "आसान डाउनलोड और कॉपी" },
    description: {
      en: "One-click copy, download, share, and print functionality",
      hi: "वन-क्लिक कॉपी, डाउनलोड, शेयर और प्रिंट कार्यक्षमता",
    },
  },
  {
    icon: Search,
    title: { en: "SEO Optimized Content", hi: "SEO ऑप्टिमाइज़्ड सामग्री" },
    description: {
      en: "Well-structured, searchable templates with helpful guides",
      hi: "सहायक गाइड के साथ अच्छी तरह से संरचित, खोजने योग्य टेम्पलेट्स",
    },
  },
  {
    icon: BookOpen,
    title: { en: "Writing Tips & Guides", hi: "लेखन सुझाव और गाइड" },
    description: {
      en: "Expert tips for each template to help you write better",
      hi: "बेहतर लिखने में मदद के लिए प्रत्येक टेम्पलेट के लिए विशेषज्ञ सुझाव",
    },
  },
  {
    icon: Globe,
    title: { en: "Bilingual Support", hi: "द्विभाषी समर्थन" },
    description: {
      en: "Templates available in both English and Hindi languages",
      hi: "अंग्रेजी और हिंदी दोनों भाषाओं में उपलब्ध टेम्पलेट्स",
    },
  },
  {
    icon: Shield,
    title: { en: "Privacy Focused", hi: "गोपनीयता केंद्रित" },
    description: {
      en: "No registration required, no data collection, just templates",
      hi: "कोई पंजीकरण आवश्यक नहीं, कोई डेटा संग्रह नहीं, सिर्फ टेम्पलेट्स",
    },
  },
];

export function About({ language = "en" }: AboutProps) {
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
                  About Us
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
                {language === "en"
                  ? "Trusted by 50,000+ Users"
                  : "50,000+ उपयोगकर्ताओं द्वारा भरोसा"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
              {language === "en"
                ? "About Aavedan Patra"
                : "Aavedan Patra के बारे में"}
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 dark:text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              {language === "en"
                ? "Your trusted source for free, professional document templates. Empowering students, professionals, and businesses with ready-to-use formats."
                : "मुफ्त, पेशेवर दस्तावेज़ टेम्पलेट्स के लिए आपका भरोसेमंद स्रोत। छात्रों, पेशेवरों और व्यवसायों को उपयोग के लिए तैयार प्रारूपों के साथ सशक्त बनाना।"}
            </p>

            {/* Decorative Elements */}
            <div className="flex items-center justify-center gap-8 mb-12">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center"
              >
                <FileText className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center"
              >
                <BookOpen className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center"
              >
                <Award className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-white/70">
                  {stat.label[language]}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl mb-6 text-slate-900 dark:text-white">
                {language === "en" ? "Our Story" : "हमारी कहानी"}
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-white/70 leading-relaxed">
                <p>
                  {language === "en"
                    ? "Aavedan Patra was founded with a simple mission: to make professional document creation accessible to everyone. We recognized that students, job seekers, professionals, and businesses often struggle to find proper document formats."
                    : "Aavedan Patra की स्थापना एक सरल मिशन के साथ की गई थी: पेशेवर दस्तावेज़ निर्माण को सभी के लिए सुलभ बनाना। हमने पहचाना कि छात्र, नौकरी चाहने वाले, पेशेवर और व्यवसाय अक्सर उचित दस्तावेज़ प्रारूप खोजने के लिए संघर्ष करते हैं।"}
                </p>
                <p>
                  {language === "en"
                    ? "What started as a small collection of application formats has grown into a comprehensive resource library covering 42 categories and 250+ professionally crafted templates. Each template is designed with care, keeping user needs and professional standards in mind."
                    : "जो आवेदन प्रारूपों के एक छोटे संग्रह के रूप में शुरू हुआ, वह 42 श्रेणियों और 250+ पेशेवर रूप से तैयार टेम्पलेट्स को कवर करने वाली एक व्यापक संसाधन लाइब्रेरी में विकसित हो गया है।"}
                </p>
                <p>
                  {language === "en"
                    ? "Today, we're proud to serve over 50,000 monthly users from students preparing for exams to professionals advancing their careers. Our commitment remains the same: providing high-quality, free templates that anyone can use."
                    : "आज, हम परीक्षा की तैयारी करने वाले छात्रों से लेकर अपने करियर को आगे बढ़ाने वाले पेशेवरों तक 50,000 से अधिक मासिक उपयोगकर्ताओं की सेवा करने पर गर्व करते हैं।"}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-3xl p-8 border border-cyan-200/50 dark:border-cyan-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-white/10 rounded-2xl p-6 text-center backdrop-blur-xl border border-slate-200/50 dark:border-white/10">
                    <TrendingUp className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mx-auto mb-3" />
                    <div className="text-2xl font-semibold text-slate-900 dark:text-white mb-1">
                      250+
                    </div>
                    <div className="text-sm text-slate-600 dark:text-white/70">
                      {language === "en" ? "Templates" : "टेम्पलेट्स"}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-white/10 rounded-2xl p-6 text-center backdrop-blur-xl border border-slate-200/50 dark:border-white/10">
                    <Users className="w-8 h-8 text-violet-600 dark:text-violet-400 mx-auto mb-3" />
                    <div className="text-2xl font-semibold text-slate-900 dark:text-white mb-1">
                      50K+
                    </div>
                    <div className="text-sm text-slate-600 dark:text-white/70">
                      {language === "en" ? "Users" : "उपयोगकर्ता"}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-white/10 rounded-2xl p-6 text-center backdrop-blur-xl border border-slate-200/50 dark:border-white/10">
                    <Clock className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                    <div className="text-2xl font-semibold text-slate-900 dark:text-white mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-slate-600 dark:text-white/70">
                      {language === "en" ? "Access" : "पहुंच"}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-white/10 rounded-2xl p-6 text-center backdrop-blur-xl border border-slate-200/50 dark:border-white/10">
                    <Award className="w-8 h-8 text-amber-600 dark:text-amber-400 mx-auto mb-3" />
                    <div className="text-2xl font-semibold text-slate-900 dark:text-white mb-1">
                      100%
                    </div>
                    <div className="text-sm text-slate-600 dark:text-white/70">
                      {language === "en" ? "Free" : "मुफ्त"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white/50 dark:bg-white/5 backdrop-blur-xl border-y border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-3xl p-8 border border-cyan-200/50 dark:border-cyan-500/30"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl mb-4 text-slate-900 dark:text-white">
                {language === "en" ? "Our Mission" : "हमारा मिशन"}
              </h2>
              <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                {language === "en"
                  ? "To democratize access to professional document templates and empower individuals and organizations to communicate effectively. We believe everyone deserves access to quality resources, regardless of their background or budget."
                  : "पेशेवर दस्तावेज़ टेम्पलेट्स तक पहुंच को लोकतांत्रिक बनाना और व्यक्तियों और संगठनों को प्रभावी ढंग से संवाद करने के लिए सशक्त बनाना। हम मानते हैं कि हर किसी को उनकी पृष्ठभूमि या बजट की परवाह किए बिना गुणवत्ता संसाधनों तक पहुंच का अधिकार है।"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-3xl p-8 border border-violet-200/50 dark:border-violet-500/30"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl mb-4 text-slate-900 dark:text-white">
                {language === "en" ? "Our Vision" : "हमारी दृष्टि"}
              </h2>
              <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                {language === "en"
                  ? "To become the world's most trusted and comprehensive platform for document templates. We envision a future where creating professional documents is simple, fast, and accessible to everyone, everywhere."
                  : "दस्तावेज़ टेम्पलेट्स के लिए दुनिया का सबसे भरोसेमंद और व्यापक प्लेटफ़ॉर्म बनना। हम एक ऐसे भविष्य की कल्पना करते हैं जहां पेशेवर दस्तावेज़ बनाना सरल, तेज़ और हर किसी के लिए, हर जगह सुलभ हो।"}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900 dark:text-white">
              {language === "en" ? "Who We Serve" : "हम किसकी सेवा करते हैं"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/70 max-w-2xl mx-auto">
              {language === "en"
                ? "Our templates are designed to meet the needs of diverse users across different sectors"
                : "हमारे टेम्पलेट्स विभिन्न क्षेत्रों में विविध उपयोगकर्ताओं की जरूरतों को पूरा करने के लिए डिज़ाइन किए गए हैं"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whoWeServe.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-3 text-slate-900 dark:text-white">
                    {item.title[language]}
                  </h3>
                  <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                    {item.description[language]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white/50 dark:bg-white/5 backdrop-blur-xl border-y border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900 dark:text-white">
              {language === "en"
                ? "Why Choose Aavedan Patra?"
                : "Aavedan Patra क्यों चुनें?"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/70 max-w-2xl mx-auto">
              {language === "en"
                ? "Discover what makes us the preferred choice for document templates"
                : "जानें कि क्या हमें दस्तावेज़ टेम्पलेट्स के लिए पसंदीदा विकल्प बनाता है"}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-violet-500/10 dark:hover:shadow-violet-400/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="text-lg mb-2 text-slate-900 dark:text-white">
                    {item.title[language]}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                    {item.description[language]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-cyan-500/10 dark:from-cyan-400/10 dark:via-violet-400/10 dark:to-cyan-400/10 rounded-3xl p-12 text-center border border-cyan-200/50 dark:border-cyan-500/30"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900 dark:text-white">
              {language === "en"
                ? "Ready to Get Started?"
                : "शुरू करने के लिए तैयार हैं?"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/70 mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "Explore our comprehensive collection of professional templates and start creating better documents today."
                : "पेशेवर टेम्पलेट्स के हमारे व्यापक संग्रह का अन्वेषण करें और आज ही बेहतर दस्तावेज़ बनाना शुरू करें।"}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white shadow-lg shadow-violet-500/30 px-8 py-6 text-lg"
              >
                <Link href="/applications">
                  {language === "en" ? "Explore Templates" : "टेम्पलेट्स देखें"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Link href="/blog">
                  {language === "en"
                    ? "Read Writing Guides"
                    : "लेखन गाइड पढ़ें"}
                  <BookOpen className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-white/10">
              <p className="text-sm text-slate-600 dark:text-white/60 mb-4">
                {language === "en"
                  ? "Popular Categories:"
                  : "लोकप्रिय श्रेणियाँ:"}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/applications"
                  className="px-4 py-2 bg-white dark:bg-white/10 rounded-full text-sm text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/20 transition-colors border border-slate-200 dark:border-white/10"
                >
                  {language === "en" ? "Applications" : "आवेदन"}
                </Link>
                 <Link
                  href="/letters"
                  className="px-4 py-2 bg-white dark:bg-white/10 rounded-full text-sm text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/20 transition-colors border border-slate-200 dark:border-white/10"
                >
                  {language === "en" ? "Letters" : "पत्र"}
                </Link>
                 <Link
                  href="/certificates"
                  className="px-4 py-2 bg-white dark:bg-white/10 rounded-full text-sm text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/20 transition-colors border border-slate-200 dark:border-white/10"
                >
                  {language === "en" ? "Certificates" : "प्रमाण पत्र"}
                </Link>
                 <Link
                  href="/resumes"
                  className="px-4 py-2 bg-white dark:bg-white/10 rounded-full text-sm text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/20 transition-colors border border-slate-200 dark:border-white/10"
                >
                  {language === "en" ? "Resumes" : "रिज्यूमे"}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
