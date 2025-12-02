/**
 * ALL LETTERS SUBCATEGORIES (6 total)
 * Complete data for Letters category subcategories
 */

import { SubcategoryData } from "../category/jobCategory";

// 2. INFORMAL LETTERS
export const informalLetters: SubcategoryData = {
  slug: "informal",
  categorySlug: "letters",
  categoryName: { en: "Letters", hi: "पत्र" },
  subcategoryName: { en: "Informal Letters", hi: "अनौपचारिक पत्र" },
  breadcrumb: [
    { en: "Letters", hi: "पत्र" },
    { en: "Informal Letters", hi: "अनौपचारिक पत्र" },
  ],
  heroTitle: { 
    en: "Informal Letter Templates", 
    hi: "अनौपचारिक पत्र टेम्पलेट" 
  },
  heroDescription: {
    en: "Friendly and personal letter formats for family, friends, and casual communication - warm and expressive templates.",
    hi: "परिवार, दोस्तों और अनौपचारिक संचार के लिए मैत्रीपूर्ण और व्यक्तिगत पत्र प्रारूप - गर्म और अभिव्यंजक टेम्पलेट।",
  },
  searchPlaceholder: {
    en: "Search informal letter templates…",
    hi: "अनौपचारिक पत्र टेम्पलेट खोजें...",
  },
  tags: ["Friendly Letter", "Family Letter", "Thank You", "Invitation", "Condolence", "Congratulations"],
  templates: [
    {
      id: "informal-1",
      title: { 
        en: "Letter to Friend", 
        hi: "दोस्त को पत्र" 
      },
      description: {
        en: "Friendly letter format for personal communication with friends.",
        hi: "दोस्तों के साथ व्यक्तिगत संचार के लिए मैत्रीपूर्ण पत्र प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "19.7k",
      badge: "Popular",
      templateSlug:'/'
    },
    {
      id: "informal-2",
      title: { 
        en: "Letter to Family Member", 
        hi: "परिवार के सदस्य को पत्र" 
      },
      description: {
        en: "Warm letter template for writing to family members and relatives.",
        hi: "परिवार के सदस्यों और रिश्तेदारों को लिखने के लिए गर्म पत्र टेम्पलेट।",
      },
      lastUpdated: "Nov 2025",
      views: "17.3k",
      badge: "Trending",
      templateSlug:'/'
    },
    {
      id: "informal-3",
      title: { 
        en: "Thank You Letter", 
        hi: "धन्यवाद पत्र" 
      },
      description: {
        en: "Heartfelt thank you letter format for expressing gratitude.",
        hi: "कृतज्ञता व्यक्त करने के लिए हार्दिक धन्यवाद पत्र प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "16.1k",
      templateSlug:'/'
    },
    {
      id: "informal-4",
      title: { 
        en: "Invitation Letter to Friend", 
        hi: "दोस्त को निमंत्रण पत्र" 
      },
      description: {
        en: "Friendly invitation letter for parties, events, and gatherings.",
        hi: "पार्टियों, कार्यक्रमों और समारोहों के लिए मैत्रीपूर्ण निमंत्रण पत्र।",
      },
      lastUpdated: "Oct 2025",
      views: "14.8k",
      templateSlug:'/'
    },
    {
      id: "informal-5",
      title: { 
        en: "Congratulations Letter", 
        hi: "बधाई पत्र" 
      },
      description: {
        en: "Warm letter template for congratulating friends and family.",
        hi: "दोस्तों और परिवार को बधाई देने के लिए गर्म पत्र टेम्पलेट।",
      },
      lastUpdated: "Oct 2025",
      views: "13.2k",
      templateSlug:'/'
    },
    {
      id: "informal-6",
      title: { 
        en: "Apology Letter to Friend", 
        hi: "दोस्त को क्षमा पत्र" 
      },
      description: {
        en: "Sincere apology letter format for personal relationships.",
        hi: "व्यक्तिगत संबंधों के लिए ईमानदार क्षमा पत्र प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "12.5k",
      templateSlug:'/'
    },
  ],
  seoTitle: {
    en: "About Informal Letter Templates",
    hi: "अनौपचारिक पत्र टेम्पलेट के बारे में",
  },
  seoDescription: {
    en: "Informal letters are personal communications written in a casual, friendly tone to friends, family, and close acquaintances. Our templates include friendly letters to friends, warm family letters, thank you notes, personal invitations, congratulations messages, and apology letters. These templates use conversational language and personal expressions while maintaining readability and sincerity. Perfect for maintaining personal relationships and expressing emotions, our informal letter formats help you communicate warmth and authenticity in personal correspondence.",
    hi: "अनौपचारिक पत्र व्यक्तिगत संचार हैं जो दोस्तों, परिवार और करीबी परिचितों को अनौपचारिक, मैत्रीपूर्ण स्वर में लिखे जाते हैं।",
  },
  relatedTemplates: [
    {
      title: { en: "Invitation Letter", hi: "निमंत्रण पत्र" },
      category: { en: "Letters", hi: "पत्र" },
      slug: "invitation",
    },
    {
      title: { en: "Formal Letter Format", hi: "औपचारिक पत्र प्रारूप" },
      category: { en: "Letters", hi: "पत्र" },
      slug: "formal",
    },
    {
      title: { en: "Essay Writing", hi: "निबंध लेखन" },
      category: { en: "Essays", hi: "निबंध" },
      slug: "100-words",
    },
    {
      title: { en: "Personal Agreement", hi: "व्यक्तिगत समझौता" },
      category: { en: "Agreements", hi: "समझौते" },
      slug: "personal",
    },
  ],
  blogPosts: [
    {
      title: { 
        en: "How to Write a Friendly Letter", 
        hi: "मैत्रीपूर्ण पत्र कैसे लिखें" 
      },
      excerpt: {
        en: "Tips for writing warm, engaging letters to friends and family",
        hi: "दोस्तों और परिवार को गर्म, आकर्षक पत्र लिखने के लिए सुझाव",
      },
      readTime: "5 min read",
      slug: "how-to-write-friendly-letter",
    },
    {
      title: { 
        en: "The Art of Writing Thank You Notes", 
        hi: "धन्यवाद नोट लिखने की कला" 
      },
      excerpt: {
        en: "Express gratitude effectively with heartfelt thank you letters",
        hi: "हार्दिक धन्यवाद पत्रों के साथ प्रभावी ढंग से कृतज्ञता व्यक्त करें",
      },
      readTime: "4 min read",
      slug: "art-of-thank-you-notes",
    },
    {
      title: { 
        en: "Personal Letter Writing in Digital Age", 
        hi: "डिजिटल युग में व्यक्तिगत पत्र लेखन" 
      },
      excerpt: {
        en: "Why handwritten letters still matter in modern communication",
        hi: "आधुनिक संचार में हस्तलिखित पत्र अभी भी क्यों मायने रखते हैं",
      },
      readTime: "6 min read",
      slug: "personal-letters-digital-age",
    },
  ],
  faqs: [
    {
      question: { 
        en: "What is the difference between formal and informal letters?", 
        hi: "औपचारिक और अनौपचारिक पत्रों में क्या अंतर है?" 
      },
      answer: {
        en: "Informal letters use casual language, contractions, and personal tone for friends and family. Formal letters use professional language, full forms, and respectful tone for business or official purposes. Informal letters can be more creative and expressive, while formal letters follow strict formatting rules.",
        hi: "अनौपचारिक पत्र दोस्तों और परिवार के लिए अनौपचारिक भाषा, संकुचन और व्यक्तिगत स्वर का उपयोग करते हैं। औपचारिक पत्र व्यावसायिक उद्देश्यों के लिए पेशेवर भाषा का उपयोग करते हैं।",
      },
    },
    {
      question: { 
        en: "How do I start an informal letter?", 
        hi: "मैं एक अनौपचारिक पत्र कैसे शुरू करूं?" 
      },
      answer: {
        en: "Start with a warm greeting like 'Dear [Name]', 'My Dear Friend', or simply 'Hi [Name]'. You can include the date but it's optional. Open with a friendly question like 'How are you?' or jump straight into sharing news and updates.",
        hi: "'प्रिय [नाम]' या 'मेरे प्यारे दोस्त' जैसे गर्म अभिवादन से शुरू करें। आप तारीख शामिल कर सकते हैं लेकिन यह वैकल्पिक है।",
      },
    },
    {
      question: { 
        en: "Can I use emojis in informal letters?", 
        hi: "क्या मैं अनौपचारिक पत्रों में इमोजी का उपयोग कर सकता हूं?" 
      },
      answer: {
        en: "If you're writing a handwritten letter, avoid emojis and use expressive language instead. For digital informal letters or emails to close friends, occasional emojis are acceptable to convey emotions. However, even in informal letters, maintain readability and don't overuse them.",
        hi: "यदि आप हस्तलिखित पत्र लिख रहे हैं, तो इमोजी से बचें। डिजिटल अनौपचारिक पत्रों के लिए, कभी-कभार इमोजी स्वीकार्य हैं लेकिन इन्हें अधिक उपयोग न करें।",
      },
    },
  ],
};

// Export all Letters subcategories
export const allLettersSubcategories = [
  informalLetters,
];