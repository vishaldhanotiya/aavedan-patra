/**
 * ALL REMAINING SUBCATEGORIES (33 total)
 * This file contains all remaining subcategories for quick reference
 * You can split these into separate files as needed
 */

import type { SubcategoryData } from "../allSubcategoryData";

// ============================================
// LETTERS CATEGORY - REMAINING 3
// ============================================

// 4. COMPLAINT LETTERS
export const complaintLettersData: SubcategoryData = {
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

// 5. RESIGNATION LETTERS
export const resignationLettersData: SubcategoryData = {
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
  searchPlaceholder: { en: "Search resignation templates…", hi: "इस्तीफा टेम्पलेट खोजें..." },
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
      title: { en: "Short Notice Resignation", hi: "लघु नोटिस इस्तीफा" },
      description: { en: "Resignation letter for shorter notice periods with valid reasons.", hi: "वैध कारणों के साथ छोटी नोटिस अवधि के लिए इस्तीफा पत्र।" },
      lastUpdated: "Nov 2025",
      views: "21.3k",
      badge: "Trending",
      templateSlug:'short-notice-resignation-letter'
    },
    {
      id: "resign-3",
      title: { en: "Immediate Resignation Letter", hi: "तत्काल इस्तीफा पत्र" },
      description: { en: "Format for urgent resignation due to personal or emergency reasons.", hi: "व्यक्तिगत या आपातकालीन कारणों से तत्काल इस्तीफे के लिए प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "19.8k",
      templateSlug:'immediate-resignation-letter'
    },
    {
      id: "resign-4",
      title: { en: "Career Change Resignation", hi: "करियर परिवर्तन इस्तीफा" },
      description: { en: "Professional resignation for career transitions and new opportunities.", hi: "करियर संक्रमण और नए अवसरों के लिए पेशेवर इस्तीफा।" },
      lastUpdated: "Oct 2025",
      views: "17.6k",
      templateSlug:'career-change-resignation-letter'
    },
    {
      id: "resign-5",
      title: { en: "Retirement Resignation Letter", hi: "सेवानिवृत्ति इस्तीफा पत्र" },
      description: { en: "Resignation format for retirement with appreciation message.", hi: "सराहना संदेश के साथ सेवानिवृत्ति के लिए इस्तीफा प्रारूप।" },
      lastUpdated: "Oct 2025",
      views: "15.2k",
      templateSlug:'retirement-resignation-letter'
    },
    {
      id: "resign-6",
      title: { en: "Relocation Resignation", hi: "स्थानांतरण इस्तीफा" },
      description: { en: "Resignation letter due to relocation or family reasons.", hi: "स्थानांतरण या पारिवारिक कारणों से इस्तीफा पत्र।" },
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
    { title: { en: "How to Resign Professionally", hi: "पेशेवर रूप से इस्तीफा कैसे दें" }, excerpt: { en: "Leave your job on good terms with proper resignation etiquette", hi: "उचित इस्तीफा शिष्टाचार के साथ अच्छी शर्तों पर अपनी नौकरी छोड़ें" }, readTime: "8 min read", slug: "resign-professionally" },
    { title: { en: "Notice Period: What You Need to Know", hi: "नोटिस अवधि: आपको क्या जानना चाहिए" }, excerpt: { en: "Understanding notice periods and how to negotiate them", hi: "नोटिस अवधि को समझना और उन पर बातचीत कैसे करें" }, readTime: "6 min read", slug: "notice-period-guide" },
    { title: { en: "Exit Interview Tips", hi: "एग्जिट इंटरव्यू टिप्स" }, excerpt: { en: "How to handle exit interviews professionally", hi: "एग्जिट इंटरव्यू को पेशेवर रूप से कैसे संभालें" }, readTime: "7 min read", slug: "exit-interview-tips" },
  ],
  faqs: [
    { question: { en: "How much notice should I give?", hi: "मुझे कितना नोटिस देना चाहिए?" }, answer: { en: "Standard notice is 2 weeks to 1 month, but check your employment contract. Senior positions may require longer notice (2-3 months). Always try to complete your notice period professionally.", hi: "मानक नोटिस 2 सप्ताह से 1 महीने है, लेकिन अपना रोजगार अनुबंध जांचें। वरिष्ठ पदों को लंबे नोटिस की आवश्यकता हो सकती है।" } },
    { question: { en: "Can I resign via email?", hi: "क्या मैं ईमेल के माध्यम से इस्तीफा दे सकता हूं?" }, answer: { en: "Yes, email resignation is acceptable, especially for remote work. However, inform your direct manager personally first, then send a formal email. Keep a copy for your records.", hi: "हां, ईमेल इस्तीफा स्वीकार्य है। हालांकि, पहले अपने प्रत्यक्ष प्रबंधक को व्यक्तिगत रूप से सूचित करें।" } },
    { question: { en: "Should I explain why I'm resigning?", hi: "क्या मुझे यह समझाना चाहिए कि मैं क्यों इस्तीफा दे रहा हूं?" }, answer: { en: "Brief reason is optional. You can mention 'career growth' or 'personal reasons' without details. No need to criticize the company or colleagues. Keep it positive and professional.", hi: "संक्षिप्त कारण वैकल्पिक है। आप विवरण के बिना 'करियर विकास' या 'व्यक्तिगत कारण' का उल्लेख कर सकते हैं।" } },
  ],
};

// 6. INVITATION LETTERS
export const invitationLettersData: SubcategoryData = {
  slug: "invitation",
  categorySlug: "letters",
  categoryName: { en: "Letters", hi: "पत्र" },
  subcategoryName: { en: "Invitation Letters", hi: "निमंत्रण पत्र" },
  breadcrumb: [
    { en: "Letters", hi: "पत्र", slug:"/letters" },
    { en: "Invitation Letters", hi: "निमंत्रण पत्र", slug:"/letters" },
  ],
  heroTitle: { en: "Invitation Letter Templates", hi: "निमंत्रण पत्र टेम्पलेट" },
  heroDescription: {
    en: "Professional and personal invitation letter formats for events, meetings, parties, and ceremonies - warm and welcoming templates.",
    hi: "कार्यक्रमों, बैठकों, पार्टियों और समारोहों के लिए पेशेवर और व्यक्तिगत निमंत्रण पत्र प्रारूप - गर्म और स्वागत योग्य टेम्पलेट।",
  },
  searchPlaceholder: { en: "Search invitation templates…", hi: "निमंत्रण टेम्पलेट खोजें..." },
  tags: ["Event Invitation", "Meeting Invitation", "Party", "Wedding", "Business Event", "Ceremony"],
  templates: [
    {
      id: "invite-1",
      title: { en: "Event Invitation Letter", hi: "कार्यक्रम निमंत्रण पत्र" },
      description: { en: "Professional format for formal event and conference invitations.", hi: "औपचारिक कार्यक्रम और सम्मेलन निमंत्रण के लिए पेशेवर प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "22.1k",
      badge: "Popular",
      templateSlug:'event-invitation-letter'
    },
    {
      id: "invite-2",
      title: { en: "Business Meeting Invitation", hi: "व्यापार बैठक निमंत्रण" },
      description: { en: "Formal invitation for business meetings and professional gatherings.", hi: "व्यापार बैठकों और पेशेवर सभाओं के लिए औपचारिक निमंत्रण।" },
      lastUpdated: "Nov 2025",
      views: "20.4k",
      badge: "Trending",
      templateSlug:'business-meeting-invitation-letter'
    },
    // {
    //   id: "invite-3",
    //   title: { en: "Wedding Invitation Letter", hi: "विवाह निमंत्रण पत्र" },
    //   description: { en: "Warm wedding invitation format for family and friends.", hi: "परिवार और दोस्तों के लिए गर्म विवाह निमंत्रण प्रारूप।" },
    //   lastUpdated: "Nov 2025",
    //   views: "19.3k",
    //   templateSlug:'/wedding-invitation-letter'
    // },
    {
      id: "invite-4",
      title: { en: "Birthday Party Invitation", hi: "जन्मदिन पार्टी निमंत्रण" },
      description: { en: "Fun and friendly birthday party invitation template.", hi: "मजेदार और मैत्रीपूर्ण जन्मदिन पार्टी निमंत्रण टेम्पलेट।" },
      lastUpdated: "Oct 2025",
      views: "17.8k",
      templateSlug:'birthday-party-invitation-letter'
    },
    {
      id: "invite-5",
      title: { en: "Seminar Invitation Letter", hi: "सेमिनार निमंत्रण पत्र" },
      description: { en: "Professional invitation for workshops, seminars, and training.", hi: "कार्यशालाओं, सेमिनारों और प्रशिक्षण के लिए पेशेवर निमंत्रण।" },
      lastUpdated: "Oct 2025",
      views: "16.2k",
      templateSlug:'seminar-invitation-letter'
    },
    {
      id: "invite-6",
      title: { en: "Guest Speaker Invitation", hi: "अतिथि वक्ता निमंत्रण" },
      description: { en: "Formal invitation for inviting guest speakers to events.", hi: "कार्यक्रमों में अतिथि वक्ताओं को आमंत्रित करने के लिए औपचारिक निमंत्रण।" },
      lastUpdated: "Oct 2025",
      views: "14.9k",
      templateSlug:'guest-speaker-invitation-letter'
    },
  ],
  seoTitle: { en: "About Invitation Letter Templates", hi: "निमंत्रण पत्र टेम्पलेट के बारे में" },
  seoDescription: {
    en: "Invitation letters formally or informally invite recipients to events, meetings, or celebrations. Our templates include professional event invitations for conferences and seminars, business meeting invitations, warm wedding invitations, fun birthday party invites, seminar invitations for educational events, and guest speaker invitations. Each template includes event details, date, time, venue, RSVP information, and appropriate tone matching the occasion for effective guest communication.",
    hi: "निमंत्रण पत्र औपचारिक या अनौपचारिक रूप से प्राप्तकर्ताओं को कार्यक्रमों, बैठकों या समारोहों में आमंत्रित करते हैं।",
  },
  relatedTemplates: [
    { title: { en: "Informal Letter", hi: "अनौपचारिक पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "informal" },
    { title: { en: "Event Notice", hi: "कार्यक्रम नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "event" },
    { title: { en: "Meeting Report", hi: "बैठक रिपोर्ट" }, category: { en: "Notices", hi: "नोटिस" }, slug: "meeting" },
    { title: { en: "Request Letter", hi: "अनुरोध पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "request" },
  ],
  blogPosts: [
    { title: { en: "How to Write a Professional Event Invitation", hi: "पेशेवर कार्यक्रम निमंत्रण कैसे लिखें" }, excerpt: { en: "Create compelling invitations that guests will respond to", hi: "आकर्षक निमंत्रण बनाएं जो अतिथि प्रतिक्रिया देंगे" }, readTime: "6 min read", slug: "professional-event-invitation" },
    { title: { en: "Invitation Etiquette: Do's and Don'ts", hi: "निमंत्रण शिष्टाचार: क्या करें और क्या न करें" }, excerpt: { en: "Proper etiquette for sending and responding to invitations", hi: "निमंत्रण भेजने और जवाब देने के लिए उचित शिष्टाचार" }, readTime: "5 min read", slug: "invitation-etiquette" },
    { title: { en: "RSVP Guide: Managing Event Responses", hi: "आरएसवीपी गाइड: कार्यक्रम प्रतिक्रियाओं का प्रबंधन" }, excerpt: { en: "Best practices for handling RSVPs and guest lists", hi: "आरएसवीपी और अतिथि सूचियों को संभालने के लिए सर्वोत्तम प्रथाएं" }, readTime: "7 min read", slug: "rsvp-guide" },
  ],
  faqs: [
    { question: { en: "When should I send invitations?", hi: "मुझे निमंत्रण कब भेजना चाहिए?" }, answer: { en: "Send formal event invitations 4-6 weeks in advance. Wedding invitations: 6-8 weeks. Casual parties: 2-3 weeks. Business meetings: 1-2 weeks. Include RSVP deadline at least 1 week before the event.", hi: "औपचारिक कार्यक्रम निमंत्रण 4-6 सप्ताह पहले भेजें। विवाह निमंत्रण: 6-8 सप्ताह। अनौपचारिक पार्टियां: 2-3 सप्ताह।" } },
    { question: { en: "What should I include in an invitation?", hi: "मुझे निमंत्रण में क्या शामिल करना चाहिए?" }, answer: { en: "Include: Who (host name), What (event type), When (date and time), Where (venue with address), Why (purpose/occasion), RSVP details (how to respond and deadline), dress code if applicable, and any special instructions.", hi: "शामिल करें: कौन, क्या, कब, कहां, क्यों, आरएसवीपी विवरण, ड्रेस कोड और विशेष निर्देश।" } },
    { question: { en: "Should I send invitations by email or post?", hi: "क्या मुझे ईमेल या डाक द्वारा निमंत्रण भेजना चाहिए?" }, answer: { en: "Formal events (weddings, official ceremonies): Printed invitations by post. Business events: Email is professional and trackable. Casual events: Email or digital invitations work well. Consider your audience and event formality.", hi: "औपचारिक कार्यक्रम: डाक द्वारा मुद्रित निमंत्रण। व्यापारिक कार्यक्रम: ईमेल पेशेवर है। अनौपचारिक कार्यक्रम: ईमेल या डिजिटल निमंत्रण।" } },
  ],
};

// Continue in next comment due to length...
