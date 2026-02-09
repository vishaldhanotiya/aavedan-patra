/**
 * ALL REMAINING SUBCATEGORIES (33 total)
 * This file contains all remaining subcategories for quick reference
 * You can split these into separate files as needed
 */

import { SubcategoryData } from "../category/jobCategory";

// 5. RESIGNATION LETTERS
export const resignationLetters: SubcategoryData = {
  slug: "resignation",
  categorySlug: "letters",
  categoryName: { en: "Letters", hi: "पत्र" },
  subcategoryName: { en: "Resignation Letters", hi: "इस्तीफा पत्र" },
  breadcrumb: [
    { en: "Letters", hi: "पत्र", slug:"/letters" },
    { en: "Resignation Letters", hi: "इस्तीफा पत्र", slug:"/letters" },
  ],
  heroTitle: { en: "Resignation Letter Templates", hi: "इस्तीफा पत्र टेम्पलेट" },
  heroDescription: {
    en: "Professional resignation letter formats for leaving jobs gracefully - maintain good relationships with proper notice.",
    hi: "सही ढंग से नौकरी छोड़ने के लिए पेशेवर इस्तीफा पत्र प्रारूप - उचित नोटिस के साथ अच्छे संबंध बनाए रखें।",
  },
  searchPlaceholder: { en: "Search resignation templates…", hi: "इस्तीफा पत्र टेम्पलेट खोजें..." },
  tags: ["Formal Resignation", "Short Notice", "Career Change", "Immediate", "Thank You", "Professional Exit"],
  templates: [
    {
      id: "resign-1",
      title: { en: "Professional Resignation Letter", hi: "पेशेवर इस्तीफा पत्र" },
      description: { en: "Standard resignation format with notice period and gratitude.", hi: "नोटिस अवधि और कृतज्ञता के साथ मानक इस्तीफा प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "24.5k",
      badge: "Popular",
      templateSlug:'professional-resignation-letter'
    },
    {
      id: "resign-2",
      title: { en: "Short Notice Resignation", hi: "लघु नोटिस त्यागपत्र" },
      description: { en: "Resignation letter for shorter notice periods with valid reasons.", hi: "वैध कारणों के साथ छोटी नोटिस अवधि के लिए त्यागपत्र।" },
      lastUpdated: "Nov 2025",
      views: "21.3k",
      badge: "Trending",
      templateSlug:'short-notice-resignation-letter'
    },
    {
      id: "resign-3",
      title: { en: "Immediate Resignation Letter", hi: "तत्काल त्यागपत्र" },
      description: { en: "Format for urgent resignation due to personal or emergency reasons.", hi: "व्यक्तिगत या आपातकालीन कारणों से तत्काल इस्तीफे के लिए प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "19.8k",
      templateSlug:'immediate-resignation-letter'
    },
    {
      id: "resign-4",
      title: { en: "Career Change Resignation", hi: "करियर परिवर्तन इस्तीफा पत्र" },
      description: { en: "Professional resignation for career transitions and new opportunities.", hi: "करियर संक्रमण और नए अवसरों के लिए पेशेवर इस्तीफा।" },
      lastUpdated: "Oct 2025",
      views: "17.6k",
      templateSlug:'career-change-resignation-letter'
    },
    {
      id: "resign-5",
      title: { en: "Retirement Resignation Letter", hi: "सेवानिवृत्ति इस्तीफा पत्र" },
      description: { en: "Resignation format for retirement with appreciation message.", hi: "सराहना संदेश के साथ सेवानिवृत्ति के लिए इस्तीफा पत्र प्रारूप।" },
      lastUpdated: "Oct 2025",
      views: "15.2k",
      templateSlug:'retirement-resignation-letter'
    },
    {
      id: "resign-6",
      title: { en: "Relocation Resignation", hi: "स्थानांतरण इस्तीफा पत्र" },
      description: { en: "Resignation letter due to relocation or family reasons.", hi: "स्थानांतरण या पारिवारिक कारणों से इस्तीफा पत्र" },
      lastUpdated: "Oct 2025",
      views: "14.4k",
      templateSlug:'relocation-resignation-letter'
    },
  ],
  seoTitle: { en: "About Resignation Letter Templates", hi: "इस्तीफा पत्र टेम्पलेट के बारे में" },
  seoDescription: {
    en: "Resignation letters formally notify employers of your decision to leave a job. Our templates include professional resignation with standard notice, short notice resignation for quick exits, immediate resignation for emergencies, career change resignations, retirement letters, and relocation resignations. Each template maintains professionalism, expresses gratitude, offers transition assistance, and preserves positive relationships for future references and networking opportunities.",
    hi: "इस्तीफा पत्र औपचारिक रूप से नियोक्ताओं को नौकरी छोड़ने के आपके निर्णय के बारे में सूचित करते हैं।",
  },
  relatedTemplates: [
    { title: { en: "Job Application", hi: "नौकरी आवेदन" }, category: { en: "Applications", hi: "आवेदन" }, slug: "job" },
    { title: { en: "Experience Certificate Request", hi: "अनुभव प्रमाणपत्र अनुरोध" }, category: { en: "Certificates", hi: "प्रमाणपत्र" }, slug: "experience" },
    { title: { en: "Professional Resume", hi: "पेशेवर रिज्यूमे" }, category: { en: "Resumes", hi: "रिज्यूमे" }, slug: "professional" },
    { title: { en: "Formal Letter", hi: "औपचारिक पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "formal" },
  ],
  blogPosts: [
    { title: { en: "How to Resign Professionally", hi: "पेशेवर रूप से इस्तीफा पत्र कैसे दें" }, excerpt: { en: "Leave your job on good terms with proper resignation etiquette", hi: "उचित इस्तीफा पत्र शिष्टाचार के साथ अच्छी शर्तों पर अपनी नौकरी छोड़ें" }, readTime: "8 min read", slug: "resign-professionally" },
    { title: { en: "Notice Period: What You Need to Know", hi: "नोटिस अवधि: आपको क्या जानना चाहिए" }, excerpt: { en: "Understanding notice periods and how to negotiate them", hi: "नोटिस अवधि को समझना और उन पर बातचीत कैसे करें" }, readTime: "6 min read", slug: "notice-period-guide" },
    { title: { en: "Exit Interview Tips", hi: "एग्जिट इंटरव्यू टिप्स" }, excerpt: { en: "How to handle exit interviews professionally", hi: "एग्जिट इंटरव्यू को पेशेवर रूप से कैसे संभालें" }, readTime: "7 min read", slug: "exit-interview-tips" },
  ],
  faqs: [
    { question: { en: "How much notice should I give?", hi: "मुझे कितना नोटिस देना चाहिए?" }, answer: { en: "Standard notice is 2 weeks to 1 month, but check your employment contract. Senior positions may require longer notice (2-3 months). Always try to complete your notice period professionally.", hi: "मानक नोटिस 2 सप्ताह से 1 महीने है, लेकिन अपना रोजगार अनुबंध जांचें। वरिष्ठ पदों को लंबे नोटिस की आवश्यकता हो सकती है।" } },
    { question: { en: "Can I resign via email?", hi: "क्या मैं ईमेल के माध्यम से इस्तीफा पत्र दे सकता हूं?" }, answer: { en: "Yes, email resignation is acceptable, especially for remote work. However, inform your direct manager personally first, then send a formal email. Keep a copy for your records.", hi: "हां, ईमेल इस्तीफा पत्र स्वीकार्य है। हालांकि, पहले अपने प्रत्यक्ष प्रबंधक को व्यक्तिगत रूप से सूचित करें।" } },
    { question: { en: "Should I explain why I'm resigning?", hi: "क्या मुझे यह समझाना चाहिए कि मैं क्यों इस्तीफा पत्र दे रहा हूं?" }, answer: { en: "Brief reason is optional. You can mention 'career growth' or 'personal reasons' without details. No need to criticize the company or colleagues. Keep it positive and professional.", hi: "संक्षिप्त कारण वैकल्पिक है। आप विवरण के बिना 'करियर विकास' या 'व्यक्तिगत कारण' का उल्लेख कर सकते हैं।" } },
  ],
};