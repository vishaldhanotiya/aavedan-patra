/**
 * ALL REMAINING SUBCATEGORIES (33 total)
 * This file contains all remaining subcategories for quick reference
 * You can split these into separate files as needed
 */

import { SubcategoryData } from "../category/jobCategory";


// ============================================
// LETTERS CATEGORY - REMAINING 3
// ============================================

// 4. COMPLAINT LETTERS
export const complaintLetters: SubcategoryData = {
  slug: "complaint",
  categorySlug: "letters",
  categoryName: { en: "Letters", hi: "पत्र" },
  subcategoryName: { en: "Complaint Letters", hi: "शिकायत पत्र" },
  breadcrumb: [
    { en: "Letters", hi: "पत्र", slug:"/letters" },
    { en: "Complaint Letters", hi: "शिकायत पत्र", slug:"/letters/complaint" },
  ],
  heroTitle: { en: "Complaint Letter Templates", hi: "शिकायत पत्र टेम्पलेट" },
  heroDescription: {
    en: "Professional complaint letter formats for product issues, service problems, and grievances - effective templates for resolution.",
    hi: "उत्पाद मुद्दों, सेवा समस्याओं और शिकायतों के लिए पेशेवर शिकायत पत्र प्रारूप - समाधान के लिए प्रभावी टेम्पलेट।",
  },
  searchPlaceholder: { en: "Search complaint templates…", hi: "शिकायत टेम्पलेट खोजें..." },
  tags: ["Product Complaint", "Service Issue", "Customer Grievance", "Workplace", "Consumer Rights", "Refund Request"],
  templates: [
    {
      id: "complaint-1",
      title: { en: "Product Complaint Letter", hi: "उत्पाद शिकायत पत्र" },
      description: { en: "Format for complaining about defective or damaged products.", hi: "दोषपूर्ण या क्षतिग्रस्त उत्पादों की शिकायत के लिए प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "20.3k",
      badge: "Popular",
      templateSlug:'product-complaint-letter'
    },
    {
      id: "complaint-2",
      title: { en: "Service Complaint Letter", hi: "सेवा शिकायत पत्र" },
      description: { en: "Professional format for poor service or customer service issues.", hi: "खराब सेवा या ग्राहक सेवा मुद्दों के लिए पेशेवर प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "18.7k",
      badge: "Trending",
      templateSlug:'service-complaint-letter'

    },
    {
      id: "complaint-3",
      title: { en: "Workplace Complaint Letter", hi: "कार्यस्थल शिकायत पत्र" },
      description: { en: "Template for workplace grievances and HR complaints.", hi: "कार्यस्थल शिकायतों और एचआर शिकायतों के लिए टेम्पलेट।" },
      lastUpdated: "Nov 2025",
      views: "17.2k",
      templateSlug:'workplace-complaint-letter'

    },
    {
      id: "complaint-4",
      title: { en: "Neighbor Complaint Letter", hi: "पड़ोसी शिकायत पत्र" },
      description: { en: "Polite complaint format for neighborhood issues and disputes.", hi: "पड़ोस के मुद्दों और विवादों के लिए विनम्र शिकायत प्रारूप।" },
      lastUpdated: "Oct 2025",
      views: "15.4k",
      templateSlug:'neighbor-complaint-letter'
    },
    {
      id: "complaint-5",
      title: { en: "Online Shopping Complaint", hi: "ऑनलाइन शॉपिंग शिकायत" },
      description: { en: "Format for e-commerce complaints and delivery issues.", hi: "ई-कॉमर्स शिकायतों और डिलीवरी मुद्दों के लिए प्रारूप।" },
      lastUpdated: "Oct 2025",
      views: "14.1k",
      templateSlug:'online-shopping-complaint-letter'
    },
    {
      id: "complaint-6",
      title: { en: "Refund Request Letter", hi: "रिफंड अनुरोध पत्र" },
      description: { en: "Professional template for requesting refunds and compensation.", hi: "रिफंड और मुआवजे का अनुरोध करने के लिए पेशेवर टेम्पलेट।" },
      lastUpdated: "Oct 2025",
      views: "13.6k",
      templateSlug:'refund-request-letter'
    },
  ],
  seoTitle: { en: "About Complaint Letter Templates", hi: "शिकायत पत्र टेम्पलेट के बारे में" },
  seoDescription: {
    en: "Complaint letters formally address issues with products, services, or situations requiring resolution. Our templates include product complaints for defective items, service complaints for poor customer service, workplace grievances, neighbor disputes, online shopping issues, and refund requests. Each template maintains a professional yet firm tone, clearly states the problem, provides evidence, and requests specific action or compensation for effective complaint resolution.",
    hi: "शिकायत पत्र औपचारिक रूप से उत्पादों, सेवाओं या स्थितियों के साथ मुद्दों को संबोधित करते हैं।",
  },
  relatedTemplates: [
    { title: { en: "Consumer Rights Guide", hi: "उपभोक्ता अधिकार गाइड" }, category: { en: "Essays", hi: "निबंध" }, slug: "500-words" },
    { title: { en: "Formal Letter Format", hi: "औपचारिक पत्र प्रारूप" }, category: { en: "Letters", hi: "पत्र" }, slug: "formal" },
    { title: { en: "Request Letter", hi: "अनुरोध पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "request" },
    { title: { en: "Legal Notice", hi: "कानूनी नोटिस" }, category: { en: "Agreements", hi: "समझौते" }, slug: "legal" },
  ],
  blogPosts: [
    { title: { en: "How to Write an Effective Complaint Letter", hi: "प्रभावी शिकायत पत्र कैसे लिखें" }, excerpt: { en: "Get your complaints resolved with professional letter writing", hi: "पेशेवर पत्र लेखन के साथ अपनी शिकायतों का समाधान प्राप्त करें" }, readTime: "7 min read", slug: "effective-complaint-letter" },
    { title: { en: "Consumer Rights: What You Should Know", hi: "उपभोक्ता अधिकार: आपको क्या जानना चाहिए" }, excerpt: { en: "Understanding your rights when making complaints", hi: "शिकायत करते समय अपने अधिकारों को समझना" }, readTime: "6 min read", slug: "consumer-rights-guide" },
    { title: { en: "Complaint Letter Do's and Don'ts", hi: "शिकायत पत्र क्या करें और क्या न करें" }, excerpt: { en: "Best practices for complaint letter writing", hi: "शिकायत पत्र लेखन के लिए सर्वोत्तम प्रथाएं" }, readTime: "5 min read", slug: "complaint-letter-tips" },
  ],
  faqs: [
    { question: { en: "How do I write a strong complaint letter?", hi: "मैं एक मजबूत शिकायत पत्र कैसे लिखूं?" }, answer: { en: "Be clear, factual, and professional. State the problem, provide evidence (order numbers, dates, receipts), explain impact, and request specific action. Avoid emotional language and threats. Set a reasonable deadline for response.", hi: "स्पष्ट, तथ्यात्मक और पेशेवर बनें। समस्या बताएं, साक्ष्य प्रदान करें, प्रभाव समझाएं और विशिष्ट कार्रवाई का अनुरोध करें।" } },
    { question: { en: "Should I send a complaint letter by email or post?", hi: "क्या मुझे ईमेल या पोस्ट द्वारा शिकायत पत्र भेजना चाहिए?" }, answer: { en: "Email is faster and provides proof of delivery. For serious complaints or legal matters, send by registered post for official documentation. Consider sending both for important complaints.", hi: "ईमेल तेज है और वितरण का प्रमाण प्रदान करता है। गंभीर शिकायतों के लिए, पंजीकृत डाक द्वारा भेजें।" } },
    { question: { en: "What if my complaint is ignored?", hi: "यदि मेरी शिकायत को नजरअंदाज किया जाता है तो क्या होगा?" }, answer: { en: "Send a follow-up letter referencing your original complaint. Escalate to higher management or consumer forums. Consider filing a complaint with consumer protection authorities if the issue remains unresolved.", hi: "अपनी मूल शिकायत का संदर्भ देते हुए फॉलो-अप पत्र भेजें। उच्च प्रबंधन या उपभोक्ता मंचों को बढ़ाएं।" } },
  ],
};

// Continue in next comment due to length...
